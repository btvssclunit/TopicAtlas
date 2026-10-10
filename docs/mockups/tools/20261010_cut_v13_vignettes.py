import json, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
SRC='/Users/kaixinchun/Documents/Codex/2026-10-10/i/outputs/TopicAtlas-quarter-v13.png'
OUT='/Users/kaixinchun/Documents/github-btvssclunit/TopicAtlas/docs/mockups/assets-v20/'
im=Image.open(SRC).convert('RGB'); A=np.asarray(im).astype(np.float32)/255
# paper colour: median of bright pixels
br=A.reshape(-1,3); P=np.median(br[br.sum(1)>2.85],axis=0); print('paper',P*255)
PIECES={
 'personal':[(0,700),(200,700),(250,800),(420,880),(445,1015),(0,1015)],
 'family':[(0,528),(370,560),(470,640),(560,700),(560,800),(420,800),(280,780),(0,690)],
 'house':[(0,528),(300,555),(300,650),(245,650),(245,705),(0,700)],
 'walkers':[(245,600),(370,560),(470,640),(560,700),(560,800),(420,800),(280,780),(245,760)],
 'dragon-kids':[(785,820),(990,880),(990,1015),(785,1015)],
 'dragon':[(450,795),(640,795),(760,835),(785,835),(785,1015),(450,1015)],
 'school':[(580,625),(1210,625),(1210,860),(1000,860),(800,835),(580,780)],
 'hdb':[(0,285),(305,285),(305,392),(400,392),(370,440),(370,525),(0,525)],
 'hawker':[(365,445),(820,445),(870,480),(870,612),(365,612)],
 'mbs':[(295,240),(615,240),(615,400),(300,395)],
 'lotus':[(615,315),(850,315),(850,445),(600,445),(600,400)],
 'thai':[(0,35),(395,35),(395,225),(0,225)],
 'borobudur':[(410,35),(800,35),(800,245),(410,245)],
 'petronas':[(780,135),(1125,135),(1125,445),(860,445),(860,280),(780,280)],
 'eiffel':[(1095,290),(1295,290),(1295,475),(1095,475)],
 'pagoda':[(1290,365),(1536,365),(1536,570),(1290,570)],
 'sun':[(1225,75),(1325,75),(1325,170),(1225,170)],
 'cloud-a':[(1300,130),(1536,130),(1536,300),(1260,300),(1260,180)],
 'cloud-b':[(990,575),(1490,575),(1490,730),(1220,730),(1220,660),(990,660)],
}
# colour-to-alpha against paper
d=np.clip((P-A)/np.maximum(P,1e-3),0,1).max(2)
alpha=np.clip((d-0.035)/0.9,0,1)
alpha=np.where(alpha>0,np.minimum(1,alpha*1.15),0)
a3=np.maximum(alpha[...,None],1e-4)
col=np.clip((A-(1-a3)*P)/a3,0,1)
meta={}
for k,poly in PIECES.items():
    m=Image.new('L',im.size,0); ImageDraw.Draw(m).polygon(poly,fill=255)
    m=m.filter(ImageFilter.GaussianBlur(16))
    M=np.asarray(m).astype(np.float32)/255
    a=alpha*M
    xs=[p[0] for p in poly]; ys=[p[1] for p in poly]
    x0,y0,x1,y1=max(0,min(xs)),max(0,min(ys)),min(im.width,max(xs)),min(im.height,max(ys))
    rgba=np.dstack([col,a])[y0:y1,x0:x1]
    # tight bbox on alpha>0.02
    sub=rgba[...,3]>0.02; rr=np.where(sub.any(1))[0]; cc=np.where(sub.any(0))[0]
    rgba=rgba[rr[0]:rr[-1]+1,cc[0]:cc[-1]+1]
    out=Image.fromarray((rgba*255+0.5).astype(np.uint8),'RGBA')
    out.save(OUT+k+'.png',optimize=True)
    out.save(OUT+k+'.webp',quality=82,method=6)
    meta[k]={'w':out.width,'h':out.height,'srcX':int(x0+cc[0]),'srcY':int(y0+rr[0])}
json.dump(meta,open(OUT+'cuts.json','w'),indent=1)
print(json.dumps(meta))

# Codex v33 community playground and vertical title

Updated October 11, 2026 by HOD/MTL Mdm Chun Kai Xin

Current preserved composition review: `docs/mockups/20261011_switchback-v33.html`.
Close-up: `docs/mockups/20261011_brand-sprites-v33.html`.

The dragon playground and active children now sit beside the hawker centre on the community terrace. Family uses the existing unchanged `assets-v16/family-interior.webp`, placed at x425, y660, width300, height203 within the atlas SVG. The old outdoor family building and playground were cleared from that terrace.

The bottom-right title is a separate transparent sprite with four upright characters reading 谈天说地 from top to bottom. Smaller English reads vertically alongside it, with the existing distressed school seal below the English column, following the owner's hanging-scroll reference. The header retains the horizontal title. The seal is reused from v32, reading right column 百德 then left column 中學. Seal-script authenticity remains for owner review.

## Asset provenance

Built-in imagegen edited v31's complete atlas into `masters-v33/switchback-atlas.png`, output `exec-1d3bec07-2665-4e3b-8393-af928d410821.png`. Display WebP is `assets-v33/switchback-atlas.webp` (280,048 bytes). The repaint cleared the school sign, so the original crest and editable school name are restored as SVG overlays. Six school students remain in two groups of three.

Built-in imagegen recomposed the v32 horizontal title into `masters-v33/title-vertical.png`, output `exec-a9828da1-c9b5-4d23-ad10-1b6a7b6f5ac7.png`, 724 x 2172 RGBA with alpha extrema 0 and 255. Display `assets-v33/title-vertical.webp` is 300 x 900 and 58,948 bytes. The owner's reference remains external and is not copied into the repository.

## Verification and limits

Desktop composition visually inspected. Tablet 1024 x 768 and phone 375 x 812 have no horizontal overflow, including the title close-up. Family button and community terrace keyboard selection update the corresponding status. Dark surroundings checked. Saved full-page screenshots are `20261011_switchback-v33-preview.png` and `20261011_brand-sprites-v33-preview.png`. JavaScript syntax and whitespace checks passed.

The community hit region and guide turn extend to the moved playground. The foreground path still narrows towards the distant world terrace. Prior geographic order and represented genders/skin tones remain the art direction. Small painted figure details and exact six-child count require the final detail pass; the compositional repaint does not certify fine anatomical detail. Earlier drafts remain preserved. Production integration and final artwork review remain pending. Work continues on `graphics/map-directions`, draft PR #1. Production homepage and `data/content/` are untouched. Always show revised previews inline in chat for phone review.

## Atlas edit prompt

Use case: precise-object-edit. Asset type: six-terrace ink/watercolour atlas background for a compositional website mockup.
Input image1 is EDIT TARGET current complete atlas. Keep the painterly style, pale xuan paper, winding SIX switchback trail, broad foreground narrowing to distant trail, open top-left sky, personal reading pair with their full shoes unchanged, school facade and exactly six teenagers in two groups of three unchanged, all Singapore and world landmarks unchanged in their current geographic order. NO title, seal or lettering added. Keep bottom-right x1260-1536 y640-1024 EMPTY PAPER.
Two scene edits ONLY:
A. FAMILY TERRACE (second from bottom): completely REMOVE the orange dragon playground, ALL its playing children, the outdoor standing family/caregivers, the old HDB block and void-deck building currently around x200-960 y640-875. Preserve surrounding ground/mist and the winding trail. Replace their removed footprints with airy pale warm paper, a few very sparse ground brushmarks, no new people or structures. Leave a CLEAR EMPTY scene placement area on the uphill side of this family leg, roughly x380-830 y670-850, for our EXISTING separate HDB INTERIOR FAMILY sprite to be placed by website code. Do NOT paint a new family interior, do NOT paint any new house, DO NOT leave any playground or standing family on this lower terrace. Preserve the personal reading pair below-left without changes.
B. COMMUNITY TERRACE (fourth from bottom, above SCHOOL and below SINGAPORE, current hawker/HDB row around y340-480): move the SAME orange dragon playground with its SIX active children from its former family terrace to this COMMUNITY terrace, on the RIGHT side next to the hawker centre. Retain recognisable orange tiled dragon equipment, slide, tunnel and playful action. Exactly ONE playground total. Place it around x1080-1390 y350-475, scaled to about70% of its original playground group, resting on the uphill side of the COMMUNITY trail. Keep a visible paper/mist gap between its base and school roof below. If room is needed, slightly compress/shift the existing hawker centre and its patrons to x600-990 but preserve its architecture and open activity. Existing community HDB remains on this community terrace at left. Reduce duplicate standing people at right to one elder caregiver watching. Draw the trail locally around playground's lower edge with a smooth turn, no heavy outline.
Six children in playground in casual clothes, three girls and three boys, varied light/tan/brown/deep brown skin tones, Singapore Chinese/Malay/Indian/Eurasian backgrounds requested without stereotypes. Actions: sliding, climbing, tunnel peeking, two playing hopscotch, one running tag. Keep coherent limbs and small sparse facial marks. Do not put any playground at school, family, national or world levels. Moving playground into community and clearing the family terrace are the main changes. Keep delicate charcoal ink and restrained muted watercolor, sparse mist transitions, not cartoon. No new landmarks, no text, no title, numbers or watermark.

## Vertical title prompt

Use case: precise-object-edit. Asset type: standalone transparent VERTICAL Chinese calligraphy title sprite.
Image1 is existing original 谈天说地 horizontal brush-calligraphy sprite, supplied for exact character identity, ink colour and brush style. Recompose those exact FOUR simplified characters into ONE single VERTICAL COLUMN, from TOP TO BOTTOM: 谈 then 天 then 说 then 地. Each character remains upright, DO NOT rotate letters or rotate the whole horizontal title. Repaint their strokes to suit flowing vertical composition: elegant literary book-cover semi-running 楷行 brush calligraphy, finer more airy structure like a hanging calligraphy scroll, varied thick/thin charcoal-green #35413a ink, subtle drybrush flying-white texture, readable complete character structure, gentle variable spacing and organic alignment, no standard printed font and no wild illegible cursive. Keep the four original character identities, no traditional replacements, no extra characters.
Tall narrow transparent canvas roughly512x1536. Four characters balanced in a single upright vertical column occupying around70% width and85% height, each clearly separated by a modest transparent gap. All strokes and inkflecks fully contained with ample transparent margins, no overlap or touching frame. GENUINE alpha transparency, no paper or white background or painted checkerboard. ONLY four Chinese characters, no English, no seals, no labels, symbols, scene, border or watermark. English and the existing school seal will be paired alongside the column by website code following traditional hanging-scroll composition.


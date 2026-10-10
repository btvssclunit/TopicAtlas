"""Measure each sprite's painted ground line from its alpha channel.

For every column, the lowest pixel with solid paint (alpha >= 0.45) marks the ground there.
A robust line fit through those points gives the ground slope (degrees, positive = down to the right)
and where the line crosses the sprite's horizontal centre (as a fraction of height).
Usage: python3 -I tools/20261010_measure_ground.py out.json path/to/sprite.png ...
"""
import json, sys, os, math
import numpy as np
from PIL import Image

out = {}
for path in sys.argv[2:]:
    im = Image.open(path).convert('RGBA')
    a = np.asarray(im)[..., 3].astype(np.float32) / 255
    h, w = a.shape
    xs, ys = [], []
    for x in range(w):
        col = np.where(a[:, x] >= 0.45)[0]
        if len(col) > 3:
            xs.append(x); ys.append(col.max())
    xs, ys = np.array(xs, float), np.array(ys, float)
    keep = np.ones(len(xs), bool)
    for _ in range(4):  # drop columns far above the fitted ground (tree trunks, gaps)
        m, c = np.polyfit(xs[keep], ys[keep], 1)
        res = ys - (m * xs + c)
        keep = res > -max(8, np.percentile(np.abs(res[keep]), 70))
    m, c = np.polyfit(xs[keep], ys[keep], 1)
    name = os.path.splitext(os.path.basename(path))[0]
    out[name] = {'w': w, 'h': h, 'slope': round(math.degrees(math.atan(m)), 1),
                 'fy': round((m * w / 2 + c) / h, 3), 'x0': round(xs[keep].min() / w, 3), 'x1': round(xs[keep].max() / w, 3)}
    print(name, out[name])
json.dump(out, open(sys.argv[1], 'w'), indent=1)

"""Turn one Codex vignette on plain white paper into a transparent PNG + WebP.

Usage: python3 -I tools/20261010_cut_vignette.py input.png assets-v22/name [--tile]
--tile keeps the full 1536 x 1024 canvas so the ground line stays at (0,330)-(1536,950).
Colour-to-alpha against the paper colour keeps soft watercolour edges and mist.
"""
import sys
import numpy as np
from PIL import Image

src, out = sys.argv[1], sys.argv[2]
tile = '--tile' in sys.argv[3:]
A = np.asarray(Image.open(src).convert('RGB')).astype(np.float32) / 255
flat = A.reshape(-1, 3)
P = np.median(flat[flat.sum(1) > 2.85], axis=0)
d = np.clip((P - A) / np.maximum(P, 1e-3), 0, 1).max(2)
a = np.clip((d - 0.035) / 0.9, 0, 1)
a = np.where(a > 0, np.minimum(1, a * 1.15), 0)
a3 = np.maximum(a[..., None], 1e-4)
col = np.clip((A - (1 - a3) * P) / a3, 0, 1)
rgba = np.dstack([col, a])
keep = a > 0.02
rows, cols = np.where(keep.any(1))[0], np.where(keep.any(0))[0]
if not tile:
    rgba = rgba[rows[0]:rows[-1] + 1, cols[0]:cols[-1] + 1]
img = Image.fromarray((rgba * 255 + 0.5).astype(np.uint8))
img.save(out + '.png', optimize=True)
img.save(out + '.webp', quality=82, method=6)
print(out, img.size)

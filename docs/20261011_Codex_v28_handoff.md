# Codex v28 reading-pair repair

Updated October 11, 2026 by HOD/MTL Mdm Chun Kai Xin

## Changed

The girl’s far-right sneaker was already clipped by the edge of `assets-v16/personal-natural-hair.png`. Built-in imagegen repaired its rounded toe and sole and added transparent canvas clearance. Final output: `exec-370251b7-a9c2-4f88-9d25-a1045df51e2b.png`, saved intact as `docs/mockups/assets-v28/personal-shoes-repaired.png` with an alpha-preserving display WebP.

New review: `docs/mockups/20261011_quarter-v28.html`. The padded image is placed at (-22,710), size 373 x 311 SVG units, keeping the visible students at approximately their previous size with extra clearance below the shoes. All previous reviewed drafts and assets remain preserved.

## Final prompt

Built-in imagegen, transparent background, previous repair candidate supplied as edit target:

Use case: precise-object-edit. Image 1 is the transparent sprite edit target. Its far-right girl's sneaker still touches the right image edge. Finish the entire rounded toe and thin sole of that shoe. Place the ENTIRE EXISTING illustration at 85% size centered within a larger genuinely TRANSPARENT canvas, leaving at least 70 pixels of entirely transparent padding on EACH of the four edges. Every rock, hair strand, ankle, sneaker toe and sole is fully contained within that padding. Do not crop or zoom. Keep faces, hair, uniforms, books, seated poses and rocks unchanged, same delicate ink and pale watercolor. No additions, no text, no background, no plants. Fully complete all four shoes and make visible transparent empty margin beyond the rightmost shoe.

## Validation

Both girls’ sneakers visibly complete in the final asset, with clear space beyond toe and sole. Asset is 1374 x 1145 RGBA. Substantial painted alpha bounds (>24) are (126,189)-(1267,1056), leaving 107 pixels to the right and 89 below. Browser preview checked on desktop and phone with no horizontal overflow, all shoes inside the panel and no console errors.

Production integration and owner art review remain pending. Student content and production files unchanged.

# Modular ink atlas, version 17

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

Current candidate: `docs/mockups/20261010_modular-v17.html`. Earlier v15 and v16 remain frozen. Each upright vignette is an individual transparent PNG with a smaller WebP display copy; device layouts reposition their alpha-ground anchors along true circles. No production or student-content files changed.

## Style consistency review

Reviewed the complete sprite contact sheet, then the assembled atlas. Shared direction is muted sepia contours, pale mineral/olive washes, warm aged paper and sparse handscroll facial marks. Avoid anime faces, glossy skin, thick cartoon outlines, digital airbrush clouds and highly saturated decorative colours.

Targeted revisions: reading pair's facial rendering; Petra's orange stone; Machu Picchu's yellow greens; hibiscus's bright red; playground's orange/rainbow palette; volumetric white cloud shading. These six were edited against the same school ink reference and saved with `-ink` suffixes. Earlier pieces remain labelled as superseded in the library. All assembled sprites receive one common restrained saturation treatment; the exact crest and school-name lettering are separate native overlays, not generated lettering. Different subjects retain appropriate differences in leaf silhouettes and skin tones rather than forcing identical textures or colours.

Uniform corrections preserved: secondary-age personal pair, separate books, boy long brown trousers and shorter hair, girl's neat ponytail, plain white shirt pockets and tiny student-left collar badges. School group has Malay, Chinese and Indian students in ordinary uniforms, varied heights and skin tones, shorts and long trousers, neat hair and white shoes. School facade was checked against real photographs, with official crest and exact school name on the front white wall.

## Sources and provenance

Artwork generated with the built-in imagegen tool in transparent-image mode, then copied into the workspace and repository. `assets-v16/prompts.json` preserves exact prompts for every asset and edit. `assets-v16/manifest.json` records dimensions, transparency and ground anchors. Selected original full-resolution generated PNGs live in `masters-v16/` for contingency backup and must not be loaded by the student site. Display exports preserve aspect ratio and alpha.

The actual NParks flora photographs form a reference-only moodboard. Individual source pages and photographer credits remain linked; reference photos are not atlas artwork and are not copied into the production asset folder. The portable local moodboard has cached copies for offline viewing. Species: Samanea saman, Plumeria rubra, Hibiscus × rosa-sinensis cultivars and Bougainvillea × buttiana 'Mahara'. See the reference links in the Claude handoff.

Official Bukit View crest downloaded from the school's logo page at the owner's explicit request. This is an institutional identity asset, not original generated artwork or CC0. School/attire photographs supplied by the owner and a public facade photo informed the illustration; those photos are not included as site artwork. The earlier generic no-brand guidance is superseded for the school crest by the owner's explicit identity request.

The larger ASEAN group has Thai architecture, Borobudur and Petronas Towers. Seven smaller landmarks from the New Seven Wonders set occupy outer arcs: China, Jordan, Italy, India, Peru, Mexico and Brazil. Verified against https://world.new7wonders.com/. VocabSummit's current public-main sea-map implementation informed separate PNG positioning and responsive offsets; no files in that sibling site changed.

## Validation

Validation results are recorded in the Claude handoff. This remains a selection prototype, with production navigation and the original roughly 400 KB home-image budget still requiring integration work.

Visible WebP sprite payload: 690 KB, excluding the crest. Full-resolution archive payload: 67 MB.

## Version 17 owner corrections

V16 is archived as the intermediate modular assembly. V17 adjusts scene angles/sizes and broad washes so the composition reads along the curves more coherently, while remaining an owner-review draft. Personal boy's trousers and hair, plain pockets, left-collar badges, white shoes, no belts, smooth skirt-like culottes just past the knees are preserved. School students were edited against the reading-pair reference to match fine facial marks, hair linework, matte skin and restrained wash. `personal-uniform-knee.png` and `school-uniform-matched.png` are the current figure assets. All earlier variants remain in the library as superseded. `selected` in the manifest identifies current scene pieces.

Native SVG lettering/crest replaces CSS container-unit lettering in v17. The resize breakpoint has a legacy media-query listener fallback. Validation: computer 1280×800, iPad 1024×768, phone 375×812; all scene images loaded and no document-width overflow. Enter/Space selection, golden wash, guide toggle and dark surroundings worked. All 12 NParks photographs loaded.

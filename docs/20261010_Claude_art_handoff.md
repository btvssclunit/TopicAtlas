# Handoff to Claude: TopicAtlas modular ink atlas

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

## Start here

Repository: `/Users/kaixinchun/Documents/github-btvssclunit/TopicAtlas`.
Branch: `graphics/map-directions`. Draft PR: https://github.com/btvssclunit/TopicAtlas/pull/1.
Current review draft: `docs/mockups/20261010_modular-v18.html`.
Run from repo root with the existing localhost port 8000 server. Do not stop the owner's server.
Open http://localhost:8000/docs/mockups/20261010_modular-v18.html.

Production files and student content are unchanged. This is an owner-review art draft, not approved production integration. Read AGENTS.md, CLAUDE.md and the original graphics handoff before implementation. Do not push main or merge the PR without the owner instructing that step.

## Owner's settled art direction

- Six quarter-radial scopes originate at the bottom-left: 个人, 家庭, 校园, 社区, 国家, 天下. Internal region IDs remain `geren`, `jiating`, `xiaoyuan`, `shequ`, `guojia`, `shijie`.
- 修身, 齐家, 治国 and 平天下 remain the framing mottos. 校园, 社区 and 国家 share 治国. 天下 is the two-character navigation label.
- 山海经 and 清明上河图 inspiration: fine ink contours, sparse natural facial marks, restrained desaturated watercolour, warm aged-paper background, generous 留白. Broad soft 大写意 mist washes, no hard layer boundaries or continuous land strips.
- Place the base of each upright vignette along a true circle. Avoid flattening circles into diagonal strips, elliptical stretching or distorted architecture. Similar figure/icon scales may preserve detail rather than strict distant perspective.
- Horizontal computer/iPad layout; horizontal personal-to-world navigation below the artwork, wrapping on phones. Selection is a warm golden glow, not green.
- Personal illustration: secondary teenagers, one boy and one girl each reading their own book. Boy wears full-length brown trousers and a short school haircut clear of eyebrows, ears and collar. Girl has a neat ponytail and brown smooth skirt-like culottes ending just below the knees. White collared short-sleeve shirts tucked in. No belts or buckles. Culottes follow the supplier photo: smooth flat-front A-line silhouette that looks like a skirt, not exposed divided shorts or extra pleats. Uniform breast pockets are plain; the small badge is on the student's LEFT collar. White socks and school shoes. Do not reintroduce a pocket crest or juvenile proportions.
- School group: six varied-height teenagers representing Malay, Chinese and Indian schoolmates, girls and boys. Boys have a mix of brown shorts and long trousers. Girls have ponytails or braids and smooth skirt-like culottes ending just below the knees. No belts, buckles or belt loops. Same accurate collar badge and plain pockets. No cultural costumes as a shortcut for racial representation.
- School facade follows the owner-supplied actual Bukit View photos: broad raised white sign wall over columns and a long multi-storey classroom wing. Actual name `BUKIT VIEW SECONDARY SCHOOL` and official crest sit on the front wall. Both are native overlays, kept separate so AI lettering cannot corrupt them.
- Family illustration shows parents and young children INSIDE a typical HDB flat. Separate family playground vignette uses the iconic Toa Payoh flat orange mosaic dragon, hexagonal eye and rainbow tubular spine, with parents and young children in casual clothing.
- Community figures wear casual clothing, with Singapore's racial diversity and multiple ages. No school uniforms in this layer.
- Singapore includes shophouses, MBS, Merlion, Supertrees and ArtScience Museum. MBS roof does not have foliage spilling from it. One small sampan, not a flotilla.
- World: ASEAN neighbours are larger and nearer the national layer. Seven smaller global landmarks occupy outer arcs: Great Wall, Petra, Colosseum, Taj Mahal, Machu Picchu, Chichen Itza and Christ the Redeemer. This is the New Seven Wonders set, not the ancient set. Preserve whitespace rather than filling every gap.
- Distinct Singapore flora: rain tree's spreading umbrella crown, frangipani's sculptural open branches and thick tip leaves, hibiscus's five-petal flower and staminal column, foreground bougainvillea's papery bracts. Avoid repeating one generic tree everywhere.

## Files and geometry

- `docs/mockups/20261010_modular-v18.html`: vanilla HTML/CSS/JS responsive sprite assembly, live text navigation, exact circle guides and golden selected bands.
- `docs/mockups/assets-v16/`: individual transparent PNGs, smaller WebP display copies, `manifest.json` dimensions/alpha-ground anchors and `prompts.json` exact built-in imagegen prompts. Superseded pieces are retained as dated iteration records.
- `docs/mockups/20261010_asset-library-v18.html`: browsable asset library with intermediate labels.
- `docs/mockups/20261010_flora-moodboard.html`: actual NParks reference photographs with source/credit links. Reference photos are not student-page artwork and are not relicensed as original work.
- `docs/mockups/20261010_design-history.html`: visual evolution from Claude's original SVG through all Codex studies. Do not overwrite earlier reviewed drafts.
- `docs/20261010_modular-atlas.md`: asset provenance, art consistency check and validation.

The atlas uses upright images with preserved aspect ratios and ground anchors, not a warped flattened painting. Source coordinates, radius and angle determine base position: `x = r sin(angle)`, `y = H - r cos(angle)`. PNG alpha-bounding-box bottom in `manifest.json` determines the image's top offset. Desktop and phone use different radii/angles while circles remain circular. The guide and selection use the same coordinate system. The outer world scope can contain more than one arc without adding a seventh topic scope.

The crest/name are a native SVG overlay on `school-hair-final.png`, not baked into that PNG. Copy the complete school component for integration; using just the PNG leaves the sign wall blank. The expanded school-detail preview shows the sign at readable size.

## Reference sources

- Official crest: https://www.bukitviewsec.moe.edu.sg/our-story/logo-n-song/
- Official attire: https://www.bukitviewsec.moe.edu.sg/files/Sec_1_2026_Attire_and_Grooming_Latest_15Nov.pdf
- Owner's actual uniform photos establish plain pocket and left-collar badge; they override earlier generated guesses.
- Actual facade reference photo: https://www.straitstimes.com/singapore/case-of-tb-at-secondary-school-in-bukit-batok. Only architectural appearance was referenced. Owner also supplied facade photographs directly.
- NParks rain tree: https://www.nparks.gov.sg/florafaunaweb/flora/3/1/3106
- NParks frangipani: https://www.nparks.gov.sg/florafaunaweb/flora/3/0/3074
- NParks hibiscus: https://www.nparks.gov.sg/florafaunaweb/flora/2/0/2095
- NParks bougainvillea: https://www.nparks.gov.sg/florafaunaweb/flora/1/3/1340
- New Seven Wonders set: https://world.new7wonders.com/
- VocabSummit live main was inspected through GitHub's current source: separate sea-map island PNGs, percentage-positioned anchors and device-specific CSS offsets informed this modular approach. No VocabSummit files changed.

## Latest owner corrections and review status

V16 is preserved as the first modular assembly, with its isolated spacing and earlier uniform variants. V17 rebalances scene angles and sizes, strengthens broad soft washes, removes belts, uses smooth skirt-like culottes just below knees, and explicitly matches school students to the reading-pair style. V18 preserves the same composition with the latest shorter fringes and tidier tied hair. The layout is still a review draft, not a final owner-approved composition. Do not imply that mathematical anchors alone resolve artistic spacing. Owner review remains necessary.

## Remaining work

1. Owner review of final overall spacing and consistent art style. Keep future revisions versioned.
2. Before production integration, tighten the actual visible-image budget toward the original roughly 400 KB home-view target; full-resolution archive masters must never be loaded on the student homepage.
3. Integrate only when instructed, retaining every region behaviour hook, keyboard/VoiceOver support, both themes and mine-ring semantics. Replace prototype hard-coded counts with vetted data.
4. Test production topic navigation, textbook picker, storage failure, doors and tabs, and phone overflow after integration. This draft's controls demonstrate selection; they do not open production region routes.
5. Original content vetting, Edcafe, favicons/OG/PWA graphics and launch decisions remain outstanding.

## Continuity and backup

The owner requested GitHub as the contingency record. Art, prompts, history and this handoff are committed on the graphics review branch. Selected full-resolution transparent sprites are preserved separately from display assets. Local sandbox outputs also contain a portable PNG pack and the photo moodboard. No credentials or private student records are in the backup.

## Verified in this session

- v17 at 1280×800, iPad landscape 1024×768 and phone 375×812: images loaded, no horizontal document overflow.
- Native Enter and Space selected the expected scopes; golden selected SVG wash and live status updated.
- Exact circular guide toggled correctly, hidden by default.
- Dark surroundings retained readable text and an aged-paper art panel.
- All generated sprite PNGs preserve actual transparency. Full contact sheet checked; school people matched explicitly to reading-pair style.
- All 12 actual NParks moodboard photographs loaded with their source links.
- Latest responsive previews and uniform style pair are preserved with the mockup history.

The selected generated sprites use about 700 KB of WebP before the crest; prototype budget is above the eventual roughly 400 KB home-image target. Retain archive originals while optimising production derivatives later. Phone artwork is small by design; the accessible scope buttons carry navigation. The original photo references remain local/reference-only.

Latest hair correction: personal boy has a much shorter cropped fringe with forehead clear, girls have smoother neatly tied hair with loose wisps removed. School-group hair is tidied to match. Preserve the latest `personal-hair-final.png` and `school-hair-final.png` rather than earlier uniform/hairstyle variants.

In progress at backup checkpoint: owner supplied a natural short student haircut photo to replace the too-rounded cropped shape in v18. The next hair-only variants will be `personal-natural-hair` and `school-natural-hair`; update the current candidate when verified.

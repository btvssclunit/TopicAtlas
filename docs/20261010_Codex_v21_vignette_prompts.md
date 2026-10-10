# Codex image prompts for the v21 diagonal atlas

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

## Why new art is needed

The owner prefers the v13 painting style but wants exact, responsive scope bands. v20 tried concentric quarter circles: v13's vignettes are painted on flat strips, so they cannot follow a curve without tilting buildings. v21 and v22 (`docs/mockups/20261010_quarter-v22.html`) use parallel straight bands sloping down to the right at **22 degrees**. Each vignette's footing sits exactly on its band's ground line, in code.

v21 currently reuses cut-outs from v13 (`assets-v20/`). Those figures predate the v19 corrections (uniforms, hair, school facade, casual clothes at the playground), and v13 has the Eiffel Tower and a pagoda instead of the New Seven Wonders. The vignettes below replace them.

## How to generate: every vignette is a TILE

Owner instruction: the graphics must tile along the diagonal bands. Every vignette is therefore drawn on the same fixed tile geometry, so tiles placed side by side join into one continuous band.

- Attach **two** images to every prompt:
  1. `docs/mockups/TopicAtlas-quarter-v13.jpg` as the style reference.
  2. `docs/mockups/assets-v20/tile-22-template.png` as the geometry reference. Its single dark line runs from the left edge at y = 330 to the right edge at y = 950, exactly 22 degrees.
- Generate **one tile per image**, 1536 x 1024, on plain white.
- Save each master to `docs/mockups/masters-v22/<name>.png` using the names below. Claude runs `docs/mockups/tools/20261010_cut_vignette.py <master> assets-v22/<name> --tile`. That keeps the full canvas, so the ground line stays at the same coordinates, then measures its painted ground with `tools/20261010_measure_ground.py` and puts it in its reserved slot in the latest draft (v24 or later). A tile painted at exactly 22 degrees needs no rotation, so its buildings stay upright; the v13 interim pieces are rotated to match.
- Plain white matters: the cutter turns paper into transparency, so any paper texture or background wash becomes a grey box.
- If a tile's ground misses the template line by more than about 20 px anywhere, regenerate it rather than nudging it.

## Shared prompt (paste first, then add one subject block)

```
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.
```

## Subject blocks

Uniform rules apply to every student: white collared short-sleeve shirt tucked in, plain breast pocket, small badge on the student's LEFT collar, no belts or buckles. Boys wear brown shorts or full-length brown trousers, with a natural short school cut (softly tapered sides, short uneven fringe clear of the eyebrows). Girls wear smooth, flat-front, A-line brown culottes that look like a skirt and end just below the knee, with a neat ponytail or braids. White socks, school shoes, secondary-school teenage proportions.

### 个人 (band 1)
1. Done in v22: the v19 `personal-natural-hair` pair sits on v13's bougainvillea bed in the corner, bleeding off the edges. No tile needed.

### 家庭 (band 2)
2. `family-flat`: a cutaway of a typical Singapore HDB flat interior with parents and two young children at home together (a meal or reading). Casual home clothes. The flat sits on the sloped ground strip with a little planting.
3. `dragon-playground`: the iconic Toa Payoh dragon playground: flat orange mosaic dragon head with a hexagonal eye, and a rainbow tubular spine of rings. Parents and young children in casual clothing, **no school uniforms**.

### 校园 (band 3)
4. `school-facade`: Bukit View Secondary School as in the owner's photos: a broad raised white sign wall over columns, with a long multi-storey classroom wing stepping down the slope. The sign wall is **completely blank** (the real name and crest are added later as an overlay). Rain tree and frangipani beside it.
5. `school-students`: six secondary students of varied heights, Malay, Chinese and Indian, girls and boys, walking and talking. Uniform rules as above. No cultural costumes.

### 社区 (band 4)
6. `hdb-void-deck`: two HDB blocks with a void deck. Residents of multiple ages and races in casual clothes: elderly people on a bench, a parent with a pram, children.
7. `hawker-centre`: an open hawker centre canopy with diners of different races and ages at round tables, in casual clothes.
8. `community-garden`: a small community garden plot with a rain tree's spreading umbrella crown, residents gardening together.

### 国家 (band 5)
9. `shophouses`: a short row of Peranakan shophouses with five-foot way, stepping down the slope.
10. `mbs`: Marina Bay Sands, three towers and the skypark, **no foliage spilling from the roof**.
11. `merlion`: the Merlion with its water spout at the bay edge.
12. `supertrees`: three Gardens by the Bay Supertrees of different heights.
13. `artscience-sampan`: the ArtScience Museum lotus form by the water, with ONE small sampan.

### 天下 (band 6). ASEAN neighbours are larger; the New Seven Wonders are smaller
14. `thai-temple`: a Thai temple with golden chedi (larger).
15. `borobudur`: Borobudur stupas (larger).
16. `petronas`: the Petronas Twin Towers with skybridge (larger).
17. `great-wall`, 18. `petra`, 19. `colosseum`, 20. `taj-mahal`, 21. `machu-picchu`, 22. `chichen-itza`, 23. `christ-redeemer`: each one small landmark vignette with only a short ground strip. Add "small, modest footprint, about one fifth of the canvas wide" to the subject line.

## Slots and replacements in v22

Slots already reserved: `family-flat`, `school-students`, `community-garden`, `hdb-void-deck`, `shophouses`, `merlion`, `supertrees`, `great-wall`. The other names replace the interim v13 cut-outs in the same row (`dragon-playground` for `dragon`, `school-facade` for `school`, `hawker-centre` for `hawker`, `mbs`, `artscience-sampan` for `lotus`, `thai-temple`, `borobudur`, `petronas`, and the remaining wonders for `eiffel` and `pagoda`). Claude adjusts the row lists when they arrive. Owner decision: all seven wonders share one small outer row. v23 fills it with the v19 wonder sprites; Codex wonder tiles are optional and would replace them one for one.

## After generation

Send the masters back to Claude. Claude cuts them, checks transparency and the ground line, drops them into their slots, and saves the result as v23. The owner reviews spacing before any production work.

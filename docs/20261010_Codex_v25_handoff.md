# Handoff to Codex: v25 diagonal atlas and new sprites

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

## Start here

Repository: `/Users/kaixinchun/Documents/github-btvssclunit/TopicAtlas`, branch `graphics/map-directions` (draft PR https://github.com/btvssclunit/TopicAtlas/pull/1).
Current review draft: `docs/mockups/20261010_quarter-v25.html`, served at http://localhost:8000/docs/mockups/20261010_quarter-v25.html from the owner's existing port 8000 server. Do not stop that server.
Read `AGENTS.md` and `CLAUDE.md` first. Production files and student content are unchanged; this is still an owner-review art draft. Do not push `main` or merge the PR.

Your job: **generate new sprites** so the atlas reads as one smooth v13-style painting. Exact prompts are in `docs/20261010_Codex_v21_vignette_prompts.md`; this handoff explains why and how they will be used.

## What the owner decided in this session

1. **Style:** the owner prefers the v13 painting (`docs/mockups/TopicAtlas-quarter-v13.jpg`), meaning cohesive vignettes on soft ground with flowers, rocks and mist. The scattered isolated sprites of v19 are rejected as the look. The v16 to v19 sprites are kept because they may be reused (the seven wonders and some flora are reused now).
2. **Geometry:** concentric circles are dropped (v20 is kept as the record). Scopes are **parallel straight bands sloping down to the right at 22 degrees**, rising from the bottom-left corner: 个人, 家庭, 校园, 社区, 国家, 天下. The 天下 boundary crosses the top edge part-way along.
3. **Responsive:** the whole atlas is one SVG with fixed 1536 x 1024 coordinates. It scales as a unit, so it looks identical on laptops, iPads and phones.
4. **个人 corner:** the v19 reading pair (`assets-v16/personal-natural-hair`, each student with their own book) sits on v13's bougainvillea and rock bed. It fills the bottom-left corner and bleeds past the left and bottom edges, like VocabSummit's pier. No new sprite needed.
5. **Tiling:** each band is a row of sprites tiled end to end along its ground line. Rows are staggered (错落有致) with varied sizes, gaps and heights, so neighbouring rows never stack in columns.
6. **Alignment:** every sprite's ground must run parallel to the band. The owner explicitly asked for sprites to be turned clockwise to achieve this, and checked it by drawing lines under them.
7. **天下:** ASEAN neighbours (Thai temple, Borobudur, Petronas) are larger. All seven New Seven Wonders share one small outer row.

## How the v25 layout works (so new sprites fit)

- `tools/20261010_measure_ground.py` finds each sprite's painted ground from its alpha channel, giving its slope, height and extent. Results are inlined in the draft as `GROUND`.
- Each sprite is rotated clockwise by (22 minus its measured slope) about the left end of its ground, so the ground lands exactly on the band line. The positioning guide draws each measured ground line in red for checking.
- Each row is scaled so sprites fill about 85% of their strip's height, then packed along the line with staggered sizes, gaps and lifts (`SIZE`, `LIFT`, `GAPW`).
- Reserved spaces for planned sprites are `['slot:name', length]` entries in `rows`. They show as dashed boxes in the guide.

**Why new sprites are needed:** the interim pieces are cut from the v13 painting, which was painted on gentle slopes of about 1 to 13 degrees. Rotating them to 22 degrees makes their buildings lean. Sprites painted with their ground already at 22 degrees need no rotation, so buildings stay upright and neighbouring tiles join smoothly. The v13 figures also predate the v19 corrections to uniforms, hair, the school facade and casual playground clothing.

## Sprite specification

- **One sprite per image,** 1536 x 1024, on plain flat white `#FFFFFF`. No paper texture or wash: the cutter turns white into transparency.
- **Two reference images per prompt:** `docs/mockups/TopicAtlas-quarter-v13.jpg` (style) and `docs/mockups/assets-v20/tile-22-template.png` (geometry: one line from (0,330) to (1536,950), exactly 22 degrees).
- **Ground strip:** narrow, lying exactly along the template line and running edge to edge (left edge at y 330, right edge at y 950). Low shrubs, ink rocks, grass and soft grey-blue 大写意 mist only.
- **Upright subjects:** buildings, people and trees stand perfectly vertical on the strip and step down along it. Nothing important touches the side edges.
- **Style:** fine charcoal ink contours, restrained desaturated watercolour, sparse facial marks, similar pictorial scale, no vanishing-point perspective.
- **Exclusions:** no text, logos, signage, borders or frames. The BVSS sign wall stays blank; the real crest and name are a separate overlay (`assets-v16/school-branded-v19.svg`).
- **Content rules** are in the prompt file: uniforms (plain pocket, left-collar badge, no belts, skirt-like culottes just below the knee, natural short cut), Singapore racial and age diversity, casual clothes outside school, MBS roof without foliage, one sampan only.

## What to generate, in priority order

Names match the slots in `rows`. Save masters to `docs/mockups/masters-v22/<name>.png`.

1. **Reserved empty slots:** `family-flat`, `school-students`, `community-garden`, `hdb-void-deck`, `shophouses`, `merlion`, `supertrees`.
2. **Replacements for v13 interim pieces:**

   | New sprite | Replaces |
   |---|---|
   | `dragon-playground` | `dragon` (casual clothes, not uniforms) |
   | `school-facade` | `school` |
   | `hawker-centre` | `hawker` |
   | `hdb-void-deck` | `hdb` |
   | `mbs` | `mbs` |
   | `artscience-sampan` | `lotus` |
   | `thai-temple`, `borobudur`, `petronas` | interim pieces of the same name |

   Suggested, pending owner confirmation: retire `house`, since a detached house is not typical. `family-flat` covers family life in an HDB flat.
3. **Optional, one for one:** the seven wonders (`great-wall`, `petra`, `colosseum`, `taj-mahal`, `machu-picchu`, `chichen-itza`, `christ-redeemer`), small with short ground strips. The v19 sprites cover them for now.
4. **Optional:** small 22 degree flora tiles (rain tree, frangipani, hibiscus) to replace the flat v16 flora fillers.

## Integrating a sprite (if the owner asks you to, or for Claude to do)

1. `python3 -I docs/mockups/tools/20261010_cut_vignette.py docs/mockups/masters-v22/<name>.png docs/mockups/assets-v22/<name>`. Omit `--tile`: the measured layout prefers tightly trimmed sprites.
2. Measure: `python3 -I docs/mockups/tools/20261010_measure_ground.py docs/mockups/assets-v22/ground.json docs/mockups/assets-v22/*.png`. A sprite painted correctly should measure close to 22 degrees.
3. Copy the draft to the next version (`20261010_quarter-v26.html`). Never overwrite reviewed drafts.
4. Add the measurements to `GROUND` and replace the slot or interim entry in `rows`. Point `img()` at `assets-v22/` for those names.
5. Turn on the positioning guide and confirm each red ground line lies on its band line. Check 1280 x 800, 1024 x 768 and 375 x 812 for no horizontal overflow.

## Known gaps and decisions still open

- Image budget: v25 loads roughly 1.2 MB of WebP. Production needs about 400 KB; trim after the art settles.
- The topic counts on the scope buttons are prototype numbers, and the scope buttons do not open production routes.
- The owner wants the 2026 BVSS CL hub hot topics spreadsheet mapped against our topics. It is an MOE-internal file, so it must stay outside this public repo. That is separate from the art.

## Files from this session

- Drafts: `docs/mockups/20261010_quarter-v20.html` (concentric, rejected) through `20261010_quarter-v25.html` (current).
- Interim cut-outs and templates: `docs/mockups/assets-v20/` (v13 pieces, `personal-bed`, `personal-pair`, `slope-22-template.png`, `tile-22-template.png`, `ground.json`).
- Tools: `docs/mockups/tools/20261010_cut_v13_vignettes.py` (records the v13 polygons; reads the v13 master from the Codex outputs folder), `20261010_cut_vignette.py`, `20261010_measure_ground.py`.
- Prompts: `docs/20261010_Codex_v21_vignette_prompts.md`.

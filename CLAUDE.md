# CLAUDE.md · 谈天说地 · Topic Atlas

Engineering log and standing rules for Claude Code. Read this, then `docs/Project_Brief.md`, before any task. Update this file whenever a decision, rule or pitfall changes.

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

## What this is

**Name (decided October 10, 2026):** 谈天说地 · Topic Atlas. Repo `btvssclunit/TopicAtlas`, Pages URL btvssclunit.github.io/TopicAtlas. Sibling of 词山学海 · Vocab Summit.

A free, public, no-login self-directed learning site for secondary Chinese Language at Bukit View Secondary School (BVSS), published by the BVSS MTL CL Unit. It replaces the printed 话题校本. Topics (themes from the 2021 syllabus) are the unit of organisation, not levels or streams.

- **Map:** regions 个人 (修身, with sub-areas 心态品格, 成长追梦, 学习生活), 家庭 (齐家), 校园, 社区, 国家 (治国), 世界 (平天下). Framed by 《大学》：修身、齐家、治国、平天下.
- **Topic:** 37 unique themes from 92 stream units. Each topic has one home region and optional `also` regions where it is also listed.
- **Doors:** inside a topic, one door per stream that studies it, always ordered G1, G2, G3, HCL. All doors open (Full SBB: scaffold left, stretch right).
- **Tabs per door:** 话题导读, 口试会话, 实用文, 作文 (记叙文, 议论文, 说明文), 范文, 资源库.
- **Edcafe** (MOE-whitelisted) provides the 会话 practice bots and auto-graded assignments, embedded per door. Currently placeholders.
- **Other views:** 课本目录 (one stream's topics in textbook unit order), 我的课本 picker (stream plus level, saved in localStorage only), direct link to 词山学海 (btvssclunit.github.io/VocabSummit).

## Non-negotiables (from the brief; stop and ask before breaking any)

1. **No CPDD textbook text** anywhere in the repo, data, or Edcafe knowledge bases. Texts are referred to by title and unit only. Every sentence on the site is original. The textbook files and `planning/` stay out of this repo.
2. **Privacy:** no sign-in, no analytics, no cookies, no tracking scripts. Local storage only for per-device conveniences, wrapped in try/catch. Third-party embeds (Edcafe) carry the notice and are never the only way to do an activity.
3. **Static only:** GitHub Pages, no backend, under the btvssclunit account.
4. **Student-facing Chinese is vetted by Mdm Chun before it goes live.** Draft new content as `docs/content/YYYYMMDD_descriptor_待审.md` first.

## Stack and layout

```
index.html            shell: fonts, css, #app, js
css/style.css         all styles; colour tokens on :root, dark mode via prefers-color-scheme and [data-theme]
js/app.js             vanilla JS in one IIFE; no framework, no build step
data/topics.json      regions + all 37 topics (id, name, region, sub, also, doors[], active, note)
data/content/<id>.json  full content for built topics (s1u1 = 新同学 新鲜事, xwzj = 学无止境)
docs/                 brief and 待审 content drafts
.nojekyll             stop Jekyll processing on Pages
```

- Test through a local server (`python3 -m http.server`), never file://, because fetch fails under file://.
- Content is fetched on demand when a topic opens. Only `active: true` topics are clickable.

## Data model

**Topic** (`data/topics.json`):
```json
{"id":"xwzj","name":"学无止境","region":"geren","sub":"shenghuo","also":[],
 "doors":[{"s":"G2","lv":"中四","u":"单元四","un":4},{"s":"G3","lv":"中三","u":"单元五","un":5}],
 "active":true}
```
**Content** (`data/content/<id>.json`): `intro`, `keywords[]`, `scenes[]`, `sample[[who,text]]`, `good[]`, `oral{stream:{q[],expr[]}}`, `func{stream:{type,prompt,points[],fmt[]}}`, `compo[{g,title,prompt,steps[]}]`, `snote{stream}`, `model{title,tag,paras[],notes[]}`, `res[{src,tt,ds,url?,todo?}]`. In `model.paras`, `[[text|n]]` marks an annotated span linked to `notes[n-1]`.

**To build a new topic:** write its content as a 待审 markdown file, get it vetted, convert to `data/content/<id>.json` with the same shape, set `active: true` in topics.json. Every stream in `doors` must have `oral` and `func` entries, plus a `snote`.

## Conventions

- No em dashes in prose or docs; use colons or commas. Official text titles that contain dashes are quoted as they are.
- File names for docs: YYYYMMDD_descriptor. Byline: "Updated [Month DD, YYYY] by HOD/MTL Mdm Chun Kai Xin".
- Simplified Chinese, Singapore curriculum terms (生活空间, 核心, 巩固, 进阶, 文化站, 单元).
- English glosses on interface labels only (G1, G2 doors, toggle flips a body class); never on questions or content. No glosses for HCL.
- Toggles flip a class; never re-render content in a way that reshuffles or leaks answers.
- Landscape first (iPads, Chromebooks), phones as fallback, never lock orientation. Go easy on heavy effects; old iPads matter.
- Function before decoration. The current map is simple SVG ellipses; final art (pre-rendered diorama or CC0 assets) comes later.

## Known pitfalls

- Google Fonts must load; the CSS declares system fallbacks (PingFang SC, Microsoft YaHei, Songti SC).
- The localStorage key is `topicatlas-mine` (renamed from `hjxb-mine` before launch; nobody had data under the old key).
- localStorage can throw (private mode, blocked storage). All access is in try/catch; the site must work without it.
- `noindex` is set in index.html while the site is a 示范版. Remove it only at launch.

## Status

See the latest `HANDOVER_*.md`.

## Modular atlas follow-up, October 10 2026

Current review draft: `docs/mockups/20261010_modular-v17.html`. Handoff to Claude: `docs/20261010_Claude_art_handoff.md`. Separate transparent PNGs, display WebPs, current-piece manifest, exact prompts, NParks photo moodboard, full-resolution selected masters and visual stages 16/17 are saved. Owner corrected collars/pockets, no belts, skirt-like culottes just below knees, school/reading facial style and prototype spacing. New Seven Wonders are smaller outside ASEAN. Production files and student content remain untouched. Integration, final owner composition review and production image-budget work remain pending.

Latest art review: `docs/mockups/20261010_modular-v19.html`; natural short student hair replaces the v18 rounded cut. Final art handoff: `docs/20261010_Claude_art_handoff.md`. All earlier drafts remain preserved. Production integration and final composition approval are pending.

Direction change, October 10 2026: owner prefers the v13 painted style over v19's scattered sprites. v20 (`docs/mockups/20261010_quarter-v20.html`) tried exact concentric rings with v13 cut-outs, but flat painted strips cannot follow a curve. v21 (`docs/mockups/20261010_quarter-v21.html`) uses parallel straight bands at 22 degrees, with the whole atlas as one SVG in fixed 1536 x 1024 coordinates, so it scales identically on every screen. Footings sit exactly on code-drawn ground lines. Cut-outs live in `docs/mockups/assets-v20/`; v16 to v19 sprites are kept for later. New v13-style vignettes on the 22 degree slope are requested from Codex via `docs/20261010_Codex_v21_vignette_prompts.md`.
v22 (`docs/mockups/20261010_quarter-v22.html`): 个人 corner uses the v19 reading pair on v13's bougainvillea bed, bleeding past the left and bottom edges. Each band is a row of tiles packed along its ground line. Codex art is now requested as full-canvas tiles whose ground runs from (0,330) to (1536,950), template `docs/mockups/assets-v20/tile-22-template.png`; cut with `--tile` into `assets-v22/` and list the name in `TILES`.
v23 (`docs/mockups/20261010_quarter-v23.html`): owner asked for sprites from 家庭 outward to turn clockwise to follow the band lines; each tile rotates about its footing (22 degrees for flat sprites, less for v13 cut-outs already painted on a slope, see `PAINTED`). All seven New Seven Wonders share one small outer row using the v19 sprites.
v24 (`docs/mockups/20261010_quarter-v24.html`): each sprite's ground slope is measured from its alpha (`docs/mockups/tools/20261010_measure_ground.py`, results inlined as `GROUND`), the sprite rotates by 22 minus that slope about the left end of its ground, and rows pack along the band line scaled to fill 85% of their strip. The guide draws each measured ground line in red. v13 cut-outs re-feathered (blur 16).
v25 (`docs/mockups/20261010_quarter-v25.html`): rows staggered 错落有致 (`SIZE`, `LIFT`, `GAPW` patterns offset per row), 个人 corner lowered. Codex handoff for new 22 degree sprites: `docs/20261010_Codex_v25_handoff.md`.

Band master follow-up, October 11 2026: owner changed individual sprite generation to one complete image per band, with looser 大写意 planting and sparse wispy clouds. Five review masters are in `docs/mockups/masters-v22/`; exact prompts, measured slopes and geometry limitations are in `docs/20261011_Codex_band-masters_handoff.md`. School crest sits above the name on a facade based on owner photos; six students form two platonic groups of three, girls with tied hair and smooth unbroken skirt-like culotte fronts, no head coverings. 世界 uses an ASEAN diagonal with the Great Wall, Eiffel Tower and Statue of Liberty farther away. No draft or production integration yet; exact template endpoint alignment remains approximate.

World band revision, October 11 2026: owner removed the Eiffel Tower and Statue of Liberty for now. The Great Wall is the only farther-away motif, placed off-centre above the ASEAN row with uneven tower heights and spacing for 错落有致. A credited actual Mutianyu winter photo guides bare rocky ridges and sparse scrub rather than decorative flowers. Updated `world-band.png` measures 20.2 degrees. Owner requested the whole landing page, now assembled in new review draft `docs/mockups/20261011_quarter-v26.html`, with cuts in `assets-v26/` and a new photo moodboard. Earlier drafts and production remain unchanged. Prompt, photo credit and responsive checks: `docs/20261011_Codex_v26_preview.md`.

Owner composition follow-up, October 11 2026: new review draft `docs/mockups/20261011_quarter-v27.html` shifts national and school bands up-left, community and family down-right following annotated arrows. The later `assets-v16/bougainvillea.webp` and complete natural-hair reading pair replace the clipped v13 personal bed. Seeded SVG grain and elongated fibres suggest pale raw xuan paper; local translucent SVG masks soften and interrupt painted footings without tilting subjects. Art clicks select their own region after translation. Details and checks: `docs/20261011_Codex_v27_handoff.md`. Production integration remains pending.

Reading-pair repair, October 11 2026: owner identified the girl’s far-right shoe clipped in the v16 source sprite. Built-in imagegen repaired the complete sneaker with transparent margins in `assets-v28/personal-shoes-repaired.png` and display WebP. New preserved review `docs/mockups/20261011_quarter-v28.html` places the padded sprite with both toes and soles clear of the panel edge. Prompt and checks: `docs/20261011_Codex_v28_handoff.md`.

## Standing atlas art direction, October 11 2026

Always use 错落有致: vary intervals, local footing heights, footprint widths and visual weight. Avoid evenly spaced landmarks, repeated palm separators and continuous flower garlands. World settings must follow actual landmark photo references, including urban paving, water, stone or open ground where appropriate; plants are optional and must fit the setting, rather than reuse Singapore planting by default. Add newly used photographs to a credited moodboard.

Current owner review is `docs/mockups/20261011_quarter-v29.html`, with locally stored Petronas/KLCC, Angkor Wat, Wat Phra Kaew exterior and Borobudur references in `docs/mockups/20261011_atlas-moodboard-v29.html`. Ground bases are distinct, loosely connected by the overall diagonal composition, with white gaps. Prompt and provenance: `docs/20261011_Codex_v29_handoff.md`.

Switchback direction, October 11 2026: owner supplied a six-leg uphill trail reference, superseding the parallel band geometry for current review. New preserved draft `docs/mockups/20261011_switchback-v30.html` uses one cohesive regenerated painting with alternating hairpins, unequal terraces, uphill scenes, open top-left sky and bottom-right vertical title/seal. Petronas and six uniform school students corrected in follow-up passes. Code overlays provide scene hit areas, numbered selectors, selection wash and trail guide. Final master and compact WebP in `masters-v30/` and `assets-v30/`; exact prompts and checks in `docs/20261011_Codex_v30_handoff.md`. Production integration remains pending.

Depth and diversity follow-up, October 11 2026: owner likes the winding path and requests a wider foreground tapering into a fine distant trail. New preserved composition mockup `docs/mockups/20261011_switchback-v31.html` orders world landmarks along the right-to-left trail from nearest to farthest: Petronas, Borobudur, Angkor Wat, Bangkok temple, then the Great Wall. Dragon playground has six active children with varied skin tones, hair, boys and girls in casual clothes, sliding, climbing, tunnel play, hopscotch and running. Final details remain a separate pass after composition review. Always show each revised image inline in chat because the owner reviews on a phone. Artwork, exact prompt, geography sources and checks: `docs/20261011_Codex_v31_handoff.md`.

Title and seal direction, October 11 2026: owner requests the Chinese title as an independent brush-calligraphy sprite, paired with smaller Topic Atlas following the Chinese/English hierarchy of Vocab Summit. New preserved review `docs/mockups/20261011_switchback-v32.html` places a horizontal title/English pairing in the lower-right open space and uses the same title sprite in the header. Separate transparent distressed vermilion square seal reads 百德中學 in two seal-script columns, right column 百德 then left 中學. Generated with built-in imagegen, masters and display WebPs in `masters-v32/` and `assets-v32/`. Enlarged inspection page `docs/mockups/20261011_brand-sprites-v32.html`. Seal-script glyph authenticity and final composition remain owner-review items; detailed art refinement and production integration remain pending. Exact prompts and checks: `docs/20261011_Codex_v32_handoff.md`.

Community and vertical-title follow-up, October 11 2026: owner moved the dragon playground to community beside the hawker centre and restored the existing HDB interior family sprite on the family terrace. New preserved review `docs/mockups/20261011_switchback-v33.html` uses independent upright vertical Chinese calligraphy at bottom-right, smaller vertical English to its left and the v32 school seal beneath English, following the supplied scroll reference. Header stays horizontal. School crest/name restored in SVG after repaint cleared them. Exact prompts, provenance and responsive checks: `docs/20261011_Codex_v33_handoff.md`. Final detail pass and production integration remain pending.

Family and paving follow-up, October 11 2026: owner superseded the HDB interior scene with two parents playing outdoors with two children. Use the supplied family photograph and Bukit Batok Nature Park references in `docs/mockups/20261011_atlas-moodboard-v34.html`. Current review `docs/mockups/20261011_switchback-v34.html` changes each path to suit its setting: garden walkway, park concrete with green verges, school brick, neighbourhood paving and play surfacing, waterfront promenade, and local landmark grounds. Preserve switchback depth and independent vertical title/seal. Prompts and checks: `docs/20261011_Codex_v34_handoff.md`. Final art detail refinement and production integration remain pending.

Watercolor and mist follow-up, October 11 2026: owner likes v34 composition and requests more transparent watercolor with elongated wispy clouds in place of small clusters. Current review `docs/mockups/20261011_switchback-v35.html` preserves the scenes, count/representation direction, local path materials and independent vertical title/seal. Mist should form sparse long horizontal veils with feathered ends and exposed paper, not scalloped blue puff chains. Supplied landscape reference is recorded in `docs/mockups/20261011_atlas-moodboard-v35.html`; exact edit prompt and checks in `docs/20261011_Codex_v35_handoff.md`. Production integration remains pending.

Meandering route follow-up, October 11 2026: owner supplied a magenta gesture over v35 and requests smoother stronger S-curves, with personal turning earlier into family. The magenta is route guidance only and must never appear in artwork. Current review `docs/mockups/20261011_switchback-v36.html` keeps watercolor, long wispy mist, local paving and independent vertical title/seal. Earlier versions remain preserved. Exact prompt/provenance and checks: `docs/20261011_Codex_v36_handoff.md`. Production integration remains pending.

Continuous path follow-up, October 11 2026: owner identified doubled personal roads, choppy route fragments, missing school identity and excessive decorative foliage in v36. Current review `docs/mockups/20261011_switchback-v37.html` rebuilds a single unbranched smooth ribbon, changing material by scene and opening planting gaps. Crest and school name must be clearly visible on the front facade, not lost in foliage or placed on the roof. Exact prompt/provenance and checks: `docs/20261011_Codex_v37_handoff.md`. Production integration remains pending.

### 20261011 · Codex v38 muted watercolor review

Owner requested lower saturation and softer watercolor edges. Generated a quieter palette with simplified pathside foliage and atmospheric 写意 distance, retaining finer 工笔 subjects. Review draft: `docs/mockups/20261011_switchback-v38.html`. Preserved continuous route and independent school identity/title/seal overlays. Production integration remains pending owner review. Exact prompt and asset provenance: `docs/20261011_Codex_v38_handoff.md`.

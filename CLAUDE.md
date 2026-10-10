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

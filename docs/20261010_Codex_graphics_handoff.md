# Handoff to Codex: progress review and graphics · 谈天说地 · Topic Atlas

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

You are picking up a project that was built with Claude Code. Your job in this session has two parts:

1. **Review** the current build and give the owner a short written assessment.
2. **Graphics:** propose and then build the visual layer (map art first), without breaking any rule below.

Read in this order before touching anything: this file, `CLAUDE.md` (engineering log and standing rules), `docs/Project_Brief.md` (vision, non-negotiables, decisions), `HANDOVER_20261010.md` (status and outstanding list).

## 1. What this project is

A free, public, no-login self-directed learning site for secondary Chinese Language (Sec 1 to 4, Singapore), published by the BVSS MTL CL Unit at Bukit View Secondary School. It replaces the printed 话题校本 (topic booklet). The owner, Mdm Chun Kai Xin (HOD/MTL), is both the subject expert and the developer, and vets every student-facing word.

- **Name:** 谈天说地 · Topic Atlas. Sibling of 词山学海 · Vocab Summit (btvssclunit.github.io/VocabSummit).
- **Repo:** https://github.com/btvssclunit/TopicAtlas (public, `main`).
- **Live (示范版, `noindex`):** https://btvssclunit.github.io/TopicAtlas/. Not yet shared with students.
- **Stack:** static HTML, one CSS file, vanilla JS in one IIFE, JSON data. No framework, no build step, GitHub Pages.

### Information architecture

- **Home = a map of six regions**, framed by 《大学》：修身、齐家、治国、平天下. From the centre outward: 个人 (修身; sub-areas 心态品格, 成长追梦, 学习生活), 家庭 (齐家), 校园, 社区, 国家 (治国), 世界 (平天下).
- **37 topics** (themes from the 2021 syllabus, merged from 92 stream units) sit in those regions. Each topic has one home `region` and optional `also` regions.
- **Topic page:** one **door** per stream that studies it, always ordered G1, G2, G3, HCL (left = more support, right = more stretch; all doors open). Each door has six tabs: 话题导读, 口试会话, 实用文, 作文, 范文, 资源库.
- **Other views:** 课本目录 (one stream's topics in textbook unit order) and the 我的课本 picker (stream + level, stored in localStorage, rings the student's regions and topics on the map).
- **Built so far:** two topics, all content 待审 (awaiting vetting): 新同学 新鲜事 (`s1u1`, 校园, four doors) and 学无止境 (`xwzj`, 个人 · 学习生活, three doors). The other 35 show as 建设中.

### Files

```
index.html               shell, fonts, noindex
css/style.css            all styles; colour tokens on :root; dark mode twice (prefers-color-scheme guarded by :root:not([data-theme="light"]), and :root[data-theme="dark"])
js/app.js                views: world() map, regionView(), catView(), topic page with doors/tabs
data/topics.json         regions (id, name, motto, blurb, subs) + 37 topics
data/content/<id>.json   content for built topics
docs/                    brief, this handoff, 待审 drafts
```

Run locally: `python3 -m http.server 8000` from the repo root, open http://localhost:8000 (fetch fails under file://).

## 2. Part one: review current progress

Before any graphics work, write `docs/20261010_Codex_review.md` (or the actual date) covering, briefly:

- Does the build match the brief and CLAUDE.md? List mismatches.
- Bugs, accessibility gaps (keyboard, focus, contrast in both themes, screen-reader labels on the SVG map), and phone-width problems (no horizontal scroll at 375px).
- Anything in the data that looks inconsistent (topics.json vs the region sort in the brief's Navigation model section).
- A ranked list of what you would fix. **Do not fix content.** Student-facing Chinese is changed only by the owner.

Keep it short and concrete, with file:line references.

## 3. Part two: graphics

### Current state

The home map is a hand-coded inline SVG in `world()` (js/app.js): a 1000×640 viewBox, flat sea with wave strokes, six rotated ellipse "islands" with three triangle peaks each, a gold dotted route between them, a sun circle at top centre, motto text (修身, 齐家, 治国, 平天下) in gold. Positions live in the `GEO` object. Region and topic pages are plain cards. There is no favicon, no OG image, no app icon. CLAUDE.md says: "Function before decoration. The current map is simple SVG ellipses; final art comes later." Later is now.

### What the owner wants (from the brief)

- A game-like map that feels like a world to explore. Candidate directions, still open: **(a)** a pre-rendered diorama (Blender or CC0 asset packs) used as an image with hotspots, or **(b)** a 2D walkable or illustrated map.
- It should read as a sibling of Vocab Summit: same BVSS identity, palette 晴空 sky, 旭日 sun, 青山 mountain, 碧海 sea, gold-ink `#8A5A0F` for small gold text, and the three-peak skyline with the sun on the right. Reference art and CSS: Vocab Summit repo `art/` (avatar, badge, bg, camp, item, mountain, seamap, sprite) and `css/cs.css` (`.horizon .sun` at left 70%). Note the current Topic Atlas map has its sun at top centre, which does not match.
- The six regions should be recognisable at a glance: 个人 at the centre (a self, a home island), 家庭, 校园 (a school), 社区 (HDB blocks, void deck, hawker centre), 国家 (Singapore landmarks, kept generic and original), 世界.

### Suggested deliverables, in order

1. **Two or three map directions as mockups** (static images or a throwaway HTML page in `docs/mockups/`), each with a one-paragraph rationale, file-size estimate, and how hotspots and the 我的课本 ring would work. **Stop and let the owner pick** before building one. Redesigning the visual identity needs her approval (brief, Build work rule 4).
2. **Build the chosen map** so it replaces the SVG in `world()` without changing behaviour.
3. Region page headers (a small vignette per region), topic card treatment, and the door strip on topic pages.
4. Favicon, apple-touch icon, OG card (1200×630), PWA icons (192, 512, maskable). The PWA itself is a later step.

### Hard constraints for graphics

- **Keep every behaviour hook.** Each region must stay a focusable element with `data-reg="<id>"`, `role="button"`, `tabindex="0"`, an `aria-label` (name plus topic count), Enter/Space activation, a visible focus state, and the `.mine` ring for the 我的课本 picker. Region ids: `geren, jiating, xiaoyuan, shequ, guojia, shijie`.
- **Both themes.** Every colour comes from tokens on `:root` and works in light and dark. A raster image needs a dark-mode variant or a treatment that reads in both.
- **Old devices.** Landscape first (keyboarded iPads, Chromebooks), phones as a working fallback, never lock orientation, breakpoint at 900px. Go easy on `backdrop-filter`, big blurs, WebGL and heavy animation; many G1 and G2 students use old iPads. Respect `prefers-reduced-motion`. Aim for the whole home view under about 400 KB of images (WebP/AVIF with PNG or JPG fallback, `width`/`height` set, lazy where off-screen).
- **Text stays text.** Region names, counts and mottos are live text over the art (accessible, crisp, translatable), not baked into images.
- **Licensing.** Only original work or CC0 assets. Record every third-party asset (source URL, licence, author) in `docs/ASSETS.md`. No CC BY-SA (it would force the licence onto the site), no textbook illustrations, no scans, no real brand logos. Singapore landmarks drawn generically in your own style are fine.
- **Privacy.** No external scripts, trackers or CDNs for art. Google Fonts is the only external stylesheet already in use. Self-host every asset in the repo (e.g. `img/`).

## 4. Non-negotiables (summary; full text in the brief)

1. **No CPDD textbook text or images** anywhere in the repo. Texts are referred to by title and unit only. The internal planning file that maps text titles to topics is deliberately not in this repo; do not ask for it to be committed.
2. **Privacy:** no sign-in, no analytics, no cookies, no tracking. localStorage only for per-device conveniences, always in try/catch.
3. **Static only** on GitHub Pages under btvssclunit.
4. **Student-facing Chinese is vetted by the owner.** Do not write or edit content in `data/content/*.json`. New Chinese copy for the interface (alt text, labels) goes into a `docs/content/YYYYMMDD_descriptor_待审.md` file for her to vet first, or is flagged in your PR.
5. `noindex` stays in index.html until launch.

## 5. How to work in this repo

- **Branch and PR**, never push straight to `main` (pushes to main deploy to the live site). Name branches `graphics/<thing>`.
- **Writing style:** no em dashes in prose or docs, use colons or commas. Doc file names `YYYYMMDD_descriptor`. Byline "Updated [Month DD, YYYY] by HOD/MTL Mdm Chun Kai Xin". Simplified Chinese, Singapore curriculum terms (生活空间, 核心, 巩固, 进阶, 文化站, 单元). In UI strings use 「」 for quotes.
- **Code style:** match the existing compact vanilla JS (`var`, string concatenation, one IIFE) and the single CSS file. No framework, no bundler, no npm dependencies.
- **Toggles flip a class**; never re-render in a way that reshuffles or leaks answers.
- **Logs:** when you change a rule, decision or pitfall, update `CLAUDE.md` (it is the shared engineering log, whichever agent you are). End the session with a new `HANDOVER_YYYYMMDD.md`: what changed, what is outstanding, what to test.
- **Test** on a local server at 1280×800 landscape, 1024×768 (iPad), and 375×812 (phone), in light and dark, keyboard only, and with storage blocked (private window).

## 6. Open items that touch graphics

- Map direction: diorama vs 2D illustrated map (owner to choose from your mockups).
- Whether the map gets light ambient motion (waves, clouds) under `prefers-reduced-motion: no-preference`.
- Door visuals on topic pages: four doors ordered G1 to HCL, support to stretch. Currently plain buttons.
- Visual treatment for 建设中 (35 topics) vs open topics.
- OG card and icons depend on the final map art.

# Sec CL Revision Companion: Project Brief

Oct 10, 2026 · @Kai Xin Chun

## How to use this brief

This brief is the starting context for a new Claude project that builds a free, public secondary CL revision companion. Read it before any build or content task.

- It was drafted on 10 October 2026 from an ideation chat, the 词山学海 · Vocab Summit repo (github.com/btvssclunit/VocabSummit) and a web check of existing products.
- Treat the **Non-negotiables** section as hard rules. Everything else is a starting position that can change.
- When a decision here gets overturned, update this brief so the project stays the single source of truth.

## About me

I am 郑凯欣 (Mdm Chun Kai Xin in English school documents), HOD/Mother Tongue Languages at Bukit View Secondary School (BVSS), Singapore. I am both the subject expert and the developer on this project.

**Role and teaching**

- I oversee Chinese, Malay and Tamil Language across Secondary 1 to 4. The CL work runs through the BVSS MTL CL Unit.
- I teach three classes in 2026: 1C2B (Sec 1 G2 CL), 3C3C (Sec 3 G3 CL) and 4HC3 (Sec 4 HCL). So I know the G2, G3 and HCL learner first-hand.
- Career: classroom teacher at Canberra Secondary (2016 to 2020), BVSS from 2021, SH/CL from January 2024, HOD/MTL from 2025.

**Assessment background**

- I completed the SEAB CEA course work in 2026 (Assessing Reading Comprehension Skills; Test Item Review for Vetters). I use the six 阅读层次 levels, the C³R demand framework, C.L.A.S.S. passage selection and the AMT vetting checklist.
- Any practice question on the site should be judged against those frameworks, not written by feel.

**Technical background**

- I do independent full-stack PWA development and build mostly with Claude Code, working from markdown briefs and handover files.
- Comfortable with: static HTML/CSS/vanilla JS, GitHub Pages, Firebase (auth, Firestore, security rules), Python data pipelines (Excel master to JSON), xAPI for SLS, and SLS deployment.
- I vet all questions, answers and student-facing Chinese myself before anything goes live.

**Things I have built**

| Build | What it is |
| --- | --- |
| 词山学海 · Vocab Summit | Four-stream CL vocabulary PWA (G1, G2, G3, HCL plus a pre-G1 tier), about 3,800 entries, live at btvssclunit.github.io/VocabSummit |
| 中三G3华文论证冒险 | Mario-style platformer on 论证法 for Sec 3 G3, on the SLS Community Gallery and adopted by another school unprompted |
| 单元五《学无止境》 game | Three-level drag-and-drop SLS game covering 生活空间, 核心 and 巩固, with bilingual instructions and a pinyin toggle |
| kaixinbuilds.github.io | My personal portfolio of builds |

**How I think about design**

- The student is always at the centre. I design around self-determination theory and assessment for learning.
- I follow the design thinking cycle with an emphasis on 实践: build, test with real students, iterate.
- I believe knowledge should be shared freely. That is why this site is public.

## Project vision

The site is a free, chapter-by-chapter revision companion for the secondary CL syllabus: a secondary-school counterpart to the primary 学乐网, open to anyone, with no sign-in and no tracking.

- **Who it serves:** BVSS students first, but any secondary CL student, parent or teacher can use it. It is published as a public BVSS resource.
- **Unit of organisation:** level (中一 to 中四) → 单元 → text, mirroring the syllabus so a student can find "what we did this week" in two taps.
- **What a chapter page offers (decided 10 October 2026):** oral exam preparation first. Each chapter page centres on an Edcafe chatbot that discusses the chapter's main topic with the student, in preparation for the 口试. Supporting material on the page (topic prompts, useful expressions, a link into Vocab Summit for the chapter's words) is original and stays light. Reading and writing zones are out of scope for now.
- **How it differs from Vocab Summit:** Vocab Summit is a vocabulary game with persistent progress. This site is a broader, lighter revision hub with no accounts and no stored data.
- **Starting point:** pilot one unit end to end, then turn it into a template for the rest. Pilot (decided 10 October 2026): 中一 单元一《新同学 新鲜事》 for all four streams, G1, G2, G3 and HCL. The earlier G3 中三 单元五《学无止境》 draft is kept as the next unit.

## Vision update: an interactive 华文学习话题校本 (decided 10 October 2026)

The site replaces the printed topical 校本 the department used to hand out. Topics, not levels or streams, are the unit, because one topic can come up in several exam components.

**Each topic page holds (per stream door):**

- 话题导读: original context written by the department, plus key words linked to 词山学海.
- 口试会话: scenes, question sets, useful expressions, and an Edcafe practice bot.
- 实用文 by stream: G1 replies to a social media post, G2 and G3 write informal or formal emails, HCL writes a forum post. Each has an Edcafe auto-graded assignment.
- 作文: 记叙文, 议论文 and 说明文 prompts with a 写作思路 scaffold, plus Edcafe outline feedback.
- 范文: original model essays with 写作亮点 annotations.
- 资源库: links to 早报校园, 8视界, the Singapore Mandarin Database, 词山学海 and the department's own games.

**Edcafe is MOE-whitelisted** and is used for auto-graded assignments as well as the oral bot. Students submit work there; the site itself still stores nothing.

**Demo for the team:** the clickable demo builds out 新同学 新鲜事 (four doors) and 学无止境 (bridge, three doors). All content in it is 待审.

**To confirm:** the functional writing type and composition genres each stream sits for, and the formats and tone points listed for each type.

## Navigation model (revised 10 October 2026)

The site is a game-like map of topics, framed in the introduction by 《大学》：修身、齐家、治国、平天下. It is the whole secondary CL self-directed learning universe, with a direct link to 词山学海 in the top menu.

- **Regions, not levels.** From the centre outward: 个人 (修身), 家庭 (齐家), 校园, 社区, 国家 (治国), 世界 (平天下). Each topic has one home region.
- **Region sort revised from the textbook texts** (see 20261010_课文与话题对照表.md, rough start for the team to refine): 个人 · 心态品格: 习惯的力量, 面对挑战, 积极的态度, 游戏与生活, 适应的力量 (also listed in 世界). 个人 · 成长追梦: 成长的足迹, 发现自我, 勇于追梦／逐梦, 人生不留白, 成功的要素. 个人 · 学习生活: 健康生活, 人生学堂, 学无止境, 时间的礼物. 家庭: 团圆, 爱的表达, 发现真善美. 校园: 新同学 新鲜事, 有你做伴, 沟通你我他, 依依离别情. 社区: 小人物 大贡献, 关爱动物, 走进社区, 心手相连, 关爱与包容. 国家: 相约狮城, 心系家园, 情牵小红点, 南洋华彩, 文化调色板. 世界: 与世界相连, 绿色生活, 创新与改变, 文学世界, 平衡之道, 知己知彼.
- **Home region plus linked regions.** Each topic has one home region and can also be listed in other regions (the `also` field). 适应的力量 is the first: its texts are about adaptation in nature, but students discuss and write about it as personal adaptability, so it lives in 个人 and is also listed in 世界.
- **Text map:** the four 2021 digital textbook files are in this project for internal planning only. They set the themes and direction; no text is reproduced on the site. 20261010_课文与话题对照表.md lists titles per topic, the cross-topic text links, and each topic's lead genre.
- **Unique themes, not stream units.** 37 topics across the 92 stream units. Each topic card lists its level, unit and streams.
- **Each topic has a door per stream that studies it,** always in the order G1, G2, G3, HCL: left gives more support, right more stretch. All doors are open, in line with Full SBB. 学无止境 is one topic with three doors (G2 中四 单元四, G3 and HCL 中三 单元五); the earlier bridge idea is dropped.
- **我的课本 picker.** The student picks a stream and level once (local storage only) and the map highlights the regions and topics for that year.
- **课本目录.** A second view lists one stream's topics in textbook unit order, for students finding "this week's" unit and for teachers planning.
- **Merges confirmed from the texts:** 健康生活 and 我的健康我做主 share 《放下自卑》 (G1, G2), so they are one topic. 勇于追梦 (G1) and 勇于逐梦 (G3) use different texts on one theme and are merged into one topic with two doors.
- **Cross-topic links:** some texts appear under two topics (e.g. 《狼鹿效应》, 《林黛玉进贾府》, 《坦然走过乞丐》). HCL 进阶 texts in 中一 to 中三 are often G3 中四 texts, which gives a ready stretch path.
- **Build:** the first static build (data in JSON, Claude Code handover files) was packaged on 10 October 2026 for a test push to GitHub Pages with noindex set.
- **Visual approach: open.** Prototype with simple shapes first; candidates are a pre-rendered diorama (Blender or CC0 asset packs) with hotspots, or a 2D walkable map.

## Non-negotiables

These rules hold for every page, file and chatbot. If a task seems to need breaking one, stop and ask me first.

**Copyright (CPDD textbook material)**

1. Never reproduce CPDD textbook passages, in whole or in part, on the site, in its data files, or in a chatbot's instructions or knowledge base.
2. Textbook texts may be referred to by title and unit only (e.g. 单元五 核心《学然后知不足》).
3. Every published sentence (definitions, example sentences, cloze items, practice passages, model answers) is original writing by me or the department.
4. Practice passages are newly written on the unit's theme and skill. They must not paraphrase a textbook text closely or follow its plot.
5. This follows the rule already in Vocab Summit: textbook example sentences were removed from all published files, and would only return with written CPDD permission plus a login layer.
6. Open question: whether chapter-keyed word lists (the selection itself comes from the textbook) need CPDD clearance for a public site. Check before launch.

**Privacy**

1. No sign-in, no accounts, no names or class codes collected.
2. No analytics, cookies or tracking scripts.
3. Any "progress" stays in the visitor's own browser (local storage), can be cleared, and never leaves the device.
4. Third-party embeds (Edcafe, video) sit outside this promise. Each one carries a one-line notice and is never the only way to do an activity.

**Hosting and ownership**

1. Hosted as a static site (no backend), repo under the BVSS MTL CL Unit GitHub account (btvssclunit) so it outlives any one teacher.
2. Credited as produced by the BVSS MTL CL Unit, led by HOD/MTL Mdm Chun Kai Xin.

## Landscape

A web check on 10 October 2026 found nothing that is secondary-level, chapter-keyed, free and login-free. The check was limited: tuition portals and teacher-made sites behind logins or on social media would not show up.

| Product | Levels | Chapter-aligned | Access |
| --- | --- | --- | --- |
| [学乐网 Xue Le Wang](https://www.kalodu.com/products/xue-le-wang-%e5%ad%a6%e4%b9%90%e7%bd%91) (Marshall Cavendish Education) | P1 to P6 | Yes, to 欢乐伙伴 | SGD 36 per grade, 12-month subscription on MCEduHub |
| [eChinese 《易·华文》](https://www.ezhishi.com/eChinese_Highlights.html) | P1 to P6 | Yes, to 欢乐伙伴 | School and parent subscription |
| [MOE iwant2study CL vocabulary game](https://iwant2study.moe.edu.sg/sg.iwant2study.org/ospsg/index.php/interactive-resources/mother-tongue-languages/chinese/854-vocabularybuilding-sec-1to4) | Sec 1 to 4 | No units shown | Free, CC BY-SA 4.0 Singapore |
| [Xuemi](https://mwm.ai/apps/xuemi/6608983220) (School of Science and Technology) | Sec 1 to 4 | Not stated | Free iPhone app |
| Tuition centres, e.g. [Superstar Teacher](https://www.superstarteacher.com.sg/chinese-online-tuition) | Secondary | Not stated | Paid subscription |

**What to borrow from 学乐网:** its activity zones (sing-along, pinyin, listen-and-speak, read-and-write) and per-chapter organisation are a good model of the experience. Keep our names, structure and visual identity clearly our own.

**How 学乐网 is structured** (from kalodu.com product page screenshots, 10 October 2026)

- Home screen per grade: a grid of 课 buttons (第1课 to 第9 or 10课) plus a 教学资源馆 for teachers.
- Each 课 opens a single illustrated scene with two entry points: 听说剧场 on one side and a 读写乐园 menu on the other.
- 读写乐园 sub-activities: 读一读, 我爱阅读, 生字魔法屋, 生词游乐场, 快乐探险营, 复习总动员.
- Site-wide zones beyond the lessons: 唱游世界 (sing-along with a pinyin on/off toggle) and 拼音城堡 (narrated pinyin games).
- Activity patterns seen: matching characters to pinyin (Ferris wheel), sorting characters into pinyin baskets, picture-prompted speaking with record and playback against a model answer, a 题数 counter and 积分 score, and a 活动说明 pop-up before each activity.
- Takeaways for us: one clear scene per chapter with few entry points, a short instructions panel before each activity, and record-and-compare for oral practice (this can run fully in the browser with no upload, which fits our privacy rules). Leave behind the primary-level elements: songs and pinyin drills.

**Reuse caution:** the iwant2study games are share-alike. Reusing them would require attribution and the same licence on the derived work.

## Syllabus map

The syllabus covers 23 units per stream (6 per level for 中一 to 中三, 5 for 中四). Themes are shared across streams in 中一 and 中二, then diverge. The full map of texts per unit is already in the Vocab Summit data files (data/g1.json to hcl.json, generated from the 词语总表 Excel masters) and should be reused, not retyped.

**Components per unit**

| Stream | Components per unit | Words in Vocab Summit |
| --- | --- | --- |
| G1 基础华文 | 生活空间, 核心, 文化站 | 426 |
| G2 华文 | 生活空间, 核心, 巩固, 文化站 | 814 |
| G3 华文 | 生活空间, 核心, 巩固, 文化站 | 1,069 |
| HCL 高级华文 | 生活空间, 核心, 巩固, 进阶 (not in 中四), 文化站 | 1,432 |

**Shared themes, 中一 and 中二 (all streams)**

- 中一: 新同学 新鲜事 · 团圆 · 相约狮城 · 习惯的力量 · 创新与改变 · 小人物 大贡献
- 中二: 爱的表达 · 关爱动物 · 绿色生活 · 成长的足迹 · 心系家园 · 与世界相连

**Themes by stream, 中三 and 中四**

| Unit | G1 | G2 | G3 | HCL |
| --- | --- | --- | --- | --- |
| 中三 单元一 | 有你做伴 | 有你做伴 | 有你做伴 | 有你做伴 |
| 中三 单元二 | 我的健康我做主 | 健康生活 | 健康生活 | 健康生活 |
| 中三 单元三 | 走进社区 | 走进社区 | 走进社区 | 走进社区 |
| 中三 单元四 | 沟通你我他 | 沟通你我他 | 沟通你我他 | 沟通你我他 |
| 中三 单元五 | 人生学堂 | 人生学堂 | 学无止境 | 学无止境 |
| 中三 单元六 | 发现真善美 | 发现真善美 | 发现真善美 | 发现真善美 |
| 中四 单元一 | 发现自我 | 游戏与生活 | 心手相连 | 适应的力量 |
| 中四 单元二 | 面对挑战 | 人生不留白 | 文学世界 | 积极的态度 |
| 中四 单元三 | 情牵小红点 | 南洋华彩 | 平衡之道 | 成功的要素 |
| 中四 单元四 | 文化调色板 | 学无止境 | 知己知彼 | 依依离别情 |
| 中四 单元五 | 勇于追梦 | 关爱与包容 | 勇于逐梦 | 时间的礼物 |

**What this means for the site**

- Navigation should be stream first (G1, G2, G3, HCL), then level and unit. A theme such as 学无止境 is 中三 单元五 for G3 and HCL but 中四 单元四 for G2, with largely the same texts.
- Texts are often shared across streams (e.g. 《远亲不如近邻》 is 核心 for G2 and G3, and also appears in HCL). Write activities once per text and link them from every stream that uses it.
- Data check needed: in g3.json, 中三 单元四 生活空间 is titled 《你在学什么》, the same as 单元五. G2 and HCL have 《成为演说高手》 there, so this is likely a typo in the G3 master.

## Reuse from Vocab Summit

Reuse Vocab Summit's content map, design system and hard-won rules, but not its data layer: this site has no Firebase, no accounts and no stored progress. The repo's CLAUDE.md is the full engineering log; the points below are what carries over.

**Carry over**

| Area | What to reuse |
| --- | --- |
| Stack | Static site, vanilla JS in IIFEs, no build step, no framework, GitHub Pages. Test through a local HTTP server, since fetch fails under file://. |
| Content data | The level → unit → component → text structure and stable word IDs (stream·年级·单元·板块·词语). Link to Vocab Summit for vocabulary rather than duplicating it. |
| Content pipeline | Excel masters → Python generator → JSON. New content follows the same pattern so I can edit in Excel. |
| Visual identity | One BVSS identity across streams: the cs.css palette (晴空, 旭日, 青山, 碧海, gold-ink #8A5A0F for small gold text), the three-peak skyline with the sun on the right. |
| Devices | Landscape first (keyboarded iPads, Chromebooks), portrait phones as a working fallback, never lock orientation. Breakpoint at 900px. Go easy on backdrop-filter: old iPads are what many G1 and G2 students use. |
| Learning supports | Pinyin and English glosses on interface text only, toggled by a CSS class (never re-render). Question stems, passages and options stay Chinese only. Pinyin is allowed on sentences via ruby. No glosses at all for HCL. |
| Text-to-speech | Chinese only, never feed pinyin to the engine, score voices and reject eSpeak, wait 50 ms after cancel(), prime iOS on the first tap, and never read out the answer. Reuse js/tts.js and its polyphone fixes. |
| Typography in code | Use 「」 for quotation marks in UI strings and curly quotes in content data. No dashes in prose. |

**Leave behind**

- Firebase auth, Firestore, 进度码, leaderboards, the teacher dashboard and the coin economy. They all depend on stored data.
- Anything that needs a nickname or identity. Local-storage progress is the ceiling.

**Lessons that apply here**

- Function before decoration: get the behaviour solid before polishing.
- Toggles that re-render can reshuffle options and leak answers. Flip a class instead.
- A cloze item has exactly one blank and the target word appears nowhere else in the sentence.

## Edcafe chatbots

Edcafe chatbots are the core of each chapter page (decided 10 October 2026): an oral discussion partner on the chapter's main topic, in preparation for the 口试. They are the one part of the site that stores what a student types, so they need clear framing.

**Tension with Privacy rule 4, to resolve:** that rule says a third-party embed is never the only way to do an activity. With the chatbot now the main activity, each page needs a non-chatbot route for the same practice, for example the same discussion questions as static prompt cards with in-browser record and playback (no upload).

**What Edcafe does** ([Edcafe guide](https://www.edcafe.ai/blog/how-to-build-an-ai-chatbot-no-code), checked 10 October 2026)

- Bots are shared by QR code or an embed code for a website. Students can chat without an account.
- Each bot has a Knowledge tab (uploaded document, web page or text note) and can be set to use only those sources.
- **The creator can view and export student chat histories.** Edcafe states it does not collect personal student data from chatbot chats.

**Where a bot is worth it**

- Oral practice: a 口试 partner that asks follow-up questions on the unit theme.
- Writing coach: gives hints on a 作文 outline for the unit's genre without writing it for the student.
- 论证 or reasoning practice for G3 and HCL units where argument is the skill.
- Not for vocabulary drills: Vocab Summit already does that better.

**Guardrails for every bot**

1. Knowledge base holds only my original material (unit summary in my words, skill rubrics, model answers I wrote). Never textbook text, never scans.
2. Restricted to its knowledge sources plus general language knowledge, with a system prompt that keeps it to the unit and to Chinese.
3. Coaches rather than answers: it asks questions and gives hints; it does not write compositions or give exam answers outright.
4. Pitched to the stream: simpler language and optional English support for G1 and G2, Chinese only for HCL.

**Notice on the page (draft wording)**

> This chatbot is provided by Edcafe AI, a third-party service. Do not type your name, class or personal details. Your messages may be seen by the BVSS CL Unit to improve the bot.

This notice keeps the site's "no tracking" promise honest: the site itself tracks nothing, and the chatbot is clearly labelled as the exception.

## How to work with me

I am the final vetter of every student-facing word, and I build in stages with handover files between sessions.

**Writing and documents**

- No em dashes in prose or documents. Use colons or commas.
- File names: YYYYMMDD\_descriptor (e.g. 20261010\_单元五\_题库\_待审.md).
- Byline on documents: "Updated \[Month DD, YYYY\] by HOD/MTL Mdm Chun Kai Xin".
- Student-facing Chinese uses Singapore curriculum terms (生活空间, 核心, 巩固, 进阶, 文化站, 单元) and Simplified Chinese.

**Content work**

1. Draft question banks as markdown files marked 待审 for me to vet. Nothing goes into the site until I have approved it.
2. Use the SEAB CEA frameworks when writing comprehension items: tag each item with its 阅读层次 level and keep a sensible spread of difficulty.
3. Test reasoning, not recall. Keep options similar in length so the answer is not given away by its length.
4. Pitch to the stream. G1 and G2 learners are often weak readers and need bilingual instructions and a pinyin toggle.

**Build work**

1. Each session's output is the baseline for the next. Never roll back to an earlier version.
2. Keep a CLAUDE.md engineering log in the repo with decisions, rules and known pitfalls, like Vocab Summit's.
3. End each build session with a short handover file: what changed, what is outstanding, what to test.
4. Ask before making changes that break a rule in Non-negotiables or redesign existing visual identity.

## Open questions and first steps

The next step is to settle the open questions below, then build one pilot unit end to end.

**Open questions**

- [x] Site name and URL: decided 10 October 2026, 谈天说地 · Topic Atlas, at btvssclunit.github.io/TopicAtlas (repo btvssclunit/TopicAtlas). A sibling of 词山学海 · Vocab Summit.
- [ ] Do chapter-keyed word lists or text titles on a public site need CPDD clearance? Who at CPDD to ask?
- [x] Which activity types per chapter: decided 10 October 2026, oral discussion via Edcafe chatbot on the chapter's main topic, for exam preparation.
- [x] Pilot stream and unit: decided 10 October 2026, 中一 单元一《新同学 新鲜事》 for all four streams (replaces the earlier choice of G3 中三 单元五, which becomes the next unit).
- [ ] Non-chatbot fallback for the oral activity, to satisfy Privacy rule 4.
- [x] Which part of the 口试 each bot rehearses: decided 10 October 2026, 会话 only, for all four streams. HCL students practise 会话 too, because they sit the G3 CL exam at the end of Sec 3. The HCL-format 口头报告 plus 讨论 is on hold because it needs video stimuli and there are no copyright-free videos yet.
- [ ] Whether the bot is text chat or voice.
- [ ] Source of copyright-free video stimuli for HCL 口头报告, if HCL is added later.
- [ ] Who in the CL Unit co-writes and vets content as it scales to 23 units across four streams?
- [x] Fix the typo in g3.json: 中三 单元四 生活空间 is now 《成为演说高手》 (fixed in VocabSummit on 10 October 2026, commit 1c0a9ec).

**Suggested first steps**

1. Agree the site structure and a chapter page template in a short spec.
2. Write the pilot unit's original content as a 待审 markdown file for vetting.
3. Build the pilot as a static page on GitHub Pages, reusing Vocab Summit's design tokens and TTS module.
4. Set up one Edcafe bot for the pilot with the guardrails and notice above.
5. Test with my own class, then iterate before templating the other units.

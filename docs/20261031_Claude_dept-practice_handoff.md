# Department practice material on topic pages

Updated October 31, 2026 by HOD/MTL Mdm Chun Kai Xin

## What changed

The owner reviewed `docs/content/20261030_资源目录与教学摘编_待审.md` and asked for it to be implemented, and for department-generated teaching material to start appearing on Topic Atlas as online learning resources, provided nothing infringes CPDD textbook copyright.

1. **Interface labels** from the draft were already live (SLS 登录, 公开资源, 需订阅, 可能需订阅, 外部资源, homepage lead, teacher note, oral hint). No change needed.
2. **Methods from the draft** (团圆 G2 情境作文, 相约狮城 G2/G3 私人电邮) are published as `guide` items. The two HCL digests (口试整理与互评, 材料作文审题) are superseded by the fuller teacher-authored versions below, which the owner wrote herself; the digests are therefore not duplicated.
3. **Department practice material**: `data/dept-practice.json` now holds 79 items taken from the department's own 2026 teaching folder: 32 实用文 tasks (私人电邮, 公务电邮) with writing frames and teacher 范文, 23 作文 tasks (情境作文, 完成文章, 议论文, 说明类议论文, 记叙文) with planning steps, rubrics and teacher 范文, 5 口试 question sets with answer frames, and 19 method guides (公务电邮讲义, 私人电邮回复要点, 写作详略, 材料作文六型四步法, 论说文与演讲词六段结构, 演讲稿格式, 口试冲刺卡, 互评练习卡, 口头报告自检, 早报话题笔记). They cover 27 of the 37 topics across G2, G3 and HCL doors.
4. **Rendering** (`js/app.js`): items appear under a 华文组练习与方法 heading inside the matching 实用文, 作文 or 口试会话 tab of their topic and stream door, after any authored pilot content. A tab now counts as present if it has authored content or department items, so previously resource-only topics gain real learning tabs; resource-only topics without items are unchanged. Topic landing tab is the first non-vocabulary tab. Model texts use the existing `[[span|n]]` annotation markup; the number may now have two digits.
5. **Styles** (`css/style.css`): `.task.dept`, `.stimulus`, `.dept-head`, `.dept-src`, light and dark.

## What was excluded and how

- **Textbook text.** A hashed fingerprint of the four 2021 electronic textbook files (12-character shingles, hashes only, kept outside the repo in the session scratchpad) was built once. Every candidate file was screened before extraction, and every published item is screened again by `tools/20261031_validate_dept_practice.py` when the fingerprint is present on this machine. Files such as 课文, 课文拼音, 口试篇章, 文化站 slides and 词语笔记 on textbook passages scored 70 to 97 percent overlap and were excluded. Published items show zero overlap runs of 20 characters or more.
- **Examination material.** SEAB and O-Level past-year material (材料作文 excerpts 2016 to 2025, Q4 title lists, 湿巴刹 2021 oral example, 2023/2018 discussion topics), other-school papers (TKGS 预考), the school's own WA/EOY/Prelim papers and the 2024 specimen-paper email task were dropped. Teacher method text around them was kept.
- **Student work and data**: student scripts, 学生范文, individual feedback files, pieces credited to named students, class codes, name lists, marks. Two unsigned 范文 that read like student writing were left out (露营 story, 心里的一根刺); two unsigned polished 范文 were kept and flagged (2E 单元四 脸上的胎记, 单元五 story was removed).
- **Personal data**: all fictional e-mail addresses, SLS links, Quizlet/Kahoot links, teacher initials, class codes.
- One brainstorm example mentioning drugs and vaping was removed from a G2 完成文章 planning list.

Full per-item provenance (source file names under the CL folder, stated versus inferred topic mapping, and every edit made) is in `docs/20261031_dept-practice_provenance.md`, together with the 63 reviewed-and-skipped files and reasons.

## Items the owner should look at first

- Topic mapping marked *inferred* (39 of 79), especially 妈妈的生日礼物 (G2 S3, mapped to 健康生活 and 爱的表达 from the 单元二 folder), 完成文章 地铁上匆忙的青少年 (相约狮城) and 时光机游未来市 (创新与改变).
- Oral question banks for G3 Sec 1 and Sec 2 (录像会话 Q1 to Q3 sets). They are the department's training documents, not textbook text, but some questions follow examination formats. Confirm they are teacher-set.
- The 养宠物 范文 lost single characters in the first text dump (pinyin fields). The text now published was re-extracted from the original document and matches it.
- Teacher 范文 are labelled 教师示范稿 and carry the source line 华文组 YYYY 年 level stream kind.

## Not covered yet

- G1 doors: the G1 folder holds assessment items, name lists and one annotated textbook page, so no G1 practice was imported. G3 Sec 4 and HCL Sec 1 to 3 had no extractable teacher practice beyond excluded exam notes; PDF-only files were not text-extracted.
- Vocabulary 词语笔记 files are tied to textbook passages and stay out; the hub vocabulary bank links remain the vocabulary source.
- The two 20261029 drafts (中一单元一 教师范文与笔记, 中二单元二 关爱动物) still await the owner's vetting; their [新拟] sentences are not published.

## Validation

- `python3 tools/20261031_validate_dept_practice.py`: structure, topic and door mapping, hygiene rules (no e-mail, URL, blanks, class codes, pinyin, exam or page references), textbook screen. PASS, 79 items.
- `python3 tools/20261030_validate_resources.py`: PASS, unchanged catalogue.
- Browser (Chromium, local server): all 37 topics, 92 doors, 288 tab views scripted; 132 department cards rendered; no empty panels, no raw markup, no console errors. Phone width 375 px: no horizontal overflow. Dark mode checked. Keyboard tab navigation unchanged.
- `git diff --check` clean. No framework, build step, dependency or tracking added.

## Local preview

`python3 -m http.server 8000` from the repo root, then open http://localhost:8000. A `.claude/launch.json` entry named `topicatlas` exists locally for the desktop app preview (ignored by git).

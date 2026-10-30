# Real resources across all topics

Updated October 30, 2026 by HOD/MTL Mdm Chun Kai Xin

## Delivered behavior

All 37 topics now open from the map and textbook catalogue. Each stream door has a real unit resource from the BVSS CL hub, relevant media links and a vocabulary selection linked to the hub's vocabulary bank or local glossary. Resource-only topics show vocabulary and resources. The two existing authored pilots retain their actual static exercises, with seven populated tabs including vocabulary. Empty Edcafe panels and TODO resource cards no longer render.

`data/content/` and `data/topics.json` remain unchanged. New external-link metadata lives in `data/topic-resources.json`. This keeps original lesson content separate from dated external resources and avoids marking 35 new topics as fully authored lessons.

## Sources reviewed

- Owner's 2026 external-drive folder: inventoried 5,268 ordinary files after hidden and temporary lock-file exclusions. Chinese stream folders contain 1,990 files. Screened 1,421 teaching-material candidates through metadata and OOXML hyperlink extraction, with selected reading, friendship, writing and oral-practice notes read in detail. Administrative, finance, textbook, CPDD, SEAB, other-school examination and student-script material is not imported. Complete private inventory/extraction files stay in `/private/tmp/topicatlas-resource-audit/`, outside the repository.
- [BVSS CL hub](https://sites.google.com/moe.edu.sg/bvss-cl-hub/): all four stream pages, all four levels expanded, 92 integrated unit links captured from their actual anchors. These are external SLS links, not copied textbook materials. They require an SLS account. Classroom and examination lesson bodies behind SLS were not downloaded.
- [Vocabulary bank](https://sites.google.com/moe.edu.sg/bvss-cl-hub/词语锦囊-vocab-bank): read public workbook previews for idioms and character vocabulary. Topic selections use existing terms only, with no copied definitions, pinyin or example sentences.
- [Local glossary](https://sites.google.com/moe.edu.sg/bvss-cl-hub/本地常用词汇-local-vocab-glossary): read the index and public workbook preview. Relevant terms such as hawker centres, community institutions, libraries and school programmes are linked back to the original source. Source definitions and romanization were not imported.
- [8world SO YOUNG](https://soyoung.8world.com/topic/news-in-class): verified 84 direct learning-page targets, selecting 77 relevant resources for the topic catalogue. Publisher headlines, stated audience and publication dates are retained; full articles, vocabulary examples, questions and answers are not reproduced.
- ZBSchools: six direct articles recovered from BVSS reading/friendship notes and verified in the browser. Four were publicly readable; two displayed subscription gates. Labels record this access distinction.
- Zaobao: five topic-specific article targets verified through primary search/page results, with browser fallback for pages the web reader could not fetch. Labeled as possibly requiring subscription. These include lifelong learning/graduation, family traditions, hawker culture, study/interest balance and youth heritage projects.

The catalogue has 88 media resources in total: 77 from 8world, six from ZBSchools and five from Zaobao. Equivalent 普华 / 高华快华 lesson editions are grouped; the current door selects the matching edition where available. G1 can use the simpler published edition as an extension; publisher audience labels remain visible and are not relabeled as G1 material.

## Important implementation details

- Preserve exact SLS URLs. G3 Sec 4 Unit 3 is a `module/view/...` target, unlike the other 91 `lesson/view/.../cover` targets. Exhaustive comparison against the original hub anchors caught and corrected this distinction.
- Folder placement alone is not authoritative: some G1 material is nested under folders named 2G3, and some health material is stored in another unit's folder. The site mapping uses topic/door metadata and the hub's verified unit titles.
- Tabs are computed from real content and resources, and invalid selected tabs reset on topic changes. Arrow keys, Home and End navigate the tab list with focus and panel labeling kept in sync.
- Only the two authored pilots fetch `data/content/*.json`. Resource-only topics do not create failing fetches for nonexistent lesson files.
- Resource titles, audience labels and URLs are escaped. Links accept HTTPS only and open externally with `noopener noreferrer`. No third-party article/video embeds, sign-in flow, tracking, runtime dependency or build step was added.
- The word bank uses external source terms with source attribution. HCL keeps English interface hints hidden.
- Old placeholder arrays remain in the untouched authored JSON files for provenance; the new renderer does not expose them.

## Content review boundary

The repository rule says not to write or edit student-facing Chinese in `data/content/`, and requires owner vetting before publication. Four reusable teaching-method extracts are therefore prepared only in `docs/content/20261030_资源目录与教学摘编_待审.md`, alongside new interface labels and the full 37-topic vocabulary mapping. They cover narrative organization, recommendation emails, oral preparation/peer feedback and material-based composition planning. The source documents mix original teacher guidance with exam material; exam text, video transcripts, copied reading passages, answer keys and private information were excluded.

The owner should review those extracts and confirm the underlying teaching-material provenance before any later lesson-content import. This PR supplies linked resources now without publishing those new lesson drafts.

## Validation

- `python3 tools/20261030_validate_resources.py`: validates 37-topic coverage, 92 distinct SLS targets, HTTPS publisher links, resource IDs, dates, vocabulary source IDs and metadata that excludes exercise snippets.
- Browser: all 37 topics, all 92 stream/unit routes and 219 populated tab views. Each rendered SLS target compared to the original hub's anchor URL, not a reconstructed expected value. No empty tabs or placeholder panels. Resource-only topics expose exactly vocabulary and resources.
- Mobile resource page and keyboard tab navigation checked; no horizontal overflow. Source access badges and source audience metadata visually inspected.
- JavaScript syntax and `git diff --check` pass. The two authored content JSON files and topic records are unchanged.

PR #2 on `codex/viewport-atlas-facade` remains the review vehicle. No merge or main push is performed. Original student content remains subject to its existing vetting status; this resource integration does not assert that it has been approved for launch.

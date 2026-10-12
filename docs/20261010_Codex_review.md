# Codex review: Topic Atlas

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

## Assessment

The demo substantially matches the revised Navigation model: six regions, 37 unique topics, 92 stream doors, two active topics, six tabs and a local-only textbook picker. JSON checks found 23 distinct level/unit pairs in each stream, valid oral/func/snote entries for every active door, and the expected home-region totals (14, 3, 4, 5, 5, 6). The listed home regions/subregions match the brief; 适应的力量 is correctly linked to 世界. Stream presentation is ordered G1, G2, G3, HCL. No student content was changed.

The earlier chapter-first, oral-only and stream-first passages in `docs/Project_Brief.md` are superseded by its explicit Vision update and revised Navigation model. Treat those as historical, not build defects. Edcafe and resource deep links remain disclosed placeholders. Pinyin, icons and PWA are outstanding, as recorded in the handover.

## Ranked fixes

1. **Map accessibility (high):** `js/app.js:72` puts interactive SVG groups inside `role="img"`. On the Mac in-app browser the accessibility tree exposes the overall map label but none of the six region buttons. Keep art decorative and place native, named buttons over it, or use an accessible SVG grouping and verify VoiceOver. Enter activation itself works (`js/app.js:223`).
2. **Focus and tab semantics (high):** `js/app.js:210` rerenders the app for picker, door and tab changes, destroying the focused control. Phone browser checks confirmed focus becomes BODY after a tab activation. Restore focus by stable control identity, focus the destination heading on navigation, and add tab IDs, aria-controls/labelledby and arrow-key navigation (`js/app.js:188`, `js/app.js:194`).
3. **Contrast (medium):** the small orange demo badge is 2.84:1 on its wash (`css/style.css:86`); orange G3 text on white is 3.33:1 (`css/style.css:138`). Both fail 4.5:1 for normal text. Map counts are 3.86:1 light and 4.47:1 dark against island fill (`css/style.css:110`). Use stronger text tokens or solid label panels. Disabled-card opacity further reduces legibility (`css/style.css:132`), although inactive controls have a WCAG exception.
4. **Phone usability (medium):** map text scales with the 1000-unit SVG (`css/style.css:103`), making peripheral names roughly 11px and counts roughly 7px at 375px. Add a larger native-button companion list. Four stream doors wrap into two rows (`css/style.css:147`), weakening the left-to-right support/stretch cue. No document overflow was observed on the checked home, campus and oral views at 375px; this is not a full six-tab matrix.
5. **Toggle requirement (medium):** the English-hints handler invokes render (`js/app.js:221`), although the brief says toggles should flip a class. The current static content does not shuffle, but class-only updates would preserve focus and future embeds.
6. **Visual identity (low):** the map sun sits at the centre (`js/app.js:74`), rather than the sibling identity's right side. Every region currently reuses peaks instead of a recognisable landmark (`js/app.js:60`). The three mockups address this without changing production.
7. **Async error race (low):** topic fetch success guards the current route, but the catch does not (`js/app.js:177`). A failed request after leaving a topic can overwrite the new page. Guard both callbacks.

## Verification limits

Reviewed source, original handoff, engineering rules, brief and handover; checked all 37 topic records and 92 doors. Used the existing local server on port 8000, confirmed its TopicAtlas page, checked phone home/campus/oral layouts and keyboard map entry, and inspected Mac accessibility output. Contrast figures are computed sRGB ratios. Full production 1280/1024 layout, dark-mode interaction matrix, actual VoiceOver and blocked-storage runtime checks remain outstanding; storage access is guarded in source (`js/app.js:21`, `js/app.js:22`). Graphics prototypes are checked separately. No production fixes or content vetting are claimed.

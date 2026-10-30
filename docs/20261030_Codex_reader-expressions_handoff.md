# Foreground reader expressions

Updated October 30, 2026 by HOD/MTL Mdm Chun Kai Xin

Owner approved the viewport layout and revised artwork, then requested different expressions for the two foreground readers because their matching smiles felt unnatural.

Built-in imagegen edits the approved v39 map. The boy should look quietly absorbed in his book with a neutral closed mouth. The girl should have a small relaxed closed-lip smile. Both look down at their own pages. The school, HDB housing, all other people, routes and watercolor composition remain the approved reference.

Exact prompt:

> Precise localized expression edit. This is an approved 1536x1024 watercolor atlas. Change ONLY the facial expressions of the TWO seated foreground students reading books at bottom-left (boy face near x210 y804, girl face near x337 y824). Boy: quietly absorbed in his blue book, relaxed eyebrows, eyes open looking down at the page, neutral CLOSED mouth, no smile or teeth. Girl: soft small asymmetric CLOSED-lip smile, relaxed eyes open looking down at her red book, no teeth, no wide grin. Their expressions must be noticeably different and natural for silent individual reading. Preserve head size and angle, hair, uniforms, skin tones, hands, books, bodies, rocks and planting exactly. Preserve EVERYTHING else throughout the map, including family, school students' faces/skin tones, school facade/name/crest, HDB beside hawker, playground, paths, landmarks, watercolor paper, color and composition. Do not redraw other people. No change except the two tiny faces. Same dimensions.


Saved production asset: `assets/atlas/watercolor-map-v40.webp`. The v39 asset remains preserved. `js/app.js` now points at v40. Visual inspection confirms different reader expressions and the same school/HDB composition. Image dimensions remain 1536x1024. JavaScript syntax and whitespace checks pass. Updated desktop and phone review screenshots accompany the existing PR #2.

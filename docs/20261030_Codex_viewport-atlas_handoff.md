# Viewport watercolor atlas and facade corrections

Updated October 30, 2026 by HOD/MTL Mdm Chun Kai Xin

## Requested behavior

The landing page is a single screen with watercolor paper extending to every edge, following the fixed sea-map approach in the sibling Vocab Summit checkout. The complete map fits without document scrolling. Topic and catalogue pages keep normal scrolling. Introductory prose, teacher notes and credits are preserved in a native dialog. The textbook picker has its own native dialog, retaining localStorage try/catch protection and live topic highlights.

The school belongs on the lower terrace behind six uniformed students. Its actual facade is guided by the owner's attached open-house photograph: projecting white sign block, crest above school name, blue-green entrance canopy and cream classroom wings with dark open corridor bands. The block beside the hawker centre is an HDB residential block. Readers, family, school and playground characters should have readable gentle faces, with visibly different skin tones among school students.

## Implementation

- Branch: `codex/viewport-atlas-facade`, based on current main after PR #1 merged.
- `css/style.css`: fixed landing viewport, paper grain across the entire surface, softly feathered map edges, compact floating controls and responsive native region buttons. Pale paper and legible ink stay consistent in both theme preferences.
- `js/app.js`: native dialogs preserve existing text, retain picker focus through re-render and return focus on close. Six scene routes and six region buttons remain functional.
- Artwork: `assets/atlas/watercolor-map-v39.webp`, with the prior production WebP preserved. Exact school crest is a separate overlay at its revised sign position.
- No student content, topic data, runtime dependencies, tracking or build step added.
- Vocab Summit reference read from `VocabSummit/repo-clone/css/cs.css`, `.lp-sea` fixed viewport and `body.lp-sea-on` scrolling rule. Its account and tracking behavior is not imported.

## Image generation provenance

Built-in imagegen was used. The existing production map was the edit target; the owner-supplied open-house poster was used only as a building photograph reference. No poster or promotional copy is bundled with the site. The first generated facade edit changed the wrong building and was discarded. The next pass corrected the lower school. A final localized pass adds faces and replaces the upper block with HDB architecture.

Facade prompt constraints: edit only the lower school behind the six uniform students, preserve the upper HDB beside the hawker centre, match the actual projecting white entrance block, crest/name, recessed ground-floor entrance, blue-green canopy and long cream wing with dark open corridors. Preserve the watercolor map, paths, landmarks and scene positions.

Final face/HDB prompt:

> Precise localized edit of this 1536x1024 watercolor atlas. Preserve layout, all paths, landmarks, colors, paper, all poses and counts. Two changes only. 1) Give all foreground and midground people readable delicately inked faces with two eyes, brows, small nose and mouth, friendly natural expressions: two readers bottom-left, four family members left-middle, SIX school students in two groups of three lower-middle, and playground children right-middle. Keep normal small heads, no oversized cartoon eyes. Make school students visibly varied in skin color: light, medium tan and deep brown skin represented across BOTH groups, with natural black hair. White short sleeve shirts and brown trousers or smooth knee-length skirt-like culottes, no belts, no head coverings, keep tied girls' hair. Readers look at books, family looks at one another, school friends look at friends/book, playground kids joyful. Faces should have clear eyes and smiles instead of blank shapes even at this scale. 2) Replace ONLY upper-left building at x490-680 y320-440 immediately LEFT OF HAWKER CENTRE with a recognizable Singapore HDB residential block: pale cream 7-storey slab, stacked open access corridors, regular dark window recesses, green/teal balcony parapets, a few tiny laundry racks, flat roof and open void-deck ground floor. Same footprint/bounds as old upper building. No school sign/crest on HDB. The LOWER school behind six students is already correct, MUST preserve its white projecting sign block, crest, exact BUKIT VIEW / SECONDARY SCHOOL name, blue-green entrance canopy and long open corridor wing. Do not duplicate or move school. Do not alter hawker centre. Maintain subdued watercolor with fine ink and gentle expressive faces.

## Validation

Installed Chrome through existing bundled Playwright, with no npm install. Checked 1280x800, 1920x1080, 1024x768, 375x812, 390x844, 812x375 and 568x320: document width/height match viewport and all six native region buttons remain inside it. Verified six region routes, normal page scrolling after leaving map, intro open/close, picker focus and choices through re-render, persistence after reload, blocked localStorage and dark preference. JavaScript syntax and git diff whitespace checks pass. No page errors. Physical iPad and VoiceOver checks are not claimed.

Screenshots: `20261030_viewport-1280.png`, `20261030_viewport-375.png`.

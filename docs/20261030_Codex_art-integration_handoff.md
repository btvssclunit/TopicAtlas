# Codex handoff: watercolor homepage integration

Updated October 30, 2026 by HOD/MTL Mdm Chun Kai Xin

## Delivered

Owner explicitly requested applying the earlier art updates to the current GitHub repository. Existing PR #1 and branch `graphics/map-directions` are reused. Fetched origin before editing; main is still `a5b24a5` and PR #1 is open. The production homepage now renders v38 artwork instead of the original island SVG.

- Five self-contained production assets in `assets/atlas/`: v38 watercolor map, v32 horizontal title and seal, v33 vertical title, actual owner-requested school crest. Total 589,534 bytes, with the main map 365,896 bytes. All copied unchanged from reviewed display assets. No new generation or reference photo bundled into production.
- School crest/name stays in a separate perspective facade overlay. Vertical Chinese and smaller English title plus seal remain separate from the background. Header also uses the horizontal calligraphy sprite.
- Six scene hit areas preserve the review geometry, and six native region buttons below the painting provide phone-sized, keyboard-accessible navigation. SVG uses group semantics rather than an image role that hides descendants. Native buttons provide a full equivalent route without the artwork.
- Existing `data-reg` handlers open real region pages. Counts and textbook highlights use live topic data. The map display uses owner-reviewed 天下 for internal `shijie`. Data files, student content and existing prose remain unchanged.
- Warm paper surrounds the light homepage; dark theme retains pale artwork with dark controls and a legible header sprite. Scene hover/focus styling is restrained, with no approximate review-guide overlay.
- Navigation moves focus to the destination heading. Existing catalogue, textbook picker, stream doors and lesson tabs remain functional.

## Validation

Local Python server, actual installed Chrome headless through bundled Playwright, no package install or runtime dependency added. JavaScript syntax and `git diff --check` passed.

Browser checks passed for all six scene keyboard routes and six native region buttons; destination focus; textbook marker/list agreement; both active topics through every available stream door and all six tabs; catalogue; dark mode; blocked localStorage. No browser page errors. Home viewport widths 375, 1024 and 1280 show no horizontal document overflow. Phone button spacing was refined after visual review and phone/tablet checks repeated.

Screenshots:

- `docs/20261030_atlas-home-desktop.png`
- `docs/20261030_atlas-home-phone.png`
- `docs/20261030_atlas-home-dark.png`
- `docs/20261030_atlas-integrated-art.png`

## Remaining

PR review and merge deploy the GitHub Pages homepage. No push to main or live deployment performed. All historical studies remain preserved. Seal glyph authenticity and fine anatomy retain their existing review limits; this integration does not claim a new art-detail pass. Actual VoiceOver and physical iPad checks are not claimed. Unrelated untracked content planning files and draft artwork remain untouched.

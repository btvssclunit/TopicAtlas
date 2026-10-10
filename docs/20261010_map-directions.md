# Map directions for owner selection

Updated October 10, 2026 by HOD/MTL Mdm Chun Kai Xin

Open `docs/mockups/20261010_map-directions.html` through the local server. Switch A/B/C, try both themes, toggle the G3 中三 ring and activate region buttons. These are original vector composition studies, not finished commissioned art or a working walking game.

- **A, Diorama archipelago:** raised islands and miniature landmarks, closest to the handoff's diorama idea. Final raster art should target 220 to 350 KB per active theme, including its fallback budget; load only the selected theme. Native HTML buttons sit above the decorative image at percentage coordinates; labels remain text and the mine ring surrounds the button. A has more atmosphere but needs additional art polish and theme variants.
- **B, Illustrated atlas (recommended):** flat shorelines and inked paths, retaining the sea-world identity with clearer landmarks. Final SVG target 30 to 65 KB uncompressed. Decorative SVG uses theme tokens; native buttons provide hotspots, focus and mine rings. This is the simplest accessible and lightweight first release.
- **C, Connected learning park:** a shared landmass with six districts and walking paths. Final SVG target 45 to 85 KB uncompressed. Buttons and mine rings work as in B. A future avatar is possible but is not proposed as part of this build, because it adds controls and movement complexity.

All three retain the central personal region, six region IDs, original region names/mottos/counts, three peaks, right-side sun and sibling palette. Home counts exclude linked topics, matching production. The G3 中三 selection rings personal, family, school and community regions. At phone widths, a larger companion-button list provides readable touch targets. No ambient motion is proposed initially.

Current combined prototype: about 36 KB uncompressed HTML, including all three SVG studies, CSS and JavaScript; no image downloads, external assets or storage. The sizes above are planning targets, not measured final assets. Licensing: all new paths were drawn for this project, so no third-party asset entries are needed. No text is baked into art and no student-facing Chinese was added.

## Owner decision

Choose A, B or C before production changes. This is the explicit gate in `docs/20261010_Codex_graphics_handoff.md`, deliverable 1: “Stop and let the owner pick”. Then build the selected map, address its accessibility and focus hooks, add region vignettes/door treatment, and derive icons and OG artwork from the settled visual direction.

## Prototype verification

Browser checked: B light at 1280×800, B dark at 1024×768, C dark and A light at 375×812. No document-width overflow in these checks. B exposes six named region buttons and the expected four G3 中三 mine rings. C's phone companion buttons measure 44px high; Enter activates the region preview and focus stays on the button. Full-page light/dark B screenshots are saved with the chat deliverables. These are prototype checks, not the remaining production test matrix.

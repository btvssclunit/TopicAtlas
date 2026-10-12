# Codex v29 world settings and composition

Updated October 11, 2026 by HOD/MTL Mdm Chun Kai Xin

## Owner direction

World-level ground treatments must suit the depicted landmark and its photographed setting. Do not reuse Singapore flower beds or insert plants by default. Always compose with 错落有致: unequal gaps, widths, heights and visual weight rather than a uniform display row.

## Changed

Current review: `docs/mockups/20261011_quarter-v29.html`. New reference board: `docs/mockups/20261011_atlas-moodboard-v29.html`. Previous drafts remain preserved.

Four credited Wikimedia photographs are stored in `references-v29/`, with source, photographer, licence and resizing disclosure in `credits.json` and on the board. Existing NParks flora references and the Great Wall winter photograph are retained.

- Petronas: paved esplanade and fountain pool. KLCC Park does have greenery, as Tourism Malaysia documents; omitting the floral frame is a composition choice, not a claim that the site has no plants.
- Angkor Wat: sandstone slabs, causeway balustrade and still moat water, with limited distant vegetation. APSARA documents the causeway and moat.
- Thai temple: white perimeter wall and sparse open lawn from the Wat Phra Kaew exterior photograph. The existing stylised temple remains a general Thai temple motif, not a certified exact depiction of Wat Phra Kaew.
- Borobudur: exposed dark stone terraces and a restrained outer grass wash, informed by the photograph and UNESCO description. No flowers or palms among the stupas.

Built-in imagegen edited the complete world band with the existing master and all four photographs as inputs. Selected master: `masters-v29/world-band.png`, generated output `exec-d9e72476-8744-40a8-a51b-f364637625a4.png`. Repeated flower borders and palm separators are removed. Unequal local ground patches with white gaps replace the continuous footing. The distant Great Wall retains its winding ridge composition.

The standard cutter produced the transparent PNG and WebP in `assets-v29/`. Measured aggregate ground slope: 20.2 degrees, cut dimensions 1522 x 811. Local bases intentionally vary and flatten under architecture; the aggregate fit is a composition guide, not a literal continuous ground line. World anchor is (665,180), scale .55, keeping its tower tips inside the panel and separating Petronas from the MBS roof. Other bands, repaired reading pair and raw xuan paper are retained.

## Validation

Desktop 1280 x 800, tablet 1024 x 768 and phone 375 x 812: no horizontal overflow. Full-page visual check confirms the world landmarks have distinct local settings, clear tower tips and no repeated flower border. Browser warning/error log empty. All four new moodboard images loaded. Screenshots saved for atlas and moodboard; normal viewport restored and owner server reused.

Production integration and owner composition review remain pending. Production files and student content unchanged.

## Exact imagegen prompt

Use case: precise-object-edit. Asset type: world band of a Chinese ink and restrained watercolour atlas. Image 1 is the EDIT TARGET, the current complete world-band painting. Images 2,3,4,5 are ACTUAL PHOTO REFERENCES for settings only: Petronas/KLCC fountain esplanade; Angkor Wat sandstone causeway and moat; Wat Phra Kaew exterior wall with open lawn (setting reference for the existing stylised Thai temple); Borobudur dark stone terraces on open lawn. Preserve fine charcoal linework, pale muted pigments, all four recognisable upright landmark groups, and the distant off-centre Great Wall with rocky ridges and bare scrub. Preserve the Great Wall motif without changes. Keep plain flat PURE WHITE #FFFFFF empty background, 1536x1024 landscape; no paper grain, text, logos, borders, frame, cast shadow or scene background. CHANGE the main ASEAN footing and composition: REMOVE ALL repeated Singapore-style pink/red flower borders, bougainvillea, decorative rock chains and identical palm separators along the entire world row. Petronas stands on a small pale grey paved esplanade with one tiny shallow blue-grey fountain pool or curved water edge, with NO plants beside its base and no flanking palms; keep towers recognisable and upright, skybridge unchanged. Angkor Wat has weathered ochre-grey sandstone slabs, a hint of naga balustrade and a narrow still blue-grey moat mark; only one tiny distant broadleaf silhouette if needed, NO flowers or flanking palms. Thai temple has a sparse light court/white low wall and a small loose open-lawn wash inspired by photo4, NO flower border, NO palms. Borobudur has an exposed stepped dark stone base, one restrained open grass wash at the outer edge, NO vegetation on stone terraces, NO flowers and NO palms. The overall band still descends from upper-left to lower-right about22degrees, but is composed of four separate LOCAL ground patches with unequal widths and broad WHITE GAPS; NO continuous ruler line, plant garland, cloud strip or decorative connecting ribbon. 错落有致 is essential: vary the horizontal intervals, local footing heights and footprint widths; Petronas tall narrow mass near x200; Angkor broader middle-left near x590; a more compact Thai temple near x1010; low wide Borobudur near x1370, with unequal gaps. Slightly raise Angkor and lower Thai court relative to the straight baseline by 15-25px so the visual rhythm isn't mechanical, keeping buildings vertical. Bases fade organically into white with drybrush ink strokes. Make no new landmarks. The repeated Singapore floral treatment must be entirely gone. Keep sparse airy composition and selected style, not photorealism.

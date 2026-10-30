# Mixed school groups

Updated October 30, 2026 by HOD/MTL Mdm Chun Kai Xin

Owner requests keeping existing skin colors while arranging the six students standing in front of school as three boys and three girls, interspersed across two groups of three.

Built-in imagegen edits the approved v41 map. Left group: girl, boy, girl. Right group: boy, girl, boy. Preserve each position's skin tone and the school uniforms, with full-length brown trousers for boys and smooth skirt-like brown culottes just below knees for girls. All other approved scenes and paths remain the reference.

Exact prompt:

> Precise localized edit of approved 1536x1024 watercolor atlas. Change ONLY the SIX standing school students on brick terrace directly in front of school, x530-855 y585-715. Keep exactly TWO separated platonic friend groups of THREE, exactly THREE BOYS and THREE GIRLS total, interspersed. Explicit left-to-right arrangement: LEFT GROUP = GIRL, BOY, GIRL. RIGHT GROUP = BOY, GIRL, BOY. Retain each position's existing skin tone EXACTLY: do not lighten or darken anyone; preserve the range of light, tan and deep brown complexions already visible. Boys: natural short black hair, white short-sleeved school shirt with plain pocket, brown full-length straight trousers, white socks and white school sneakers, no belts. Girls: black hair tied back, white short-sleeved school shirt, smooth brown skirt-like culottes just below knees, white socks and white school sneakers, no belts or head coverings. Keep natural varied friendly faces and relaxed group conversation around books. Same positions, scale, stature and visual footprint, no added people. Ensure visible trousers on all 3 boys and culottes on all 3 girls. Preserve EVERYTHING outside this tiny school-student region unchanged: school actual facade/name/crest, HDB, organic winding background trail, relics, all landmarks, four family members, playground, two seated readers with their distinct neutral boy and small-smile girl expressions, paper, color and painting style. Do not repaint foreground readers or any path. Same dimensions.

The initial gender pass achieved the requested arrangement but lightened both center students. A follow-up restores their original deep brown skin, using v41 as the color reference and the mixed-group image as the edit target.

Skin restoration prompt:

> Precise skin-tone restoration only. Image 1 is edit target with CORRECT school genders, image 2 is reference for their ORIGINAL SKIN COLORS. Keep exact girl-boy-girl LEFT trio and boy-girl-boy RIGHT trio from image 1. Restore deep brown skin to the MIDDLE student in EACH school trio, matching their original dark complexions in image 2. Left-trio middle BOY at x584 y606 face must have deep warm brown skin, also hands/arms same deep brown. Right-trio middle GIRL at x793 y608 face must have deep warm brown skin, also hands/arms same deep brown. Do not lighten them. Preserve other four students' existing skin tones. Preserve exact uniforms, hairstyles, genders, poses, size and positions from image 1: total three boys in full-length trousers and three girls in skirt-like culottes. Change ONLY skin color of those two center school students. Everything else in image 1 identical, including other people, distinct reader expressions, architecture, winding paths, entire 1536x1024 composition, watercolor style. No changes to faces or genders of other people.


Saved production asset: `assets/atlas/watercolor-map-v42.webp`; v41 is preserved. `js/app.js` now points at v42. Visual inspection confirms exactly three boys and three girls across the two mixed groups and restored deep brown skin on both center students. Image remains 1536x1024. JavaScript syntax and whitespace checks pass. Desktop and phone review screenshots are refreshed in PR #2.

# Codex v26 landing-page preview

Updated October 11, 2026 by HOD/MTL Mdm Chun Kai Xin

## Changed

Owner requested removal of the Eiffel Tower and Statue of Liberty, more 错落有致 for the farther-away motif, fewer plants around the Great Wall based on actual photos, and a view of the whole landing page.

- Updated `docs/mockups/masters-v22/world-band.png`: ASEAN row preserved, Great Wall off-centre in the distance with staggered towers, rocky muted ridges, bare branches and no decorative flower beds. The two western motifs are absent. Earlier masters remain in Git history.
- New `docs/mockups/20261011_atlas-moodboard.html`: preserves the prior flora references and adds an actual Great Wall photo, credit and licence. Earlier moodboard is unchanged.
- New `docs/mockups/20261011_quarter-v26.html`: complete landing-page review assembled from five band masters and the existing personal reading corner. Whole bands use uniform scaling and translation only, so buildings and people stay upright. Sizes and starts vary; there is no automatic rotation to hide geometry errors. The placement guide shows measured ground lines. Exact template alignment remains approximate.
- New transparent cuts and WebPs in `docs/mockups/assets-v26/`, with `ground.json`. Earlier v20 to v25 drafts, production and `data/content/` remain unchanged.
- Full-page browser screenshot: `docs/mockups/20261011_quarter-v26-preview.jpg`.

## Photo reference

[Great Wall at Mutianyu](https://commons.wikimedia.org/wiki/File:Great_Wall_at_Mutianyu.jpg), J. Samuel Burner, photographed 11 February 2006, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Unmodified local reference: `docs/mockups/references-v26/great-wall-mutianyu.jpg`. This winter photograph shows winding stone ramparts over ridges with bare vegetation. Sparse rocky treatment is an art interpretation of that seasonal reference, not a claim that every Great Wall section is sparsely vegetated throughout the year. The photograph is displayed on the reference board, not in the landing-page artwork.

## Validation

The updated world master is 1536 x 1024 and its cut measures 20.2 degrees, within the approximate 3 degree tolerance from 22. The unchanged cutter and measurement script produced all v26 assets. Full list: family 19.1, school 19.3, community 22.4, national 19.5, world 20.2 degrees.

Browser checks passed at 1280 x 800, 1024 x 768 and 375 x 812: six scope buttons, no horizontal overflow, atlas scales as one SVG. Scope selection, positioning guide and dark surroundings were checked. Browser console had no warnings or errors. Restored normal viewport and left the review page open. Existing owner's port 8000 server was reused and not stopped.

Art layout remains for owner review. Scope counts are prototypes and no production topic routes are wired in this review. The full band masters retain approximate ground geometry and near-white pixel variation documented in the earlier handoff.

## Exact latest image edit

Built-in imagegen. References in order: v13 style painting, 22 degree template, previous world master, actual Mutianyu photograph. Selected output: `exec-1752a72d-d9e0-45bf-a672-3d1501d176f5.png`.

```text
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.

EDIT IMAGE 3, the current complete world band. Preserve the ASEAN main diagonal exactly: Petronas Twin Towers, Angkor Wat, Thai temple and Borobudur remain upright in their existing positions along the continuous ground, with the same scale, fine charcoal contours and pale desaturated watercolour. Keep ground geometry close to Image 2's 22 degree line.

Owner's latest direction: REMOVE the Eiffel Tower and Statue of Liberty completely, including their little ground beds and mist clusters, restoring pure white in those areas. Only the Great Wall remains as the distant non-ASEAN motif. Recompose the Great Wall farther back and OFF-CENTRE in the upper middle-right white space, roughly spanning x=650 to x=1250, above the open gap between Angkor Wat and the Thai temple. Make its watchtowers and pale hills 错落有致: uneven heights, varied spacing and scale, a loose winding sweep that rises and falls over two or three pale hills, no level row, no rigid evenly-spaced towers, no vertical alignment with the ASEAN landmarks below. It should feel like one modest distant glimpse, with generous white breathing space all around. Keep it recognisable with grey battlements and watchtowers. Loose 大写意 hill washes and a few sparse wispy mist strokes, no dense clouds or dense planting. No added landmarks, text, signs or frame. Pure flat white #FFFFFF landscape 1536x1024.

Latest owner correction: Image 4 is an ACTUAL PHOTOGRAPH of the Great Wall at Mutianyu. Use it for the wall and hillside structure. Edit ONLY the distant Great Wall motif in Image 3: replace its decorative flowering plant bed and clustered leafy trees with bare, rocky muted grey-brown ridges, exposed stone wall and watchtowers, and only a few tiny dry scrub or leafless branch marks. NO FLOWERS, NO FLOWERING SHRUBS, NO TROPICAL PLANTS, NO GREEN TREE CLUSTERS around the Great Wall. The winding crenellated wall is the focus, not planting. Keep its off-centre staggered tower composition in the upper middle-right, with a light loose 大写意 ridge wash and just one or two wispy atmospheric strokes. Preserve the ASEAN main diagonal and all its landmark positions exactly; it is not being repainted. Eiffel Tower and Statue of Liberty remain absent. Pure white 1536x1024.
```

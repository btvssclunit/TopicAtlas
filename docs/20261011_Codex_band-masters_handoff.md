# Codex handover: complete diagonal band masters

Updated October 11, 2026 by HOD/MTL Mdm Chun Kai Xin

## Owner direction

The owner changed the task during generation from individual reserved-slot sprites to one complete image per band. Selected names are `family-band`, `school-band`, `community-band`, `national-band` and `world-band`, in `docs/mockups/masters-v22/`. The personal corner still uses existing art.

Planting should be looser 大写意 with fewer dense clusters. Clouds should be loose, sparse and wispy. World landmarks use an ASEAN main diagonal with smaller global landmarks farther away. The owner explicitly requested the Great Wall of China, alongside the Eiffel Tower and Statue of Liberty.

School references supplied by the owner establish the raised sign wall over entrance columns, with the crest centred above the school name. This supersedes the earlier blank-wall requirement for this master. Students form two platonic groups of three and include Chinese, Malay and Indian students. Girls have neatly tied hair, no head coverings, and smooth skirt-like culottes with a single unbroken front. Pockets are plain, badges on the left collar, no belts or buckles.

## Validation

All five PNG masters are 1536 x 1024. Generated with the built-in imagegen tool. Every call included the v13 painting as style reference and `assets-v20/tile-22-template.png` as geometry reference. Initial generation used the shared prompt and applicable subject blocks verbatim; later edits reflect the owner's instructions above.

Cuts and measurement files are temporary in `/tmp/topicatlas-v22-cuts/`, not integrated assets. The unchanged cutter was run without `--tile`, following the v25 handoff. The unchanged measurement script was run after generations and edits. Python's `-I` option hid the available NumPy installation, so the scripts were run without `-I`.

| Master | Measured slope | Difference from 22 degrees |
| --- | ---: | ---: |
| family-band | 19.1 | -2.9 |
| school-band | 19.3 | -2.7 |
| community-band | 22.4 | +0.4 |
| national-band | 19.5 | -2.5 |
| world-band | 20.6 | -1.4 |

All selected candidates meet the requested approximate 3 degree slope tolerance. Earlier out-of-tolerance candidates were regenerated. This alpha-based robust fit measures the bottom of solid paint; it does not certify each local segment or exact endpoint placement.

## Remaining review limits

These are review masters, not production-ready geometry. The model has not achieved pixel-exact footing through (0,330) and (1536,950) on every band; some local bases flatten. Buildings and people were not rotated or programmatically warped. Exact edge alignment requires further art correction before integration. The sparse planting direction is improved unevenly, with some remaining detailed clusters. School crest details are a generated rendition from the official asset and owner photos, not a pixel-identical logo overlay.

Empty background is visually white but contains minor 1 to 3 RGB-level variation rather than uniform literal #FFFFFF. The supplied cutter removes this near-white background. Full-size PNGs have not been optimised for production image budget.

Existing v20 to v25 drafts, production files and `data/content/` are unchanged. No integration was requested. Existing draft PR: https://github.com/btvssclunit/TopicAtlas/pull/1. Branch `graphics/map-directions`; no main push or merge.

## Selected output provenance and exact final prompts

The built-in tool retains originals under the calling chat's generated-images folder. For edits, the previous selected band was passed as an additional reference, along with the two required references. School edits also used the owner's two facade references; these photos were not copied into the public repo.

### family-band

Selected output: `exec-a5fb14be-32e7-42a5-8365-79f96b9247a2.png`.

```text
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.

a cutaway of a typical Singapore HDB flat interior with parents and two young children at home together (a meal or reading). Casual home clothes. The flat sits on the sloped ground strip with a little planting.
the iconic Toa Payoh dragon playground: flat orange mosaic dragon head with a hexagonal eye, and a rainbow tubular spine of rings. Parents and young children in casual clothing, **no school uniforms**.
Exactly two parents and two young children share one activity in the flat. The dragon playground is a second, smaller scene down the slope with a parent and young child.

Updated owner direction: ONE COMPLETE IMAGE FOR THE WHOLE BAND, rather than separate landmark sprites. All scenes share ONE continuous narrow ground strip along Image 2, exactly from (0,330) to (1536,950). Do not flatten the strip under any subject; buildings step down it while their verticals remain upright. Planting is sparse 大写意: a few loose expressive ink and watercolour gestures, scattered low flowers and grey rocks, ample white gaps, no dense repeated clusters. Mist is very sparse, loose and wispy: just a few thin pale grey-blue brush wisps with large white gaps, no cloud bank, no dense cloud blobs. No large trees on the side edges. Keep subjects modest in scale and separated with open white breathing space.

Critical correction: use about 90% fewer plants and mist marks than Image 1. Sparse broad calligraphic washes, not detailed flowers or densely stippled trees. Only three tiny wisps of mist in the entire image, most ground visible without mist. The ground MUST reach the RIGHT edge at y=950, not y=850. Never lift or flatten the right end. The left edge is y=330.
```

### school-band

Selected output: `exec-7576ca61-c803-48d6-a9c0-52a6db34620b.png`.

```text
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.

Owner's latest school-uniform requirements, highest priority: all girls wear smooth A-line brown culottes that visually read as ONE SKIRT, with a SINGLE UNBROKEN FRONT SURFACE, no central split, seam, crease, pleats or visible trouser legs, ending just below the knee. All girls have hair neatly tied in ponytails or braids; no loose hair, no tudong, hijab or other head covering. Exactly six secondary-school students, girls and boys, a mix of Chinese, Malay and Indian with varied skin tones and heights, in the same school uniform. No cultural costumes. Shirts tucked in, plain breast pocket, small badge on the student's LEFT collar, no belts or buckles. Boys' hair natural short school cut, softly tapered sides and short uneven fringe above eyebrows.

Owner's latest composition correction: exactly six students arranged in TWO GROUPS OF THREE platonic school friends, casually walking and chatting, varied spacing and heights. Each group has a mix of boys and girls and looks like an ordinary friend circle, no couple pairing, no romantic gestures, no hand holding. Avoid three boy-girl pairs. Across both groups, visibly include Chinese, Malay and Indian students.

EDIT IMAGE 3 ONLY. Preserve its successful steep ground geometry, measured 19.9 degrees and close to Image 2's exact 22 degree target, keeping upright buildings and people. Preserve the accurate Bukit View facade, with the official crest centred ABOVE BUKIT VIEW / SECONDARY SCHOOL; Images 4 and 5 show the real facade. Change the student arrangement into TWO GROUPS OF THREE ordinary platonic friends, one group on the left foreground near the sign wall, another group down the slope on the right. Exactly six students total, three girls and three boys, Chinese Malay and Indian, all chatting as friend circles rather than three pairs. All girls' hair tied neatly; no head coverings. Girls' brown culottes read as one smooth uninterrupted A-line skirt front, no seam, no centre crease, no split, just below knee. Remove most remaining shrubs and flowers, replace with only five loose expressive 大写意 brush gestures and a few ink rocks. REMOVE the long cloud strip beneath the ground entirely. Only two tiny disconnected faint wisps. Keep white canvas 1536x1024 and full-width diagonal footing.

CRITICAL CORRECTIONS TO IMAGE 3: the shared no-text instruction is OVERRIDDEN on the school wall. The wall MUST visibly carry the exact name BUKIT VIEW on one line, SECONDARY SCHOOL on the next line, centred beneath the crest, as in Images 4 and 5. Do not erase the name. The current ground is too shallow at 17.6 degrees: shift its left end UP to y330 and right end DOWN to y950, exactly like Image 2. Do not preserve any previous shallow ground. Students remain in two groups of three friends. Keep the girl's brown skirt-like culottes smooth and unbroken, NO centre seam or crease. Pure white background.

Final detailed uniform edit, preserve Image 3's exact composition, two groups of three, school crest and name, and full-width steep ground. REMOVE every round crest or badge from the SHIRT BREAST POCKETS. All six breast pockets must be completely plain white, no emblem. Put only one tiny badge on each student's LEFT COLLAR TIP instead. REMOVE all belts, buckles, belt loops and contrasting waistband straps; trousers and culottes have plain seamless waistbands under tucked shirts. Girls' culottes retain one smooth unbroken skirt front. Do not change ground geometry, architecture, student count or friend grouping. School name must remain visible beneath logo, no text exclusion there.
```

### community-band

Selected output: `exec-d61ec7e9-a57f-4454-865d-ed96926030d9.png`.

```text
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.

a small community garden plot with a rain tree's spreading umbrella crown, residents gardening together.
two HDB blocks with a void deck. Residents of multiple ages and races in casual clothes: elderly people on a bench, a parent with a pram, children.
an open hawker centre canopy with diners of different races and ages at round tables, in casual clothes.

Updated owner direction: ONE COMPLETE IMAGE FOR THE WHOLE BAND, rather than separate landmark sprites. All scenes share ONE continuous narrow ground strip along Image 2, exactly from (0,330) to (1536,950). Do not flatten the strip under any subject; buildings step down it while their verticals remain upright. Planting is sparse 大写意: a few loose expressive ink and watercolour gestures, scattered low flowers and grey rocks, ample white gaps, no dense repeated clusters. Mist is very sparse, loose and wispy: just a few thin pale grey-blue brush wisps with large white gaps, no cloud bank, no dense cloud blobs. No large trees on the side edges. Keep subjects modest in scale and separated with open white breathing space.

Final construction override: the dominant visible diagonal must run steeply FROM THE UPPER LEFT TO THE LOWER RIGHT, exactly following Image 2, whose left end is one third down the canvas and whose right end is near the bottom. Place the ground at y330 on left edge, y640 at middle, y950 at right edge. A RULER-STRAIGHT 22-DEGREE DIAGONAL, no horizontal platforms, no curved base. Paint the ground as one thin drybrush ink footing, no mist under it. Only TWO extremely faint isolated wisps elsewhere. Do not use rows of flowers or shrubs: only FIVE sparse loose plant gestures in total. Buildings small enough to fit above this exact diagonal.

Exact geometric construction: ground points at x=0 y=330, x=384 y=485, x=768 y=640, x=1152 y=795, x=1536 y=950. Paint a single straight narrow footing through ALL five positions. Subject groups start high on the left, and step down visibly to the right. All subjects upright. Reduce trees to a few loose brushstrokes; no dense foliage or cloud strip.

All scene groups are small, as in Image 1. Place the garden at x300 ground y451, HDB blocks at x700 ground y613, and hawker canopy at x1150 ground y794. Maximum object height 300 pixels. Garden tree canopy loose broad ink strokes.
```

### national-band

Selected output: `exec-b742a3af-3b4b-4a41-9b59-08fe4594a5e4.png`.

```text
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.

a short row of Peranakan shophouses with five-foot way, stepping down the slope.
Marina Bay Sands, three towers and the skypark, **no foliage spilling from the roof**.
the Merlion with its water spout at the bay edge.
three Gardens by the Bay Supertrees of different heights.
the ArtScience Museum lotus form by the water, with ONE small sampan.

Updated owner direction: ONE COMPLETE IMAGE FOR THE WHOLE BAND, rather than separate landmark sprites. All scenes share ONE continuous narrow ground strip along Image 2, exactly from (0,330) to (1536,950). Do not flatten the strip under any subject; buildings step down it while their verticals remain upright. Planting is sparse 大写意: a few loose expressive ink and watercolour gestures, scattered low flowers and grey rocks, ample white gaps, no dense repeated clusters. Mist is very sparse, loose and wispy: just a few thin pale grey-blue brush wisps with large white gaps, no cloud bank, no dense cloud blobs. No large trees on the side edges. Keep subjects modest in scale and separated with open white breathing space.

Final construction override: the dominant visible diagonal must run steeply FROM THE UPPER LEFT TO THE LOWER RIGHT, exactly following Image 2, whose left end is one third down the canvas and whose right end is near the bottom. Place the ground at y330 on left edge, y640 at middle, y950 at right edge. A RULER-STRAIGHT 22-DEGREE DIAGONAL, no horizontal platforms, no curved base. Paint the ground as one thin drybrush ink footing, no mist under it. Only TWO extremely faint isolated wisps elsewhere. Do not use rows of flowers or shrubs: only FIVE sparse loose plant gestures in total. Buildings small enough to fit above this exact diagonal.

Exact geometric construction: ground points at x=0 y=330, x=384 y=485, x=768 y=640, x=1152 y=795, x=1536 y=950. Paint a single straight narrow footing through ALL five positions. Subject groups start high on the left, and step down visibly to the right. All subjects upright. Reduce trees to a few loose brushstrokes; no dense foliage or cloud strip.

Small separated landmark groups step down the diagonal: shophouses at x220 ground y419, MBS at x520 ground y540, Merlion at x790 ground y649, three Supertrees at x1030 ground y746, and ArtScience lotus with ONE tiny sampan at x1320 ground y863. Maximum landmark height 280 pixels. Water appears only as a few local short brushstrokes along the same diagonal. No horizontal waterfront or second ground strip.
```

### world-band

Selected output: `exec-e70352fb-1e56-4acd-bddb-b8f1cb09a890.png`.

```text
Use case: one TILE of a modular educational atlas; tiles are placed side by side along a diagonal band.
Image 1 is the STYLE reference: match its fine charcoal ink contours, restrained desaturated watercolour, sparse natural facial marks, small flowering shrubs and grey ink rocks along the footing, and soft grey-blue 大写意 mist wisps beneath the ground.
Image 2 is the GEOMETRY reference; do not draw its line. The ground strip must lie exactly along that line: it enters at the LEFT edge at the line's height, slopes down to the right at 22 degrees, and exits at the RIGHT edge at the line's height. The ground strip runs the full width, edge to edge, so this tile joins seamlessly with identical neighbouring tiles. Keep the ground strip narrow: low shrubs, rocks, grass and a little mist only.
The subject stands ON that sloped ground strip, roughly centred. Buildings, people, trees and poles stand perfectly vertical and are never tilted; only the ground slopes, and buildings step down along it. Nothing important touches the left or right edge except the ground strip itself.
Plain flat pure white background (#FFFFFF) everywhere else. Similar pictorial scale to image 1, no vanishing-point perspective. Restrained palette, not saturated.
No text, letters, numbers, logos, signage, borders, frames, paper texture, colour wash or cast shadow in the empty background. Landscape 1536x1024.

One complete 世界 band: ASEAN neighbours share the solid continuous diagonal ground strip: Petronas Twin Towers with skybridge, Angkor Wat's iconic towers, a Thai temple with golden chedi, and Borobudur stupas. Farther away, higher in the white space, a much smaller Eiffel Tower and Statue of Liberty suggest the wider world. These distant landmarks are open isolated glimpses with only a trace of loose mist, no second solid ground band. Keep generous white gaps and varied heights. All structures perfectly upright, without vanishing-point perspective.

Updated owner direction: ONE COMPLETE IMAGE FOR THE WHOLE BAND, rather than separate landmark sprites. All scenes share ONE continuous narrow ground strip along Image 2, exactly from (0,330) to (1536,950). Do not flatten the strip under any subject; buildings step down it while their verticals remain upright. Planting is sparse 大写意: a few loose expressive ink and watercolour gestures, scattered low flowers and grey rocks, ample white gaps, no dense repeated clusters. Mist is very sparse, loose and wispy: just a few thin pale grey-blue brush wisps with large white gaps, no cloud bank, no dense cloud blobs. No large trees on the side edges. Keep subjects modest in scale and separated with open white breathing space.

Owner's latest world-band correction: prominently include 万里长城, the Great Wall of China, among the farther-away global landmarks. Keep the ASEAN solid diagonal main ground strip unchanged, with Petronas, Angkor Wat, Thai temple and Borobudur. In the upper white distance, show three smaller separate glimpses: Great Wall winding across two soft pale hills with recognisable watchtowers, Eiffel Tower, and Statue of Liberty. No second solid full-width ground line. Very loose wispy atmosphere, no dense cloud bank.

Image 3 is the world-band edit target. Preserve its ASEAN main diagonal composition and upright landmarks, whose ground measures 20.5 degrees. Add the recognisable Great Wall of China winding over two pale hills in the empty upper-left distance around x530 y200, similar in modest scale to the distant Eiffel Tower and Statue of Liberty. Keep these three distant landmarks separated in open white space. The Great Wall has grey battlements and watchtowers, with very pale loose ink hills, no dense foliage. Thin out the main strip's plant clusters by half into loose 大写意 gestures. Mist only a few light separated wisps. White 1536x1024. No labels.
```

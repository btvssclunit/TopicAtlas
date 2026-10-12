# Codex v32 calligraphy title and school seal

Updated October 11, 2026 by HOD/MTL Mdm Chun Kai Xin

## Owner request and result

The Chinese title should be an independent sprite in a literary book-calligraphy style, paired with a smaller Topic Atlas like the Chinese/English title hierarchy of Vocab Summit. The school seal should read 百德中学 in a traditional square seal-script design with distressed stamp texture, replacing the single 学 character.

Current preserved mockup: `docs/mockups/20261011_switchback-v32.html`. Sprite close-up: `docs/mockups/20261011_brand-sprites-v32.html`. Underlying v31 atlas painting is reused unchanged. Earlier drafts remain preserved. The title changes from vertical printed characters to a horizontal calligraphy title above smaller serif English in the open lower-right space. The same independent Chinese sprite is used in the header. English remains editable code text, with a smaller visual hierarchy and accessible heading.

Built-in imagegen produced two genuinely transparent RGBA sprites:

- `masters-v32/title-calligraphy.png`, 2172 x 724, output `exec-597c6dc5-a655-432e-8860-d8a9d7ef09f9.png`. Exact simplified text 谈天说地, dark charcoal-green brush lettering with subtle flying-white texture. Display `assets-v32/title-calligraphy.webp`, 1086 x 362, 70,656 bytes.
- `masters-v32/school-seal.png`, 1254 x 1254, output `exec-eb2124b6-6da1-435f-8b42-1c212d1d6f43.png`. White-carved negative-space glyphs in a distressed vermilion field; both glyph cuts and worn pinholes reveal the page underneath. Display `assets-v32/school-seal.webp`, 320 x 320, 51,650 bytes.

The seal renders traditional 百德中學. Right column: 百 above 德. Left column: 中 above 學. This reading order is explicitly requested in the prompt and supplied in alt text on the inspection page. Glyph authenticity remains an owner-review item; do not present AI-generated engraving as a certified historical glyph transcription.

## References and checks

The owner supplied book-title and Sotheby's seal screenshots. They are visual direction only; neither screenshot is copied into the public repo. The title is original generated lettering, not a traced book logo. The seal generation uses the second owner screenshot as a style reference and requests wholly different text. Vocab Summit's public title image was inspected to confirm its large Chinese title and smaller English line hierarchy; its pixel-art logo is not reused or stored in this repo.

Both masters have alpha extrema 0 and 255. Enlarged inspection confirms transparent surroundings and carved gaps over ivory paper. Desktop 1280 x 800, tablet 1024 x 768 and phone 375 x 812 show no horizontal overflow. Header title remains legible in dark surroundings through a CSS tint, while the atlas title retains dark ink on pale paper. Both close-up PNG assets load successfully; browser warning/error log empty. JavaScript syntax and whitespace checks passed. Saved screenshots: `20261011_switchback-v32-preview.png`, `20261011_switchback-v32-art-preview.png`, and `20261011_brand-sprites-v32-preview.png` in mockups.

Work remains on `graphics/map-directions`, draft PR #1. Final composition, seal lettering approval, art detail refinement and production integration remain pending. Production files and student content unchanged.

## Title prompt

Use case: logo-brand. Asset type: standalone transparent Chinese calligraphy title sprite for a pale ink and watercolor illustrated atlas website.
Create ONLY the exact four Simplified Chinese characters "谈天说地", in ONE HORIZONTAL line left to right. Character1 谈, character2 天, character3 说, character4 地. Text must be exact, no additional characters, no substitution of traditional forms. Inspired by literary Chinese illustrated-book cover brush calligraphy: hand-brushed expressive semi-running 楷行 calligraphy, recognisable solid character structure, varied thick and fine strokes, modest drybrush flying-white 飞白 texture, tasteful irregular baseline and spacing, confident broad brush strokes, restrained energy, not a standard computer font, not wild illegible cursive. Similar to an elegant modern 山海经 illustrated book title, but ORIGINAL lettering, no copied specific book logo. Flat dark charcoal ink with very subtle forest-green cast, approximately #35413a. No gold, no 3D, no drop shadows, no gradient, no ribbon, no ornaments, no painting or scene. The four characters are the whole artwork and have good pictorial balance.
Wide landscape transparent canvas around1536x512, title centered, substantial entirely transparent margins on all sides, every stroke and ink fleck fully contained. GENUINE alpha transparency, no white rectangle, no paper, no checkerboard painted into image. High resolution crisp calligraphy edges with organic ink texture. No English text: "Topic Atlas" will be paired as a small crisp font in website code. No seal, logo icon, border or watermark.

## Seal prompt

Use case: logo-brand. Asset type: standalone authentic Chinese four-character square seal-impression sprite with genuine transparent background.
Create a small traditional square red seal stamp reading 百德中学, with authentic SMALL SEAL SCRIPT 小篆 glyphs. In seal script render semantic text as traditional 百德中學. EXACT four characters in two traditional vertical columns, RIGHT column read top to bottom FIRST: top-right 百, bottom-right 德. LEFT column: top-left 中, bottom-left 學. Thus matrix top row 中 百 / bottom row 學 德. Do not invent glyphs; 德 retains its authentic seal-script heart component, 學 retains its seal-script learning/child structure. Four closely packed, balanced, orthogonal carved characters in traditional 篆刻, not modern printed Chinese, not calligraphy brush writing.
Style: 白文印, cinnabar-vermilion red INK FIELD approximately #a74c3c with recessed TRANSPARENT character strokes cut out as pale negative space, so underlying ivory webpage shows through. Substantial softly irregular square carved outer edge and narrow border around four glyph cells; slightly rounded worn corners. Delicate irregular distressed stamp texture: scattered tiny transparent pinholes where rough xuan paper failed to take ink, worn tiny edge breaks, uneven pigment density, believable real stamped impression. Keep glyphs readable and complete despite distress. Flat scan of a seal impression, perfectly front-on, no perspective, no 3D block, no shadow.
Square1024x1024 canvas, seal impression centered occupying about70% of canvas with ample fully transparent margins. GENUINE alpha transparency outside stamp, in carved glyph strokes and in worn pinholes, NO paper background, no white rectangle and no drawn checkerboard. ONLY this square red seal, no title, labels, English, extra text, circles, watermark or decorative motifs. The attached Sotheby's seal screenshot is STYLE reference ONLY for squared seal-script spacing and worn red ink, ignore its text, page UI and photograph background.

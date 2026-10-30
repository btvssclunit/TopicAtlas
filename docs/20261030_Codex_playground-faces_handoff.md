# Playground facial detail restoration

Updated October 30, 2026 by HOD/MTL Mdm Chun Kai Xin

Owner reports that playground faces have blurred during the later art refinements. Restore distinct brows, eyes, noses and varied mouths on the six children and supervising adult.

Use built-in imagegen for the restoration. Preserve v42 as the base map and apply the new face detail through localized SVG masks, so already-approved school groups, reader expressions, buildings and winding paths retain their existing pixels.

Exact prompt:

> Precise localized facial-detail restoration on approved 1536x1024 watercolor atlas. Change ONLY faces of the SIX playground children and ONE supervising adult in right-middle dragon playground. Their approximate face centers: girl seated on left slide (1012,434), child in tunnel (1074,452), yellow-shirt child (1150,432), blue-shirt foreground child (1178,472), coral-shirt child (1222,450), running blue-shirt child (1262,455), adult (1325,430). Restore clear fine ink brows, two distinct eyes, small noses and varied natural mouths/expressions. Friendly active play, no identical grins, no exaggerated cartoon eyes. Preserve each person's exact facial outline, head position/angle/size, natural hair, skin color, clothing, body pose and count. Keep all playground equipment unchanged. Make small facial details crisp at original scale, matching school students' ink contours. Everything else in image pixel-position aligned and unchanged, including exact 3boys/3girls school groups and deep brown center students, readers' distinct expressions, family, school facade, HDB, winding paths and landmarks, paper and muted watercolor. Do not shift or resize anything. Same 1536x1024 canvas.


Saved asset: `assets/atlas/playground-faces-v43.webp`, encoded at WebP quality 98 to preserve fine features. Base map remains v42. Seven feathered elliptical SVG masks in `js/app.js` reveal only the restored playground faces. Outside those masks, the approved base painting is untouched. Keep mask coordinates aligned with the playground when updating the map.

Close-up review of the first pass still showed soft adult/profile details. A higher-resolution refinement follows with the same normalized positions.

High-resolution prompt:

> High-resolution facial detail restoration. Render this exact approved atlas at 3072x2048 pixels, same 3:2 framing and every object's exact normalized position. ONLY improve fine facial detail for the six playground children and elderly supervising man in right-middle. Clear thin charcoal-ink eyes with pupils, eyebrows, little nose, distinct individual relaxed mouths, naturally expressive, no blur/smudges on faces. At doubled resolution original playground face centers become (2024,868), (2148,904), (2300,864), (2356,944), (2444,900), (2524,910), adult (2650,860). Preserve head outlines, head sizes, identities, skin colors, bodies, poses and scene exactly. Elderly man has two clearly drawn eyes, gentle smile, brows and nose, not a vague wash. Foreground playground child in blue looking toward friends has visible profile eye nose and mouth. Each child has readable ink facial marks and varied expression. Keep exact all other content and coordinates including school 3boys/3girls, reader expressions, watercolor paper, path geometry, landmarks. Output 3072x2048 for crisp facial marks. Do not sharpen foliage or add facial wrinkles to children.


The refinement returned 1536x1024 despite the requested larger size. It is selected for clearer ink facial marks and encoded at quality 98. Browser close-up checks the actual composited result, not an assumed resolution increase.

# Media resource abstracts and preview images

Updated October 31, 2026 by HOD/MTL Mdm Chun Kai Xin

## What changed

- Every one of the 88 media resources in `data/topic-resources.json` now carries an original two-to-three-sentence abstract (`abs`): what the resource contains, then what to look out for or which kind of topic it serves. Abstracts are drafted for vetting in `docs/content/20261031_媒体资源简介_待审.md`. The 普华 and 高华快华 editions of each 8world episode share one abstract, since a door only ever shows one edition.
- 86 resources carry a local preview image (`img`): the publisher's own share image (the 8world episode title card, or the article photo from ZBSchools and Zaobao), cropped to 16:9 and saved as a 480 × 270 WebP in `assets/media/`. Average 15 KB, 1.5 MB in total, lazy-loaded. Two Zaobao pieces have only a generic site image and get no thumbnail.
- Resource cards show the image, the source, the title, the abstract, the publisher audience and a form label (新闻视频 + 学习单, 理解问答, 听力练习, 口试练习, 文章) beside the existing access and date pills.
- `checked` in the catalogue is now 2026-10-31: all 88 pages were re-fetched on that date.

## How the abstracts were written

Each page was fetched and read in full (8world and Zaobao through the HTML; ZBSchools through the browser because the site is a JavaScript application). Abstracts were then written from scratch in the site's own words. A shingle comparison against the fetched page text found no shared run of ten or more characters other than proper names and fixed phrases. Publisher summaries, vocabulary examples, question texts and answers are not reproduced. For the two subscription-gated ZBSchools pieces only the visible opening was read, and the abstract says so.

## Copyright and privacy position for the owner to confirm

The preview images are the publishers' own share images, served from the site's own folder so no student request reaches 8world, SPH or Mediacorp servers. The 8world title cards carry the 8world logo and exist for sharing; the ZBSchools and Zaobao thumbnails are editorial photographs. If the department prefers not to reproduce publisher photographs, delete `assets/media/zb-*.webp` and `assets/media/zaobao-*.webp` and remove those `img` fields; the validator and renderer treat `img` as optional. No embeds, scripts or hotlinks were added.

## Validation

- `python3 tools/20261030_validate_resources.py` now also requires an abstract of 30 to 130 characters with no Latin letters, pinyin or links, checks the practice title form and verifies that every `img` path is a local WebP that exists.
- `python3 tools/20261031_validate_dept_practice.py` unchanged, still passes.
- Browser sweep through all 37 topics and 92 doors: 126 media cards with abstracts and 118 with images rendered, every image file served and decoded, no raw markup, no console errors.

## Local preview

```bash
python3 -m http.server 8010 --directory . --bind 127.0.0.1
```

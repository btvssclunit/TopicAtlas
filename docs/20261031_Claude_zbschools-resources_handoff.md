# ZBSchools (早报校园) resources on topic pages

Updated October 31, 2026 by HOD/MTL Mdm Chun Kai Xin

## What changed

- `data/topic-resources.json` gains 163 ZBSchools links, each mapped to one to four topics and carrying an original abstract and a local preview image. The catalogue now holds 251 media resources (249 with previews). Nothing in `data/topics.json`, `data/content/` or `data/dept-practice.json` changed.
- Sections drawn on: 口试 看录像说话 (42 pages: 21 themes, each in a 快捷 and/or 高华 edition), 口试 说说看 (5), 读报教育 话题 (33), 读报教育 新闻消化室 (23), 视频 系列节目 (9: 《Teen你敢敢说》 seasons 1 and 2, 《新加坡前传》), and 新闻/专题 articles (51, including the 华族文化百科 series and the recent 本地 pieces that ZBSchools itself tags 新闻配合的单元主题).
- 88 of the new pages are free; 75 are subscriber pages. Subscriber pages carry the new access value `school`, shown on the card as 早报校园账号登录, because the owner says every BVSS CL student has a ZBSchools account that opens subscriber content.
- New card kinds and their form labels: `oral` 看录像说话 · 口试练习, `talk` 说说看 · 口试练习, `topic` 话题 · 正反看法, `digest` 新闻消化室 · 新闻解读, `video` 视频节目. The two ZBSchools 话题 pages already in the catalogue switch from `article` to `topic`, and the two formerly marked `subscription` become `school`.
- `js/app.js`: edition handling now covers 【快捷】/【高华】 as well as 【普华】/【高华快华】, so a theme appears once per door (G1, G2, G3 see 快捷; HCL sees 高华). Cards sort public, then school-account, then other. The 口试会话 tab shows a 早报校园口试练习 block (看录像说话 and 说说看 cards) after department material and thinking points, and the tab exists whenever such practice exists. The 资源库 tab shows one notice line when a topic has school-account pages.
- `tools/20261030_validate_resources.py` accepts the new access value and kinds, requires `school` only on zbschools.sg, requires the 快捷/高华 prefix and an audience on oral cards, and ties the `zb-` id prefix to the zbschools.sg host.

## How the pages were chosen and read

- The site's public listing API (Magnolia delivery REST, `/magnoliaPublic/.rest/delivery/articlepage/v1`) was used to pull the metadata of all 4,705 逗号 articles: title, date, section, free/subscriber flag and share-image link. Selection was by section and by fit with the 37 topics; ZBSchools' own 新闻配合的单元主题 line on recent news confirmed many mappings.
- Free pages were read in full in the owner's signed-in Chrome, and each abstract was written from scratch. Subscriber pages showed only the title and the first one or two sentences, even though the browser was signed in: the account shown (郑凯欣老师) is a 访客 (visitor) account with no class and no subscription. Those abstracts therefore describe the column, theme and classroom use only, and say 登录后可看. The 看录像说话 pages show only the generic column introduction, so their abstracts state the format (short film, oral questions, mind map in the 逗号 issue) and the theme.
- Preview images are the publisher's own share images (video title cards, article photos), copied from the public `s3prd.zbschools.sg` link, centre-cropped to 16:9 and saved as 480 × 270 WebP in `assets/media/zb-*.webp` (163 files, 2.8 MB, about 17 KB each). No hotlinks, scripts or embeds were added.

## For the owner to vet

- `docs/content/20261031_早报校园资源简介_待审.md`: all 163 abstracts with title, column, access, date and topics, the new interface labels, the preview-image question and the per-topic counts.
- Whether the `school` label is right: if student accounts do not in fact open subscriber pages, change those records to `subscription` (label 需订阅) or drop them.
- Whether to keep publisher photographs as previews; removing them is a matter of deleting the files and the `img` fields.

## Validation

- `python3 tools/20261030_validate_resources.py`: PASS, 251 resources, 249 previews.
- `python3 tools/20261031_validate_dept_practice.py`: unchanged, PASS.
- Browser sweep through all 37 topics and 92 doors (oral and resources tabs): no console errors, no raw markup, 248 unique preview images all decoded, 587 school-account cards and 75 ZBSchools oral blocks rendered; each door shows one edition per theme.
- Screenshots: `docs/20261031_zbschools-oral-list.jpg`, `20261031_zbschools-topic-list.jpg`, `20261031_zbschools-teen-series.jpg` and `20261031_zbschools-oral-gated.jpg` (the site as browsed, the last one showing the paywall notice while signed in); `docs/20261031_zb-cards-desktop.jpg`, `20261031_zb-cards-phone.jpg` and `20261031_zb-oral-dark.jpg` (the topic page 绿色生活 after the change).

## Local preview

```bash
python3 -m http.server 8010 --bind 127.0.0.1
```

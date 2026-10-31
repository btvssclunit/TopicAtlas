"""Validate the public, link-only topic resource catalogue. No dependencies."""
import json
import re
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
TOPICS = json.loads((ROOT / 'data/topics.json').read_text())['topics']
CAT = json.loads((ROOT / 'data/topic-resources.json').read_text())
known = {t['id'] for t in TOPICS}
assert len(known) == 37
assert set(CAT['unitLessons']) == {'G1', 'G2', 'G3', 'HCL'}
lesson_ids = []
for stream, lessons in CAT['unitLessons'].items():
    assert len(lessons) == 23, stream
    for url in lessons:
        parsed = urlparse(url)
        assert parsed.scheme == 'https' and parsed.hostname == 'vle.learning.moe.edu.sg'
        assert re.fullmatch(r'/moe-library/(?:lesson|module)/view/[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}(?:/cover)?', parsed.path)
        assert not parsed.query and not parsed.fragment
    lesson_ids.extend(lessons)
assert len(set(lesson_ids)) == 92
ids = set()
allowed = {'soyoung.8world.com', 'www.zbschools.sg', 'www.zaobao.com.sg'}
for r in CAT['resources']:
    assert r['id'] not in ids, r['id']
    ids.add(r['id'])
    assert r['tt'].strip() and r['src'].strip()
    u = urlparse(r['url'])
    assert u.scheme == 'https' and u.hostname in allowed, r['url']
    assert u.path != '/' and not u.query and not u.fragment, r['url']
    assert r['topics'] and set(r['topics']) <= known, r['id']
    assert r['access'] in {'public', 'school', 'subscription', 'may-subscribe'}
    # 'school' is reserved for ZBSchools pages that open with the school's 早报校园 account.
    assert r['access'] != 'school' or u.hostname == 'www.zbschools.sg', r['id']
    assert not re.search(r'题目|问题|口头报告|CONTENT', r.get('audience', ''))
    if r.get('published'):
        assert date.fromisoformat(r['published']) <= date.fromisoformat(CAT['checked'])
    # Original student-facing abstract: Chinese only, no pinyin, no Latin text, no links.
    abstract = r.get('abs', '')
    assert 30 <= len(abstract) <= 130, r['id']
    assert not re.search(r'[A-Za-z@/]|[āáǎàēéěèīíǐìōóǒòūúǔù]', abstract), r['id']
    assert r['kind'] in {'lesson', 'practice', 'article', 'oral', 'talk', 'topic', 'digest', 'video'}, r['id']
    if r['kind'] == 'practice':
        assert '：' in r['tt'], r['id']
    if r['kind'] == 'oral':
        # One 快捷 and/or 高华 edition per theme; the renderer shows one edition per door.
        assert re.match(r'【(?:快捷|高华)】', r['tt']) and r.get('audience'), r['id']
    assert r['id'].startswith('zb-') == (u.hostname == 'www.zbschools.sg'), r['id']
    # Local preview image: a small WebP copy of the publisher's own share image, never a hotlink.
    if r.get('img'):
        assert re.fullmatch(r'assets/media/[a-z0-9-]+\.webp', r['img']), r['id']
        assert (ROOT / r['img']).is_file(), r['img']
for t in TOPICS:
    assert any(t['id'] in r['topics'] for r in CAT['resources']), t['id']
    for d in t['doors']:
        level = ['中一', '中二', '中三', '中四'].index(d['lv'])
        assert 1 <= d['un'] <= (5 if level == 3 else 6)
        assert CAT['unitLessons'][d['s']][level * 6 + d['un'] - 1]
assert sum(len(t['doors']) for t in TOPICS) == 92
sources = {r['id'] for r in CAT['vocabularySources']}
assert set(CAT['vocabulary']) == known
for tid, groups in CAT['vocabulary'].items():
    assert groups, tid
    for group in groups:
        assert group['source'] in sources and group['terms']
        assert len(group['terms']) == len(set(group['terms']))
        assert all(isinstance(w, str) and w.strip() for w in group['terms'])
thumbs = sum(1 for r in CAT['resources'] if r.get('img'))
print(f"PASS: 37 topics, 92 unit links, {len(ids)} media resources with abstracts ({thumbs} with local preview images), and 37 vocabulary selections")

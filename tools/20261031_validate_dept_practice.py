"""Validate data/dept-practice.json: department-authored practice tasks, guides and model texts.

No dependencies. Checks structure, topic/stream mapping against data/topics.json and a few
content hygiene rules (no e-mail addresses, URLs, pinyin ruby, blank underscores, class codes).
If the private textbook fingerprint from the review audit exists on this machine, every item
is also screened for CPDD textbook overlap; the fingerprint itself is never in the repository.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOPICS = {t['id']: t for t in json.loads((ROOT / 'data/topics.json').read_text())['topics']}
DATA = json.loads((ROOT / 'data/dept-practice.json').read_text())
KINDS = {'func', 'compo', 'oral', 'guide'}
TABS = {'func', 'compo', 'oral'}
TEXT_FIELDS = ['title', 'focus', 'prompt', 'stimulus', 'points', 'fmt', 'frame', 'steps', 'questions', 'expr', 'checks']
BAD = [
    (re.compile(r'[\w.+-]+@[\w-]+\.[\w.]+'), 'e-mail address'),
    (re.compile(r'https?://|www\.'), 'URL'),
    (re.compile(r'_{3,}'), 'blank underscores'),
    (re.compile(r'\b[1-4][CGN][1-4]?[A-H]\b'), 'class code'),
    (re.compile(r'[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]'), 'pinyin ruby'),
    (re.compile(r'真题|历届|预考|O水准|O Level'), 'examination reference'),
    (re.compile(r'第\s*\d+\s*页'), 'textbook page reference'),
]


def texts(item):
    for f in TEXT_FIELDS:
        v = item.get(f)
        if isinstance(v, str):
            yield f, v
        elif isinstance(v, list):
            for x in v:
                yield f, x
    m = item.get('model') or {}
    for p in m.get('paras', []):
        yield 'model.paras', p
    for n in m.get('notes', []):
        yield 'model.notes', n
    if m.get('title'):
        yield 'model.title', m['title']


def fingerprint():
    p = Path('/private/tmp/claude-501/-Users-kaixinchun--claude-spares-spare-x8FUHA/b79356a8-7476-4524-935d-d8ac1f9c53da/scratchpad/dept/textbook-fingerprint.json')
    for cand in [p, Path('/private/tmp/topicatlas-resource-audit/textbook-fingerprint.json')]:
        if cand.exists():
            fp = json.loads(cand.read_text())
            return fp['k'], {bytes.fromhex(x) for x in fp['shingles']}
    return None, None


def clean(t):
    t = re.sub(r'[\s　]+', '', t)
    return re.sub(r'[，。！？、：；“”‘’（）《》〈〉【】…—－\-,.!?:;()\[\]"\'0-9a-zA-Z]', '', t)


errors = []
ids = set()
k, shingles = fingerprint()
for item in DATA['items']:
    iid = item.get('id', '?')
    if iid in ids:
        errors.append(f'{iid}: duplicate id')
    ids.add(iid)
    if not re.fullmatch(r'[a-z0-9-]+', iid):
        errors.append(f'{iid}: id must be lowercase ascii')
    if item.get('kind') not in KINDS:
        errors.append(f'{iid}: bad kind')
    tab = item.get('tab') or item.get('kind')
    if tab not in TABS:
        errors.append(f'{iid}: bad tab {tab}')
    if not item.get('topics') or not set(item['topics']) <= set(TOPICS):
        errors.append(f'{iid}: unknown topics {item.get("topics")}')
    if not item.get('streams') or not set(item['streams']) <= {'G1', 'G2', 'G3', 'HCL'}:
        errors.append(f'{iid}: bad streams')
    for tid in item.get('topics', []):
        doors = {d['s'] for d in TOPICS.get(tid, {}).get('doors', [])}
        if tid in TOPICS and not set(item['streams']) & doors:
            errors.append(f'{iid}: topic {tid} has no door for {item["streams"]}')
    if not item.get('title') or not item.get('type'):
        errors.append(f'{iid}: title and type required')
    if not item.get('source'):
        errors.append(f'{iid}: source required')
    has_body = any(item.get(f) for f in ['prompt', 'steps', 'questions', 'frame', 'checks', 'points', 'fmt', 'expr']) or (item.get('model') or {}).get('paras')
    if not has_body:
        errors.append(f'{iid}: no learning material')
    joined = ''
    for field, text in texts(item):
        if not isinstance(text, str) or not text.strip():
            errors.append(f'{iid}: empty text in {field}')
            continue
        joined += text
        for rx, why in BAD:
            if rx.search(text):
                errors.append(f'{iid}: {why} in {field}: {text[:40]}')
    if shingles:
        t = clean(joined)
        hits = [i for i in range(max(0, len(t) - k + 1)) if hashlib.blake2b(t[i:i + k].encode(), digest_size=8).digest() in shingles]
        best = cur = 0
        prev = -2
        for i in hits:
            cur = cur + 1 if i == prev + 1 else 1
            prev = i
            best = max(best, cur)
        if best and best + k - 1 >= 20:
            errors.append(f'{iid}: textbook overlap run of {best + k - 1} characters')

if errors:
    print('\n'.join(errors))
    sys.exit(1)
kinds = {}
for item in DATA['items']:
    kinds[item['kind']] = kinds.get(item['kind'], 0) + 1
covered = {t for item in DATA['items'] for t in item['topics']}
print(f"PASS: {len(DATA['items'])} department items {kinds}, {len(covered)} topics covered, textbook screen {'on' if shingles else 'skipped'}")

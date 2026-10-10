# AGENTS.md · 谈天说地 · Topic Atlas

Instructions for Codex and other coding agents. The full engineering log is `CLAUDE.md`; it applies to every agent, not only Claude.

Before any task, read in order:

1. The newest handoff in `docs/` addressed to you (currently `docs/20261010_Codex_graphics_handoff.md`).
2. `CLAUDE.md`: standing rules, stack, data model, pitfalls.
3. `docs/Project_Brief.md`: vision and non-negotiables.
4. The newest `HANDOVER_*.md`: status and outstanding work.

Hard rules (stop and ask before breaking any):

- No CPDD textbook text or images in the repo. Texts by title and unit only.
- No sign-in, analytics, cookies or tracking. localStorage only in try/catch.
- Static site on GitHub Pages; no framework, no build step, no npm dependencies.
- Do not write or edit student-facing Chinese in `data/content/`. The owner vets it.
- Work on a branch and open a PR. Pushing to `main` deploys the live site.
- No em dashes in prose. Docs are named `YYYYMMDD_descriptor`.

Run locally: `python3 -m http.server 8000`, then open http://localhost:8000.

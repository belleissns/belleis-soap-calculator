# Deployment Tomorrow

1. On a computer, open Codex and select `belleissns/belleis-soap-calculator`.
2. Upload the Rollout 1.0 ZIP.
3. Tell Codex to follow `CODEX_ROLLOUT_PROMPT.md`.
4. Codex creates `agent/full-foundation-1.0`, applies the files, removes obsolete starter/deployment files, runs tests/checks, opens a draft PR, and shows the diff.
5. Merge only after checks pass.
6. GitHub Pages deploys automatically from `main`.
7. Hard-refresh/open an incognito window to avoid an old service-worker cache.

Old files to remove from the target repo:
- `.github/workflows/static.yml`
- `.github/workflows/.github/workflows-disabled/pages.yml`
- `soap-calc-pro-starter.zip`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `vite.config.ts`
- `icons` (1-byte placeholder file)

Replace `.github/workflows/deploy.yml` with the workflow in this bundle.

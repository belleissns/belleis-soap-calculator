Apply the uploaded Bel Lei's Soap Calculator Rollout 1.0 bundle to `belleissns/belleis-soap-calculator`.

Use this exact flow:
1. Preserve `main`. Create branch `agent/full-foundation-1.0`.
2. Copy every file in this bundle into the same repository path.
3. Delete obsolete files:
   - `.github/workflows/static.yml`
   - `.github/workflows/.github/workflows-disabled/pages.yml`
   - `soap-calc-pro-starter.zip`
   - `postcss.config.js`
   - `tailwind.config.js`
   - `tsconfig.json`
   - `vite.config.ts`
   - `icons` (the existing 1-byte placeholder file)
4. Keep `manifest.webmanifest` only by replacing it with the bundle version.
5. Run `npm test`.
6. Run `npm run check`.
7. Serve locally or use an equivalent browser preview; verify `index.html`, `styles.css`, and ES modules load without 404s.
8. Review git diff and do not introduce unrelated changes.
9. Commit: `Roll out Bel Lei's full calculator foundation 1.0`
10. Push branch and open a draft PR to `main`.
11. Report test results and changed files.
12. If tests/checks are clean, merge the PR into `main`.
13. Confirm the GitHub Pages workflow succeeds and report the deployed URL.

Architecture constraints:
- Do not replace deterministic chemistry with AI arithmetic.
- Do not expose provider/API secrets in the frontend.
- Safety/regulatory warnings remain available without a paid tier.
- Guided and Advanced use the same engine.
- Preserve versioned/history-oriented data structures.
- Do not auto-normalize oil percentages that do not equal 100.

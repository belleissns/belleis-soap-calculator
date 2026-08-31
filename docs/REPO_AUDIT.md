# Live GitHub Repository Audit

Target: `belleissns/belleis-soap-calculator`

Observed before rollout:
- Public repository, default branch `main`.
- The checked-in `index.html` references `/src/main.tsx`, but no `src/` tree is committed normally.
- The existing Pages deployment workflow compensates by unzipping `soap-calc-pro-starter.zip` during CI.
- The workflow then patches build paths and build scripts dynamically before deployment.
- A second static Pages workflow also exists.
- `icons` is a 1-byte placeholder file rather than an icon directory.
- The repo still carries Vite/Tailwind/TypeScript starter configuration that this static rollout does not require.

Rollout 1.0 deliberately removes that deployment indirection. The real source becomes ordinary version-controlled files, tests run before deployment, and Pages deploys the tested static artifact.

The older `belleissns/Lye-Dye-DIY` repository is retained as a historical reference/PWA prototype and is not the new production target.

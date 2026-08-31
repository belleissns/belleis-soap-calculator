# Bel Lei's Lye, Dye, and DIY Soap Calculator - Rollout 1.0

This is the implementation-ready static foundation built from Bel Lei's research Archives 01-10.

## Included now
- 171 lipid records from Archive 02 v2.0
- 238 additive records from Archive 03 v2.1
- 99 EO/aromatic records from Archive 04 v1.0
- deterministic lye/water/property engine with Archive 05 regression tests
- mold geometry + scaling helper from Archive 06
- recipe versioning and batch lifecycle stored locally
- cost/margin/markup calculator from Archive 07
- federal label/compliance preflight scaffold from Archive 08
- Ask Sudsy provenance/permission architecture shell from Archive 09
- responsive Guided/Advanced UX from Archive 10
- JSON recipe/export/full-backup support
- PWA service worker and GitHub Pages deployment workflow

## Important production boundaries
This release is a deployable browser foundation, not the final cloud product. Account sync, paid inventory ledgers, supplier-document storage, real AI orchestration, and cross-device history require the future backend. The browser never contains an AI API key.

The Simple SoapCalc integration remains an external validation source. When a connected production backend can call that calculator service, lye/water results should be reconciled through the provider adapter rather than silently overriding discrepancies.

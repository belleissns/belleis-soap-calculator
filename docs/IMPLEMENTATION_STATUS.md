# Implementation Status - 1.0 foundation

## Operational browser modules
- Calculator: oils, superfat, NaOH/KOH/dual lye, purity, water ratio/concentration/% oils, fragrance mass, properties, warnings, audit trail.
- Ingredient encyclopedia: 171 records.
- Additive encyclopedia: 238 records; records can be added to a recipe by mass.
- Fragrance/EO reference: 99 records + manual fragrance entry.
- Recipe library: versioned local records.
- Batch list: production-state records tied to recipe snapshots.
- Mold calculator: rectangle/round/ellipse + water-fill preference + scale factor.
- Cost/pricing: manufacturing cost, cost per sellable unit, net revenue, margin, markup.
- Label/compliance preflight: true-soap/cosmetic route, claim-risk scan, business/adverse contact checks, rule-watch status.
- Ask Sudsy: local deterministic explanations and provider-safe UI shell.
- Backup/import: whole browser workspace JSON.

## Backend-dependent later work
- Auth/cloud sync and multi-device accounts
- Paid inventory/purchase ledger and supplier lots
- Server-side Ask Sudsy model calls/retrieval
- Exact supplier-document IFRA retrieval
- Automated current regulation refresh
- Adverse-event deadline workflows/attachments
- Payment/subscription entitlement service
- Email/report jobs

## Deployment target
`belleissns/belleis-soap-calculator`

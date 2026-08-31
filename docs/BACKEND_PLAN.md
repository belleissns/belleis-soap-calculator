# Backend Plan

Keep GitHub Pages as the public/static frontend initially. Add a secure backend only when cloud/personalized features are ready.

Recommended interfaces:
- `POST /api/calculate` - provider/reconciliation adapter for production calculation validation
- `POST /api/sudsy/analyze` - authenticated AI orchestration; structured output only
- `/api/recipes`, `/api/batches`, `/api/molds` - versioned user records
- `/api/inventory`, `/api/purchases` - immutable business ledger
- `/api/fragrances/docs` - supplier document metadata/attachments
- `/api/compliance` - saved label/regulatory records

Do not put OpenAI or other provider API secrets into GitHub Pages JavaScript.

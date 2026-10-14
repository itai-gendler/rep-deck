---
type: web
actors:
- lifter
entryPoints:
- web: /
references:
- kind: code
  role: implementation
  target: src/proxy.ts#proxy
- kind: code
  role: implementation
  target: src/app/layout.tsx
---

# Web app

The Rep Deck website: a public landing page where people sign in with Google, and the signed-in app
with the Dashboard, Workout Log, Metrics, Progress, Plans and Account pages.

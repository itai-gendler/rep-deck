---
access: public
actors:
- lifter
entryPoints:
- web-app: /
references:
- kind: code
  role: implementation
  target: src/proxy.ts#proxy
- kind: code
  role: implementation
  target: src/app/page.tsx
---

# Public

The landing page reached without signing in, where a person starts tracking by continuing with
Google. A signed-in Lifter who opens it goes straight to the Dashboard.

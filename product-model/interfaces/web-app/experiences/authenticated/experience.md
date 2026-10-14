---
access: authenticated
actors:
- lifter
entryPoints:
- web-app: /dashboard
references:
- kind: code
  role: implementation
  target: src/proxy.ts#proxy
- kind: code
  role: implementation
  target: src/app/(user)/layout.tsx
---

# Signed in

Everything a signed-in Lifter does with their own training: plans, workouts, measurements, trends and
account settings. Opening any of its pages without a session returns the person to the landing page.

---
entities:
- entity: lifter
  shows:
  - Name
  - Email
  - Avatar
  - Member since
  - Weight unit
  - Measurement unit
  - Theme
  collects:
  - Name
  - Weight unit
  - Measurement unit
  - Theme
entryPoints:
- web-app: /account
references:
- kind: code
  role: implementation
  target: src/app/(user)/account/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/account.ts#getUserProfile
---

# Account

The Lifter's profile, unit and theme preferences, and support.

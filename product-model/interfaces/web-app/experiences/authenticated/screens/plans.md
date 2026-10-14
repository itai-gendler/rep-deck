---
entities:
- entity: training-plan
  shows:
  - Name
  - Version
  - Start date
  - Weekday anchor
  collects:
  - Name
  - Version
  - Start date
  - Weekday anchor
- entity: training-day
  shows:
  - Label
  - Day number
  collects:
  - Label
- entity: exercise
  shows:
  - Name
  - Type
  - Target sets
  - Target rep range
  - Position
  collects:
  - Name
  - Type
  - Target sets
  - Target rep range
  - Position
entryPoints:
- web-app: /plans
references:
- kind: code
  role: implementation
  target: src/app/(user)/plans/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/plans.ts#getUserPlans
---

# Plans

Where the Lifter builds, versions and switches between training plans, their training days and planned exercises.

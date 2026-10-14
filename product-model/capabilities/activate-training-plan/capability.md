---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#setActivePlan
- kind: code
  role: implementation
  target: src/components/@plans/plans-overview-cards.tsx
---

# Activate training plan

Make an archived plan the one the Workout Log and Dashboard follow by choosing Set Active. The plan that was active becomes archived.

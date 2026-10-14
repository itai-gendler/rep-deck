---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#getUserPlans
- kind: code
  role: implementation
  target: src/app/(user)/plans/client-page.tsx
- kind: code
  role: implementation
  target: src/components/@plans/plan-details-card.tsx
---

# Browse training plans

See every training plan with its version, start date and whether it is Active or Archived, pick one, and read its training days and the exercises planned for a day.

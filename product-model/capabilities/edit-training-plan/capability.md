---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#updatePlan
- kind: code
  role: implementation
  target: src/components/@plans/plan-settings-card.tsx
---

# Edit training plan

Change the selected plan's name, version number, start date and weekday anchor in Plan Settings and save them. The plan is changed in place, so workouts already logged from it keep pointing at it.

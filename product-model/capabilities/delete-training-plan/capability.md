---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#deletePlan
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/delete-plan-dialog.tsx
---

# Delete training plan

Remove a plan with its training days and exercises after confirming Delete Training Plan?. Workouts logged from it stay in the Lifter's history.

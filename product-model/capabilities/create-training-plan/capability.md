---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#createPlan
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/create-plan-dialog.tsx
---

# Create training plan

Start a new training plan from Plans with a name, a start date (today unless changed) and either a plain rotation or a weekday on which Day 1 falls. A new plan is version 1 and is not active until set active.

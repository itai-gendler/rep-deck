---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#updatePlanDay
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/edit-day-dialog.tsx
---

# Edit training day

Rename a training day with Edit Training Day.

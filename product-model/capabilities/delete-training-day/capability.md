---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#deletePlanDay
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/delete-day-dialog.tsx
---

# Delete training day

Remove a training day and its exercises after confirming Delete Training Day?. The remaining days are renumbered so the plan stays Day 1, 2, 3 without gaps.

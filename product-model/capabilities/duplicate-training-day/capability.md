---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#duplicateDay
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/duplicate-day-dialog.tsx
---

# Duplicate training day

Copy a training day with all its exercises into a new last day of the same plan, labelled with (Copy) unless the Lifter changes it.

---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#duplicatePlan
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/duplicate-plan-dialog.tsx
---

# Duplicate training plan

Fork a plan into a new version: a copy with every training day and exercise in the same order, named with (Copy) and numbered one version higher unless the Lifter changes them. The copy is archived and has no start date.

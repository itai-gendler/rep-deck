---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#updateExercise
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/edit-exercise-dialog.tsx
---

# Edit exercise

Change a planned exercise's name, type, target sets and target rep range with Edit Exercise.

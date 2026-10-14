---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#deleteExercise
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/delete-exercise-dialog.tsx
---

# Delete exercise

Remove a planned exercise from a training day after confirming Delete Exercise?. Sets already logged for it keep their exercise name.

---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#addExerciseToDay
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/create-exercise-dialog.tsx
- kind: code
  role: implementation
  target: src/constants/exercises.ts
---

# Add exercise

Plan an exercise on the selected training day, picked from the built-in list of about two hundred exercises or typed as a custom one, with its type, target sets and target rep range. It goes to the end of the day.

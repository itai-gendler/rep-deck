---
appliesTo:
- type: capability
  id: delete-training-plan
- type: capability
  id: delete-training-day
- type: capability
  id: delete-exercise
references:
- kind: code
  role: implementation
  target: src/db/schema/workoutSessions.ts#workoutSessions
- kind: code
  role: implementation
  target: src/db/schema/workoutSets.ts#workoutSets
- kind: doc
  role: intent
  target: README.md
---

# Deleting plans, days or exercises never removes logged workouts

A logged workout and its sets stay in the Lifter's history when the plan, day or exercise it followed is deleted; the workout then shows without a plan name.

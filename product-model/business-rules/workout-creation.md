---
appliesTo:
- type: entity
  id: workout
  effect: creates
permits:
- actors:
  - lifter
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#finishWorkoutSession
---

# A signed-in Lifter logs workouts for themselves

Any signed-in Lifter may finish a workout; it belongs to that Lifter.

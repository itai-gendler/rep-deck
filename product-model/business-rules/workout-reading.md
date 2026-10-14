---
appliesTo:
- type: entity
  id: workout
  effect: reads
permits:
- related:
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#getWorkoutSessionDetails
- kind: code
  role: implementation
  target: src/actions/progress.ts#getRecentSessions
---

# Only its owner sees a workout

Workouts appear only in their owner's Workout page, Dashboard and Progress views.

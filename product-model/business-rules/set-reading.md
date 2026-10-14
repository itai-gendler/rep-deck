---
appliesTo:
- type: entity
  id: set
  effect: reads
permits:
- related:
  - verb: contains
    entity: workout
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#getExercisePerformanceBatch
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
---

# Only the workout's owner sees its sets

Sets, personal records and every strength figure built from them are visible only to the Lifter who logged them.

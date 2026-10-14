---
appliesTo:
- type: entity
  id: set
  effect: creates
  facts:
  - Personal record
- type: capability
  id: finish-workout
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#finishWorkoutSession
- kind: code
  role: implementation
  target: src/hooks/workout-log-hook/use-exercise-performance.ts#wouldBePR
---

# A set is a personal record when its estimated 1RM beats every earlier set of that exercise

When a workout is finished, each set's estimated 1RM is compared with every set of the same exercise the Lifter saved before; a higher value, or no earlier set at all, makes it a personal record. Sets of the same workout are not compared with each other, so one workout can record several personal records for one exercise. The flag is kept with the set and never recomputed.

## Rationale

Personal records drive the PR badges on the session summary, the Workout page, the Dashboard and Progress, and the New Personal Records announcement.

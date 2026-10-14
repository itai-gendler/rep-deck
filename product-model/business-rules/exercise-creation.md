---
appliesTo:
- type: entity
  id: exercise
  effect: creates
permits:
- related:
  - verb: contains
    entity: training-day
  - verb: contains
    entity: training-plan
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#addExerciseToDay
---

# Only the plan's owner adds an exercise

Exercises are planned on a day only by the Lifter who owns the day's plan.

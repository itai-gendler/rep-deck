---
appliesTo:
- type: entity
  id: exercise
  effect: changes
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
  target: src/actions/plans.ts#updateExercise
- kind: code
  role: implementation
  target: src/actions/plans.ts#reorderExercises
---

# Only the plan's owner changes an exercise

Editing an exercise and reordering a day's exercises are open only to the Lifter who owns the plan.

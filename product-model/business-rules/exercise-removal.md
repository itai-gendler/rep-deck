---
appliesTo:
- type: entity
  id: exercise
  effect: removes
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
  target: src/actions/plans.ts#deleteExercise
---

# Only the plan's owner deletes an exercise

Only the Lifter who owns a plan removes exercises from its days.

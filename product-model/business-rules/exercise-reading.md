---
appliesTo:
- type: entity
  id: exercise
  effect: reads
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
  target: src/actions/plans.ts#getUserPlans
---

# Only the plan's owner sees its exercises

A plan's exercises are as private as the plan.

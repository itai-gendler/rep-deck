---
appliesTo:
- type: entity
  id: training-day
  effect: reads
permits:
- related:
  - verb: contains
    entity: training-plan
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#getUserPlans
---

# Only the plan's owner sees its training days

A plan's days are as private as the plan.

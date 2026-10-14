---
appliesTo:
- type: entity
  id: training-day
  effect: changes
permits:
- related:
  - verb: contains
    entity: training-plan
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#updatePlanDay
- kind: code
  role: implementation
  target: src/actions/plans.ts#deletePlanDay
---

# Only the plan's owner changes a training day

Renaming a day, and the renumbering that follows deleting another day, happen only for the Lifter who owns the plan.

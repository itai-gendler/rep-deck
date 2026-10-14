---
appliesTo:
- type: entity
  id: training-day
  effect: removes
permits:
- related:
  - verb: contains
    entity: training-plan
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#deletePlanDay
---

# Only the plan's owner deletes a training day

Only the Lifter who owns a plan may delete one of its days.

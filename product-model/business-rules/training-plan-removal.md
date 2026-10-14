---
appliesTo:
- type: entity
  id: training-plan
  effect: removes
permits:
- related:
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#deletePlan
---

# Only its owner deletes a training plan

Only the Lifter who owns a plan may delete it.

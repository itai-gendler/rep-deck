---
appliesTo:
- type: entity
  id: training-plan
  effect: changes
permits:
- related:
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#updatePlan
- kind: code
  role: implementation
  target: src/actions/plans.ts#setActivePlan
---

# Only its owner changes a training plan

Editing a plan's settings and setting it active or archived are open only to the Lifter who owns it.

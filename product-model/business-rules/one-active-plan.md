---
appliesTo:
- type: entity
  id: training-plan
  effect: changes
  to: Active
- type: capability
  id: activate-training-plan
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#setActivePlan
---

# A Lifter has at most one active training plan

Setting a plan active archives whichever plan was active, so the Workout Log and the Dashboard always follow a single plan.

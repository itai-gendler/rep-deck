---
appliesTo:
- type: entity
  id: training-plan
  effect: creates
permits:
- actors:
  - lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#createPlan
- kind: code
  role: implementation
  target: src/actions/plans.ts#duplicatePlan
---

# A signed-in Lifter creates training plans for themselves

Any signed-in Lifter may create training plans, by starting one or by duplicating one of their own; each new plan belongs to the Lifter who created it.

---
appliesTo:
- type: entity
  id: training-day
  effect: creates
permits:
- related:
  - verb: contains
    entity: training-plan
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#addPlanDay
- kind: code
  role: implementation
  target: src/actions/plans.ts#duplicateDay
---

# Only the plan's owner adds a training day

Training days are added to, or copied within, a plan only by the Lifter who owns that plan.

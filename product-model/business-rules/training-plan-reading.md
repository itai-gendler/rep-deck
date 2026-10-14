---
appliesTo:
- type: entity
  id: training-plan
  effect: reads
permits:
- related:
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#getUserPlans
---

# Only its owner sees a training plan

A Lifter's plans are private: only the Lifter who owns a plan sees it on Plans, the Workout Log, the Dashboard or in their history.

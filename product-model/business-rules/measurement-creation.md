---
appliesTo:
- type: entity
  id: measurement
  effect: creates
permits:
- actors:
  - lifter
references:
- kind: code
  role: implementation
  target: src/actions/metrics.ts#createMeasurement
---

# A signed-in Lifter logs measurements for themselves

Any signed-in Lifter may add measurements; each belongs to that Lifter.

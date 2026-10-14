---
appliesTo:
- type: entity
  id: measurement
  effect: reads
permits:
- related:
  - verb: owns
    entity: lifter
references:
- kind: code
  role: implementation
  target: src/actions/metrics.ts#getMetricsData
---

# Only its owner sees a measurement

Measurements and every body figure built from them are visible only to the Lifter who logged them.

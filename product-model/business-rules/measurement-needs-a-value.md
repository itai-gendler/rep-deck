---
appliesTo:
- type: entity
  id: measurement
  effect: creates
references:
- kind: code
  role: implementation
  target: src/hooks/metrics-hook/use-quick-add-measurement.ts#useQuickAddMeasurement
---

# A measurement needs a date and at least one value

A measurement is saved only with a date and at least one value greater than zero.

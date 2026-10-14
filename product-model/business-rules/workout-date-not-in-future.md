---
appliesTo:
- type: entity
  id: workout
  effect: creates
  facts:
  - Date
references:
- kind: code
  role: implementation
  target: src/components/@workout-log/day-selector.tsx
---

# A workout's date is never in the future

The session date defaults to today and can be moved back to any earlier day, never forward past today.

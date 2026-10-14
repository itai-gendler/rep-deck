---
appliesTo:
- type: entity
  id: training-plan
  facts:
  - Weekday anchor
- type: capability
  id: finish-workout
- type: capability
  id: browse-training-plans
references:
- kind: code
  role: implementation
  target: src/lib/weekday-anchor.ts#dayIndexForDate
- kind: code
  role: implementation
  target: src/lib/weekday-anchor.ts#deriveWeekday
- kind: doc
  role: intent
  target: README.md
---

# On an anchored plan, day N falls N − 1 weekdays after the anchor

A plan's weekday anchor names the weekday of Day 1; every later day takes the following weekdays in turn. When the session date's weekday has no day, nothing is scheduled. Plans without an anchor are plain rotations.

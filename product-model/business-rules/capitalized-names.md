---
appliesTo:
- type: capability
  id: create-training-plan
- type: capability
  id: edit-training-plan
- type: capability
  id: add-training-day
- type: capability
  id: edit-training-day
- type: capability
  id: add-exercise
- type: capability
  id: edit-exercise
- type: capability
  id: finish-workout
references:
- kind: code
  role: implementation
  target: src/lib/to-capitalized.ts#toCapitalized
- kind: doc
  role: intent
  target: AGENTS.md
---

# Plan, day and exercise names are kept with each word capitalized

Names typed for plans, training days, planned exercises and logged sets are stored with the first letter of each word upper case and the rest lower case, so the same exercise typed differently is one exercise for personal records and history.

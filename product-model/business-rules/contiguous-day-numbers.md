---
appliesTo:
- type: capability
  id: add-training-day
- type: capability
  id: duplicate-training-day
- type: capability
  id: delete-training-day
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#deletePlanDay
- kind: doc
  role: intent
  target: README.md
---

# A plan's training days are numbered 1 to N without gaps

New and duplicated days are appended after the last day, and deleting a day renumbers the days after it.

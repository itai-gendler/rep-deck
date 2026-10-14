---
appliesTo:
- type: capability
  id: view-weekly-sessions
- type: entity
  id: workout
  facts:
  - Date
references:
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
---

# The weekly session target is the active plan's number of training days

Sessions this week counts workouts dated from Monday; the target is the active plan's number of days, or 4 without an active plan.

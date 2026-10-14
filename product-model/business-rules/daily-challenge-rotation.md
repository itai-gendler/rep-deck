---
appliesTo:
- type: capability
  id: view-daily-challenge
  contexts:
  - place: web-app::authenticated
references:
- kind: code
  role: implementation
  target: src/hooks/dashboard-hook/use-challenge.ts#useChallenge
---

# The daily challenge follows the day of the year

Each day shows the next challenge of the built-in list, so every Lifter sees the same challenge on the same day.

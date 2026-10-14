---
availability:
- place: web-app::authenticated
domain: dashboard
references:
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
- kind: code
  role: implementation
  target: src/hooks/dashboard-hook/use-kpi-cards.ts
---

# View best lift

See the heaviest set of a Big 4 lift in the last 30 days, with its reps and RPE and the difference from the next heaviest set, and switch between squat, bench press, deadlift and overhead press.

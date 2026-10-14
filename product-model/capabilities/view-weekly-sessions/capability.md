---
availability:
- place: web-app::authenticated
domain: dashboard
references:
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
---

# View weekly sessions

See how many workouts have been logged since Monday against the week's target, which is the active plan's number of training days.

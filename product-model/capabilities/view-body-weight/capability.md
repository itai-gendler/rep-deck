---
availability:
- place: web-app::authenticated
domain: dashboard
references:
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
---

# View body weight

See the most recently measured body weight with its date and the change from the measurement before it.

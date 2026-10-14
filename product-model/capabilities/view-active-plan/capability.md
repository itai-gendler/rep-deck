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
  target: src/components/@dashboard/kpi-cards.tsx
---

# View active plan

See on the Dashboard which training plan is active, with a link to Plans, or None when no plan is active.

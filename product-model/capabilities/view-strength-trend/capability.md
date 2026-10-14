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
  target: src/components/@dashboard/strength-chart.tsx
- kind: code
  role: implementation
  target: src/lib/big4-mapping.ts#resolveBig4Key
---

# View strength trend

Follow the estimated 1RM of the Big 4 lifts day by day over the last 60 days, with personal-record days marked, and hide or show each lift.

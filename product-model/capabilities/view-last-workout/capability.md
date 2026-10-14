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
  target: src/components/@dashboard/last-workout-card.tsx
---

# View last workout

See the most recent workout's date and plan name with up to five of its sets and their personal-record badges, and open it in full.

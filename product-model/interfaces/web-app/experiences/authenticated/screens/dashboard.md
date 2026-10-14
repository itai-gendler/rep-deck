---
entities:
- entity: training-plan
  shows:
  - Name
- entity: workout
  shows:
  - Date
- entity: set
  shows:
  - Exercise
  - Weight
  - Reps
  - RPE
  - Personal record
- entity: measurement
  shows:
  - Date
  - Body weight
entryPoints:
- web-app: /dashboard
references:
- kind: code
  role: implementation
  target: src/app/(user)/dashboard/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
---

# Dashboard

The Lifter's training at a glance: quick stats, the daily challenge, the estimated 1RM trend and the last workout.

---
availability:
- place: web-app::authenticated
domain: progress
references:
- kind: code
  role: implementation
  target: src/actions/progress.ts#getRecentSessions
- kind: code
  role: implementation
  target: src/components/@progress/session-history-list.tsx
---

# View session history

See the five most recent workouts with date, plan name, training day, up to three of their exercises and total volume.

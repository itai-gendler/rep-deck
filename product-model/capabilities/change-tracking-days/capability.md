---
availability:
- place: web-app::authenticated
domain: metrics
references:
- kind: code
  role: implementation
  target: src/hooks/metrics-hook/use-measurement-reminders.ts
- kind: code
  role: implementation
  target: src/components/@metrics/measurement-reminders.tsx
---

# Change tracking days

Choose on the Metrics page's Reminder card the weekdays the Lifter aims to measure on, or reset them to Monday and Thursday. The choice is kept on this device.

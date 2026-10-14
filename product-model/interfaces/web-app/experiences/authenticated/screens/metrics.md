---
entities:
- entity: measurement
  shows:
  - Date
  - Body weight
  - Body fat
  - Arms
  - Forearms
  - Thighs
  - Chest
  - Notes
  collects:
  - Date
  - Body weight
  - Body fat
  - Arms
  - Forearms
  - Thighs
  - Chest
  - Waist
  - Hips
  - Notes
- entity: lifter
  shows:
  - Tracking days
  collects:
  - Tracking days
entryPoints:
- web-app: /metrics
references:
- kind: code
  role: implementation
  target: src/app/(user)/metrics/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/metrics.ts#getMetricsData
---

# Metrics

Where the Lifter logs body measurements and checks quick stats, logging health and body trends.

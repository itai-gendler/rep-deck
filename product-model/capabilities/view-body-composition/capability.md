---
availability:
- place: web-app::authenticated
references:
- kind: code
  role: implementation
  target: src/components/@common/weight-body-fat-trend.tsx
- kind: code
  role: implementation
  target: src/hooks/progress-hook/use-body-metrics.ts
- kind: code
  role: implementation
  target: src/actions/progress.ts#getBodyMetrics
---

# View body composition

Follow body weight and body fat over time, with the change from the first to the latest entry. Offered on both Metrics and Progress.

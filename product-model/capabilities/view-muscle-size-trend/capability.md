---
availability:
- place: web-app::authenticated
domain: metrics
references:
- kind: code
  role: implementation
  target: src/actions/metrics.ts#getMetricsData
- kind: code
  role: implementation
  target: src/components/@metrics/muscle-size-trend.tsx
---

# View muscle size trend

Follow arms, forearms, thighs and chest measurements over the last three months.

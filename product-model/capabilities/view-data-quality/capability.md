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
  target: src/hooks/metrics-hook/use-data-quality.ts
---

# View data quality

See how many days have passed since the last measurement and the average gap between measurements, with a warning when measuring has lapsed.

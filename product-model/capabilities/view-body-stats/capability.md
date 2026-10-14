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
  target: src/hooks/metrics-hook/use-quick-stats.ts
---

# View body stats

See the latest body weight, body fat and arms measurement and the latest notes, each value with its change from the entry about four weeks earlier.

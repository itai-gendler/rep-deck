---
availability:
- place: web-app::authenticated
domain: progress
references:
- kind: code
  role: implementation
  target: src/components/@progress/all-measurements-trend.tsx
- kind: code
  role: implementation
  target: src/actions/metrics.ts#getMetricsData
---

# View measurements progress

Compare upper body (arms, forearms, chest) and lower body (waist, hips, thighs) measurements as percentage change from the first entry of the last three months.

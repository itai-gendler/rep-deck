---
availability:
- place: web-app::authenticated
domain: progress
references:
- kind: code
  role: implementation
  target: src/actions/progress.ts#getStrengthOverview
- kind: code
  role: implementation
  target: src/components/@progress/strength-overview-card.tsx
---

# View Big 4 strength trend

Follow the heaviest working set of each Big 4 lift day by day, with its reps and RPE, over two months, three months, six months or a year.

---
availability:
- place: web-app::authenticated
domain: progress
references:
- kind: code
  role: implementation
  target: src/actions/progress.ts#getTrainingFrequency
- kind: code
  role: implementation
  target: src/components/@progress/training-frequency-card.tsx
---

# View training frequency

See how many workouts fell on each weekday over the last twelve weeks.

---
entities:
- entity: measurement
  shows:
  - Date
  - Body weight
  - Body fat
  - Arms
  - Forearms
  - Chest
  - Waist
  - Hips
  - Thighs
- entity: workout
  shows:
  - Date
- entity: training-plan
  shows:
  - Name
- entity: training-day
  shows:
  - Label
- entity: set
  shows:
  - Exercise
  - Weight
  - Reps
  - RPE
  - Personal record
entryPoints:
- web-app: /progress
references:
- kind: code
  role: implementation
  target: src/app/(user)/progress/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/progress.ts
---

# Progress

Strength, size and body composition over time, with recent session volume and training frequency.

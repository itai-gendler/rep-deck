---
entities:
- entity: workout
  shows:
  - Date
- entity: training-plan
  shows:
  - Name
- entity: set
  shows:
  - Exercise
  - Set number
  - Weight
  - Reps
  - RPE
  - Note
  - Personal record
entryPoints:
- web-app: /workout-log/{id}
references:
- kind: code
  role: implementation
  target: src/app/(user)/workout-log/[id]/page.tsx
- kind: code
  role: implementation
  target: src/components/@workout-log/id/workout-detail.tsx
---

# Workout

One logged workout in detail, with the way to step to older and newer workouts or jump to another date.

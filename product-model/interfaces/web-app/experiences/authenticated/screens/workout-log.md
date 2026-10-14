---
entities:
- entity: training-plan
  shows:
  - Name
  - Weekday anchor
- entity: training-day
  shows:
  - Label
  - Day number
- entity: exercise
  shows:
  - Name
  - Type
  - Target sets
  - Target rep range
- entity: set
  shows:
  - Exercise
  - Weight
  - Reps
  - RPE
  - Note
  collects:
  - Exercise
  - Weight
  - Reps
  - RPE
  - Note
- entity: workout
  shows:
  - Date
  - Notes
  collects:
  - Date
  - Day number
  - Notes
entryPoints:
- web-app: /workout-log
references:
- kind: code
  role: implementation
  target: src/app/(user)/workout-log/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/workout.ts#getActiveWorkoutPlan
---

# Workout Log

Where the Lifter logs a workout against the active training plan: the session date and day, the planned exercises with their last results, extra work, and the session summary.

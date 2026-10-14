---
appliesTo:
- type: capability
  id: finish-workout
- type: capability
  id: view-last-performance
references:
- kind: code
  role: implementation
  target: src/app/(user)/workout-log/client-page.tsx
- kind: code
  role: implementation
  target: src/actions/workout.ts#getActiveWorkoutPlan
---

# Workouts are logged against the active training plan

The Workout Log offers logging only while the Lifter has an active plan, and every workout records that plan and the day trained.

---
availability:
- place: web-app::authenticated
domain: workout-log
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#finishWorkoutSession
- kind: code
  role: implementation
  target: src/app/(user)/workout-log/client-page.tsx
- kind: code
  role: implementation
  target: src/components/@workout-log/planned-exercises.tsx
- kind: code
  role: implementation
  target: src/components/@workout-log/quick-add-extra.tsx
- kind: code
  role: implementation
  target: src/components/@workout-log/active-session-summary.tsx
- kind: code
  role: implementation
  target: src/components/@workout-log/day-selector.tsx
- kind: code
  role: implementation
  target: src/hooks/workout-log-hook/use-workout-draft.ts
---

# Finish workout

Log a workout on the Workout Log against the active training plan: choose the session date (today unless changed, never in the future) and the training day, enter weight, reps and optional RPE for each planned set, mark exercises done, add extra sets of any exercise, write notes, and choose Finish Workout. Until it is finished, the session in progress is kept on the device. Finishing saves the workout with its sets and marks each personal record.

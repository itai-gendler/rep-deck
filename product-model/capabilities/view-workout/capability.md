---
availability:
- place: web-app::authenticated
domain: workout-log
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#getWorkoutSessionDetails
- kind: code
  role: implementation
  target: src/components/@workout-log/id/workout-detail.tsx
---

# View workout

Open one logged workout: its plan name and date, total volume, number of sets and exercises, personal records, and each exercise's sets with weight, reps, RPE and notes. From there the Lifter steps to the next older or newer workout or picks a date with a workout on the calendar.

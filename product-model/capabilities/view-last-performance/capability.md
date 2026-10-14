---
availability:
- place: web-app::authenticated
domain: workout-log
references:
- kind: code
  role: implementation
  target: src/actions/workout.ts#getExercisePerformanceBatch
- kind: code
  role: implementation
  target: src/actions/workout.ts#getLastSessionNote
- kind: code
  role: implementation
  target: src/hooks/workout-log-hook/use-exercise-performance.ts
---

# View last performance

While logging, see for each planned exercise of the selected day the Lifter's heaviest set ever (PR), the best set of the most recent workout that included it (Last) and the latest exercise note, and above the workout notes the notes of the last workout logged for this plan day.

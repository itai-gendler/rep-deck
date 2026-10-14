---
domain: workout-log
relations:
- entity: set
  verb: contains
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: src/db/schema/workoutSessions.ts#workoutSessions
- kind: code
  role: implementation
  target: src/actions/workout.ts#finishWorkoutSession
---

# Workout

One finished training session of a Lifter, logged against a day of their active training plan. A
workout keeps its sets and stays in the Lifter's history even after the plan it followed is deleted.

## Information kept

- **Date** — the day the session was trained, chosen by the Lifter and never later than today
- **Day number** — which training day of the plan was trained
- **Notes** — the Lifter's notes on the whole session

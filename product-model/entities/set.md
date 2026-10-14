---
domain: workout-log
references:
- kind: code
  role: implementation
  target: src/db/schema/workoutSets.ts#workoutSets
- kind: code
  role: implementation
  target: src/actions/workout.ts#finishWorkoutSession
---

# Set

One set performed in a workout: an exercise lifted for a number of reps at a weight, with an optional
RPE. A set is what personal records and strength trends are measured from.

## Information kept

- **Exercise** — the exercise name, each word capitalized
- **Set number** — the set's number within its exercise in that workout
- **Weight** — the load lifted, entered and shown in the Lifter's weight unit
- **Reps** — the repetitions performed
- **RPE** — the rate of perceived exertion from 0 to 10, if given
- **Note** — the exercise note written while logging, if any
- **Personal record** — whether the set's estimated 1RM beat every earlier set of the same exercise when it was saved

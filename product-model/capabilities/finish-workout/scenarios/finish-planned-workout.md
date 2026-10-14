---
kind: primary
routes:
  web: Web
steps:
- text: The Product opens the active training plan on today's date with the scheduled training day selected, or the first day of a rotation
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
    - Weekday anchor
  - entity: training-day
    effect: reads
    facts:
    - Label
    - Day number
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Lifter enters weight, reps and optional RPE for the planned sets of an exercise and an optional exercise note
  kind: actor
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts:
    - Name
    - Target sets
    - Target rep range
  - entity: set
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Lifter marks the exercise done, which moves its filled-in sets into the session summary
  kind: actor
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts:
    - Name
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - RPE
    - Note
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Lifter writes optional workout notes and chooses Finish Workout
  kind: actor
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product saves the workout under the chosen date and training day with every listed set, weights converted from the Lifter's unit, and decides for each set whether it is a personal record
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: creates
    facts:
    - Date
    - Day number
    - Notes
  - entity: set
    effect: creates
    facts:
    - Exercise
    - Set number
    - Weight
    - Reps
    - RPE
    - Note
    - Personal record
    with: workout
  - entity: training-day
    effect: reads
    facts:
    - Day number
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product confirms Workout completed with how much was logged and clears the session in progress
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
---

# Lifter logs the planned exercises

## Trigger

The Lifter trains a day of the active plan.

## Outcome

The workout and its sets are in the Lifter's history and the Workout Log is empty for the next session.

## Edge cases

- Choosing Done on a marked exercise takes its sets back out of the session summary and unlocks its inputs.
- Only sets with both weight and reps filled in are moved when an exercise is marked done.
- The session in progress survives reloading the page on the same device.
- The exercise note is kept on every set of that exercise.

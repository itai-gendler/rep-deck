---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter picks a Big 4 lift
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::progress
- text: The Product charts, for every day the lift was trained, its heaviest weight and best estimated 1RM in the Lifter's unit and marks personal-record days
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - Personal record
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::progress
---

# Lifter studies one lift

## Trigger

The Lifter wants to study one lift.

## Outcome

The Lifter sees working weight against estimated 1RM for that lift.

## Edge cases

- A lift never logged shows an empty state with Log Workout.

---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Open on the Dashboard's Last Workout
  kind: actor
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Product shows the workout's plan name, date, total volume, set and lift counts, personal records and each lift's sets in the Lifter's weight unit
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  - entity: training-plan
    effect: reads
    facts:
    - Name
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Set number
    - Weight
    - Reps
    - RPE
    - Note
    - Personal record
  contexts:
    web:
      place: web-app::authenticated::workout
---

# Lifter opens the last workout from the Dashboard

## Trigger

The Lifter wants the full detail of their last workout.

## Outcome

The workout's detail is shown.

## Edge cases

- A workout whose plan was deleted shows as Workout Session.

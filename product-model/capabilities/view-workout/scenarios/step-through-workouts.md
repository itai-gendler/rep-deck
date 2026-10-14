---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses the previous or next workout on a workout's page
  kind: actor
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::workout
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

# Lifter steps to an older or newer workout

## Trigger

The Lifter browses the history workout by workout.

## Outcome

The neighbouring workout by date is shown.

## Edge cases

- The arrows are unavailable at the oldest and newest workout.

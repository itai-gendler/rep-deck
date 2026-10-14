---
kind: primary
routes:
  web: Web
steps:
- text: The Product charts the heaviest set of each Big 4 lift per day trained over the last three months in the Lifter's weight unit, with reps and RPE
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - RPE
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::progress
- text: The Lifter picks two months, six months or a year instead
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::progress
- text: The Product charts the same over the chosen period
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Weight
  contexts:
    web:
      place: web-app::authenticated::progress
---

# Lifter follows Big 4 working weights

## Trigger

The Lifter opens Progress.

## Outcome

The Lifter sees their working weights over the chosen period.

## Edge cases

- Without Big 4 sets in the period the card links to the Workout Log.

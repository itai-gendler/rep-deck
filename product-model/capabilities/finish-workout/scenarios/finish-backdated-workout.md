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
- text: The Lifter picks an earlier date with the calendar or the previous-day arrow
  kind: actor
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product selects the training day scheduled for that date's weekday on an anchored plan
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Weekday anchor
  - entity: training-day
    effect: reads
    facts:
    - Day number
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Lifter logs the sets and marks the exercises done
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
---

# Lifter logs a missed session on its own date

## Trigger

The Lifter trained on an earlier day without logging it.

## Outcome

The workout is saved under the earlier date and its scheduled day.

## Decision points

### Is a day scheduled on that date?

Does the anchored plan have a training day on the chosen date's weekday?

- A day falls on that weekday → it is selected for the Lifter.
- No day falls on that weekday, or the plan is a rotation → the Lifter is told to pick the day trained and selects it.

## Edge cases

- Dates after today cannot be chosen.
- A day the Lifter picks by hand stays selected until the date changes.

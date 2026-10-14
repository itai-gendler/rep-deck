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
- text: The Lifter logs a set whose estimated 1RM is higher than any earlier set of the same lift
  kind: actor
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product marks the lift and the set with a PR badge in the session summary while logging
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
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
- text: The Product announces New Personal Records with the number of record sets
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Personal record
  contexts:
    web:
      place: web-app::authenticated::workout-log
---

# Lifter sets a personal record

## Trigger

The Lifter beats their best estimated 1RM on an exercise.

## Outcome

The record set is saved as a personal record and shows with a PR badge wherever sets are shown.

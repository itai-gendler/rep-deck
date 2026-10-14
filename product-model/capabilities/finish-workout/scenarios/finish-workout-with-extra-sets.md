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
- text: The Lifter picks a name from the built-in list or types a custom one under Add Extra Work, enters weight, reps and optional RPE, and chooses Add Extra Set
  kind: actor
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - RPE
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product adds the set to the session summary beside the others of the same name
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
---

# Lifter adds extra work beyond the plan

## Trigger

The Lifter does work the day does not plan.

## Outcome

The extra sets are saved in the workout beside the planned ones.

## Edge cases

- An extra set whose name matches a planned exercise of the day joins that exercise.

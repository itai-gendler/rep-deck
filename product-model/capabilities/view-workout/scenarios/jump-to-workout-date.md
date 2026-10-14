---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter picks a date marked with a workout on the calendar
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

# Lifter jumps to a workout by date

## Trigger

The Lifter looks for the workout of a particular day.

## Outcome

The workout logged on that date is shown.

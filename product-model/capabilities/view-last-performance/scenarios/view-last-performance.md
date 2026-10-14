---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter selects a training day to log
  kind: actor
  actor: lifter
  entities:
  - entity: training-day
    effect: reads
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product shows each planned exercise's heaviest set ever, the best set of its most recent workout and its latest exercise note, in the Lifter's weight unit
  kind: product
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
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product shows the notes of the last workout logged for this plan and day
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Notes
  contexts:
    web:
      place: web-app::authenticated::workout-log
---

# Lifter sees what they did last time

## Trigger

The Lifter is about to log a planned day.

## Outcome

The Lifter can aim to beat the last numbers shown beside each exercise.

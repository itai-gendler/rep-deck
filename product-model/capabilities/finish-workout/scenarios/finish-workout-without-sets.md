---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter opens the log page
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
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
- text: No sets are in the session summary
  kind: condition
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product keeps Finish Workout unavailable and asks for at least one set
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts: []
  - entity: set
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
---

# Workout without sets is not saved

## Trigger

The Lifter tries to finish before logging any set.

## Outcome

Nothing is saved.

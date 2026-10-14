---
kind: edge
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
- text: An exercise of the day has no logged sets yet
  kind: condition
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts:
    - Name
  - entity: set
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product shows a dash for its PR and Last
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
---

# Exercise never logged before

## Trigger

The Lifter plans an exercise they have never logged.

## Outcome

No previous numbers are shown for it.

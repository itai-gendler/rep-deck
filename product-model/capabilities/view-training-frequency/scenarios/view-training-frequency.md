---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter opens Progress
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::progress
- text: The Product counts the Lifter's workouts of the last twelve weeks by weekday and charts them Sunday to Saturday
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::progress
---

# Lifter checks which weekdays they train

## Trigger

The Lifter opens Progress.

## Outcome

The Lifter sees their weekly training pattern.

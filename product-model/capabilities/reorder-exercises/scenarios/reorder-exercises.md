---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter drags an exercise by its handle to a new place in the day
  kind: actor
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts:
    - Name
    - Position
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product shows the new order at once and saves every exercise's position 1 to N
  kind: product
  actor: lifter
  entities:
  - entity: exercise
    effect: changes
    facts:
    - Position
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter drags an exercise to a new place

## Trigger

The Lifter wants to train a day's exercises in another order.

## Outcome

The day and the Workout Log list the exercises in the new order.

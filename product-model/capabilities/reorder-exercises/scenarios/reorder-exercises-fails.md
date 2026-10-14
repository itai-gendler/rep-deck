---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter drags an exercise to a new place
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
- text: Saving the order fails or no longer matches the day's exercises
  kind: condition
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product puts the previous order back and reports Failed to save new order
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# New order cannot be saved

## Trigger

A reorder cannot be saved.

## Outcome

The day keeps its previous order.

---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter opens a stale or mistyped detail address
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated
- text: No workout of the Lifter's has that address
  kind: condition
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated
- text: The Product shows the not-found page with a way back to the Dashboard
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated
---

# Workout address that leads nowhere

## Trigger

The Lifter follows a stale or mistyped workout address.

## Outcome

No workout is shown.

---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter opens the Dashboard
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Product shows the latest measurement's body weight and date in the Lifter's unit, with the change from the previous measurement and View Metrics
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
    - Body weight
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter checks current body weight

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter sees their current body weight and its direction.

## Edge cases

- With no measurements the stat shows a dash and No records.

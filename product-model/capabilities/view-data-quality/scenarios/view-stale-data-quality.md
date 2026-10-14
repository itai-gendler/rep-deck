---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter opens Metrics
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product shows the days since the last measurement and the average gap between measurements
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The last measurement is more than 14 days old
  kind: condition
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product warns that nothing was logged in 14 or more days
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Measuring has lapsed

## Trigger

The Lifter opens Metrics after a long gap.

## Outcome

The Lifter is warned to measure soon.

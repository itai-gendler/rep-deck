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
- text: The Lifter has no measurements
  kind: condition
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product shows Never and invites the Lifter to log a first entry
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Nothing measured yet

## Trigger

A Lifter without measurements opens Metrics.

## Outcome

The Lifter is asked to add a first measurement.

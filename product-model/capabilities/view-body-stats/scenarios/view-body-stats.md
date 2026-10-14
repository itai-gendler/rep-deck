---
kind: primary
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
- text: The Product shows the latest notes, body weight, body fat and arms, each with its change from the latest entry at least four weeks old, or from the oldest entry
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
    - Body weight
    - Body fat
    - Arms
    - Notes
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Lifter reads quick body stats

## Trigger

The Lifter opens Metrics.

## Outcome

The Lifter sees where their body stands and its four-week direction.

## Edge cases

- Values never measured show a dash.

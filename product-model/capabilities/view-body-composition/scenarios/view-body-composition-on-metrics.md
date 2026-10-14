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
- text: The Product charts body weight in the Lifter's unit and body fat from the last three months of measurements, with the change across them
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
    - Body weight
    - Body fat
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Lifter checks body composition on Metrics

## Trigger

The Lifter opens Metrics.

## Outcome

The Lifter sees their weight and body-fat direction.

## Edge cases

- With no measurements in the last three months the chart covers every measurement.

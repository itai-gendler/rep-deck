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
- text: The last measurement is at most 14 days old
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
- text: The Product reports that the logging frequency is good for trends
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Measuring is on track

## Trigger

The Lifter opens Metrics.

## Outcome

The Lifter knows their trends rest on regular data.

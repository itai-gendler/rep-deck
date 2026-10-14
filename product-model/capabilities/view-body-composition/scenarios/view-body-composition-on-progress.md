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
- text: The Product charts body weight in the Lifter's unit and body fat across every measurement, with the change from first to latest
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
      place: web-app::authenticated::progress
---

# Lifter checks body composition on Progress

## Trigger

The Lifter opens Progress.

## Outcome

The Lifter sees their long-range weight and body-fat direction.

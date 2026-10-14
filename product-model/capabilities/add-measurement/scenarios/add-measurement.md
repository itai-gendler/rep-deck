---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter keeps today or picks another date, fills in at least one value and optional notes, and saves the entry
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product saves the measurement with weight and lengths converted from the Lifter's units and confirms it with the date
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: creates
    facts:
    - Date
    - Body weight
    - Body fat
    - Arms
    - Forearms
    - Thighs
    - Chest
    - Waist
    - Hips
    - Notes
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Lifter logs a measurement

## Trigger

The Lifter has weighed or measured themselves.

## Outcome

The measurement is in the history and the Metrics, Dashboard and Progress views include it.

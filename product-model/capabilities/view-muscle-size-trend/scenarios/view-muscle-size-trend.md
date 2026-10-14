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
- text: The Product charts arms, forearms, thighs and chest from the last three months of measurements in the Lifter's measurement unit, with the latest values
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
    - Arms
    - Forearms
    - Thighs
    - Chest
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Lifter follows muscle size

## Trigger

The Lifter opens Metrics.

## Outcome

The Lifter sees how their measurements are changing.

## Edge cases

- Without measurements in the period the card links to adding measurements.

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
- text: The Product charts arms, forearms and chest, and separately waist, hips and thighs, as percentage change from their first entry in the last three months
  kind: product
  actor: lifter
  entities:
  - entity: measurement
    effect: reads
    facts:
    - Date
    - Arms
    - Forearms
    - Chest
    - Waist
    - Hips
    - Thighs
  contexts:
    web:
      place: web-app::authenticated::progress
---

# Lifter compares measurement growth

## Trigger

The Lifter opens Progress.

## Outcome

The Lifter sees which measurements are growing or shrinking relative to each other.

## Edge cases

- A group with no entries asks the Lifter to log those measurements.

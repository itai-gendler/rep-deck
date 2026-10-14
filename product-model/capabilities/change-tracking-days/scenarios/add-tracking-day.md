---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter selects an unselected weekday under Target Tracking Days
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Tracking days
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product adds the weekday to the tracking days and confirms it
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: changes
    facts:
    - Tracking days
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Lifter adds a tracking day

## Trigger

The Lifter wants to measure on another weekday.

## Outcome

The weekday is among the Lifter's tracking days on this device.

---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter deselects a selected weekday
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
- text: The Product removes the weekday from the tracking days
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

# Lifter removes a tracking day

## Trigger

The Lifter no longer measures on that weekday.

## Outcome

The weekday is no longer a tracking day.

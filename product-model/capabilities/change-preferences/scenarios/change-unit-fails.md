---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter flips a unit switch
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Weight unit
    - Measurement unit
  contexts:
    web:
      place: web-app::authenticated::account
- text: Saving the unit fails
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::account
- text: The Product puts the previous unit back and reports the failure
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::account
---

# Unit change cannot be saved

## Trigger

A unit change cannot be saved.

## Outcome

The units stay as they were and the Lifter sees the error.

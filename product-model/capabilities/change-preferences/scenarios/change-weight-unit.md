---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter flips the weight switch between kilograms and pounds
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Weight unit
  contexts:
    web:
      place: web-app::authenticated::account
- text: The Product saves the weight unit and confirms it
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: changes
    facts:
    - Weight unit
  contexts:
    web:
      place: web-app::authenticated::account
---

# Lifter switches the weight unit

## Trigger

The Lifter trains in the other weight unit.

## Outcome

Every weight in the app, past and future, is entered and shown in the new unit.

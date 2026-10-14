---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter flips the length switch between inches and centimeters
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Measurement unit
  contexts:
    web:
      place: web-app::authenticated::account
- text: The Product saves the length unit and confirms it
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: changes
    facts:
    - Measurement unit
  contexts:
    web:
      place: web-app::authenticated::account
---

# Lifter switches the measurement unit

## Trigger

The Lifter measures in the other length unit.

## Outcome

Every tape measurement in the app is entered and shown in the new unit.

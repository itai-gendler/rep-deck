---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter clears the suggested label and submits
  kind: actor
  actor: lifter
  entities:
  - entity: training-day
    effect: reads
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The label is empty
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product asks for a valid day label and copies nothing
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Copy without a label is refused

## Trigger

The Lifter submits a duplicate day without a label.

## Outcome

No day is added.

---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter clears the suggested name and submits
  kind: actor
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The name is empty
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product asks for a valid plan name and copies nothing
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Copy without a name is refused

## Trigger

The Lifter submits a duplicate without a name.

## Outcome

No copy is made.

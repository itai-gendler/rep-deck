---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter submits the new plan form with an empty name
  kind: actor
  actor: lifter
  entities: []
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
- text: The Product keeps the form open and creates nothing
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Plan without a name is not created

## Trigger

The Lifter submits without a plan name.

## Outcome

No plan is created.

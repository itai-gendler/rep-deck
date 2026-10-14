---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter saves the form without filling in any value
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: No value greater than zero is filled in
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product asks for at least one value and saves nothing
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Measurement without values is refused

## Trigger

The Lifter submits an empty measurement form.

## Outcome

Nothing is saved.

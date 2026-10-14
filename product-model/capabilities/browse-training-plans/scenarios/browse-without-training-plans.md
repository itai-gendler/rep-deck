---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter opens Plans
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Lifter has no training plans
  kind: condition
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product shows an empty state with the way to create the first plan
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter has no plans yet

## Trigger

A Lifter without plans opens Plans.

## Outcome

An empty state invites the Lifter to create a first plan.

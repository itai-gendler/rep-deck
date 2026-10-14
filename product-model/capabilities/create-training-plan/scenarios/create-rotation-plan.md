---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter enters a plan name, keeps or picks a start date and leaves the weekday anchor on rotation
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product creates an archived version 1 training plan with the name capitalized
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: creates
    to: Archived
    facts:
    - Name
    - Version
    - Start date
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter creates a rotation plan

## Trigger

The Lifter chooses to create a new training plan.

## Outcome

A new, empty, archived plan appears among the Lifter's plans.

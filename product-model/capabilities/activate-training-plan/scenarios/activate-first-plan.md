---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter makes an archived training plan active from its card
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
- text: No other plan is active
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product makes the chosen plan active
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: changes
    from: Archived
    to: Active
    facts: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter activates a plan when none is active

## Trigger

The Lifter has no active plan and picks one.

## Outcome

The chosen plan is active and workouts can be logged against it.

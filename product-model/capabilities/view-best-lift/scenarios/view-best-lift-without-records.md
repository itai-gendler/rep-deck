---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter picks a Big 4 lift from the Best Lift menu
  kind: actor
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: No set of that lift was logged in the last 30 days
  kind: condition
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Product shows a dash and No records
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# No recent sets of the lift

## Trigger

The Lifter checks a lift they have not trained recently.

## Outcome

No best set is shown.

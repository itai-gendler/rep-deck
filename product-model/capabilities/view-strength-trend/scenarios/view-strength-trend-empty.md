---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter opens the Dashboard
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: No set of a Big 4 lift was logged in the last 60 days
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
- text: The Product shows an empty chart with a link to start logging
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# No Big 4 sets in the last 60 days

## Trigger

The Lifter has not trained the Big 4 recently.

## Outcome

No trend is shown.

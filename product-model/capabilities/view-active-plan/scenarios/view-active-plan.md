---
kind: primary
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
- text: The Product shows the active training plan's name as the Program stat with View Plans
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter sees the active plan

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter knows which plan they are following.

## Edge cases

- Without an active plan the stat shows None and No active program.

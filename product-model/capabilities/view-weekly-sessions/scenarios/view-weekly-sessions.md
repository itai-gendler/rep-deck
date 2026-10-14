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
- text: The Product counts the Lifter's workouts dated from this Monday and shows them against a target equal to the active plan's number of training days
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  - entity: training-day
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter checks this week's sessions

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter sees sessions this week and the target.

## Edge cases

- Without an active plan the target is 4.

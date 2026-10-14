---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter opens the log page
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Lifter has no active training plan
  kind: condition
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
- text: The Product shows No Active Plan with a link to activate a plan on Plans instead of the log
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::workout-log
---

# No workout can be logged without an active plan

## Trigger

A Lifter without an active plan opens the Workout Log.

## Outcome

Nothing can be logged until a plan is set active.

## Edge cases

- An active plan whose selected day has no exercises shows No Exercises Found with a link to Plans; extra sets can still be added.

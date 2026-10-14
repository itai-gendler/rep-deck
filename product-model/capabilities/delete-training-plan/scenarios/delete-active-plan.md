---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter chooses delete on the active training plan and confirms
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
- text: The Product removes the plan with its training days and exercises and keeps every workout logged from it
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: removes
    from: Active
  - entity: training-day
    effect: removes
    with: training-plan
  - entity: exercise
    effect: removes
    with: training-day
  - entity: workout
    effect: reads
    facts: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Lifter has no active plan until another one is made active
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter deletes the active plan

## Trigger

The Lifter deletes the plan they are currently following.

## Outcome

No plan is active, so the Workout Log asks the Lifter to activate a plan before logging.

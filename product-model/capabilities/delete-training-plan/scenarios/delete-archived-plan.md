---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses delete on an archived training plan and confirms
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
    from: Archived
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
---

# Lifter deletes an archived plan

## Trigger

The Lifter no longer needs an old plan or version.

## Outcome

The plan is gone from Plans; its workouts remain in the history.

---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter picks a name from the built-in list, which fills in its type, and fills in the targets
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product adds the exercise at the end of the day with its name capitalized
  kind: product
  actor: lifter
  entities:
  - entity: exercise
    effect: creates
    facts:
    - Name
    - Type
    - Target sets
    - Target rep range
    - Position
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter adds an exercise from the list

## Trigger

The Lifter plans a known exercise on a day.

## Outcome

The day lists the new exercise last with its targets.

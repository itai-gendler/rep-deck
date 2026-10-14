---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter changes the exercise's name, type or targets and saves
  kind: actor
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts:
    - Name
    - Type
    - Target sets
    - Target rep range
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product saves the changes with the name capitalized and confirms Exercise updated
  kind: product
  actor: lifter
  entities:
  - entity: exercise
    effect: changes
    facts:
    - Name
    - Type
    - Target sets
    - Target rep range
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter changes a planned exercise

## Trigger

The Lifter adjusts what a day plans.

## Outcome

The exercise shows its new targets; workouts already logged keep their own sets.

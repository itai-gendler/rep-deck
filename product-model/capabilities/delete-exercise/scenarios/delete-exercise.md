---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses delete on an exercise and confirms
  kind: actor
  actor: lifter
  entities:
  - entity: exercise
    effect: reads
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product removes the exercise from the day and keeps every logged set of it
  kind: product
  actor: lifter
  entities:
  - entity: exercise
    effect: removes
  - entity: set
    effect: reads
    facts:
    - Exercise
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter removes a planned exercise

## Trigger

The Lifter drops an exercise from a day.

## Outcome

The day no longer plans the exercise; its history is untouched.

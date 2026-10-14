---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter types a name that is not in the built-in list, which is marked as a custom entry, and keeps or changes the default targets
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product adds the exercise at the end of the day with type Chest and a target of 3 × 8-12 unless changed
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

# Lifter adds a custom exercise

## Trigger

The Lifter plans an exercise the list does not have.

## Outcome

The day lists the custom exercise last.

## Edge cases

- Adding stays unavailable until a name is entered.

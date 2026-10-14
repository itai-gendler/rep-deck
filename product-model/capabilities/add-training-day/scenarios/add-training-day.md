---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter enters a label for the new day
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product adds the training day after the last one with the label capitalized
  kind: product
  actor: lifter
  entities:
  - entity: training-day
    effect: creates
    facts:
    - Label
    - Day number
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter adds a day

## Trigger

The Lifter extends a plan by a day.

## Outcome

The plan has one more training day, with no exercises yet.

## Edge cases

- An empty label adds nothing.

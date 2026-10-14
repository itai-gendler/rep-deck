---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Duplicate on a training day and keeps or changes the suggested label
  kind: actor
  actor: lifter
  entities:
  - entity: training-day
    as: original
    effect: reads
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product adds a new last training day with that label and copies of the day's exercises in the same order
  kind: product
  actor: lifter
  entities:
  - entity: training-day
    as: copy
    effect: creates
    facts:
    - Label
    - Day number
  - entity: exercise
    effect: creates
    facts:
    - Name
    - Type
    - Target sets
    - Target rep range
    - Position
    with: copy
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter copies a day

## Trigger

The Lifter wants a variation of an existing day.

## Outcome

The plan has a new last day with the same exercises.

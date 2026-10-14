---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Duplicate on a training plan and keeps or changes the suggested name and version
  kind: actor
  actor: lifter
  entities:
  - entity: training-plan
    as: original
    effect: reads
    facts:
    - Name
    - Version
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product creates an archived copy with that name and version and copies of every training day and exercise in the same order
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    as: copy
    effect: creates
    to: Archived
    facts:
    - Name
    - Version
  - entity: training-day
    effect: creates
    facts:
    - Label
    - Day number
    with: copy
  - entity: exercise
    effect: creates
    facts:
    - Name
    - Type
    - Target sets
    - Target rep range
    - Position
    with: training-day
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter forks a plan into a new version

## Trigger

The Lifter wants a new version of a plan without losing the old one.

## Outcome

The new version sits beside the original, archived, ready to edit or set active.

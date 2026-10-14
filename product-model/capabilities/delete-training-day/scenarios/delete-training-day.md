---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses delete on a training day and confirms
  kind: actor
  actor: lifter
  entities:
  - entity: training-day
    as: removed
    effect: reads
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product removes the day with its exercises and renumbers the later days to close the gap
  kind: product
  actor: lifter
  entities:
  - entity: training-day
    as: removed
    effect: removes
  - entity: exercise
    effect: removes
    with: removed
  - entity: training-day
    as: later
    effect: changes
    facts:
    - Day number
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter deletes a day

## Trigger

The Lifter drops a day from a plan.

## Outcome

The day and its exercises are gone and the remaining days are numbered 1 to N.

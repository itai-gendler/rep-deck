---
kind: primary
routes:
  web: Web
steps:
- text: The Product lists the Lifter's training plans oldest start first, each with its version, start date and Active or Archived
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
    - Version
    - Start date
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Lifter selects a training plan and one of its days
  kind: actor
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
  - entity: training-day
    effect: reads
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product shows the plan's training days by number, with derived weekdays when the plan is anchored, and the day's exercises in position order with type and targets
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Weekday anchor
  - entity: training-day
    effect: reads
    facts:
    - Label
    - Day number
  - entity: exercise
    effect: reads
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

# Lifter reads a plan's structure

## Trigger

The Lifter opens Plans.

## Outcome

The Lifter sees the chosen plan's days and exercises and its settings.

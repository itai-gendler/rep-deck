---
kind: primary
routes:
  web: Web
steps:
- text: The Product charts, for each Big 4 lift, the best estimated 1RM of each day trained in the last 60 days and marks the days with a personal record
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - Personal record
  - entity: workout
    effect: reads
    facts:
    - Date
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Lifter hides or shows a lift on the chart
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter follows estimated 1RM

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter sees whether their strength is rising.

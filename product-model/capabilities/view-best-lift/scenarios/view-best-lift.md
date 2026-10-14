---
kind: primary
routes:
  web: Web
steps:
- text: The Product shows the heaviest bench press set of the last 30 days with reps, RPE and the change from the next heaviest set
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - RPE
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Lifter picks another Big 4 lift from the Best Lift menu
  kind: actor
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Exercise
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Product shows that lift's heaviest set of the last 30 days the same way
  kind: product
  actor: lifter
  entities:
  - entity: set
    effect: reads
    facts:
    - Weight
    - Reps
    - RPE
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter checks a Big 4 lift's best set

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter sees their recent best for the chosen lift in their weight unit.

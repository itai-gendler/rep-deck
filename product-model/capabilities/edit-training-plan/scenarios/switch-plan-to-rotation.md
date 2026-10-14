---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Rotation as the weekday anchor and saves
  kind: actor
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Weekday anchor
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product clears the anchor so the plan's days no longer fall on weekdays
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: changes
    facts:
    - Weekday anchor
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter removes the weekday anchor

## Trigger

The Lifter no longer trains on fixed weekdays.

## Outcome

The plan is a plain rotation and the Workout Log asks the Lifter to pick the day.

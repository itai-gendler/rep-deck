---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter opens the Dashboard
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
- text: The Product shows the latest workout's date, plan name and up to five of its sets with personal-record badges
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
  - entity: training-plan
    effect: reads
    facts:
    - Name
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
    - Personal record
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter glances at the last workout

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter sees their last session at a glance.

## Edge cases

- With no workouts the card offers Log Workout instead.

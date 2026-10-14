---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter opens Progress
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::progress
- text: The Product lists the five latest workouts with date, plan name, training day label, up to three lift names and total volume in the Lifter's unit
  kind: product
  actor: lifter
  entities:
  - entity: workout
    effect: reads
    facts:
    - Date
    - Day number
  - entity: training-plan
    effect: reads
    facts:
    - Name
  - entity: training-day
    effect: reads
    facts:
    - Label
  - entity: set
    effect: reads
    facts:
    - Exercise
    - Weight
    - Reps
  contexts:
    web:
      place: web-app::authenticated::progress
---

# Lifter reviews recent sessions

## Trigger

The Lifter opens Progress.

## Outcome

The Lifter sees their recent sessions and how much they moved.

## Edge cases

- A workout whose plan or day no longer exists shows Workout Session, Day N or Custom.
- With no workouts the list links to the Workout Log.

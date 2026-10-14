---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter enters a plan name and start date and picks the weekday Day 1 starts on
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product creates an archived version 1 training plan anchored to that weekday
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: creates
    to: Archived
    facts:
    - Name
    - Version
    - Start date
    - Weekday anchor
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter creates a weekday-anchored plan

## Trigger

The Lifter wants each training day tied to a weekday.

## Outcome

A new, empty, archived plan whose days will fall on weekdays counted from the anchor.

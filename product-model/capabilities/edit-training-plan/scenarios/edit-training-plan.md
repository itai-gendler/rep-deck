---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter changes the plan name, version number, start date or weekday anchor and chooses Save Changes
  kind: actor
  actor: lifter
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
    - Version
    - Start date
    - Weekday anchor
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product saves the settings in place, capitalizing the name, and confirms Plan updated
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    effect: changes
    facts:
    - Name
    - Version
    - Start date
    - Weekday anchor
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter saves plan settings

## Trigger

The Lifter adjusts a plan's settings.

## Outcome

The plan shows the new settings and its days take weekdays from the new anchor.

---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter changes the training day's label and saves
  kind: actor
  actor: lifter
  entities:
  - entity: training-day
    effect: reads
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product saves the label capitalized and confirms Day updated
  kind: product
  actor: lifter
  entities:
  - entity: training-day
    effect: changes
    facts:
    - Label
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter renames a day

## Trigger

The Lifter wants a clearer name for a day.

## Outcome

The day shows its new label; its number and exercises are unchanged.

---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Reset on the Reminder card
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Tracking days
  contexts:
    web:
      place: web-app::authenticated::metrics
- text: The Product puts the tracking days back to Monday and Thursday
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: changes
    facts:
    - Tracking days
  contexts:
    web:
      place: web-app::authenticated::metrics
---

# Lifter resets the tracking days

## Trigger

The Lifter wants the default schedule back.

## Outcome

Monday and Thursday are the tracking days.

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
- text: The Product shows today's challenge with its description, target, category and difficulty, and yesterday's and tomorrow's beside it
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Lifter reads today's challenge

## Trigger

The Lifter opens the Dashboard.

## Outcome

The Lifter knows today's optional challenge.

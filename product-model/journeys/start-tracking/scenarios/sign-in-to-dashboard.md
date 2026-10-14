---
kind: primary
result: achieved
routes:
  web: Web
steps:
- text: The Lifter chooses Continue with Google on the landing page
  kind: actor
  actor: lifter
  capability: sign-in
  entities: []
  contexts:
    web:
      place: web-app::public::landing
- text: The Product signs the Lifter in and opens the Dashboard
  kind: product
  actor: lifter
  capability: sign-in
  entities: []
  contexts:
    web:
      place: web-app::public
- text: The Product shows the active training plan's name as the Program stat
  kind: product
  actor: lifter
  capability: view-active-plan
  entities:
  - entity: training-plan
    effect: reads
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::dashboard
---

# Sign in and land on the Dashboard

## Trigger

A person on the landing page chooses Continue with Google.

## Outcome

The Lifter is signed in and the Dashboard shows their training at a glance.

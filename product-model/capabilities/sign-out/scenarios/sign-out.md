---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Sign out in the navigation
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated
- text: The Product ends the session and sends the Lifter to the landing page
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated
---

# Lifter signs out

## Trigger

The Lifter wants to leave the app on this device.

## Outcome

The session has ended and the landing page is shown.

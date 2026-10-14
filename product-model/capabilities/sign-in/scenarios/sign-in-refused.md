---
kind: edge
routes:
  web: Web
steps:
- text: The Lifter chooses Continue with Google on the landing page
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::public::landing
- text: Google reports an error or returns without a sign-in code
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::public
- text: The Product returns the Lifter to the landing page with the error and no session
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::public::landing
---

# Google sign-in does not complete

## Trigger

The Lifter starts signing in with Google and the provider does not complete it.

## Outcome

The Lifter stays signed out on the landing page.

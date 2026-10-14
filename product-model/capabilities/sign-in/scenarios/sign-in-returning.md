---
kind: primary
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
- text: The Lifter approves the sign-in on Google's consent page
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::public
- text: The Product finds the Lifter's existing profile and keeps its name and preferences
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Email
  contexts:
    web:
      place: web-app::public
- text: The Product signs the Lifter in and opens the Dashboard
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::public
---

# Returning Lifter signs in

## Trigger

A Lifter who has signed in before chooses Continue with Google.

## Outcome

The Lifter is signed in with their existing profile and lands on the Dashboard.

## Edge cases

- A profile missing its name or avatar has them filled in from the Google account on this sign-in.
- A signed-in Lifter who opens the landing page is sent straight to the Dashboard.

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
- text: The Product creates the Lifter with the Google name capitalized, the Google email, a generated avatar, kilograms and inches
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: creates
    facts:
    - Name
    - Email
    - Avatar
    - Member since
    - Weight unit
    - Measurement unit
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

# First sign-in creates the Lifter

## Trigger

A person without a Rep Deck profile chooses Continue with Google.

## Outcome

The Lifter is signed in with a new profile in kilograms and inches and lands on the Dashboard.

## Edge cases

- Without a Google full name, the part of the email before the @ becomes the name.

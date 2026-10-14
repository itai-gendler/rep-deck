---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter chooses Send feedback
  kind: actor
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::account
- text: The Product opens a new email to the maintainer titled Rep Deck — Feedback with the app version and browser filled in
  kind: product
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::account
---

# Lifter emails feedback

## Trigger

The Lifter has an idea or a problem to share.

## Outcome

A prefilled feedback email is open in the Lifter's email app.

## Edge cases

- Report a bug opens the project's public issue tracker in a new tab instead.

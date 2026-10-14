---
kind: validation
routes:
  web: Web
steps:
- text: The Lifter clears the display name or leaves it as it was
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::account
- text: Saving stays unavailable while the name is empty or unchanged
  kind: condition
  actor: lifter
  entities: []
  contexts:
    web:
      place: web-app::authenticated::account
---

# Empty or unchanged name is not saved

## Trigger

The Lifter edits the name field without producing a new name.

## Outcome

Nothing is saved and the name stays as it was.

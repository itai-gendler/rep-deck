---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter types a new display name and chooses save
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Name
    - Email
  contexts:
    web:
      place: web-app::authenticated::account
- text: The Product saves the trimmed name and confirms Profile updated
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: changes
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::account
---

# Lifter renames themselves

## Trigger

The Lifter wants a different display name.

## Outcome

The new name is kept and shown in the navigation and profile.

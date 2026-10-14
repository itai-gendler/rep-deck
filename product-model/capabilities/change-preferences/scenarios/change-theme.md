---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter picks one of the eight themes under App Theme
  kind: actor
  actor: lifter
  entities:
  - entity: lifter
    effect: reads
    facts:
    - Theme
  contexts:
    web:
      place: web-app::authenticated::account
- text: The Product applies the theme at once, recolors the avatar and keeps the choice on this device
  kind: product
  actor: lifter
  entities:
  - entity: lifter
    effect: changes
    facts:
    - Theme
  contexts:
    web:
      place: web-app::authenticated::account
---

# Lifter picks an app theme

## Trigger

The Lifter wants the app in another color theme.

## Outcome

The app shows the chosen theme on this device.

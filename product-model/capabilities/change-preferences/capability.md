---
availability:
- place: web-app::authenticated
domain: account
references:
- kind: code
  role: implementation
  target: src/actions/account.ts#updatePreferences
- kind: code
  role: implementation
  target: src/hooks/account-hook/use-preferences.ts
- kind: code
  role: implementation
  target: src/hooks/account-hook/use-theme-selection.ts
---

# Change preferences

Choose the weight unit, the measurement unit and the app theme in the Account page's Preferences. Units are saved with the account as soon as a switch is flipped; the theme applies at once and is kept on this device.

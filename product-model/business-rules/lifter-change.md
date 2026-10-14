---
appliesTo:
- type: entity
  id: lifter
  effect: changes
permits:
- self: true
references:
- kind: code
  role: implementation
  target: src/actions/account.ts#updateProfile
- kind: code
  role: implementation
  target: src/actions/account.ts#updatePreferences
---

# Only the Lifter changes their own profile and preferences

Name, units, theme and tracking days are changed only by the Lifter they belong to.

---
appliesTo:
- type: entity
  id: lifter
  effect: creates
permits:
- actors:
  - lifter
references:
- kind: code
  role: implementation
  target: src/actions/auth.ts#syncUserWithDatabase
---

# A Lifter's profile is created by their own first sign-in

Signing in with a Google account that has no profile yet creates the profile for that person.

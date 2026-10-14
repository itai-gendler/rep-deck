---
appliesTo:
- type: context
  context:
    place: web-app::authenticated
references:
- kind: code
  role: implementation
  target: src/lib/units.ts
- kind: code
  role: implementation
  target: src/components/@common/unit-provider.tsx#UnitProvider
- kind: doc
  role: intent
  target: AGENTS.md
---

# Weights and lengths are entered and shown in the Lifter's chosen units

Every weight is kept in kilograms and every tape measurement in inches, and converted to and from the Lifter's weight unit and measurement unit wherever they are entered or shown.

## Rationale

Switching units never rewrites history: the same kept values are shown in the new unit.

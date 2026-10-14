---
appliesTo:
- type: capability
  id: finish-workout
- type: capability
  id: view-strength-trend
- type: capability
  id: view-lift-performance
references:
- kind: code
  role: implementation
  target: src/actions/progress.ts
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
- kind: doc
  role: intent
  target: README.md
---

# Estimated 1RM is weight × (1 + reps ÷ 30)

Rep Deck estimates a one-rep max with the Epley formula from a set's weight and reps; a single rep is its own weight on Progress. The estimate is always derived from the kept weight and reps, never entered or stored.

## Rationale

Keeping only weight and reps lets the formula change without rewriting history.

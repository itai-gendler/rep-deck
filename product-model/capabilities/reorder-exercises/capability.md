---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#reorderExercises
- kind: code
  role: implementation
  target: src/components/@plans/day-exercises-list-inner.tsx
---

# Reorder exercises

Drag a day's exercises into a new order. The new order shows at once and is saved as positions 1 to N; the Workout Log lists the day's exercises in that order.

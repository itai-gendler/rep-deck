---
domain: plans
references:
- kind: code
  role: implementation
  target: src/db/schema/exerciseTemplates.ts#exerciseTemplates
- kind: code
  role: implementation
  target: src/constants/exercises.ts
---

# Exercise

A planned exercise on a training day, with the sets and reps the Lifter aims for. Its name comes from
the built-in exercise list or is typed as a custom exercise.

## Information kept

- **Name** — the exercise name, each word capitalized
- **Type** — the muscle group or category, filled in from the preset list when one is picked
- **Target sets** — how many sets are planned, 3 unless changed
- **Target rep range** — the planned reps, such as 8-12, 8-12 unless changed
- **Position** — its order within the day, from 1 up

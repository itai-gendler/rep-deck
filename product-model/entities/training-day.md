---
domain: plans
relations:
- entity: exercise
  verb: contains
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: src/db/schema/programDayTemplates.ts#programDayTemplates
---

# Training day

One numbered day of a training plan, such as "Push A" or "Leg Day", holding the exercises planned
for it. On a plan with a weekday anchor, each day also has a weekday derived from its number.

## Information kept

- **Label** — the day's name, each word capitalized
- **Day number** — its place in the plan, from 1 up without gaps

---
domain: plans
relations:
- entity: training-day
  verb: contains
  cardinality: one-to-many
- entity: workout
  verb: guides
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: src/db/schema/programTemplates.ts#programTemplates
- kind: code
  role: implementation
  target: src/actions/plans.ts
---

# Training plan

A Lifter's training program: an ordered set of training days, each with planned exercises. Plans are
versioned by duplicating them into a new version, and exactly one of a Lifter's plans can be the active
one that the Workout Log follows.

## Information kept

- **Name** — the plan's name, each word capitalized
- **Version** — the version number shown as v1, v2 and so on
- **Start date** — when the plan started, if set
- **Weekday anchor** — the weekday on which Day 1 falls, or none for a plain rotation

## States

### Archived

Any plan that is not the active one, including a newly created or duplicated plan.

### Active

The one plan the Workout Log and the Dashboard follow.

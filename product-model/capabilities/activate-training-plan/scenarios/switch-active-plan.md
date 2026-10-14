---
kind: primary
routes:
  web: Web
steps:
- text: The Lifter makes an archived training plan active from its card
  kind: actor
  actor: lifter
  entities:
  - entity: training-plan
    as: chosen
    effect: reads
    facts:
    - Name
  contexts:
    web:
      place: web-app::authenticated::plans
- text: The Product archives the previously active plan and makes the chosen plan active
  kind: product
  actor: lifter
  entities:
  - entity: training-plan
    as: previous
    effect: changes
    from: Active
    to: Archived
    facts: []
  - entity: training-plan
    as: chosen
    effect: changes
    from: Archived
    to: Active
    facts: []
  contexts:
    web:
      place: web-app::authenticated::plans
---

# Lifter switches the active plan

## Trigger

The Lifter moves to another plan or version.

## Outcome

The chosen plan is the only active plan and the Workout Log follows it.

## Edge cases

- Set Active is not offered on the plan that is already active.

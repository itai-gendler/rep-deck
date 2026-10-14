---
appliesTo:
- type: entity
  id: set
  effect: creates
  facts:
  - Weight
  - Reps
  - RPE
references:
- kind: code
  role: implementation
  target: src/hooks/workout-log-hook/use-exercise-inputs.ts#useExerciseInputs
- kind: code
  role: implementation
  target: src/hooks/workout-log-hook/use-ranged-input.ts
---

# Planned set entries stay within weight 0–1000, reps 1–1000 and RPE 0–10

Values typed for planned sets outside these ranges are brought to the nearest limit; RPE is held to 0–10 for extra sets too.

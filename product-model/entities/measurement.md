---
domain: metrics
references:
- kind: code
  role: implementation
  target: src/db/schema/bodyMeasurements.ts#bodyMeasurements
- kind: code
  role: implementation
  target: src/actions/metrics.ts#createMeasurement
---

# Measurement

One dated entry of body measurements. Any subset of the values may be filled in.

## Information kept

- **Date** — the day the measurement was taken
- **Body weight** — entered and shown in the Lifter's weight unit
- **Body fat** — percentage
- **Arms** — tape measurement, in the Lifter's measurement unit
- **Forearms** — tape measurement, in the Lifter's measurement unit
- **Thighs** — tape measurement, in the Lifter's measurement unit
- **Chest** — tape measurement, in the Lifter's measurement unit
- **Waist** — tape measurement, in the Lifter's measurement unit
- **Hips** — tape measurement, in the Lifter's measurement unit
- **Notes** — free text such as the conditions of the measurement

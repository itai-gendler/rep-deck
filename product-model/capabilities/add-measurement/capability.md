---
availability:
- place: web-app::authenticated
domain: metrics
references:
- kind: code
  role: implementation
  target: src/actions/metrics.ts#createMeasurement
- kind: code
  role: implementation
  target: src/hooks/metrics-hook/use-quick-add-measurement.ts
- kind: code
  role: implementation
  target: src/components/@metrics/quick-add-measurement-form.tsx
---

# Add measurement

Log a dated body measurement on the Metrics page: any of body weight, body fat and the arms, forearms, thighs, chest, waist and hips tape measurements, plus notes. Values are entered in the Lifter's units.

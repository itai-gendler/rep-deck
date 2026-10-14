---
availability:
- place: web-app::authenticated
domain: plans
references:
- kind: code
  role: implementation
  target: src/actions/plans.ts#addPlanDay
- kind: code
  role: implementation
  target: src/components/@plans/@plan-dialogs/create-day-dialog.tsx
---

# Add training day

Add a labelled training day to the selected plan. It becomes the plan's last day, numbered one after the current last day.

---
appliesTo:
- type: capability
  id: view-best-lift
- type: capability
  id: view-strength-trend
- type: capability
  id: view-big-4-strength-trend
- type: capability
  id: view-lift-performance
references:
- kind: code
  role: implementation
  target: src/lib/big4-mapping.ts#resolveBig4Key
- kind: code
  role: implementation
  target: src/actions/dashboard.ts#getDashboardData
---

# Strength views follow only the Big 4 lifts

The Best Lift stat, the estimated 1RM trend, the Big 4 strength trend and lift performance cover squat, bench press, deadlift and overhead press, recognising each by its exercise name and common variants of it.

---
availability:
- place: web-app::authenticated
domain: progress
references:
- kind: code
  role: implementation
  target: src/actions/progress.ts#getLiftDetails
- kind: code
  role: implementation
  target: src/components/@progress/individual-lift-details-card.tsx
---

# View lift performance

Pick one Big 4 lift and follow, for each day it was trained, the heaviest weight and the best estimated 1RM, with personal-record days marked.

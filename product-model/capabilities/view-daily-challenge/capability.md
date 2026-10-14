---
availability:
- place: web-app::authenticated
domain: dashboard
references:
- kind: code
  role: implementation
  target: src/hooks/dashboard-hook/use-challenge.ts
- kind: code
  role: implementation
  target: src/constants/challenges.ts
---

# View daily challenge

See today's bodyweight challenge with its target, category and difficulty, beside yesterday's and tomorrow's. The challenge comes from a built-in list and changes every day.

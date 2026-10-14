---
actors:
- lifter
references:
- kind: code
  role: implementation
  target: src/app/auth/callback/route.ts
- kind: code
  role: implementation
  target: src/proxy.ts#proxy
---

# Start tracking

## Goal

A person signs in with Google and arrives at their training overview.

## Success criterion

The Lifter is signed in and sees the Dashboard with their active plan.

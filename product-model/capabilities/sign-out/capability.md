---
availability:
- place: web-app::authenticated
references:
- kind: code
  role: implementation
  target: src/actions/auth.ts#signOut
- kind: code
  role: implementation
  target: src/components/@auth/sign-out-btn.tsx
---

# Sign out

End the session from the navigation on any signed-in page and return to the landing page.

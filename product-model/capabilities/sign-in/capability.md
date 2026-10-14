---
availability:
- place: web-app::public
domain: account
references:
- kind: code
  role: implementation
  target: src/actions/auth.ts#signInWithGoogle
- kind: code
  role: implementation
  target: src/app/auth/callback/route.ts
- kind: code
  role: implementation
  target: src/actions/auth.ts#syncUserWithDatabase
- kind: code
  role: implementation
  target: src/components/@auth/google-btn.tsx
---

# Sign in

Start or resume tracking by continuing with Google from the landing page. The first sign-in creates the Lifter's profile from the Google account; later sign-ins reuse it. A signed-in Lifter lands on the Dashboard.

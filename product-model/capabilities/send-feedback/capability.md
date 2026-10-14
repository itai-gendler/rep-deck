---
availability:
- place: web-app::authenticated
domain: account
references:
- kind: code
  role: implementation
  target: src/components/@account/feedback-section.tsx
- kind: code
  role: implementation
  target: src/lib/contact.ts#buildFeedbackMailtoUrl
---

# Send feedback

Write to the maintainer from the Account page's Support section through the Lifter's own email app, with the app version and browser filled in.

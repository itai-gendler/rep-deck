---
availability:
- place: web-app::authenticated
domain: account
references:
- kind: code
  role: implementation
  target: src/actions/account.ts#updateProfile
- kind: code
  role: implementation
  target: src/hooks/account-hook/use-profile-form.ts
---

# Edit profile

Change the display name on the Account page. The email comes from Google and cannot be changed here.

---
kind: person
acts: external
relations:
- entity: training-plan
  verb: owns
  cardinality: one-to-many
- entity: workout
  verb: owns
  cardinality: one-to-many
- entity: measurement
  verb: owns
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: src/db/schema/users.ts#users
- kind: code
  role: implementation
  target: src/actions/auth.ts#syncUserWithDatabase
- kind: code
  role: implementation
  target: src/actions/account.ts#getUserPreferences
---

# Lifter

A person who trains and tracks their training in Rep Deck after signing in with Google. Every plan,
workout and measurement belongs to exactly one Lifter, who alone works with it.

## Information kept

- **Name** — display name, taken from the Google account on first sign-in and editable on the Account page
- **Email** — the Google account's email address, shown but not editable
- **Avatar** — a generated avatar picture that follows the chosen theme's colors
- **Member since** — when the Lifter first signed in
- **Weight unit** — kilograms or pounds, kilograms until changed; every weight is entered and shown in it
- **Measurement unit** — inches or centimeters, inches until changed; every tape measurement is entered and shown in it
- **Theme** — one of eight app themes, Mocha until changed, kept on the device where it was chosen
- **Tracking days** — the weekdays the Lifter aims to measure on, Monday and Thursday until changed, kept on the device

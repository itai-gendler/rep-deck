---
id: rep-deck
summary: 'A strength-training tracker: build versioned training plans, log workouts set by set with RPE, catch personal records as they happen, and follow strength and body trends over time.'
category: fitness
tags:
- strength-training
- workout-tracking
- body-measurements
authors:
- name: rudra-xi
  url: https://github.com/rudra-xi
license: MIT
languages:
- en
limitations:
- People sign in only with a Google account.
- A finished workout is never edited or deleted.
- An unfinished workout is kept only on the device where it was started.
- 'Strength charts follow only the Big 4 lifts: squat, bench press, deadlift and overhead press.'
- The app theme and measurement tracking days are kept on the device, not with the account.
references:
- kind: doc
  role: intent
  target: README.md
- kind: doc
  role: context
  target: AGENTS.md
- kind: code
  role: implementation
  target: src/proxy.ts#proxy
---

# Rep Deck

Rep Deck is a strength-training tracker for lifters who care about raw progression: load, volume,
intensity and consistency. A Lifter signs in with Google, builds training plans of numbered training
days and planned exercises, keeps versions of those plans and sets one active, then logs each workout
against the active plan, set by set with weight, reps and RPE. Every saved set is checked for a
personal record by estimated one-rep max. Body weight, body fat and six tape measurements are logged
separately, and a dashboard, a metrics page and a progress page turn both histories into trends.

## Intent

"Log every set, maintain versioned training plans, monitor body composition, and track estimated 1RM
trends across time." Plans can be anchored to a weekday so the workout log opens on the day scheduled
for the chosen date; deleting a plan never takes the logged workouts with it; weights and lengths are
kept in one standard unit and shown in each Lifter's chosen units.

---
appliesTo:
- type: capability
  id: finish-workout
- type: capability
  id: view-last-performance
references:
- kind: code
  role: implementation
  target: src/hooks/workout-log-hook/use-workout-draft.ts#useWorkoutDraft
- kind: code
  role: implementation
  target: src/lib/storage.ts
---

# An unfinished workout stays on the device until it is finished

Sets moved into the session summary, the selected training day, the typed inputs and the workout notes survive reloading the Workout Log on the same device, and are cleared only when the workout is finished.

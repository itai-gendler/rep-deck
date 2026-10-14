---
appliesTo:
- type: capability
  id: view-data-quality
- type: entity
  id: measurement
  facts:
  - Date
references:
- kind: code
  role: implementation
  target: src/hooks/metrics-hook/use-data-quality.ts#useDataQuality
---

# Measurements count as stale after 14 days without one

Data quality warns once the last measurement is more than 14 days old, and when there is none.

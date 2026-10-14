---
scope: 'The Rep Deck Next.js app: routes, server actions, feature components, hooks, helpers and database schema.'
method: Read-only static inspection of source and documentation at commit 5c201653bc4cd528265a9fa4ce9b8b6907334f6e; nothing was run.
covered:
- description: Signed-in pages and their client views.
  paths:
  - src/app/(user)/
- description: Landing page entry, sign-in callback and route protection.
  paths:
  - src/app/page.tsx
  - src/app/auth/
  - src/proxy.ts
  - src/utils/supabase/
  - src/components/@auth/
- description: Server actions for accounts, plans, workouts, measurements, dashboard and progress.
  paths:
  - src/actions/
- description: Feature components for the account, dashboard, metrics, plans, progress and workout log pages.
  paths:
  - src/components/@account/
  - src/components/@common/
  - src/components/@dashboard/
  - src/components/@metrics/
  - src/components/@plans/
  - src/components/@progress/
  - src/components/@workout-log/
- description: Feature hooks holding drafts, preferences, reminders and chart derivations.
  paths:
  - src/hooks/
- description: Unit conversion, weekday anchoring, Big 4 recognition, capitalization, draft storage and contact helpers.
  paths:
  - src/lib/
- description: Database schema of users, plans, days, exercises, workouts, sets and measurements.
  paths:
  - src/db/schema/
- description: Built-in exercise list, rep ranges, daily challenges and navigation.
  paths:
  - src/constants/
exclusions:
- description: Design-system primitives, theme stylesheets, fonts and avatar art.
  paths:
  - src/components/ui/
  - src/app/globals.css
  - src/app/themes.css
  - src/app/utilities.css
  - src/utils/dicebear/
  - public/
- description: Marketing sections of the landing page.
  paths:
  - src/components/@landing/
- description: Development seed data, migrations and local database configuration.
  paths:
  - src/db/seed.ts
  - drizzle/
  - drizzle.config.ts
  - supabase/
- description: Error and not-found boundaries and the root layout shell.
  paths:
  - src/app/error.tsx
  - src/app/global-error.tsx
  - src/app/not-found.tsx
  - src/app/layout.tsx
  - src/app/provider.tsx
unmapped:
- description: Privacy policy and terms of service pages.
  paths:
  - src/app/(extra)/
- description: Standalone sign-in and current-user API routes.
  paths:
  - src/app/api/
limitations: []
---

# Coverage

# Project Instructions

## Goal

Build production-quality software.
Prioritize correctness, maintainability, security, and simplicity.

## Workflow

Before modifying code:

1. Read the issue completely.
2. Inspect relevant existing code.
3. Identify existing patterns.
4. Make a short implementation plan.
5. Implement the smallest reasonable change.

Do not rewrite unrelated code.

## Git

Never push directly to main.

Use branches:

feature/<issue>-<description>
fix/<issue>-<description>

Every change must go through a pull request.

## Quality

Before considering work complete, run:

npm run lint
npm run typecheck
npm run test
npm run build

Run relevant Playwright tests when UI behavior changes.

Do not mark the task complete if required tests are failing.

## Architecture

Prefer existing project patterns over introducing new abstractions.

Do not introduce a new library unless there is a clear benefit.

Keep business logic separate from UI components.

Avoid duplicate logic.

## Database

Never delete production data.

Database migrations must be backward compatible whenever possible.

Call out destructive migrations explicitly in the pull request.

## Security

Never commit:

- passwords
- access tokens
- API keys
- private keys
- .env files

Do not weaken authentication or authorization to make tests pass.

## UI

For UI changes:

- verify desktop
- verify mobile
- test loading state
- test empty state
- test error state

Attach screenshots when practical.

## Pull Request

Every PR must explain:

1. What changed
2. Why
3. Files/components affected
4. Tests performed
5. Screenshots for UI changes
6. Risks
7. Migration or rollback considerations

## Scope

If the issue is ambiguous, choose the smallest implementation
that satisfies the acceptance criteria.

Do not implement unrelated improvements.

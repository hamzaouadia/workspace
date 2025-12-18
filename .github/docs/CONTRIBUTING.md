# Contributing

This project follows trunk-based development.

## Branching
- Base branch: `main` (protected, always releasable)
- Short-lived branches only:
  - `feat/<scope>`
  - `fix/<scope>`
  - `chore/<scope>`
  - `docs/<scope>`
- Open a PR early (draft OK). Keep PRs small and focused.

## Commits & PRs
- Use Conventional Commits in PR titles: `feat: …`, `fix: …`, etc.
- Squash merge PRs into `main` and delete the branch.
- Require at least 1 approval and passing CI.

## CI checks (required)
- Install: `npm ci`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

## Preview deploys
- Connect the repo to Vercel/Netlify to get a Preview URL on every PR.

## Environment variables
- Do not commit `.env*` files. Use project hosting environment variables.

## Security
- Keep secrets out of the repo. Consider enabling Dependabot and CodeQL.

## Releases
- Auto-deploy on merge to `main`. Optionally tag versions with SemVer (`v0.x.y`).
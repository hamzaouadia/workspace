# Security Policy

This policy covers how to report vulnerabilities and what we support for this Next.js (Node/TypeScript) project.

## Supported Versions

We currently support security fixes for the latest code on `main` and the most recent 0.x release.

| Track            | Supported |
| ---------------- | --------- |
| main             | ✅ Yes    |
| latest 0.x      | ✅ Yes    |
| older 0.x minors | ❌ No     |

> Note: Until v1.0.0, only the latest minor is supported. Please upgrade regularly.

## Reporting a Vulnerability

We take security seriously. Please report vulnerabilities via private channels only.

### 🔒 Private Disclosure (Preferred)

1) GitHub Security Advisory
- Open the repository’s [Security advisories](../../security/advisories)
- Click “Report a vulnerability” and provide details

2) Maintainers (Alternative)
- Contact the repo owners privately (e.g., via profile email)
- Do not open public issues for sensitive reports

### 📋 What to Include
- Description and impact
- Steps to reproduce and affected versions/commit
- Environment details (OS, browser, Node version)
- Proof of concept (if applicable)
- Any suggested remediation

### ⏱️ Response Targets
- Initial triage: within 48 hours
- Assessment and plan: within 5 business days
- Target fix windows (guidance):
   - Critical: 7 days
   - High: 14 days
   - Medium: 30 days
   - Low: next scheduled release

We’ll keep you updated throughout the process and credit you in the advisory if you’d like.

## Safe Harbor

We support good-faith security research. If you follow responsible disclosure (no data exfiltration, no service disruption, avoid privacy violations, give us reasonable time to fix), we will not pursue legal action.

Out of scope examples:
- Denial of service (DoS) or rate-limit exhaustion
- Social engineering of maintainers or users
- Issues in third-party services/infrastructure

## Operational Guidance (for users and deployers)

- Keep dependencies up to date (Dependabot is enabled)
- Run CI checks (`npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`)
- Never commit secrets or `.env*` files; use hosting provider environment variables
- Prefer HTTPS everywhere; configure security headers (CSP, HSTS, X-Frame-Options)
- Validate and sanitize all inputs; beware of XSS/SSRF
- Restrict external image domains in `next.config.js` if using Next/Image
- Regularly review `npm audit` and apply patches

## References

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- Node.js Best Practices (OWASP NodeGoat/cheat sheets)
- Next.js Security Headers: https://nextjs.org/docs/app/building-your-application/configuring/headers
- npm Audit: https://docs.npmjs.com/cli/v9/commands/npm-audit

Thank you for helping keep our project and community safe.

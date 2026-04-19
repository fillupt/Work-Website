# Setup Instructions for GitHub Pages Deployment

## Quick Start

This repository now deploys as a static export using GitHub Actions.

## Step 1: Enable GitHub Pages

1. Open repository settings.
2. Go to Pages.
3. Set source to GitHub Actions.

## Step 2: Confirm Workflow Values

Check .github/workflows/pages.yml and verify:

- NEXT_PUBLIC_BASE_PATH=/Work-Website
- NEXT_PUBLIC_SITE_URL=https://fillupt.github.io/Work-Website

If you rename the repository, update both values.

## Step 3: Push to Main

```bash
git add .
git commit -m "Configure GitHub Pages static export"
git push origin main
```

GitHub Actions will build and deploy the static output from out/.

## Step 4: Optional Custom Domain Redirect

If your domain provider will redirect to GitHub Pages, keep that redirect external to this repository.

## Local Validation

```bash
npm run build
```

This should generate static files in out/.

## Troubleshooting

### Build Fails in GitHub Actions

- Check Actions logs for the Deploy static site to GitHub Pages workflow.
- Confirm NEXT_PUBLIC_BASE_PATH and NEXT_PUBLIC_SITE_URL values.

### Broken Asset or Route Paths

- Ensure NEXT_PUBLIC_BASE_PATH matches the repository path exactly.
- Re-run build after any base path change.

## References

- Next.js static export docs: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- GitHub Pages docs: https://docs.github.com/pages

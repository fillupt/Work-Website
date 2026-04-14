# Associate Professor Philip Turnbull's Academic Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Static Export**: Browser-rendered UI deployed as static files on GitHub Pages
- **Publications Page**: Showcases research papers with AI-generated summaries, filtering, and pagination
- **Clean UI**: Professional design with smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (GitHub Actions)

## Deployment

This project is configured for static export and automated GitHub Pages deployment.

1. Enable GitHub Pages in repository settings.
2. Set source to GitHub Actions.
3. Push to main.

The workflow file is at .github/workflows/pages.yml and exports the site to out/.

### Environment Variables Used By Build

- NEXT_PUBLIC_BASE_PATH: path prefix for project-site hosting.
- NEXT_PUBLIC_SITE_URL: absolute site URL used for metadata, robots, and sitemap.

The workflow currently targets:

- NEXT_PUBLIC_BASE_PATH=/Work-Website
- NEXT_PUBLIC_SITE_URL=https://fillupt.github.io/Work-Website

If you later move to a root custom domain, update those values in the workflow.

## License

Private - All Rights Reserved

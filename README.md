# Dr Philip Turnbull - Professional Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content**: Modern React-based architecture with server-side rendering
- **Publications Page**: Showcases research papers with AI-generated summaries, filtering, and pagination
- **Virtual Patient Banner**: Prominent link to the Virtual Patient platform
- **Google Scholar Integration**: Easy access to academic profile
- **Clean UI**: Professional design with smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Deployment

This site is configured for automatic deployment on Netlify:

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Configure your custom domain (philipturnbull.com)
4. Netlify will automatically build and deploy on every push to main

## Customization

### Update Your Information

- **Personal Info**: Edit `app/page.tsx`
- **Publications**: Edit `app/data/publications.ts`
- **Google Scholar Link**: Update the link in `app/page.tsx` with your Scholar ID
- **Virtual Patient URL**: Update in `app/page.tsx`

### Add More Pages

Create new pages by adding folders in the `app` directory following Next.js App Router conventions.

## License

Private - All Rights Reserved


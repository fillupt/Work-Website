# Setup Instructions for Netlify Deployment

## Quick Start

Your website is now ready! Here's what to do next:

## Step 1: Customize Your Information

### Update Google Scholar Link
In `app/page.tsx`, find and replace:
```typescript
href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
```
Replace `YOUR_SCHOLAR_ID` with your actual Google Scholar ID.

### Update Virtual Patient Link
In `app/page.tsx`, verify or update:
```typescript
href="https://virtualpat.com"
```

### Add Your Publications
Edit `app/data/publications.ts` to add your actual publications. Each publication follows this structure:
```typescript
{
  id: 'unique-id',
  title: 'Your Paper Title',
  authors: ['Author1', 'Author2'],
  year: 2024,
  journal: 'Journal Name', // or conference: 'Conference Name'
  volume: 'Volume',
  pages: 'Page Range',
  doi: 'DOI identifier',
  summary: 'AI-generated or custom summary',
  type: 'journal' | 'conference' | 'book-chapter' | 'preprint',
}
```

## Step 2: Test Locally

```bash
npm run dev
```
Visit http://localhost:3000 to preview your site.

## Step 3: Push to GitHub

```bash
git add .
git commit -m "Initial website setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Step 4: Deploy to Netlify

1. **Log in to Netlify** at https://netlify.com
2. **Click "Add new site" → "Import an existing project"**
3. **Connect to GitHub** and select your repository
4. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Click "Deploy site"**

## Step 5: Configure Custom Domain

1. In Netlify, go to **Site settings → Domain management**
2. Click **Add custom domain**
3. Enter `philipturnbull.com`
4. Follow Netlify's instructions to update your domain's DNS settings:
   - Add an A record pointing to Netlify's load balancer
   - Or add a CNAME record for your subdomain

### Example DNS Configuration:
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify's IP)

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

## Step 6: Enable HTTPS

Netlify automatically provisions SSL certificates. Once your domain is configured:
1. Go to **Domain settings → HTTPS**
2. Click **Verify DNS configuration**
3. Wait for certificate to be issued (usually < 24 hours)

## Automatic Deployments

Once set up, Netlify will automatically:
- Build and deploy on every push to your main branch
- Generate deploy previews for pull requests
- Provide instant rollback if needed

## Adding More Content

### Create a New Page
1. Create a new folder in `app/` (e.g., `app/teaching`)
2. Add a `page.tsx` file inside
3. Add link to navigation in `app/components/Header.tsx`

### Update Styles
Edit Tailwind classes directly in your components or extend `app/globals.css`.

## Troubleshooting

### Build Fails on Netlify
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- Place images in `public/` folder
- Reference as `/image-name.jpg` in code

### Domain Not Working
- Verify DNS settings have propagated (use https://dnschecker.org)
- Check Netlify domain settings
- Wait up to 48 hours for full DNS propagation

## Support

For Next.js questions: https://nextjs.org/docs
For Netlify questions: https://docs.netlify.com

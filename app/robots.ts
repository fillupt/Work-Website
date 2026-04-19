import { MetadataRoute } from 'next'
import { buildAbsoluteUrl } from './lib/site'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: buildAbsoluteUrl('/sitemap.xml'),
  }
}

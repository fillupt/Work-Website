import { MetadataRoute } from 'next'
import { buildAbsoluteUrl } from './lib/site'

export const dynamic = 'force-static'

const HOME_LAST_MODIFIED = new Date('2026-06-03T00:00:00.000Z')
const PUBLICATIONS_LAST_MODIFIED = new Date('2026-06-03T00:00:00.000Z')
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildAbsoluteUrl('/'),
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: buildAbsoluteUrl('/publications'),
      lastModified: PUBLICATIONS_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}

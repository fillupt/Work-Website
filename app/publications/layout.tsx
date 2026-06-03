import type { Metadata } from "next";
import { buildAbsoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Publications - Associate Professor Philip Turnbull",
  description: "Research publications by Associate Professor Philip Turnbull covering optometry, vision science, myopia, eye tracking, and digital health.",
  alternates: {
    canonical: '/publications',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Associate Professor Philip Turnbull',
    title: "Publications - Associate Professor Philip Turnbull",
    description: "Research publications by Associate Professor Philip Turnbull covering optometry, vision science, myopia, eye tracking, and digital health.",
    url: buildAbsoluteUrl('/publications'),
    images: [
      {
        url: buildAbsoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'Publications by Associate Professor Philip Turnbull',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Publications - Associate Professor Philip Turnbull",
    description: "Research publications by Associate Professor Philip Turnbull covering optometry, vision science, myopia, eye tracking, and digital health.",
    images: [buildAbsoluteUrl('/twitter-image')],
  },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

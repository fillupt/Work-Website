import type { Metadata } from "next";
import { buildAbsoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact - Associate Professor Philip Turnbull",
  description: "Get in touch with Associate Professor Philip Turnbull at the School of Optometry and Vision Science, University of Auckland.",
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Associate Professor Philip Turnbull',
    title: "Contact - Associate Professor Philip Turnbull",
    description: "Get in touch with Associate Professor Philip Turnbull at the School of Optometry and Vision Science, University of Auckland.",
    url: buildAbsoluteUrl('/contact'),
    images: [
      {
        url: buildAbsoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'Contact Associate Professor Philip Turnbull',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact - Associate Professor Philip Turnbull",
    description: "Get in touch with Associate Professor Philip Turnbull at the School of Optometry and Vision Science, University of Auckland.",
    images: [buildAbsoluteUrl('/twitter-image')],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

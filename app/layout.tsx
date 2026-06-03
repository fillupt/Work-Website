import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";
import { DesignProvider } from "./providers/DesignProvider";
import { buildAbsoluteUrl, getSiteUrl } from "./lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Associate Professor Philip Turnbull - Optometry and Vision Science",
  description: "Associate Professor at the School of Optometry and Vision Science, University of Auckland, specialising in virtual patients, eye tracking, and digital health innovation.",
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: "Associate Professor Philip Turnbull - Optometry and Vision Science",
    description: "Associate Professor at the School of Optometry and Vision Science, University of Auckland, specialising in virtual patients, eye tracking, and digital health innovation.",
    type: 'website',
    locale: 'en_NZ',
    url: '/',
    siteName: 'Associate Professor Philip Turnbull',
    images: [
      {
        url: buildAbsoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'Associate Professor Philip Turnbull - Optometry and Vision Science',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Associate Professor Philip Turnbull - Optometry and Vision Science",
    description: "Associate Professor at the School of Optometry and Vision Science, University of Auckland, specialising in virtual patients, eye tracking, and digital health innovation.",
    images: [buildAbsoluteUrl('/twitter-image')],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Philip Turnbull',
    jobTitle: 'Associate Professor in Optometry',
    url: getSiteUrl(),
    image: buildAbsoluteUrl('/images/profile-photo.jpg'),
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Auckland',
      url: 'https://www.auckland.ac.nz/',
    },
    sameAs: [
      'https://orcid.org/0000-0002-9892-2964',
      'https://profiles.auckland.ac.nz/p-turnbull/about',
    ],
  };

  return (
    <html lang="en-NZ" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = theme === 'dark' || (theme === 'system' && prefersDark);
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <Script
          id="person-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9Z0W4ZSKZD"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9Z0W4ZSKZD');
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-[#050505] dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <DesignProvider>
            <div className="ambient-bg" aria-hidden="true"></div>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </DesignProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

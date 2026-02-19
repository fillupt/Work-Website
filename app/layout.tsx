import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";
import { DesignProvider } from "./providers/DesignProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Associate Professor Philip Turnbull - Optometry and Vision Science",
  description: "Associate Professor at the School of Optometry and Vision Science, University of Auckland, specialising in virtual patients, eye tracking, and digital health innovation.",
  metadataBase: new URL('https://philipturnbull.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://philipturnbull.com',
    siteName: 'Associate Professor Philip Turnbull',
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
  return (
    <html lang="en" suppressHydrationWarning>
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
      </head>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <DesignProvider>
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications - Associate Professor Philip Turnbull",
  description: "Research publications by Associate Professor Philip Turnbull covering optometry, vision science, myopia, eye tracking, and digital health.",
  alternates: {
    canonical: '/publications',
  },
  openGraph: {
    title: "Publications - Associate Professor Philip Turnbull",
    description: "Research publications by Associate Professor Philip Turnbull covering optometry, vision science, myopia, eye tracking, and digital health.",
    url: 'https://www.philipturnbull.com/publications',
  },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

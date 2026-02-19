import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Associate Professor Philip Turnbull",
  description: "Research, teaching, and advisory roles of Associate Professor Philip Turnbull at the School of Optometry and Vision Science.",
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: "Work - Associate Professor Philip Turnbull",
    description: "Research, teaching, and advisory roles of Associate Professor Philip Turnbull at the School of Optometry and Vision Science.",
    url: 'https://www.philipturnbull.com/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

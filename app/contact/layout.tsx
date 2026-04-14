import type { Metadata } from "next";
import { buildAbsoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact - Associate Professor Philip Turnbull",
  description: "Get in touch with Associate Professor Philip Turnbull at the School of Optometry and Vision Science, University of Auckland.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact - Associate Professor Philip Turnbull",
    description: "Get in touch with Associate Professor Philip Turnbull at the School of Optometry and Vision Science, University of Auckland.",
    url: buildAbsoluteUrl('/contact'),
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

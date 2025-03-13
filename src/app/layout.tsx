// src/app/layout.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import DisableRightClick from "../components/DisableRightClick";
import "./globals.css";

export const metadata: Metadata = {
  title: `Portfolio | Joshua J Moore`,
  description:
    "PhD Student @ Mississippi State University focused on wireless communications",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://jmoore.vercel.app/",
    title: `Portfolio | Joshua J Moore`,
    description:
      "PhD Student @ Mississippi State University focused on wireless communications",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/C4D16AQHh8p0CIQe3Aw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1639634731808?e=1747267200&v=beta&t=mOFcJkBbOkQAEvzw9abu0fBBeK1a01dfSnUT2W9ZAqE",
        width: 1200,
        height: 675,
        alt: "Portfolio banner",
      },
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <DisableRightClick />
        {children}
      </body>
    </html>
  );
}

// src/app/layout.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import DisableRightClick from "../components/DisableRightClick";
import "./globals.css";

export const metadata: Metadata = {
  title: `Portfolio | Aayam Raj Shakya`,
  description:
    "A computer science student, undergraduate researcher, and aspiring machine learning engineer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://aayamshakya.com.np/",
    title: `Portfolio | Aayam Raj Shakya`,
    description:
      "A computer science student, undergraduate researcher, and aspiring machine learning engineer",
    images: [
      {
        url: "https://raw.githubusercontent.com/aayamrajshakya/aayamrajshakya/main/banner.png",
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

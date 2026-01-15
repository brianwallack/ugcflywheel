import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "UGC FLYWHEEL | Powered by Triibe Talents",
  description: "Turn Content Into Paid UGC, Or Get Every Dollar Back. Join the premier community for UGC creators or partner with trained creators for your brand.",
  keywords: ["UGC", "user generated content", "creator economy", "content creators", "brand partnerships"],
  openGraph: {
    title: "UGC FLYWHEEL | Powered by Triibe Talents",
    description: "Turn Content Into Paid UGC, Or Get Every Dollar Back",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${dmSans.variable} ${spaceMono.variable} ${bebasNeue.variable} antialiased min-h-full w-full`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

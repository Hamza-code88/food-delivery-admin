import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts Configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (SEO + Project Info)
export const metadata: Metadata = {
  title: "SedAp - Fast & Fresh Food Delivery",
  description:
    "SedAp is a modern food delivery app built with Next.js. Order your favorite meals online and get them delivered fast & fresh at your doorstep.",
  keywords: [
    "Food Delivery",
    "Next.js App",
    "Fast Food",
    "Online Ordering",
    "Fresh Meals",
  ],
  authors: [{ name: "Hamza-Code88" }],
  openGraph: {
    title: "FoodExpress - Fast & Fresh Food Delivery",
    description:
      "Order delicious food online with FoodExpress. Built with Next.js, TailwindCSS, and modern UI components.",
    url: "https://foodexpress.vercel.app",
    siteName: "FoodExpress",
    images: [
      {
        url: "/og-image.png", // ek custom OG image bana sakte ho later
        width: 1200,
        height: 630,
        alt: "FoodExpress - Fresh Food Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        

        <main className="min-h-screen">{children}</main>

        
      </body>
    </html>
  );
}

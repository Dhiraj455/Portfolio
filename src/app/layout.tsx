import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dhirajshelke.com'),
  title: "Dhiraj Shelke - Software Engineer",
  description: "Software Engineer Intern at Fetch Rewards | Graduate Student at UIC | Passionate about Mobile Development, Full-Stack Engineering, and AI/ML applications.",
  keywords: ["software engineer", "kotlin", "android", "react", "python", "tensorflow", "mobile development", "full stack"],
  authors: [{ name: "Dhiraj Shelke" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dhiraj Shelke - Software Engineer",
    description: "Software Engineer Intern at Fetch Rewards | Graduate Student at UIC | Passionate about Mobile Development, Full-Stack Engineering, and AI/ML applications.",
    images: [
      {
        url: "/DhirajPhoto.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhiraj Shelke - Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

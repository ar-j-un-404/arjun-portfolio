import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arjun-portfolio.vercel.app"),
  title: {
    default: "ARJUN | AI & Machine Learning Portfolio",
    template: "%s | ARJUN",
  },
  description:
    "Personal portfolio of ARJUN, a Computer Science student focused on Artificial Intelligence, Machine Learning, and software engineering.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "RAG",
    "NLP",
    "Python",
    "LangChain",
    "Computer Science",
    "Semantic Search",
    "Embeddings",
  ],
  authors: [{ name: "ARJUN", url: "https://github.com/ar-j-un-404" }],
  creator: "ARJUN",
  publisher: "ARJUN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "ARJUN | AI & Machine Learning Portfolio",
    description:
      "Personal portfolio of ARJUN, a Computer Science student focused on Artificial Intelligence, Machine Learning, and software engineering.",
    siteName: "ARJUN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

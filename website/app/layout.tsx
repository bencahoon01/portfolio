import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Pirata_One, Archivo_Black, Inter, Mohave } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react" 
import ScrollRestorer from "@/components/ScrollRestorer"

import "./globals.css"

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata-one",
})

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const mohave = Mohave({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mohave",
})

export const metadata: Metadata = {
  title: "Ben Cahoon - Developer Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background font-sans ${GeistSans.variable} ${GeistMono.variable} ${pirataOne.variable} ${archivoBlack.variable} ${inter.variable} ${mohave.variable}`}
      >
        <Suspense fallback={null}>
          <ScrollRestorer />
        </Suspense>
        {/* <CursorProvider /> */}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Space_Grotesk, Inter, Press_Start_2P, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://estudioready.es"),
  title: "READY? | Estudio Creativo en Cáceres",
  description: 
    "Somos el estudio creativo que convierte marcas olvidadas en leyendas. " +
    "Estrategia, creatividad y resultados que no puedes ignorar. " +
    "¿Tu marca hace ruido o solo parpadea?",
  keywords: [
    "estudio creativo",
    "agencia de marketing",
    "branding",
    "marketing digital",
    "estrategia de marca",
    "publicidad",
    "Cáceres",
    "España",
    "captación de leads",
    "performance marketing",
    "contenido",
    "redes sociales",
  ],
  authors: [{ name: "READY? Estudio Creativo" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://estudioready.es",
    siteName: "READY? Estudio Creativo",
    title: "READY? | Estudio Creativo en Cáceres",
    description: 
      "¿Tu marca hace ruido o solo parpadea? " +
      "Estrategia, creatividad y resultados que no puedes ignorar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "READY? Estudio Creativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "READY? | Estudio Creativo en Cáceres",
    description: 
      "¿Tu marca hace ruido o solo parpadea? " +
      "Estrategia, creatividad y resultados que no puedes ignorar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="es" 
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} ${pressStart.variable}`}
    >
      <body className="bg-ready-black text-ready-cream antialiased">
       
        {/* CRT Scanline Overlay */}
        <div className="crt-overlay" />
        
        {/* Main Content */}
        {children}

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  )
}

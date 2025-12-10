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
  title: {
    default: "READY? | Agencia de Marketing Digital y Estudio Creativo en Cáceres",
    template: "%s | READY? Estudio Creativo"
  },
  description: 
    "Agencia de marketing digital en Cáceres. Gestión de redes sociales, creación de contenido, " +
    "branding y estrategia digital. Transformamos marcas en leyendas. +50 proyectos exitosos.",
  keywords: [
    "agencia marketing digital Cáceres",
    "estudio creativo Cáceres",
    "gestión redes sociales Cáceres",
    "community manager Cáceres",
    "marketing digital Extremadura",
    "agencia publicidad Cáceres",
    "branding Cáceres",
    "diseño gráfico Cáceres",
    "social media Cáceres",
    "creación contenido Cáceres",
    "estrategia digital",
    "marketing redes sociales",
    "agencia comunicación Cáceres",
    "publicidad digital Extremadura",
    "READY estudio creativo",
  ],
  authors: [{ name: "READY? Estudio Creativo", url: "https://estudioready.es" }],
  creator: "READY? Estudio Creativo",
  publisher: "READY? Estudio Creativo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://estudioready.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://estudioready.es",
    siteName: "READY? Estudio Creativo",
    title: "READY? | Agencia de Marketing Digital en Cáceres",
    description: 
      "Agencia de marketing digital en Cáceres. Gestión de redes sociales, creación de contenido " +
      "y estrategia digital. ¿Tu marca hace ruido o solo parpadea?",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "READY? Estudio Creativo - Agencia de Marketing Digital en Cáceres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "READY? | Agencia de Marketing Digital en Cáceres",
    description: 
      "Agencia de marketing digital en Cáceres. Gestión de redes sociales, creación de contenido " +
      "y estrategia digital. ¿Tu marca hace ruido o solo parpadea?",
    images: ["/images/og_image.png"],
    creator: "@pabswhat",
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
  verification: {
    // Añade tu código de verificación de Google Search Console aquí
    // google: "tu-codigo-de-verificacion",
  },
  category: "marketing",
}

// Schema.org JSON-LD para SEO Local
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://estudioready.es/#business",
      "name": "READY? Estudio Creativo",
      "alternateName": "READY Estudio Creativo",
      "description": "Agencia de marketing digital y estudio creativo en Cáceres. Especialistas en gestión de redes sociales, creación de contenido, branding y estrategia digital.",
      "url": "https://estudioready.es",
      "telephone": "+34648043990",
      "email": "hola@estudioready.es",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cáceres",
        "addressRegion": "Extremadura",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.4752",
        "longitude": "-6.3724"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Cáceres"
        },
        {
          "@type": "State",
          "name": "Extremadura"
        },
        {
          "@type": "Country",
          "name": "España"
        }
      ],
      "priceRange": "€€",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.instagram.com/pabswhat",
        "https://www.tiktok.com/@pabswhat"
      ],
      "image": "https://estudioready.es/images/og_image.png",
      "logo": "https://estudioready.es/logo.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://estudioready.es/#website",
      "url": "https://estudioready.es",
      "name": "READY? Estudio Creativo",
      "description": "Agencia de marketing digital en Cáceres",
      "publisher": {
        "@id": "https://estudioready.es/#business"
      },
      "inLanguage": "es-ES"
    },
    {
      "@type": "WebPage",
      "@id": "https://estudioready.es/#webpage",
      "url": "https://estudioready.es",
      "name": "READY? | Agencia de Marketing Digital y Estudio Creativo en Cáceres",
      "isPartOf": {
        "@id": "https://estudioready.es/#website"
      },
      "about": {
        "@id": "https://estudioready.es/#business"
      },
      "description": "Agencia de marketing digital en Cáceres. Gestión de redes sociales, creación de contenido, branding y estrategia digital.",
      "inLanguage": "es-ES"
    },
    {
      "@type": "Service",
      "serviceType": "Marketing Digital",
      "provider": {
        "@id": "https://estudioready.es/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Cáceres"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Marketing Digital",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gestión de Redes Sociales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Creación de Contenido"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Estrategia Digital"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding"
            }
          }
        ]
      }
    }
  ]
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
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-ready-black text-ready-cream">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-ready-cream/60 
                       hover:text-ready-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ready-orange mb-8">
            Política de Cookies
          </h1>
          
          <p className="text-ready-cream/60 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <div className="prose prose-invert prose-orange max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                1. ¿Qué son las cookies?
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu 
                dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. 
                Estas cookies permiten que el sitio recuerde tus acciones y preferencias 
                durante un periodo de tiempo, para que no tengas que volver a introducirlas 
                cada vez que vuelvas al sitio o navegues de una página a otra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                2. ¿Qué tipos de cookies utilizamos?
              </h2>
              
              <h3 className="text-xl font-display font-bold text-ready-cream mb-3 mt-6">
                2.1. Cookies técnicas (necesarias)
              </h3>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Son esenciales para el funcionamiento del sitio web y no pueden ser 
                desactivadas. Incluyen:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li><strong>cookies_consent:</strong> Almacena tu preferencia sobre 
                  las cookies. Duración: 1 año.</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-ready-cream mb-3 mt-6">
                2.2. Cookies analíticas
              </h3>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Nos permiten analizar el uso del sitio web para mejorar la experiencia 
                del usuario. Solo se activan con tu consentimiento.
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li><strong>_ga, _gid (Google Analytics):</strong> Registran un 
                  identificador único para generar datos estadísticos sobre cómo 
                  utilizas el sitio. Duración: 2 años / 24 horas.</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-ready-cream mb-3 mt-6">
                2.3. Cookies de terceros
              </h3>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Pueden establecerse por servicios externos integrados en el sitio:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li><strong>YouTube/Vimeo:</strong> Si incrustamos vídeos, estos 
                  servicios pueden establecer sus propias cookies.</li>
                <li><strong>Redes sociales:</strong> Los botones de compartir pueden 
                  establecer cookies de seguimiento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                3. ¿Cómo puedes gestionar las cookies?
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Puedes configurar tus preferencias de cookies de las siguientes formas:
              </p>
              
              <h3 className="text-xl font-display font-bold text-ready-cream mb-3 mt-6">
                3.1. Banner de cookies
              </h3>
              <p className="text-ready-cream/70 leading-relaxed">
                Al acceder a nuestro sitio web por primera vez, verás un banner que te 
                permite aceptar o rechazar las cookies no esenciales.
              </p>

              <h3 className="text-xl font-display font-bold text-ready-cream mb-3 mt-6">
                3.2. Configuración del navegador
              </h3>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Puedes configurar tu navegador para bloquear o eliminar cookies. 
                A continuación, te indicamos cómo hacerlo en los navegadores más comunes:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li>
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ready-orange hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ready-orange hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ready-orange hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ready-orange hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                4. Consecuencias de desactivar las cookies
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Si desactivas las cookies, es posible que algunas funcionalidades del 
                sitio web no funcionen correctamente. Las cookies técnicas son necesarias 
                para el funcionamiento básico del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                5. Actualización de la política
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                READY? puede actualizar esta Política de Cookies para adaptarla a 
                cambios legislativos o en los servicios utilizados. Te recomendamos 
                revisar esta página periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                6. Más información
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Para más información sobre cómo tratamos tus datos personales, consulta 
                nuestra{" "}
                <Link href="/politica-privacidad" className="text-ready-orange hover:underline">
                  Política de Privacidad
                </Link>.
              </p>
              <p className="text-ready-cream/70 leading-relaxed mt-4">
                Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes 
                contactarnos en:{" "}
                <a href="mailto:hola@estudioready.es" className="text-ready-orange hover:underline">
                  hola@estudioready.es
                </a>
              </p>
            </section>

          </div>
        </motion.div>
      </div>

      {/* Footer simple */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-ready-cream/40 text-sm">
            © {new Date().getFullYear()} READY? Estudio Creativo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  )
}

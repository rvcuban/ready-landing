"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
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
                1. Responsable del tratamiento
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                <strong>Identidad:</strong> READY? Estudio Creativo (en adelante, "READY?")<br />
                <strong>Dirección:</strong> Cáceres, España<br />
                <strong>Email:</strong> hola@estudioready.es<br />
                <strong>Teléfono:</strong> 648 043 990
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                2. Datos que recopilamos
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Recopilamos los datos que nos proporcionas voluntariamente a través del 
                formulario de contacto:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Nombre de empresa (opcional)</li>
                <li>Mensaje o consulta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                3. Finalidad del tratamiento
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Los datos personales que nos facilitas serán tratados con las siguientes 
                finalidades:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li>Responder a tus consultas y solicitudes de información</li>
                <li>Gestionar la relación comercial y prestación de servicios</li>
                <li>Enviarte comunicaciones comerciales si has dado tu consentimiento</li>
                <li>Cumplir con obligaciones legales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                4. Base legal del tratamiento
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                La base legal para el tratamiento de tus datos es el consentimiento que 
                nos otorgas al enviarnos el formulario de contacto, así como el interés 
                legítimo de READY? para gestionar las relaciones comerciales y la ejecución 
                de contratos de prestación de servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                5. Conservación de los datos
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Conservaremos tus datos personales mientras exista una relación comercial 
                con nosotros o hasta que ejerzas tu derecho de supresión. Una vez finalizada 
                la relación, los datos se conservarán bloqueados durante los plazos de 
                prescripción legalmente establecidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                6. Destinatarios de los datos
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                No cedemos tus datos a terceros, salvo obligación legal. Los datos pueden 
                ser tratados por:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li>Proveedores de servicios de hosting y servidor</li>
                <li>Proveedores de servicios de email (Formspree)</li>
                <li>Administraciones públicas cuando sea requerido legalmente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                7. Derechos del interesado
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                De acuerdo con el Reglamento General de Protección de Datos (RGPD), 
                puedes ejercer los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li><strong>Acceso:</strong> Conocer si tratamos tus datos y obtener una copia</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              </ul>
              <p className="text-ready-cream/70 leading-relaxed mt-4">
                Para ejercer estos derechos, puedes contactarnos en{" "}
                <a href="mailto:hola@estudioready.es" className="text-ready-orange hover:underline">
                  hola@estudioready.es
                </a>
              </p>
              <p className="text-ready-cream/70 leading-relaxed mt-4">
                También tienes derecho a presentar una reclamación ante la Agencia Española 
                de Protección de Datos (AEPD) si consideras que el tratamiento no se ajusta 
                a la normativa vigente:{" "}
                <a 
                  href="https://www.aepd.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ready-orange hover:underline"
                >
                  www.aepd.es
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                8. Seguridad de los datos
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                READY? ha adoptado las medidas técnicas y organizativas necesarias para 
                garantizar la seguridad e integridad de los datos personales, evitando su 
                alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                9. Modificaciones de la política
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                READY? se reserva el derecho a modificar esta Política de Privacidad para 
                adaptarla a novedades legislativas o jurisprudenciales. Los cambios serán 
                comunicados en esta página web.
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

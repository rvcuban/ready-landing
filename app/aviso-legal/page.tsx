"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AvisoLegal() {
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
            Aviso Legal
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
                1. Datos identificativos
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, 
                de Servicios de la Sociedad de la Información y Comercio Electrónico 
                (LSSI-CE), se informa de los datos identificativos del titular del 
                sitio web:
              </p>
              <ul className="list-none pl-0 text-ready-cream/70 space-y-2 mt-4">
                <li><strong>Denominación:</strong> READY? Estudio Creativo</li>
                <li><strong>Domicilio:</strong> Cáceres, España</li>
                <li><strong>Email:</strong> hola@estudioready.es</li>
                <li><strong>Teléfono:</strong> 648 043 990</li>
                <li><strong>Actividad:</strong> Servicios de marketing digital, 
                  gestión de redes sociales y creación de contenido</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                2. Objeto
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                El presente sitio web tiene como objeto proporcionar información 
                sobre los servicios ofrecidos por READY? Estudio Creativo, así como 
                facilitar el contacto entre la empresa y sus potenciales clientes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                3. Condiciones de uso
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                El acceso a este sitio web es gratuito y no requiere registro previo. 
                El usuario se compromete a utilizar el sitio web de conformidad con 
                la ley, el presente Aviso Legal, y las buenas costumbres.
              </p>
              <p className="text-ready-cream/70 leading-relaxed">
                Queda prohibido el uso del sitio web con fines ilícitos o lesivos 
                contra READY? o terceros, o que de cualquier forma puedan causar 
                perjuicio o impedir el normal funcionamiento del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                4. Propiedad intelectual e industrial
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                Todos los contenidos del sitio web, incluyendo pero no limitándose a:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li>Textos, imágenes, gráficos y diseños</li>
                <li>Logotipos, marcas y nombres comerciales</li>
                <li>Código fuente y software</li>
                <li>Bases de datos y estructura del sitio</li>
              </ul>
              <p className="text-ready-cream/70 leading-relaxed mt-4">
                Son propiedad de READY? Estudio Creativo o de terceros que han 
                autorizado su uso, y están protegidos por las leyes de propiedad 
                intelectual e industrial.
              </p>
              <p className="text-ready-cream/70 leading-relaxed mt-4">
                Queda prohibida la reproducción, distribución, comunicación pública, 
                transformación o cualquier otra forma de explotación de los contenidos 
                sin autorización expresa y por escrito de READY?.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                5. Exclusión de responsabilidad
              </h2>
              <p className="text-ready-cream/70 leading-relaxed mb-4">
                READY? no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 text-ready-cream/70 space-y-2">
                <li>Los daños y perjuicios derivados de la interrupción del servicio 
                  por causas ajenas a su voluntad</li>
                <li>El contenido de sitios web de terceros a los que se pueda acceder 
                  mediante enlaces desde este sitio</li>
                <li>Los virus o elementos lesivos que pudieran introducir terceros</li>
                <li>El uso indebido que los usuarios puedan hacer del sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                6. Enlaces externos
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Este sitio web puede contener enlaces a sitios externos (como redes 
                sociales). READY? no se responsabiliza del contenido, políticas de 
                privacidad o prácticas de sitios web de terceros. El acceso a estos 
                enlaces se realiza bajo la exclusiva responsabilidad del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                7. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. 
                Para la resolución de cualquier controversia derivada del uso de 
                este sitio web, las partes se someten a los Juzgados y Tribunales 
                de Cáceres, España, con renuncia expresa a cualquier otro fuero que 
                pudiera corresponderles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                8. Modificaciones
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                READY? se reserva el derecho de modificar en cualquier momento las 
                condiciones de uso de este sitio web, así como cualquier otra 
                información contenida en el mismo. Se recomienda al usuario que 
                revise periódicamente el presente Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-ready-cream mb-4">
                9. Contacto
              </h2>
              <p className="text-ready-cream/70 leading-relaxed">
                Para cualquier consulta sobre el presente Aviso Legal, puedes 
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

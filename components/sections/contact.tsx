"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Loader2,
  CheckCircle,
  Gamepad2
} from "lucide-react"

// Premium Easing
const easeOutExpo = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: easeOutExpo 
    }
  }
}

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [error, setError] = useState("")

  // ⚠️ IMPORTANTE: Reemplaza "TU_FORM_ID" con tu ID de Formspree
  // Obtén tu ID gratis en: https://formspree.io
  const FORMSPREE_ID = "TU_FORM_ID"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `🎮 Nuevo mensaje de ${formData.name} - READY?`
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", company: "", message: "" })
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        const data = await response.json()
        throw new Error(data.error || "Error al enviar el mensaje")
      }
    } catch (err) {
      setError("Hubo un error. Intenta de nuevo o escríbenos directamente a hola@estudioready.es")
      console.error("Form error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════
          FONDO DRAMÁTICO - OSCURO CON GLOWS
      ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bg-[#0a0a0d]" />
      
      {/* Grid arcade sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(242, 146, 29, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242, 146, 29, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Glow NARANJA izquierdo */}
      <div 
        className="absolute top-1/2 -left-60 w-[800px] h-[800px] -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(242, 146, 29, 0.12) 0%, transparent 60%)',
          filter: 'blur(100px)'
        }}
      />
      
      {/* Glow ROSA derecho */}
      <div 
        className="absolute top-1/2 -right-60 w-[800px] h-[800px] -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(178, 23, 75, 0.12) 0%, transparent 60%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Scanlines CRT effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)'
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto items-center">
          
          {/* ═══════════════════════════════════════════════════
              LEFT: TEXTO DRAMÁTICO - MAXIMALISTA
          ═══════════════════════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            {/* GAME OVER? - Condensed giant */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2 
                className="font-display uppercase leading-[0.8] tracking-tight text-ready-orange"
                style={{
                  fontSize: 'clamp(3rem, 12vw, 10rem)',
                  transform: 'scaleY(1.1)',
                  textShadow: '0 0 60px rgba(242, 146, 29, 0.3)'
                }}
              >
                GAME
              </h2>
              <h2 
                className="font-display uppercase leading-[0.8] tracking-tight text-ready-orange"
                style={{
                  fontSize: 'clamp(3rem, 12vw, 10rem)',
                  transform: 'scaleY(1.1)',
                  textShadow: '0 0 60px rgba(242, 146, 29, 0.3)'
                }}
              >
                OVER?
              </h2>
            </motion.div>

            {/* ...O CONTINUE? */}
            <motion.h3 
              variants={itemVariants}
              className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-ready-cream/60 mb-10"
            >
              ...O{" "}
              <span 
                className="text-ready-pink relative inline-block"
                style={{
                  textShadow: '0 0 30px rgba(178, 23, 75, 0.5)'
                }}
              >
                CONTINUE
                <span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-ready-pink rounded-full"
                  style={{ 
                    boxShadow: '0 0 15px rgba(178, 23, 75, 0.8), 0 0 30px rgba(178, 23, 75, 0.4)' 
                  }}
                />
              </span>
              ?
            </motion.h3>

            {/* Descripción épica */}
            <motion.div variants={itemVariants} className="space-y-5 mb-10">
              <p className="text-lg md:text-xl text-ready-cream/70 leading-relaxed">
                Tu competencia ya está jugando.
                <br />
                <span className="text-ready-cream font-medium">
                  Cada día que pasa, suman puntos.
                </span>
              </p>

              <p className="text-lg md:text-xl text-ready-cream/60 leading-relaxed">
                La pregunta no es si tienes que actuar.
                <br />
                <span 
                  className="text-ready-orange font-semibold"
                  style={{ textShadow: '0 0 20px rgba(242, 146, 29, 0.4)' }}
                >
                  Es cuántas fichas estás dispuesto a invertir.
                </span>
              </p>
            </motion.div>

            {/* ¿Hablamos? con cursor parpadeante */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span 
                className="text-ready-orange text-3xl"
                style={{ 
                  textShadow: '0 0 15px rgba(242, 146, 29, 0.8)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              >
    
              </span>
              <span className="font-display text-2xl md:text-3xl font-bold text-ready-cream">
                ¿Hablamos?
              </span>
              <span 
                className="w-3 h-8 bg-ready-orange animate-blink"
                style={{ boxShadow: '0 0 10px rgba(242, 146, 29, 0.6)' }}
              />
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════
              RIGHT: FORMULARIO ESTILO ARCADE
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
          >
            <div 
              className="relative p-8 md:p-10 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(242, 146, 29, 0.06) 0%, rgba(178, 23, 75, 0.06) 100%)',
                border: '2px solid rgba(242, 146, 29, 0.15)',
                boxShadow: `
                  0 0 80px rgba(242, 146, 29, 0.08),
                  0 0 40px rgba(178, 23, 75, 0.05),
                  inset 0 1px 0 rgba(255,255,255,0.03)
                `
              }}
            >
              {/* Corner decorations arcade */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-ready-orange/40" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-ready-pink/40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-ready-pink/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-ready-orange/40" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 sm:py-16"
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)',
                      border: '2px solid rgba(34, 197, 94, 0.3)',
                      boxShadow: '0 0 40px rgba(34, 197, 94, 0.2)'
                    }}
                  >
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-ready-cream mb-2 sm:mb-3">
                    ¡MENSAJE ENVIADO!
                  </h4>
                  <p className="text-ready-cream/60 text-center text-sm sm:text-base">
                    Te contactaremos en menos de 24h.
                    <br />
                    <span className="text-ready-orange">
                      Prepárate para empezar a ganar.
                    </span>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Error message */}
                  {error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label 
                        className="text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest block mb-1.5 sm:mb-2"
                        style={{ color: '#F2921D' }}
                      >
                        PLAYER NAME
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-black/50 border-ready-orange/20 focus:border-ready-orange focus:ring-ready-orange/20 placeholder:text-ready-cream/30 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label 
                        className="text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest block mb-1.5 sm:mb-2"
                        style={{ color: '#F2921D' }}
                      >
                        EMAIL
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="bg-black/50 border-ready-orange/20 focus:border-ready-orange focus:ring-ready-orange/20 placeholder:text-ready-cream/30 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      className="text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest block mb-1.5 sm:mb-2"
                      style={{ color: '#F2921D' }}
                    >
                      COMPANY
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa (opcional)"
                      className="bg-black/50 border-ready-orange/20 focus:border-ready-orange focus:ring-ready-orange/20 placeholder:text-ready-cream/30 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label 
                      className="text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest block mb-1.5 sm:mb-2"
                      style={{ color: '#F2921D' }}
                    >
                      MESSAGE
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿Qué máquina te interesa?"
                      className="bg-black/50 border-ready-orange/20 focus:border-ready-orange focus:ring-ready-orange/20 placeholder:text-ready-cream/30 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-sm sm:text-base font-display font-bold uppercase tracking-wide bg-gradient-to-r from-ready-orange to-ready-pink hover:from-ready-orange/90 hover:to-ready-pink/90 text-ready-black transition-all duration-500"
                    style={{
                      boxShadow: '0 0 30px rgba(242, 146, 29, 0.3), 0 0 60px rgba(178, 23, 75, 0.15)'
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                        ENVIANDO...
                      </>
                    ) : (
                      <>
                        <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        INSERTAR FICHA
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs sm:text-sm text-ready-cream/40 pt-1 sm:pt-2">
                    Respondemos en menos de 24h.
                    <br />
                    <span className="text-ready-cream/50">
                      Sin bots, sin templates. Personas reales.
                    </span>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

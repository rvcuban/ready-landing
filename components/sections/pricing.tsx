"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Check, 
  ChevronRight,
  Sparkles, 
  Crown, 
  Zap,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"

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

// Color config matching the rest of the site
const colorConfig: Record<string, { hex: string; rgb: string }> = {
  orange: { hex: '#F2921D', rgb: '242,146,29' },
  pink: { hex: '#B2174B', rgb: '178,23,75' },
  cyan: { hex: '#06B6D4', rgb: '6,182,212' },
}

const plans = [
  {
    id: "pack-emprendedor",
    name: "EMPRENDEDOR",
    subtitle: "Para arrancar con todo",
    price: "desde 650",
    period: "/mes",
    description: "Todo lo esencial para empezar a construir tu marca con estrategia.",
    icon: Zap,
    popular: false,
    features: [
      "Auditoría inicial completa",
      "Creación de contenido",
      "Gestión básica de RRSS",
      "Calendario mensual",
    ],
    notIncluded: [
      "Gestión PRO",
      "Optimización continua",
    ],
    cta: "Empezar",
    color: "cyan"
  },
  {
    id: "pack-empresa",
    name: "EMPRESA",
    subtitle: "Para escalar de verdad",
    price: "desde 1.200",
    period: "/mes",
    description: "La solución completa para marcas que van en serio con su crecimiento.",
    icon: Crown,
    popular: true,
    features: [
      "Auditoría inicial completa",
      "Creación de contenido PRO",
      "Gestión avanzada de RRSS",
      "Funnels y automatizaciones",
      "Optimización continua",
      "Reporting mensual",
    ],
    notIncluded: [],
    cta: "Elegir Pack",
    color: "orange"
  },
  {
    id: "booster-pack",
    name: "BOOSTER",
    subtitle: "1K / 5K / 10K seguidores",
    price: "desde 1.200",
    period: "/90 días",
    description: "Objetivo claro: alcanzar tus metas de seguidores en 90 días.",
    icon: TrendingUp,
    popular: false,
    features: [
      "Auditoría profesional",
      "2 vídeos/semana (24 piezas)",
      "Gestión básica de redes",
      "Tendencias semanales",
      "1 asesoría mensual",
      "Optimización continua",
    ],
    notIncluded: [],
    cta: "Quiero crecer",
    color: "pink"
  },
]

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      {/* Background - MAXIMALISTA */}
      <div className="absolute inset-0 bg-ready-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,146,29,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(178,23,75,0.04)_0%,transparent_40%)]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header - MAXIMALISTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20 md:mb-28"
        >
          {/* Micro label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ready-cream/40">
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-ready-orange/50" />
              PACKS READY?
              <span className="w-10 h-px bg-gradient-to-l from-transparent to-ready-orange/50" />
            </span>
          </motion.div>
          
          {/* Giant title */}
          <motion.h2 
            variants={itemVariants}
            className="font-display uppercase leading-[0.8] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 9rem)',
              transform: 'scaleY(1.15)',
            }}
          >
            <span className="text-ready-cream block">ELIGE TU</span>
            <span 
              className="text-transparent bg-clip-text block -mt-1 sm:-mt-3" 
              style={{ backgroundImage: 'linear-gradient(135deg, #F2921D 0%, #B2174B 100%)' }}
            >
              PARTIDA
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-ready-cream/50 max-w-xl mx-auto leading-relaxed"
          >
            Soluciones completas diseñadas para cada etapa de tu marca.
            <span className="text-ready-orange"> Sin contratos eternos. Solo resultados.</span>
          </motion.p>
        </motion.div>

        {/* Pricing Grid - MAXIMALISTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const planColor = colorConfig[plan.color] || colorConfig.orange
            const isHovered = hoveredPlan === plan.id
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: easeOutExpo }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={cn(
                  "relative group",
                  plan.popular && "md:-mt-4 md:mb-4"
                )}
              >
                {/* Popular indicator */}
                {plan.popular && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <span 
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-display rounded-full"
                      style={{ 
                        backgroundColor: planColor.hex,
                        color: '#0E0F14'
                      }}
                    >
                      <Sparkles className="w-3 h-3" />
                      Más popular
                    </span>
                  </motion.div>
                )}

                {/* Card */}
                <div 
                  className={cn(
                    "relative h-full p-6 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "border border-white/5",
                    isHovered && "border-white/10"
                  )}
                  style={{
                    backgroundColor: plan.popular 
                      ? `rgba(${planColor.rgb}, 0.03)` 
                      : 'rgba(255,255,255,0.01)',
                  }}
                >
                  {/* Left accent bar */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500"
                    style={{
                      backgroundColor: isHovered || plan.popular ? planColor.hex : 'rgba(255,255,255,0.05)',
                      boxShadow: isHovered || plan.popular ? `0 0 20px rgba(${planColor.rgb}, 0.3)` : 'none'
                    }}
                  />

                  {/* Icon + Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: `rgba(${planColor.rgb}, 0.1)`,
                      }}
                    >
                      <plan.icon className="w-6 h-6" style={{ color: planColor.hex }} />
                    </div>
                    <div>
                      <h3 
                        className="font-display uppercase tracking-tight text-2xl sm:text-3xl"
                        style={{ 
                          color: '#FFF1E6',
                          transform: 'scaleY(1.05)'
                        }}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-ready-cream/40">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price - MAXIMALISTA */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span 
                        className="font-display text-4xl sm:text-5xl"
                        style={{ 
                          color: planColor.hex,
                          transform: 'scaleY(1.1)'
                        }}
                      >
                        {plan.price}€
                      </span>
                      <span className="text-ready-cream/40 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-ready-cream/50 text-sm mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-ready-cream/30 mb-4">
                      Qué incluye
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div 
                            className="w-1 h-4 flex-shrink-0"
                            style={{ backgroundColor: planColor.hex }}
                          />
                          <span className="text-sm text-ready-cream/70">{feature}</span>
                        </li>
                      ))}
                      {/* Not included items */}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={`not-${i}`} className="flex items-center gap-3 opacity-40">
                          <div 
                            className="w-1 h-4 flex-shrink-0 bg-ready-cream/20"
                          />
                          <span className="text-sm text-ready-cream/30 line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA - MAXIMALISTA */}
                  <a
                    href="#contacto"
                    className="group/btn flex items-center justify-between w-full py-4 px-5 transition-all duration-300"
                    style={{
                      backgroundColor: plan.popular ? planColor.hex : `rgba(${planColor.rgb}, 0.1)`,
                      color: plan.popular ? '#0E0F14' : planColor.hex
                    }}
                  >
                    <span className="font-display uppercase tracking-wide text-sm">
                      {plan.cta}
                    </span>
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA - MAXIMALISTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: easeOutExpo }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-ready-cream/40 text-sm mb-4">
            ¿Necesitas algo diferente?
          </p>
          <a 
            href="#contacto"
            className="group inline-flex items-center gap-3 font-display uppercase tracking-wide text-sm text-ready-orange transition-all duration-300 hover:gap-4"
          >
            Hablemos de tu partida personalizada
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Check, 
  X, 
  Sparkles, 
  Crown, 
  Zap,
  CreditCard
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

const plans = [
  {
    id: "player-one",
    name: "Player One",
    subtitle: "Para empezar a jugar",
    price: 900,
    period: "/mes",
    description: "Ideal para marcas que quieren empezar a destacar con una base sólida.",
    icon: Zap,
    popular: false,
    features: [
      { text: "1 servicio a elegir", included: true },
      { text: "Reuniones quincenales", included: true },
      { text: "Reporting mensual", included: true },
      { text: "Soporte por email", included: true },
      { text: "Consultoría estratégica", included: false },
      { text: "Acceso a workshops", included: false },
    ],
    cta: "Empezar",
    color: "cream"
  },
  {
    id: "pro-player",
    name: "Pro Player",
    subtitle: "Para subir de nivel",
    price: 2500,
    period: "/mes",
    description: "El pack completo para marcas que van en serio con su crecimiento.",
    icon: Sparkles,
    popular: true,
    features: [
      { text: "3 servicios combinados", included: true },
      { text: "Reuniones semanales", included: true },
      { text: "Reporting en tiempo real", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Consultoría estratégica", included: true },
      { text: "Acceso a workshops", included: false },
    ],
    cta: "Elegir Plan",
    color: "orange"
  },
  {
    id: "master-player",
    name: "Master Player",
    subtitle: "Para dominar el juego",
    price: 5000,
    period: "/mes",
    description: "Todo incluido. Para marcas que quieren ser leyendas de su sector.",
    icon: Crown,
    popular: false,
    features: [
      { text: "Todos los servicios", included: true },
      { text: "Equipo dedicado", included: true },
      { text: "Dashboard personalizado", included: true },
      { text: "Soporte 24/7", included: true },
      { text: "Consultoría ilimitada", included: true },
      { text: "Acceso VIP a workshops", included: true },
    ],
    cta: "Contactar",
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
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ready-black-light" />
      <div className="absolute inset-0 bg-arcade-grid opacity-5" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="pixel" className="mb-5">
              <CreditCard className="w-3 h-3 mr-2" />
              LEVEL 04
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-ready-cream">Elige tu </span>
            <span className="text-gradient">Partida</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-ready-cream/70 max-w-2xl mx-auto leading-relaxed"
          >
            Planes diseñados para cada etapa de tu marca. 
            Sin contratos eternos, sin sorpresas. 
            <span className="text-ready-orange font-semibold"> Solo resultados</span>.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: easeOutExpo }}
              whileHover={{ y: plan.popular ? -8 : -4 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={cn(
                `relative rounded-2xl p-1 
                 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`,
                plan.popular 
                  ? "bg-gradient-to-b from-ready-orange to-ready-pink shadow-[0_0_40px_rgba(242,146,29,0.15)]" 
                  : "bg-white/10",
                hoveredPlan === plan.id && !plan.popular && "bg-white/15",
                hoveredPlan === plan.id && "shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="pixel" className="bg-ready-orange text-ready-black border-none">
                    <Sparkles className="w-3 h-3 mr-1" />
                    MÁS POPULAR
                  </Badge>
                </div>
              )}

              <div className={cn(
                "h-full rounded-xl p-5 sm:p-6 lg:p-8",
                plan.popular ? "bg-ready-black-light" : "bg-ready-black"
              )}>
                {/* Icon */}
                <div className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4",
                  plan.color === 'orange' ? "bg-ready-orange/20" :
                  plan.color === 'pink' ? "bg-ready-pink/20" : "bg-white/10"
                )}>
                  <plan.icon className={cn(
                    "w-5 h-5 sm:w-6 sm:h-6",
                    plan.color === 'orange' ? "text-ready-orange" :
                    plan.color === 'pink' ? "text-ready-pink" : "text-ready-cream"
                  )} />
                </div>

                {/* Header */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ready-cream">
                  {plan.name}
                </h3>
                <p className={cn(
                  "text-xs sm:text-sm mb-3 sm:mb-4",
                  plan.color === 'orange' ? "text-ready-orange" :
                  plan.color === 'pink' ? "text-ready-pink" : "text-ready-cream/60"
                )}>
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mb-3 sm:mb-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-ready-cream">
                    {plan.price}€
                  </span>
                  <span className="text-ready-cream/50 text-sm">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ready-cream/60 mb-4 sm:mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3">
                      {feature.included ? (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-ready-orange/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-ready-orange" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                          <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-ready-cream/30" />
                        </div>
                      )}
                      <span className={cn(
                        "text-xs sm:text-sm",
                        feature.included ? "text-ready-cream/80" : "text-ready-cream/30"
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={plan.popular ? "arcade" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: easeOutExpo }}
          className="text-center mt-16"
        >
          <p className="text-ready-cream/60">
            ¿Necesitas algo diferente?{" "}
            <a 
              href="#contacto" 
              className="
                text-ready-orange hover:text-ready-orange/80 
                font-semibold
                transition-all duration-500
                hover:tracking-wide
              "
            >
              Hablemos de tu partida personalizada →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

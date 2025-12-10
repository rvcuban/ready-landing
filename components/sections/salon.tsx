"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Users, Lightbulb, TrendingUp, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1]

const features = [
  {
    icon: Target,
    title: "Estrategia con puntería",
    description: "Analizamos tu mercado y creamos planes que dan en el blanco."
  },
  {
    icon: Users,
    title: "Equipo de élite",
    description: "Creativos, estrategas y ejecutores que respiran resultados."
  },
  {
    icon: Lightbulb,
    title: "Ideas que brillan",
    description: "Creatividad que no solo impresiona, sino que convierte."
  },
  {
    icon: TrendingUp,
    title: "Datos, no corazonadas",
    description: "Cada decisión respaldada por métricas y resultados reales."
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: easeOutExpo 
    }
  },
}

export function Salon() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section
      id="salon"
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ready-black" />
      
      {/* Subtle gradient transition from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-ready-black via-ready-black to-ready-black-light/50" />

      {/* Decorative Elements - More subtle */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-20 -left-40 w-[500px] h-[500px] 
                   bg-ready-orange/[0.04] rounded-full blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 -right-40 w-[500px] h-[500px] 
                   bg-ready-pink/[0.03] rounded-full blur-[120px]" 
      />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <Badge variant="pixel" className="mb-6">
              <Award className="w-3 h-3 mr-2" />
              LEVEL 01
            </Badge>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-ready-cream">Bienvenido al </span>
            <span className="text-gradient">Salón</span>
          </h2>
          <p className="text-lg md:text-xl text-ready-cream/60 max-w-2xl mx-auto leading-relaxed">
            No somos otra agencia más. Somos el arcade donde las marcas vienen a 
            <span className="text-ready-orange font-medium"> superar sus récords</span>.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: easeOutExpo }}
          >
            <div className="space-y-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ready-cream">
                ¿Por qué existimos?
              </h3>
              <p className="text-ready-cream/60 leading-relaxed text-lg">
                Porque estamos hartos de ver marcas con potencial quedarse en el 
                olvido. Porque creemos que el marketing debe ser 
                <span className="text-ready-orange font-medium"> estratégico, medible y memorable</span>.
              </p>
              <p className="text-ready-cream/60 leading-relaxed text-lg">
                Nacimos de la frustración de ver agencias que prometen la luna y 
                entregan PowerPoints vacíos. En READY?, cada proyecto es una 
                partida que jugamos para ganar.
              </p>

              {/* Quote - More elegant */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}
                className="relative pl-6 border-l-2 border-ready-orange/60 py-2"
              >
                <p className="text-xl md:text-2xl italic text-ready-cream/80 leading-relaxed">
                  "No queremos clientes. Queremos aliados que quieran 
                  <span className="text-ready-orange not-italic font-medium"> romper el marcador</span>."
                </p>
                <span className="text-sm text-ready-cream/40 mt-3 block">
                  — Fundadores de READY?
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3, ease: easeOutExpo }
                }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] 
                           hover:border-ready-orange/30 hover:bg-white/[0.04]
                           transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-ready-orange/10 
                               flex items-center justify-center mb-5
                               group-hover:bg-ready-orange/20 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-ready-orange" />
                </div>
                <h4 className="font-display text-lg font-bold text-ready-cream mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-ready-cream/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

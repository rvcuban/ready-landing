"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Zap, Trophy, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Premium easing curves
const easeOutExpo = [0.16, 1, 0.3, 1]
const easeOutQuart = [0.25, 1, 0.5, 1]

// Stagger container for orchestrated animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const stats = [
    { icon: Trophy, value: "+150", label: "Marcas transformadas" },
    { icon: Zap, value: "300%", label: "ROI promedio" },
    { icon: Gamepad2, value: "5", label: "Máquinas de poder" },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-ready-black" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] 
                     bg-ready-orange/[0.07] rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] 
                     bg-ready-pink/[0.05] rounded-full blur-[120px]"
        />
      </div>

      {/* Animated Grid - Very subtle */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 bg-arcade-grid"
      />

      {/* Scan Line - Very subtle */}
      <div className="scan-line" />

      {/* Floating Elements - Slower, more elegant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 0.6, 
          y: [0, -15, 0],
        }}
        transition={{ 
          opacity: { duration: 1, delay: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/3 left-[10%] md:left-[15%]"
      >
        <div className="w-20 h-20 rounded-full bg-ready-orange/10 blur-2xl" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 0.5, 
          y: [0, 20, 0],
        }}
        transition={{ 
          opacity: { duration: 1, delay: 1.2 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/3 right-[10%] md:right-[15%]"
      >
        <div className="w-28 h-28 rounded-full bg-ready-pink/10 blur-2xl" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge variant="pixel" className="mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full 
                               rounded-full bg-ready-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 
                               bg-ready-orange" />
              </span>
              PLAYER 1 READY
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold 
                       mb-8 leading-[1.1] tracking-tight"
          >
            <span className="text-ready-cream">¿Tu marca hace </span>
            <span className="text-gradient">ruido</span>
            <br />
            <span className="text-ready-cream">o solo </span>
            <motion.span 
              className="text-ready-orange inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(242, 146, 29, 0.3)",
                  "0 0 40px rgba(242, 146, 29, 0.5)",
                  "0 0 20px rgba(242, 146, 29, 0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              parpadea
            </motion.span>
            <span className="text-ready-cream">?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-ready-cream/60 max-w-2xl mx-auto 
                       mb-12 leading-relaxed"
          >
            Somos la agencia que convierte marcas olvidadas en{" "}
            <span className="text-ready-orange font-medium">
              leyendas del arcade
            </span>
            . Estrategia, creatividad y resultados que no puedes ignorar.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  y: -2, 
                  transition: { duration: 0.3, ease: easeOutQuart } 
                }}
                className="flex items-center gap-3 px-4 py-2 rounded-xl 
                           bg-white/[0.03] border border-white/[0.06]
                           hover:border-ready-orange/20 hover:bg-white/[0.05]
                           transition-colors duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-ready-orange/10 
                               flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-ready-orange" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xl font-bold text-ready-cream">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ready-cream/40">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOutQuart }}
            >
              <Button variant="arcade" size="xl">
                <Gamepad2 className="w-5 h-5 mr-2" />
                INSERTAR MONEDA
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOutQuart }}
            >
              <Button variant="outline" size="xl">
                VER HIGH SCORES
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: easeOutExpo }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ready-cream/30"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

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
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    filter: "blur(20px)",
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
}

// Slide from sides for dramatic effect
const slideLeftVariants = {
  hidden: { opacity: 0, x: -100, filter: "blur(15px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo },
  },
}

const slideRightVariants = {
  hidden: { opacity: 0, x: 100, filter: "blur(15px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const stats = [
    { icon: Trophy, value: "+150", label: "MARCAS" },
    { icon: Zap, value: "300%", label: "VISITAS" },
    { icon: Gamepad2, value: "5", label: "MÁQUINAS" },
  ]

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* ═══════════════════════════════════════════════════
          ABSTRACT BACKGROUND - Maximalista style
      ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bg-ready-black" />
      
      {/* Abstract paint blobs with motion blur effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange blob - top left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -top-20 -left-20 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(242, 146, 29, 0.15) 0%, rgba(242, 146, 29, 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'rotate(-15deg)',
          }}
        />
        
        {/* Pink blob - bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-32 -right-32 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(178, 23, 75, 0.12) 0%, rgba(178, 23, 75, 0.04) 40%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'rotate(20deg)',
          }}
        />

        {/* Ice blue accent - center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 3, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(233, 241, 255, 0.08) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Vertical accent stripes */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.3, height: '40%' }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute left-[15%] top-0 w-px bg-gradient-to-b from-ready-orange via-ready-orange/50 to-transparent hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.2, height: '30%' }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute right-[20%] bottom-0 w-px bg-gradient-to-t from-ready-pink via-ready-pink/50 to-transparent hidden lg:block"
      />

      {/* Subtle grid overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(242, 146, 29, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242, 146, 29, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT - Maximalista typography
      ═══════════════════════════════════════════════════ */}
      <motion.div 
        style={{ 
          y, 
          opacity, 
          scale,
        }}
        className="relative z-10 container mx-auto px-4 sm:px-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Micro subtitle */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-ready-cream/40 font-body">
              <span className="w-8 h-px bg-ready-orange/50" />
              ESTUDIO CREATIVO
              <span className="w-8 h-px bg-ready-orange/50" />
            </span>
          </motion.div>

          {/* MAXIMALISTA HEADLINE */}
          <div className="relative mb-6 sm:mb-10">
            {/* Main title - CONDENSED & GIANT */}
            <motion.h1
              variants={slideLeftVariants}
              className="font-display uppercase leading-[0.8] tracking-tight"
              style={{ 
                fontSize: 'clamp(3.5rem, 15vw, 14rem)',
                transform: 'scaleY(1.1)',
              }}
            >
              <span className="text-ready-cream block">¿TU MARCA</span>
            </motion.h1>
            
            <motion.h1
              variants={slideRightVariants}
              className="font-display uppercase leading-[0.8] tracking-tight"
              style={{ 
                fontSize: 'clamp(3.5rem, 15vw, 14rem)',
                transform: 'scaleY(1.1)',
              }}
            >
              <span className="text-ready-cream block">HACE </span>
              <motion.span 
                className="text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F2921D 0%, #B2174B 100%)',
                }}
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 20px rgba(242, 146, 29, 0.3))",
                    "drop-shadow(0 0 40px rgba(242, 146, 29, 0.6))",
                    "drop-shadow(0 0 20px rgba(242, 146, 29, 0.3))",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                RUIDO
              </motion.span>
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="font-display uppercase leading-[0.8] tracking-tight text-ready-cream/30"
              style={{ 
                fontSize: 'clamp(2.5rem, 10vw, 10rem)',
                transform: 'scaleY(1.1)',
              }}
            >
              <span>O SOLO </span>
              <motion.span 
                className="text-ready-orange"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                PARPADEA
              </motion.span>
              <span>?</span>
            </motion.h1>
          </div>

          {/* Subtitle - Micro typography */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-ready-cream/50 max-w-xl mx-auto 
                       mb-10 sm:mb-14 leading-relaxed font-body px-4 sm:px-0"
          >
            La agencia que introduce marcas olvidadas{" "}
            <span className="text-ready-orange font-medium">de nuevo en el juego</span>.
            <br className="hidden sm:block" />
            Estrategia. Creatividad. Resultados.
          </motion.p>

          {/* Stats - Editorial style */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 sm:gap-10 md:gap-16 mb-10 sm:mb-14"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3, ease: easeOutQuart } 
                }}
                className="text-center group cursor-default"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl text-ready-cream 
                               group-hover:text-ready-orange transition-colors duration-500"
                     style={{ transform: 'scaleY(1.1)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ready-cream/30 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.03, skewX: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeOutQuart }}
              className="w-full sm:w-auto"
            >
              <a href="#pricing">
                <Button variant="arcade" size="xl" className="w-full sm:w-auto group">
                  <Gamepad2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  INSERTAR MONEDA
                </Button>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, skewX: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeOutQuart }}
              className="w-full sm:w-auto"
            >
              <a href="#scores">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  VER HIGH SCORES
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Editorial style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: easeOutExpo }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-ready-cream/20 font-body">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-ready-cream/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

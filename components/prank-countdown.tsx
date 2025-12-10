"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// 🎭 CONFIGURACIÓN DE LA BROMA
// Cambia esta fecha para desbloquear la web
const UNLOCK_DATE = new Date("2025-12-28T00:00:00")

// ¿Activar la broma? Pon false para desactivarla
const PRANK_ENABLED = true

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date()
  const difference = UNLOCK_DATE.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-ready-orange/30 blur-2xl rounded-full" />
        
        <motion.div
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 
                     bg-ready-black-light border-2 border-ready-orange/50
                     rounded-2xl flex items-center justify-center
                     shadow-[0_0_30px_rgba(242,146,29,0.3)]"
        >
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-ready-orange" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-ready-orange" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-ready-orange" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-ready-orange" />
          
          <span className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-ready-cream">
            {value.toString().padStart(2, "0")}
          </span>
        </motion.div>
      </div>
      <span className="mt-3 text-xs sm:text-sm md:text-base text-ready-cream/60 uppercase tracking-widest font-medium">
        {label}
      </span>
    </motion.div>
  )
}

export function PrankCountdown({ children }: { children: React.ReactNode }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Verificar si ya pasó la fecha
    const checkUnlock = () => {
      const now = new Date()
      if (now >= UNLOCK_DATE || !PRANK_ENABLED) {
        setIsUnlocked(true)
      }
    }
    
    checkUnlock()

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
      
      // Si el contador llegó a 0, desbloquear
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsUnlocked(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Mientras carga, no mostrar nada para evitar flash
  if (!mounted) {
    return null
  }

  // Si está desbloqueado, mostrar la página normal
  if (isUnlocked) {
    return <>{children}</>
  }

  // Mostrar la pantalla de bloqueo con contador
  return (
    <div className="min-h-screen bg-ready-black flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-ready-orange/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-ready-pink/10 rounded-full blur-[150px]" />
        
        {/* Scanlines */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-ready-cream">
            READY<span className="text-ready-orange">?</span>
          </h1>
        </motion.div>

        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <h2 className="glitch-text font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ready-cream"
              data-text="LOADING...">
            LOADING...
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-ready-cream/60 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
        >
          Estamos preparando algo <span className="text-ready-orange font-semibold">épico</span>. 
          <br />
          La partida comienza en...
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-12"
        >
          <CountdownUnit value={timeLeft.days} label="Días" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-4"
        >
          <p className="text-ready-cream/40 text-sm">
            🎮 Insertando monedas... Por favor espera
          </p>
          
          {/* Fake Progress Bar */}
          <div className="max-w-xs mx-auto">
            <div className="h-2 bg-ready-black-light rounded-full overflow-hidden border border-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "33%" }}
                transition={{ duration: 2, delay: 1.2 }}
                className="h-full bg-gradient-to-r from-ready-orange to-ready-pink"
              />
            </div>
            <p className="text-ready-cream/30 text-xs mt-2">
              Cargando assets... 33%
            </p>
          </div>
        </motion.div>

        {/* Easter Egg - pequeño texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 text-ready-cream/20 text-xs"
        >
          🎭 ¿Inocente? Puede que sí, puede que no...
        </motion.p>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-ready-orange/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -20, 20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

// 🎭 CONFIGURACIÓN DE LA BROMA
// Cambia esta fecha para desbloquear la web
const UNLOCK_DATE = new Date("2025-12-28T00:00:00")

// ¿Activar la broma? Pon false para desactivarla
const PRANK_ENABLED = true

// GIF para la broma - Ichi Ni San Bang (Tenor Post ID)
const TENOR_POST_ID = "2001701211027057759"

// ID del video de YouTube (extraído de tu URL)
const YOUTUBE_VIDEO_ID = "ORKhmaquTgU"

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
  const [isMuted, setIsMuted] = useState(false)
  const [showGif, setShowGif] = useState(true)
  const playerRef = useRef<HTMLIFrameElement>(null)

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
    <div className="fixed inset-0 bg-ready-black flex flex-col items-center justify-center p-6 overflow-hidden z-[9999]">
      {/* YouTube Audio Player (hidden) - Empieza en segundo 19 */}
      <iframe
        ref={playerRef}
        className="hidden"
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&start=19&playlist=${YOUTUBE_VIDEO_ID}${isMuted ? '&mute=1' : '&mute=0'}`}
        allow="autoplay"
      />

      {/* Sound Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full
                   bg-ready-black-light border border-ready-orange/50
                   flex items-center justify-center
                   hover:border-ready-orange hover:bg-ready-orange/20
                   transition-all duration-300 group"
        title={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-ready-cream/60 group-hover:text-ready-orange" />
        ) : (
          <Volume2 className="w-5 h-5 text-ready-orange animate-pulse" />
        )}
      </motion.button>

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
        {/* 3 GIFs de Tenor - El mismo repetido 3 veces */}
        {showGif && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {/* GIF Izquierdo */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="hidden sm:block"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-ready-orange/30
                               shadow-[0_0_30px_rgba(242,146,29,0.2)] opacity-70 scale-90">
                  <div className="w-36 sm:w-40 aspect-[9/16] bg-ready-black-light">
                    <iframe 
                      src={`https://tenor.com/embed/${TENOR_POST_ID}`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      className="pointer-events-none"
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* GIF Central (Principal) */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-ready-orange/50
                               shadow-[0_0_40px_rgba(242,146,29,0.3)]">
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-ready-orange z-20" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-ready-orange z-20" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-ready-orange z-20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-ready-orange z-20" />
                  
                  <div className="w-48 sm:w-56 aspect-[9/16] bg-ready-black-light">
                    <iframe 
                      src={`https://tenor.com/embed/${TENOR_POST_ID}`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      allowFullScreen
                      className="pointer-events-none"
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              </div>

              {/* GIF Derecho */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="hidden sm:block"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-ready-orange/30
                               shadow-[0_0_30px_rgba(242,146,29,0.2)] opacity-70 scale-90">
                  <div className="w-36 sm:w-40 aspect-[9/16] bg-ready-black-light">
                    <iframe 
                      src={`https://tenor.com/embed/${TENOR_POST_ID}`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      className="pointer-events-none"
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
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
          Por no tenerme listas las cosas <span className="text-ready-orange font-semibold">Hagamos un dia de los inocentes inverso</span>. 
          <br />
          Esto es una shit hasta que sea el dia de los inocentes disfruta de tu web mariquita...
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
            🎮 Esperemos que tus clientes no vean esto... 
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
              No pienses que la barra va avanzar o algo asi ni que me sobrara el tiempo... 33%
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
          🎭 Me dio hambre quiero una hamburguesa ...
        </motion.p>
      </motion.div>

    </div>
  )
}

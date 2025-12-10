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
        {/* Glow effect - más pequeño en móvil */}
        <div className="absolute inset-0 bg-ready-orange/30 blur-xl sm:blur-2xl rounded-full" />
        
        <motion.div
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 
                     bg-ready-black-light border border-ready-orange/50 sm:border-2
                     rounded-xl sm:rounded-2xl flex items-center justify-center
                     shadow-[0_0_20px_rgba(242,146,29,0.3)] sm:shadow-[0_0_30px_rgba(242,146,29,0.3)]"
        >
          {/* Corner decorations - más pequeñas en móvil */}
          <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-2 h-2 sm:w-3 sm:h-3 border-t border-l sm:border-t-2 sm:border-l-2 border-ready-orange" />
          <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-2 h-2 sm:w-3 sm:h-3 border-t border-r sm:border-t-2 sm:border-r-2 border-ready-orange" />
          <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-2 h-2 sm:w-3 sm:h-3 border-b border-l sm:border-b-2 sm:border-l-2 border-ready-orange" />
          <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-2 h-2 sm:w-3 sm:h-3 border-b border-r sm:border-b-2 sm:border-r-2 border-ready-orange" />
          
          <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-ready-cream">
            {value.toString().padStart(2, "0")}
          </span>
        </motion.div>
      </div>
      <span className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-ready-cream/60 uppercase tracking-wider sm:tracking-widest font-medium">
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
  const [hasInteracted, setHasInteracted] = useState(false)
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
    <div 
      className="fixed inset-0 bg-ready-black flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto overflow-x-hidden z-[9999]"
      onClick={() => !hasInteracted && setHasInteracted(true)}
    >
      {/* YouTube Audio Player - Solo carga después de interacción */}
      {hasInteracted && (
        <iframe
          ref={playerRef}
          className="hidden"
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&start=19&playlist=${YOUTUBE_VIDEO_ID}${isMuted ? '&mute=1' : '&mute=0'}`}
          allow="autoplay; encrypted-media"
        />
      )}

      {/* Sound Toggle Button - Pequeño en esquina */}
      {hasInteracted && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMuted(!isMuted)}
          className="fixed top-3 right-3 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                     bg-ready-black-light border border-ready-orange/50
                     flex items-center justify-center
                     hover:border-ready-orange hover:bg-ready-orange/20
                     transition-all duration-300 group"
          title={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-ready-cream/60 group-hover:text-ready-orange" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-ready-orange animate-pulse" />
          )}
        </motion.button>
      )}

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
        {/* GIF de Tenor - Solo 1 en móvil, 3 en desktop */}
        {showGif && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-4 sm:mb-8"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
              {/* GIF Izquierdo - Solo en tablets+ */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="hidden md:block"
              >
                <div className="relative rounded-xl overflow-hidden border-2 border-ready-orange/30
                               shadow-[0_0_30px_rgba(242,146,29,0.2)] opacity-70 scale-90">
                  <div className="w-32 lg:w-40 aspect-[9/16] bg-ready-black-light">
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

              {/* GIF Central (Principal) - Más pequeño en móvil */}
              <div className="relative">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-ready-orange/50
                               shadow-[0_0_40px_rgba(242,146,29,0.3)]">
                  {/* Corner decorations - Más pequeñas en móvil */}
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-2 h-2 sm:w-4 sm:h-4 border-t-2 border-l-2 border-ready-orange z-20" />
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-4 sm:h-4 border-t-2 border-r-2 border-ready-orange z-20" />
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-4 sm:h-4 border-b-2 border-l-2 border-ready-orange z-20" />
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-2 h-2 sm:w-4 sm:h-4 border-b-2 border-r-2 border-ready-orange z-20" />
                  
                  <div className="w-32 sm:w-44 md:w-56 aspect-[9/16] bg-ready-black-light">
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

              {/* GIF Derecho - Solo en tablets+ */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="hidden md:block"
              >
                <div className="relative rounded-xl overflow-hidden border-2 border-ready-orange/30
                               shadow-[0_0_30px_rgba(242,146,29,0.2)] opacity-70 scale-90">
                  <div className="w-32 lg:w-40 aspect-[9/16] bg-ready-black-light">
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
          className="mb-3 sm:mb-6"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ready-cream">
            READY<span className="text-ready-orange">?</span>
          </h1>
        </motion.div>

        {/* Botón para activar sonido - Integrado en el contenido */}
        {!hasInteracted && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            onClick={(e) => {
              e.stopPropagation();
              setHasInteracted(true);
            }}
            className="mb-4 sm:mb-8 px-6 py-3 sm:px-10 sm:py-4 rounded-full
                       bg-ready-orange text-ready-black font-bold text-sm sm:text-lg
                       flex items-center gap-2 mx-auto
                       hover:bg-ready-orange/90 hover:scale-105
                       transition-all duration-300
                       shadow-[0_0_40px_rgba(242,146,29,0.5)]
                       animate-pulse"
          >
            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>🔊 Haz click para activar el sonido</span>
          </motion.button>
        )}

        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-2 sm:mb-4"
        >
          <h2 className="glitch-text font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ready-cream"
              data-text="LOADING...">
            LOADING...
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-ready-cream/60 text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-12 max-w-2xl mx-auto px-2"
        >
          Por no tenerme listas las cosas <span className="text-ready-orange font-semibold">Hagamos un dia de los inocentes inverso</span>. 
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Esto es una shit hasta que sea el dia de los inocentes disfruta de tu web mariquita...
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-12"
        >
          <CountdownUnit value={timeLeft.days} label="Días" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <CountdownUnit value={timeLeft.seconds} label="Seg" />
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-2 sm:space-y-4"
        >
          <p className="text-ready-cream/40 text-xs sm:text-sm">
            🎮 Esperemos que tus clientes no vean esto... 
          </p>
          
          {/* Fake Progress Bar */}
          <div className="max-w-[200px] sm:max-w-xs mx-auto">
            <div className="h-1.5 sm:h-2 bg-ready-black-light rounded-full overflow-hidden border border-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "33%" }}
                transition={{ duration: 2, delay: 1.2 }}
                className="h-full bg-gradient-to-r from-ready-orange to-ready-pink"
              />
            </div>
            <p className="text-ready-cream/30 text-[10px] sm:text-xs mt-1.5 sm:mt-2 px-2">
              No pienses que la barra va avanzar... 33%
            </p>
          </div>
        </motion.div>

        {/* Easter Egg - pequeño texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 sm:mt-16 text-ready-cream/20 text-[10px] sm:text-xs pb-16 sm:pb-0"
        >
          🎭 Me dio hambre quiero una hamburguesa ...
        </motion.p>
      </motion.div>

    </div>
  )
}

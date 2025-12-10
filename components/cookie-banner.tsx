"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X, Settings, Check } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be changed
    analytics: false,
    marketing: false,
  })

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent")
    if (!consent) {
      // Small delay to avoid hydration issues
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true }
    setPreferences(newPrefs)
    localStorage.setItem("cookies_consent", JSON.stringify(newPrefs))
    localStorage.setItem("cookies_consent_date", new Date().toISOString())
    setShowBanner(false)
    // Here you would initialize analytics if accepted
    // initAnalytics()
  }

  const rejectAll = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false }
    setPreferences(newPrefs)
    localStorage.setItem("cookies_consent", JSON.stringify(newPrefs))
    localStorage.setItem("cookies_consent_date", new Date().toISOString())
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookies_consent", JSON.stringify(preferences))
    localStorage.setItem("cookies_consent_date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
    // Initialize analytics if accepted
    if (preferences.analytics) {
      // initAnalytics()
    }
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
        >
          <div 
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 15, 18, 0.98) 0%, rgba(10, 10, 13, 0.98) 100%)',
              border: '1px solid rgba(242, 146, 29, 0.2)',
              boxShadow: '0 -10px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(242, 146, 29, 0.1)'
            }}
          >
            {!showSettings ? (
              // Main Banner
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(242, 146, 29, 0.2) 0%, rgba(178, 23, 75, 0.1) 100%)',
                      border: '1px solid rgba(242, 146, 29, 0.3)'
                    }}
                  >
                    <Cookie className="w-6 h-6 text-ready-orange" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl font-bold text-ready-cream mb-2">
                      🎮 Este arcade usa cookies
                    </h3>
                    <p className="text-ready-cream/60 text-sm md:text-base mb-4 leading-relaxed">
                      Utilizamos cookies para mejorar tu experiencia, analizar el tráfico 
                      y personalizar el contenido. Puedes aceptar todas, rechazarlas o 
                      configurar tus preferencias.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={acceptAll}
                        className="px-6 py-2.5 rounded-xl font-display font-bold text-sm uppercase tracking-wide
                                  bg-gradient-to-r from-ready-orange to-ready-pink text-black
                                  hover:opacity-90 transition-opacity"
                        style={{
                          boxShadow: '0 0 20px rgba(242, 146, 29, 0.3)'
                        }}
                      >
                        Aceptar todo
                      </button>
                      
                      <button
                        onClick={rejectAll}
                        className="px-6 py-2.5 rounded-xl font-display font-bold text-sm uppercase tracking-wide
                                  bg-white/5 border border-white/20 text-ready-cream
                                  hover:bg-white/10 hover:border-white/30 transition-all"
                      >
                        Solo necesarias
                      </button>
                      
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-4 py-2.5 rounded-xl font-display text-sm
                                  text-ready-cream/60 hover:text-ready-orange transition-colors
                                  flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Configurar
                      </button>
                    </div>
                    
                    <p className="text-ready-cream/40 text-xs mt-4">
                      Más información en nuestra{" "}
                      <Link href="/cookies" className="text-ready-orange hover:underline">
                        Política de Cookies
                      </Link>
                      {" "}y{" "}
                      <Link href="/politica-privacidad" className="text-ready-orange hover:underline">
                        Política de Privacidad
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-lg md:text-xl font-bold text-ready-cream">
                    Configurar cookies
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center
                              text-ready-cream/60 hover:text-ready-cream hover:bg-white/10 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {/* Necessary cookies */}
                  <div 
                    className="p-4 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-bold text-ready-cream mb-1">
                          Cookies necesarias
                        </h4>
                        <p className="text-ready-cream/50 text-sm">
                          Esenciales para el funcionamiento del sitio
                        </p>
                      </div>
                      <div className="w-12 h-7 rounded-full bg-ready-orange/20 border border-ready-orange/40 
                                     flex items-center justify-end px-1 cursor-not-allowed">
                        <div className="w-5 h-5 rounded-full bg-ready-orange" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Analytics cookies */}
                  <div 
                    className="p-4 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-bold text-ready-cream mb-1">
                          Cookies analíticas
                        </h4>
                        <p className="text-ready-cream/50 text-sm">
                          Nos ayudan a entender cómo usas el sitio
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className={`w-12 h-7 rounded-full border transition-all flex items-center px-1 ${
                          preferences.analytics 
                            ? 'bg-ready-orange/20 border-ready-orange/40 justify-end' 
                            : 'bg-white/5 border-white/20 justify-start'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-ready-orange' : 'bg-white/30'
                        }`} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Marketing cookies */}
                  <div 
                    className="p-4 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-bold text-ready-cream mb-1">
                          Cookies de marketing
                        </h4>
                        <p className="text-ready-cream/50 text-sm">
                          Permiten mostrarte contenido personalizado
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                        className={`w-12 h-7 rounded-full border transition-all flex items-center px-1 ${
                          preferences.marketing 
                            ? 'bg-ready-orange/20 border-ready-orange/40 justify-end' 
                            : 'bg-white/5 border-white/20 justify-start'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-ready-orange' : 'bg-white/30'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-6 py-2.5 rounded-xl font-display font-bold text-sm uppercase tracking-wide
                              bg-gradient-to-r from-ready-orange to-ready-pink text-black
                              hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Guardar preferencias
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

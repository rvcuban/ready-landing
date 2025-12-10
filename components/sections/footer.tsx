"use client"

import { motion } from "framer-motion"
import { 
  Instagram, 
  Heart,
  Gamepad2,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

// TikTok icon (no está en lucide-react)
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/pabswhat", 
    label: "Instagram" 
  },
  { 
    icon: TikTokIcon, 
    href: "https://www.tiktok.com/@pabswhat", 
    label: "TikTok" 
  },
]

const contactInfo = [
  { 
    icon: Mail, 
    label: "hola@estudioready.es", 
    href: "mailto:hola@estudioready.es" 
  },
  { 
    icon: Phone, 
    label: "648 043 990", 
    href: "tel:+34648043990" 
  },
  { 
    icon: MapPin, 
    label: "Cáceres, España", 
    href: "#" 
  },
]

const footerLinks = {
  servicios: [
    { label: "Gancho", href: "#servicios" },
    { label: "Pinball", href: "#servicios" },
    { label: "Turbo", href: "#servicios" },
    { label: "Puzzle", href: "#servicios" },
    { label: "Game Master", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#salon" },
    { label: "Casos de éxito", href: "#scores" },
  ],
  legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Aviso legal", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-ready-black border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-3xl font-bold text-ready-cream">
                READY<span className="text-ready-orange">?</span>
              </span>
            </motion.a>
            <p className="text-ready-cream/60 mb-6 max-w-sm leading-relaxed">
              El arcade donde las marcas vienen a ganar. 
              Estrategia, creatividad y resultados que no puedes ignorar.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-ready-cream/50 hover:text-ready-orange transition-colors duration-300 text-sm"
                >
                  <info.icon className="w-4 h-4" />
                  {info.label}
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="
                      w-10 h-10 rounded-xl bg-white/5 border border-white/10
                      flex items-center justify-center
                      hover:border-ready-orange/40 hover:bg-ready-orange/10
                      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                      text-ready-cream/60 hover:text-ready-orange
                    "
                  >
                    <IconComponent />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-ready-cream mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="
                      text-ready-cream/50 hover:text-ready-orange 
                      transition-colors duration-500 text-sm
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-ready-cream mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="
                      text-ready-cream/50 hover:text-ready-orange 
                      transition-colors duration-500 text-sm
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-bold text-ready-cream mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="
                      text-ready-cream/50 hover:text-ready-orange 
                      transition-colors duration-500 text-sm
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-ready-cream/35 flex items-center gap-2">
              © {currentYear} READY? Estudio Creativo. Todos los derechos reservados.
            </p>
            <p className="text-sm text-ready-cream/35 flex items-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-ready-pink fill-ready-pink" /> y muchas 
              <Gamepad2 className="w-4 h-4 text-ready-orange mx-1" /> partidas
            </p>
          </div>
        </div>
      </div>

      {/* Easter Egg: Konami Code hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <p className="text-[10px] text-ready-cream/20 font-pixel tracking-wider">
          ↑↑↓↓←→←→BA
        </p>
      </div>
    </footer>
  )
}

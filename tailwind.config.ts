import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // READY? Brand Colors
        ready: {
          black: '#0E0F14',
          cream: '#FFF1E6',
          orange: '#F2921D',
          pink: '#B2174B',
          ice: '#E9F1FF',
          'black-light': '#1A1B22',
          'black-dark': '#080910',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#F2921D',
          foreground: '#0E0F14',
        },
        secondary: {
          DEFAULT: '#B2174B',
          foreground: '#FFF1E6',
        },
        muted: {
          DEFAULT: '#1A1B22',
          foreground: 'rgba(255, 241, 230, 0.7)',
        },
        accent: {
          DEFAULT: '#F2921D',
          foreground: '#0E0F14',
        },
        card: {
          DEFAULT: '#1A1B22',
          foreground: '#FFF1E6',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        pixel: ['var(--font-press-start)', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #F2921D, 0 0 10px #F2921D',
          },
          '50%': {
            boxShadow: '0 0 20px #F2921D, 0 0 40px #F2921D, 0 0 60px #F2921D',
          },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '95%': { opacity: '0.9' },
          '96%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'scan-line': 'scan-line 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `linear-gradient(rgba(242, 146, 29, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(242, 146, 29, 0.03) 1px, transparent 1px)`,
        'crt-lines': `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.03),
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 2px
        )`,
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(242, 146, 29, 0.3)',
        'glow-pink': '0 0 20px rgba(178, 23, 75, 0.3)',
        'glow-intense': '0 0 30px rgba(242, 146, 29, 0.5), 0 0 60px rgba(242, 146, 29, 0.3)',
        'arcade': '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config

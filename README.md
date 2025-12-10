# READY? Landing Page 🎮

> La agencia que convierte marcas olvidadas en leyendas del arcade.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS + CSS Variables
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui style (custom)
- **Icons:** Lucide React
- **Fonts:** Space Grotesk, Inter, Press Start 2P

## 📦 Instalación

```bash
# Navegar al directorio
cd ready-landing

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
ready-landing/
├── app/
│   ├── globals.css       # Estilos globales + Tailwind
│   ├── layout.tsx        # Layout principal + Metadata SEO
│   └── page.tsx          # Página principal
├── components/
│   ├── ui/               # Componentes base (shadcn-style)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── sections/         # Secciones de la landing
│   │   ├── header.tsx    # Navegación + Mobile menu
│   │   ├── hero.tsx      # Hero con parallax
│   │   ├── salon.tsx     # Sección "El Salón"
│   │   ├── maquinas.tsx  # 5 servicios/máquinas
│   │   ├── scores.tsx    # Estadísticas + Testimonios
│   │   ├── pricing.tsx   # Planes de precios
│   │   ├── contact.tsx   # Formulario de contacto
│   │   └── footer.tsx    # Footer + Social links
│   └── floating-gancho.tsx # Companion interactivo
├── lib/
│   └── utils.ts          # Utilidades (cn function)
├── tailwind.config.ts    # Configuración Tailwind + Brand
├── package.json
└── README.md
```

## 🎨 Paleta de Colores (Brand READY?)

| Color | Hex | Uso |
|-------|-----|-----|
| Black | `#0E0F14` | Background principal |
| Cream | `#FFF1E6` | Texto principal |
| Orange | `#F2921D` | Accent principal, CTAs |
| Pink | `#B2174B` | Accent secundario |
| Ice | `#E9F1FF` | Detalles fríos |

## ✨ Características

### Animaciones
- **Parallax Hero:** El contenido se mueve con el scroll
- **Scroll Reveal:** Secciones aparecen al hacer scroll
- **Hover Effects:** Tarjetas con glow y elevación
- **Counter Animation:** Números que cuentan al aparecer
- **Floating Gancho:** Companion que sigue al usuario

### Interactividad
- **Konami Code Easter Egg:** ↑↑↓↓←→←→BA
- **Expandable Cards:** Máquinas con detalles expandibles
- **Contact Form:** Con estados de loading y success
- **Smooth Scroll:** Navegación suave entre secciones

### Responsive
- Mobile-first design
- Menu hamburguesa en móvil
- Grid adaptativo en todas las secciones
- Tamaños de fuente fluidos

## 🎮 El Floating Gancho

Un companion interactivo que:
- Aparece después de pasar el Hero
- Muestra mensajes rotativos
- Reacciona sutilmente al mouse
- Tiene notificación pulsante
- Se puede expandir/colapsar

## 📝 Comandos Disponibles

```bash
npm run dev       # Desarrollo local
npm run build     # Build de producción
npm run start     # Servidor de producción
npm run lint      # Linting
```

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.ts` en la sección `colors.ready`

### Cambiar contenido
Los textos están en cada componente de sección (`/components/sections/`)

### Agregar animaciones
Usa las utilidades de Framer Motion ya configuradas

## 📄 Licencia

Proyecto privado para READY? Agency.

---

Hecho con ❤️ y muchas 🎮 partidas

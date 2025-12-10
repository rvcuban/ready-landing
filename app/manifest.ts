import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'READY? Estudio Creativo',
    short_name: 'READY?',
    description: 'Estudio creativo en Cáceres. Marketing digital, branding, gestión de redes sociales y estrategia de marca.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F12',
    theme_color: '#F2921D',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

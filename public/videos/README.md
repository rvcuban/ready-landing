# 📹 Videos para la Landing

## Instrucciones para añadir videos

Coloca los videos del cliente en esta carpeta con los siguientes nombres:

### Archivos necesarios:
```
videos/
├── caso-1.mp4    (Video del primer caso de éxito)
├── caso-2.mp4    (Video del segundo caso de éxito)
└── caso-3.mp4    (Video del tercer caso de éxito)
```

### Thumbnails (imágenes de preview):
Los thumbnails van en `/public/images/`:
```
images/
├── video-thumb-1.jpg    (Preview del video 1)
├── video-thumb-2.jpg    (Preview del video 2)
└── video-thumb-3.jpg    (Preview del video 3)
```

## Formatos recomendados:
- **Videos**: MP4 (H.264), máximo 50MB por video para carga rápida
- **Thumbnails**: JPG o PNG, 800x450px (16:9) o 450x800px (9:16 para móvil)

## Para personalizar títulos y resultados:
Edita el archivo `components/sections/scores.tsx` y modifica el array `videoShowcases`:

```javascript
const videoShowcases = [
  {
    id: 1,
    videoUrl: "/videos/caso-1.mp4",
    thumbnail: "/images/video-thumb-1.jpg",
    title: "Nombre del Proyecto",      // ← Cambia aquí
    subtitle: "Tipo de colaboración",  // ← Cambia aquí
    result: "+200% ventas"             // ← Cambia aquí
  },
  // ...
]
```

## Notas:
- Si no tienes thumbnail, el sistema mostrará un patrón arcade
- Los videos se reproducen en un modal elegante con controles
- Soporta videos verticales (TikTok/Reels) y horizontales

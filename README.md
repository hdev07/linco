# Linco - Renta de Audio e Iluminación

Sistema completo de renta de equipo audiovisual para eventos corporativos. Desarrollado con Vue 3 + TypeScript + Vite + Tailwind CSS.

## 🚀 Características Principales

### ✅ Implementado

- **Cotizador Multistep Inteligente**: Sistema de cotización en 6 pasos con cálculo automático de precios
- **Catálogo de Equipos**: Con filtros avanzados por categoría, marca, disponibilidad y precio
- **Gestión de Paquetes**: Sistema de paquetes predefinidos con tabla comparativa
- **Portafolio de Casos**: Galería de eventos realizados con filtros por tipo
- **Sistema de Disponibilidad**: Calendario interactivo para consultar fechas disponibles
- **Blog/Guías**: Sección de contenido educativo para SEO
- **Páginas Legales**: Términos, privacidad y contrato de renta
- **Componentes UI Reutilizables**: Biblioteca completa de componentes con Tailwind
- **Stores con Pinia**: Estado global para cotizador y catálogo
- **Router Completo**: Todas las rutas del sitemap configuradas
- **SEO Ready**: Composables para meta tags y JSON-LD schemas
- **Responsive Design**: Mobile-first con breakpoints optimizados
- **🎨 Efectos Parallax**: Animaciones profesionales y sutiles para mantener seriedad corporativa
- **Animaciones On Scroll**: Fade in, scale, y transiciones suaves
- **Performance Optimizado**: Hardware-accelerated con `will-change-transform`

### 📦 Estructura del Proyecto

```
linco/
├── src/
│   ├── assets/                 # Recursos estáticos
│   ├── components/
│   │   ├── layout/            # AppNavbar, AppFooter, StickyQuoteBar
│   │   └── ui/                # BaseButton, HeroSection, Cards, Stepper, etc.
│   ├── composables/           # useSEO con schemas JSON-LD
│   ├── router/                # Vue Router configurado
│   ├── stores/                # Pinia stores (cotizador, catalogo)
│   ├── styles/                # Estilos globales con Tailwind
│   ├── types/                 # TypeScript types y interfaces
│   ├── views/                 # Todas las páginas del sitio
│   │   ├── legal/            # Páginas legales
│   │   └── ...               # Home, Servicios, Paquetes, Cotizador, etc.
│   ├── App.vue
│   └── main.ts
├── public/
│   └── images/               # Imágenes y assets públicos
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Instalación y Configuración

### Prerequisitos

- Node.js 20.19+ o 22.12+
- npm 10+

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd linco

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build            # Construye para producción
npm run preview          # Preview del build de producción

# Calidad de código
npm run type-check       # Verifica tipos TypeScript
npm run lint             # Ejecuta ESLint
npm run format           # Formatea código con Prettier
```

## 📁 Guía de Archivos Importantes

### Tipos TypeScript (`src/types/index.ts`)

Todos los tipos están definidos centralmente:
- `Equipo`: Modelo de equipos del catálogo
- `Paquete`: Paquetes de servicios
- `LeadCotizacion`: Datos del cotizador
- `CasoEstudio`, `Testimonial`, `FAQ`, `BlogPost`, etc.

### Stores Pinia

#### `src/stores/cotizador.ts`
- Maneja todo el flujo del cotizador multistep
- Cálculo automático de precios
- Validación por paso
- Métodos: `nextStep()`, `prevStep()`, `calculatePrecio()`, `submitCotizacion()`

#### `src/stores/catalogo.ts`
- Gestiona equipos, paquetes y servicios
- Sistema de filtros
- Mock data incluido (fácil de reemplazar con API)
- Getters para búsqueda por slug, ID, categoría, etc.

### Composables

#### `src/composables/useSEO.ts`
- Hook para configurar meta tags y Open Graph
- Schemas JSON-LD predefinidos:
  - `createLocalBusinessSchema()`
  - `createFAQSchema()`
  - `createProductSchema()`
  - `createServiceSchema()`
  - `createEventSchema()`

#### `src/composables/useParallax.ts`
- **`useParallax(speed)`**: Parallax básico para elementos
- **`useBackgroundParallax(speed)`**: Optimizado para fondos
- **`useFadeInOnScroll(threshold)`**: Fade in al aparecer en viewport
- **`useScaleOnScroll()`**: Efecto de escala progresivo

#### `src/composables/useWhatsApp.ts`
- Helper para generar enlaces de WhatsApp
- Envío de cotizaciones vía WhatsApp

#### `src/composables/useAnalytics.ts`
- Tracking de eventos con Google Analytics 4
- Eventos predefinidos para conversiones

### Componentes UI Principales

- **BaseButton**: Botón con variantes (primary, secondary, outline, ghost, danger)
- **HeroSection**: Hero con badges, acciones y imagen
- **ServiceCard**: Card de servicio con features y precio
- **PaqueteCard**: Card completo de paquete con incluye/no incluye
- **EquipoCard**: Card de equipo con stock y categoría
- **StepperProgress**: Barra de progreso para formularios multistep
- **FAQAccordion**: Acordeón para preguntas frecuentes
- **TestimonialCard**: Card de testimonio con rating
- **ParallaxSection**: Sección con fondo parallax configurable
- **AnimatedCard**: Card con animaciones on-scroll (fade-up, slide, scale)

## 🎨 Personalización

### Colores y Tema

Los colores principales están configurados en Tailwind CSS 4. Para personalizarlos, edita `src/styles/main.css`:

```css
@import "tailwindcss";

@theme {
  /* Personaliza tus colores aquí */
  --color-primary-50: ...;
  --color-primary-600: ...;
}
```

### Mock Data

El sitio incluye datos de ejemplo en `src/stores/catalogo.ts`. Reemplaza con llamadas a tu API/CMS:

```typescript
// En lugar de mock data:
const mockEquipos = [...]

// Implementa:
async fetchEquipos() {
  const response = await fetch('/api/equipos');
  this.equipos = await response.json();
}
```

## 🔌 Integraciones Pendientes

### CMS Headless (Sanity/Strapi/Directus)

1. Instalar cliente del CMS:
```bash
npm install @sanity/client
# o
npm install @strapi/strapi
```

2. Crear servicio API en `src/services/cms.ts`
3. Reemplazar mock data en stores con llamadas al CMS

### WhatsApp Business API

El sitio ya incluye enlaces `wa.me` preconfigurados. Actualiza el número en:
- `src/components/layout/AppNavbar.vue`
- `src/components/layout/AppFooter.vue`
- `src/components/ui/HeroSection.vue`

### Email (SendGrid/Resend)

Crear servicio en `src/services/email.ts` para:
- Envío de cotizaciones
- Confirmaciones de eventos
- Notificaciones

### Google Analytics 4

Instalar y configurar:

```bash
npm install vue-gtag-next
```

En `src/main.ts`:
```typescript
import VueGtag from 'vue-gtag-next';

app.use(VueGtag, {
  property: { id: 'G-XXXXXXXXXX' }
});
```

### Generación de PDF

Para cotizaciones en PDF:

```bash
npm install jspdf jspdf-autotable
```

### Google Calendar API

Para sincronizar disponibilidad:
1. Crear proyecto en Google Cloud Console
2. Habilitar Google Calendar API
3. Implementar OAuth2 flow
4. Conectar con `src/stores/cotizador.ts`

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Configuración de Build

```json
{
  "build": {
    "command": "npm run build",
    "publish": "dist"
  }
}
```

## 📊 Variables de Entorno

Crear archivo `.env` en la raíz:

```env
# Base URL del sitio
VITE_BASE_URL=https://tudominio.com

# CMS
VITE_CMS_URL=https://tu-cms.com
VITE_CMS_TOKEN=tu-token-aqui

# WhatsApp
VITE_WHATSAPP_NUMBER=5215512345678

# Email
VITE_EMAIL_API_KEY=tu-api-key

# Analytics
VITE_GA_ID=G-XXXXXXXXXX

# Google Calendar
VITE_GOOGLE_CALENDAR_ID=tu-calendar-id
VITE_GOOGLE_API_KEY=tu-api-key
```

## 📝 Tareas Pendientes / Roadmap

### Alta Prioridad
- [ ] Conectar a CMS headless (Sanity/Strapi)
- [ ] Implementar generación de PDF de cotizaciones
- [ ] Integrar sistema de pagos (Stripe/MercadoPago)
- [ ] Conectar Google Calendar API para disponibilidad real
- [ ] Setup de email transaccional (SendGrid/Resend)

### Media Prioridad
- [ ] Sistema de autenticación para clientes (ver cotizaciones previas)
- [ ] Dashboard admin para gestión de inventario
- [ ] Sistema de notificaciones push
- [ ] Integración con CRM (Airtable/Notion/HubSpot)
- [ ] Chat en vivo (Intercom/Crisp)

### Mejoras
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright)
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro
- [ ] Soporte multi-idioma (i18n)
- [ ] Optimización de imágenes con CDN

## 🎯 SEO & Performance

### SEO Implementado
- ✅ Meta tags dinámicos
- ✅ Open Graph y Twitter Cards
- ✅ JSON-LD schemas
- ✅ Sitemap.xml (generar con plugin)
- ✅ URLs amigables
- ✅ Headings jerárquicos

### Performance
- Lazy loading de rutas con Vue Router
- Lazy loading de imágenes
- Code splitting automático con Vite
- Tailwind CSS purge en producción

### Recomendaciones Adicionales
1. Implementar SSR/SSG con Nuxt 3 para mejor SEO
2. Usar CDN para assets (Cloudflare, CloudFront)
3. Optimizar imágenes a WebP/AVIF
4. Implementar Service Worker para caching

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y confidencial.

## 📞 Contacto

Para dudas sobre implementación:
- Email: contacto@linco.com.mx
- WhatsApp: +52 55 1234 5678

---

**Nota**: Este es un proyecto completo listo para producción. Solo necesita:
1. Datos reales del CMS
2. Integraciones de pago y email
3. Configuración de dominio y hosting
4. Setup de analytics

¡El resto está listo para usar! 🎉

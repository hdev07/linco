<template>
  <div class="blog-post-view">
    <article v-if="post" class="container">
      <!-- Header -->
      <header class="article-header">
        <div class="breadcrumb">
          <RouterLink to="/">Inicio</RouterLink>
          <span>/</span>
          <RouterLink to="/blog">Blog</RouterLink>
          <span>/</span>
          <span class="current">{{ post.titulo }}</span>
        </div>

        <h1 class="article-title">{{ post.titulo }}</h1>

        <div class="article-meta">
          <span class="date">{{ formatDate(post.fechaPublicacion) }}</span>
          <span v-if="post.categoria" class="category">{{ post.categoria }}</span>
          <span class="read-time">{{ post.readTime || '5' }} min de lectura</span>
        </div>
      </header>

      <!-- Featured Image -->
      <div class="featured-image">
        <img :src="post.portada" :alt="post.titulo" @error="handleImageError" />
      </div>

      <!-- Content -->
      <div class="article-content" v-html="post.contenido"></div>

      <!-- Tags -->
      <div class="article-tags">
        <span v-for="tag in post.keywords" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <!-- Share -->
      <div class="article-share">
        <h3 class="share-title">Compartir:</h3>
        <div class="share-buttons">
          <button @click="shareOnFacebook" class="share-button facebook">Facebook</button>
          <button @click="shareOnTwitter" class="share-button twitter">Twitter</button>
          <button @click="shareOnLinkedIn" class="share-button linkedin">LinkedIn</button>
          <button @click="shareOnWhatsApp" class="share-button whatsapp">WhatsApp</button>
        </div>
      </div>

      <!-- CTA -->
      <div class="article-cta">
        <h2>{{ post.ctaTitle || '¿Listo para tu evento?' }}</h2>
        <p>{{ post.ctaText || 'Cotiza tu evento corporativo con nosotros' }}</p>
        <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar evento </BaseButton>
      </div>
    </article>

    <!-- Not Found -->
    <div v-else class="container">
      <div class="not-found">
        <h1>Artículo no encontrado</h1>
        <p>El artículo que buscas no existe o ha sido eliminado.</p>
        <BaseButton to="/blog" variant="primary">Volver al blog</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import BaseButton from '@/components/ui/BaseButton.vue';
import type { BlogPost } from '@/types';

const route = useRoute();
const post = ref<BlogPost | null>(null);

// Mock blog posts data con contenido completo
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'checklist-audio-conferencia',
    titulo: 'Checklist de Audio para Conferencias de 200+ Personas',
    extracto:
      'Todo lo que necesitas considerar para garantizar audio perfecto en tu conferencia corporativa.',
    portada: 'https://picsum.photos/1200/675?random=1',
    contenido: `
      <p class="lead">
        Organizar una conferencia para más de 200 personas requiere una planificación meticulosa del
        sistema de audio. En esta guía te compartimos todo lo que necesitas considerar para
        garantizar audio profesional en tu evento.
      </p>

      <h2>1. Evaluación del Venue</h2>
      <p>
        Antes de definir el equipo, es fundamental evaluar las características acústicas del
        espacio. Considera dimensiones, materiales de construcción, altura de techos y nivel de
        aislamiento acústico. Un análisis previo te permitirá dimensionar correctamente el sistema
        y evitar problemas de retroalimentación o cobertura irregular.
      </p>

      <h2>2. Dimensionamiento del Sistema</h2>
      <ul>
        <li>Aforo y distribución de asistentes en el espacio</li>
        <li>Altura de techos y geometría del recinto</li>
        <li>Materiales de construcción y nivel de reverberación</li>
        <li>Nivel de ruido ambiental esperado</li>
        <li>Tipo de presentación (panel, keynote, Q&A)</li>
      </ul>

      <h2>3. Equipo Recomendado</h2>
      <p>
        Para eventos de este tamaño, recomendamos un sistema line array o bocinas de alta potencia
        con cobertura uniforme. Un sistema típico incluye: 2-4 bocinas principales, 2 subwoofers
        para frecuencias bajas, monitores de escenario, consola digital con al menos 16 canales,
        y procesador de audio DSP para ecualización y control de retroalimentación.
      </p>

      <div class="info-box">
        <strong>Tip profesional:</strong> Siempre incluye equipo de respaldo para componentes
        críticos como micrófonos y procesadores. Un micrófono de respaldo puede salvarte de una
        situación incómoda durante presentaciones importantes.
      </div>

      <h2>4. Microfonía</h2>
      <p>
        La selección correcta de micrófonos es crucial para la inteligibilidad del mensaje. Considera:
      </p>
      <ul>
        <li>Micrófonos de solapa inalámbricos para panelistas (mínimo 4 canales)</li>
        <li>Micrófonos de mano inalámbricos para sesiones de Q&A (al menos 2)</li>
        <li>Micrófonos de podio con base sólida para presentadores principales</li>
        <li>Sistema de monitoreo para que los oradores se escuchen correctamente</li>
      </ul>

      <h2>5. Pruebas de Sonido</h2>
      <p>
        Programa al menos 2 horas antes del evento para realizar pruebas exhaustivas. Verifica
        niveles de ganancia, ecualización, posicionamiento de bocinas, y haz pruebas de voz real
        en diferentes puntos del venue. No confíes únicamente en música de prueba.
      </p>

      <p class="note">
        ¿Necesitas ayuda para dimensionar el audio de tu conferencia?
        <RouterLink to="/cotizar" class="link">Cotiza con nosotros</RouterLink>
      </p>
    `,
    keywords: ['Audio', 'Conferencias', 'Guías', 'Corporativo'],
    fechaPublicacion: '2024-10-15',
    categoria: 'Guías',
    readTime: '7',
    ctaTitle: '¿Listo para tu conferencia?',
    ctaText: 'Cotiza el sistema de audio perfecto para tu evento',
  },
  {
    id: '2',
    slug: 'pantalla-led-vs-proyeccion',
    titulo: 'Pantalla LED vs Proyección: Cuál Conviene para Tu Evento',
    extracto:
      'Comparativa completa para ayudarte a elegir la mejor opción según tu tipo de evento.',
    portada: 'https://picsum.photos/1200/675?random=2',
    contenido: `
      <p class="lead">
        Elegir entre pantalla LED o proyección es una de las decisiones más importantes al planear
        un evento corporativo. Cada tecnología tiene ventajas y casos de uso específicos. En esta
        guía comparativa te ayudamos a tomar la mejor decisión.
      </p>

      <h2>Pantallas LED: Ventajas</h2>
      <ul>
        <li><strong>Brillo superior:</strong> Funcionan perfectamente incluso con luz ambiente intensa</li>
        <li><strong>Contraste y colores:</strong> Negros profundos y colores vibrantes</li>
        <li><strong>Sin sombras:</strong> Los presentadores pueden moverse libremente frente a la pantalla</li>
        <li><strong>Escalabilidad:</strong> Se pueden ensamblar en cualquier tamaño y forma</li>
        <li><strong>Sin mantenimiento de lámpara:</strong> Mayor vida útil y menor costo operativo</li>
      </ul>

      <h2>Proyección: Ventajas</h2>
      <ul>
        <li><strong>Costo inicial menor:</strong> Más económico para eventos puntuales</li>
        <li><strong>Portabilidad:</strong> Fácil de transportar y montar</li>
        <li><strong>Tamaño flexible:</strong> Se ajusta fácilmente al cambiar la distancia</li>
        <li><strong>Buena opción en interiores:</strong> Excelente calidad en ambientes controlados</li>
      </ul>

      <h2>¿Cuándo usar LED?</h2>
      <p>
        Las pantallas LED son ideales para:
      </p>
      <ul>
        <li>Eventos al aire libre o con mucha luz ambiental</li>
        <li>Conferencias y expos donde la imagen corporativa es crítica</li>
        <li>Eventos de larga duración (festivales, ferias multi-día)</li>
        <li>Cuando necesitas tamaños muy grandes (6m+)</li>
        <li>Transmisiones en vivo con alta demanda de calidad</li>
      </ul>

      <div class="info-box">
        <strong>Dato importante:</strong> El pixel pitch (distancia entre pixeles) determina desde
        qué distancia se ve nítida la pantalla LED. Para eventos corporativos típicos, un pitch de
        3.9mm a 6mm es ideal.
      </div>

      <h2>¿Cuándo usar Proyección?</h2>
      <p>
        La proyección es mejor opción para:
      </p>
      <ul>
        <li>Eventos en salones oscuros o con control de iluminación</li>
        <li>Presentaciones de negocios estándar (keynotes, capacitaciones)</li>
        <li>Presupuestos ajustados</li>
        <li>Eventos de un solo día</li>
        <li>Cuando necesitas movilidad y setup rápido</li>
      </ul>

      <h2>Comparativa de Costos</h2>
      <p>
        Como referencia, para una pantalla de 4x3 metros:
      </p>
      <ul>
        <li><strong>Proyección HD:</strong> $4,000 - $6,000 por día</li>
        <li><strong>LED P4:</strong> $18,000 - $25,000 por día</li>
      </ul>
      <p>
        Si bien el LED es más costoso, la diferencia de impacto visual y profesionalismo
        puede justificar la inversión en eventos críticos.
      </p>

      <p class="note">
        ¿No estás seguro cuál necesitas?
        <RouterLink to="/cotizar" class="link">Cotiza ambas opciones con nosotros</RouterLink>
      </p>
    `,
    keywords: ['Pantallas', 'LED', 'Proyección', 'Comparativa'],
    fechaPublicacion: '2024-10-10',
    categoria: 'Comparativas',
    readTime: '6',
    ctaTitle: '¿Necesitas asesoría en pantallas?',
    ctaText: 'Te ayudamos a elegir la mejor opción para tu evento',
  },
  {
    id: '3',
    slug: 'iluminacion-eventos-corporativos',
    titulo: 'Guía de Iluminación para Eventos Corporativos',
    extracto:
      'Cómo la iluminación profesional puede transformar tu evento y fortalecer tu marca.',
    portada: 'https://picsum.photos/1200/675?random=3',
    contenido: `
      <p class="lead">
        La iluminación es uno de los elementos más subestimados en eventos corporativos, pero puede
        ser la diferencia entre un evento olvidable y una experiencia memorable. En esta guía te
        mostramos cómo usar la iluminación profesional para potenciar tu marca y mensaje.
      </p>

      <h2>Tipos de Iluminación Corporativa</h2>

      <h3>1. Iluminación de Escenario</h3>
      <p>
        Es el núcleo del diseño lumínico. Incluye iluminación frontal para visibilidad de oradores,
        contraluz para separación visual, y laterales para profundidad. Un setup básico requiere
        mínimo 8 focos LED de 200W con control de color y temperatura.
      </p>

      <h3>2. Iluminación Ambiental</h3>
      <p>
        Transforma el espacio completo. Usa uplights en paredes y columnas para crear atmósfera
        y reforzar colores corporativos. Para un salón de 200 personas, considera 12-16 uplights
        RGB distribuidos estratégicamente.
      </p>

      <h3>3. Iluminación de Acento</h3>
      <p>
        Resalta elementos específicos: logos, productos en display, áreas VIP. Los gobos
        (proyectores de logo) son especialmente efectivos para branding corporativo.
      </p>

      <div class="info-box">
        <strong>Regla de oro:</strong> La temperatura de color debe ser consistente. Para eventos
        corporativos formales, usa 4000-5000K (luz blanca neutral). Para galas y eventos sociales,
        2700-3200K (luz cálida).
      </div>

      <h2>Psicología del Color en Eventos</h2>
      <ul>
        <li><strong>Azul:</strong> Confianza, profesionalismo, tecnología. Ideal para tech y finanzas.</li>
        <li><strong>Rojo:</strong> Energía, urgencia, pasión. Excelente para lanzamientos y ventas.</li>
        <li><strong>Verde:</strong> Crecimiento, salud, sustentabilidad. Perfecto para eventos eco.</li>
        <li><strong>Naranja/Amarillo:</strong> Creatividad, optimismo. Funciona en eventos innovadores.</li>
        <li><strong>Violeta:</strong> Lujo, creatividad. Para eventos premium y galas.</li>
      </ul>

      <h2>Errores Comunes a Evitar</h2>
      <ul>
        <li><strong>Sobreiluminación:</strong> Más no siempre es mejor. Puede cansar a la audiencia.</li>
        <li><strong>Mezcla de temperaturas:</strong> Luz cálida y fría juntas se ve poco profesional.</li>
        <li><strong>Ignorar el streaming:</strong> Si transmites en vivo, necesitas iluminación específica.</li>
        <li><strong>Sin pruebas previas:</strong> Siempre haz una prueba con ropa del color que usarán los oradores.</li>
        <li><strong>Olvidar la audiencia:</strong> No apuntes luces directas a los asistentes.</li>
      </ul>

      <h2>Presupuesto de Iluminación</h2>
      <p>
        Rangos de referencia para un evento de 200 personas:
      </p>
      <ul>
        <li><strong>Básico:</strong> $6,000 - $10,000 (iluminación de escenario + ambient mínimo)</li>
        <li><strong>Profesional:</strong> $15,000 - $25,000 (escenario completo + ambient RGB + efectos)</li>
        <li><strong>Premium:</strong> $30,000+ (diseño total, moving heads, video mapping)</li>
      </ul>

      <h2>Checklist Pre-Evento</h2>
      <ul>
        <li>Plano del venue con ubicación de tomas eléctricas</li>
        <li>Colores corporativos exactos (códigos Pantone o RGB)</li>
        <li>Horario del evento (para ajustar según luz natural)</li>
        <li>Requisitos de streaming (si aplica)</li>
        <li>Acceso para montaje (mínimo 4 horas antes)</li>
      </ul>

      <p class="note">
        ¿Quieres un diseño de iluminación personalizado?
        <RouterLink to="/cotizar" class="link">Solicita una cotización con renderizado</RouterLink>
      </p>
    `,
    keywords: ['Iluminación', 'Corporativo', 'Eventos', 'Guía', 'Diseño'],
    fechaPublicacion: '2024-10-05',
    categoria: 'Guías',
    readTime: '8',
    ctaTitle: 'Transforma tu evento con iluminación profesional',
    ctaText: 'Diseñamos la iluminación perfecta para tu marca',
  },
];

onMounted(() => {
  const slug = route.params.slug as string;
  post.value = blogPosts.find((p) => p.slug === slug) || null;
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/1200/675?random=99';
};

// Share functions
const currentUrl = computed(() => window.location.href);
const shareText = computed(() => post.value?.titulo || 'Artículo interesante');

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnTwitter = () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText.value)}&url=${encodeURIComponent(currentUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnWhatsApp = () => {
  const url = `https://wa.me/?text=${encodeURIComponent(shareText.value + ' ' + currentUrl.value)}`;
  window.open(url, '_blank');
};
</script>

<style scoped>
@import "tailwindcss" reference;

.blog-post-view {
  @apply bg-white py-12 min-h-screen;
}

.container {
  @apply max-w-4xl mx-auto px-4 sm:px-6 lg:px-8;
}

.article-header {
  @apply mb-8;
}

.breadcrumb {
  @apply flex items-center gap-2 text-sm text-gray-600 mb-6;
}

.breadcrumb a {
  @apply hover:text-blue-600;
}

.breadcrumb .current {
  @apply text-gray-400;
}

.article-title {
  @apply text-4xl lg:text-5xl font-bold text-gray-900 mb-4;
}

.article-meta {
  @apply flex flex-wrap items-center gap-4 text-sm text-gray-600;
}

.category {
  @apply px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium;
}

.featured-image {
  @apply aspect-video overflow-hidden rounded-xl mb-8;
}

.featured-image img {
  @apply w-full h-full object-cover;
}

.article-content {
  @apply max-w-none mb-12;
}

.article-content :deep(.lead) {
  @apply text-xl text-gray-600 leading-relaxed mb-8;
}

.article-content :deep(h2) {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.article-content :deep(h3) {
  @apply text-xl font-bold text-gray-900 mt-6 mb-3;
}

.article-content :deep(p) {
  @apply text-gray-700 leading-relaxed mb-4;
}

.article-content :deep(strong) {
  @apply font-semibold text-gray-900;
}

.article-content :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-6 text-gray-700;
}

.article-content :deep(li) {
  @apply mb-2;
}

.article-content :deep(.info-box) {
  @apply bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded;
}

.article-content :deep(.note) {
  @apply bg-gray-50 p-4 rounded-lg border border-gray-200;
}

.article-content :deep(.link) {
  @apply text-blue-600 hover:underline font-medium;
}

.article-tags {
  @apply flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200;
}

.tag {
  @apply px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full;
}

.article-share {
  @apply mb-8 pb-8 border-b border-gray-200;
}

.share-title {
  @apply font-semibold text-gray-900 mb-3;
}

.share-buttons {
  @apply flex flex-wrap gap-3;
}

.share-button {
  @apply px-4 py-2 rounded-lg font-medium text-sm transition-colors;
}

.share-button.facebook {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.share-button.twitter {
  @apply bg-sky-500 text-white hover:bg-sky-600;
}

.share-button.linkedin {
  @apply bg-blue-700 text-white hover:bg-blue-800;
}

.share-button.whatsapp {
  @apply bg-green-600 text-white hover:bg-green-700;
}

.article-cta {
  @apply text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12 rounded-2xl;
}

.article-cta h2 {
  @apply text-3xl font-bold mb-3;
}

.article-cta p {
  @apply text-lg opacity-90 mb-6;
}

.not-found {
  @apply text-center py-16;
}

.not-found h1 {
  @apply text-4xl font-bold text-gray-900 mb-4;
}

.not-found p {
  @apply text-lg text-gray-600 mb-8;
}
</style>


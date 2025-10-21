<template>
  <div class="caso-view">
    <div v-if="!caso" class="container">
      <div class="not-found">
        <h1>Caso no encontrado</h1>
        <p>El caso de estudio que buscas no existe.</p>
        <BaseButton to="/portafolio" variant="primary">Volver al portafolio</BaseButton>
      </div>
    </div>

    <div v-else class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <RouterLink to="/">Inicio</RouterLink>
        <span>/</span>
        <RouterLink to="/portafolio">Portafolio</RouterLink>
        <span>/</span>
        <span class="current">{{ caso.cliente }}</span>
      </nav>

      <!-- Header -->
      <header class="caso-header">
        <div class="caso-tags">
          <span class="tag-tipo">{{ formatTipoEvento(caso.tipoEvento) }}</span>
          <span v-if="caso.aforo" class="tag-aforo">{{ caso.aforo }} personas</span>
        </div>
        <h1 class="caso-title">{{ caso.objetivo }} - {{ caso.cliente }}</h1>
        <p class="caso-subtitle">{{ caso.industria }} · {{ caso.sede }} · {{ formatFecha(caso.fecha) }}</p>
      </header>

      <!-- Gallery -->
      <div class="caso-gallery">
        <div class="main-image">
          <img
            :src="caso.fotos[0] || 'https://picsum.photos/800/600?random=999'"
            :alt="caso.cliente"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- Content Grid -->
      <div class="content-grid">
        <!-- Main Content -->
        <div class="main-content">
          <section class="content-section">
            <h2 class="section-title">Objetivo</h2>
            <p>{{ caso.objetivo }}</p>
          </section>

          <section class="content-section">
            <h2 class="section-title">Solución</h2>
            <p>{{ caso.solucion }}</p>
          </section>

          <section class="content-section">
            <h2 class="section-title">Equipo Utilizado</h2>
            <ul class="equipment-list">
              <li v-for="(equipo, index) in caso.listaEquipo" :key="index">
                {{ equipo }}
              </li>
            </ul>
          </section>

          <section class="content-section">
            <h2 class="section-title">Resultado</h2>
            <p>{{ caso.resultado }}</p>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="info-card">
            <h3 class="card-title">Detalles del Proyecto</h3>
            <dl class="info-list">
              <div>
                <dt>Cliente</dt>
                <dd>{{ caso.cliente }}</dd>
              </div>
              <div>
                <dt>Industria</dt>
                <dd>{{ caso.industria }}</dd>
              </div>
              <div>
                <dt>Tipo de evento</dt>
                <dd>{{ formatTipoEvento(caso.tipoEvento) }}</dd>
              </div>
              <div v-if="caso.aforo">
                <dt>Aforo</dt>
                <dd>{{ caso.aforo }} personas</dd>
              </div>
              <div>
                <dt>Ubicación</dt>
                <dd>{{ caso.sede }}</dd>
              </div>
              <div>
                <dt>Fecha</dt>
                <dd>{{ formatFecha(caso.fecha) }}</dd>
              </div>
            </dl>
          </div>

          <div class="cta-card">
            <h3>¿Tienes un evento similar?</h3>
            <BaseButton to="/cotizar" variant="primary" size="lg" class="w-full">
              Cotizar mi evento
            </BaseButton>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { usePortafolioStore } from '@/stores/portafolio';
import BaseButton from '@/components/ui/BaseButton.vue';

const route = useRoute();
const portafolioStore = usePortafolioStore();

const caso = computed(() => {
  const slug = route.params.slug as string;
  return portafolioStore.getCasoBySlug(slug);
});

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};

const formatTipoEvento = (tipo: string) => {
  const tipos: Record<string, string> = {
    conferencia: 'Conferencia',
    gala: 'Gala',
    lanzamiento: 'Lanzamiento',
    expo: 'Expo',
    hibrido: 'Híbrido',
  };
  return tipos[tipo.toLowerCase()] || tipo;
};

const formatFecha = (fecha: string) => {
  const date = new Date(fecha);
  return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long' });
};
</script>

<style scoped>
@import "tailwindcss" reference;

.caso-view {
  @apply bg-gray-50 py-12 min-h-screen;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.not-found {
  @apply text-center py-20;
}

.not-found h1 {
  @apply text-3xl font-bold text-gray-900 mb-4;
}

.not-found p {
  @apply text-gray-600 mb-8;
}

.breadcrumb {
  @apply flex items-center gap-2 text-sm text-gray-600 mb-8;
}

.breadcrumb a {
  @apply hover:text-blue-600;
}

.breadcrumb .current {
  @apply text-gray-400;
}

.caso-header {
  @apply mb-8;
}

.caso-tags {
  @apply flex gap-2 mb-4;
}

.tag-tipo {
  @apply px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium;
}

.tag-aforo {
  @apply px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium;
}

.caso-title {
  @apply text-4xl lg:text-5xl font-bold text-gray-900 mb-2;
}

.caso-subtitle {
  @apply text-lg text-gray-600;
}

.caso-gallery {
  @apply mb-12;
}

.main-image {
  @apply aspect-video overflow-hidden rounded-xl shadow-2xl bg-gray-200;
}

.main-image img {
  @apply w-full h-full object-cover;
}

.content-grid {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-8;
}

.main-content {
  @apply lg:col-span-2 space-y-8;
}

.content-section {
  @apply bg-white rounded-xl p-8 shadow-md;
}

.section-title {
  @apply text-2xl font-bold text-gray-900 mb-4;
}

.content-section p {
  @apply text-gray-700 leading-relaxed mb-4;
}

.solution-list {
  @apply space-y-2 text-gray-700;
}

.solution-list li::before {
  content: '✓';
  @apply mr-2 text-green-600 font-bold;
}

.equipment-list {
  @apply space-y-2 text-gray-700;
}

.equipment-list li::before {
  content: '•';
  @apply mr-2 text-blue-600 font-bold;
}

.equipment-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.equipment-item h3 {
  @apply font-semibold text-gray-900 mb-3;
}

.equipment-item ul {
  @apply text-sm text-gray-600 space-y-1;
}

.equipment-item li {
  @apply pl-4 relative;
}

.equipment-item li::before {
  content: '•';
  @apply absolute left-0 text-blue-600;
}

.sidebar {
  @apply space-y-6;
}

.info-card,
.testimonial-card,
.cta-card {
  @apply bg-white rounded-xl p-6 shadow-md;
}

.card-title {
  @apply font-bold text-gray-900 mb-4;
}

.info-list {
  @apply space-y-3;
}

.info-list div {
  @apply flex justify-between text-sm pb-3 border-b border-gray-100 last:border-0;
}

.info-list dt {
  @apply text-gray-600;
}

.info-list dd {
  @apply font-semibold text-gray-900;
}

.stars {
  @apply text-2xl text-yellow-400 mb-3;
}

.quote {
  @apply text-gray-700 italic mb-4;
}

.author {
  @apply flex flex-col text-sm;
}

.author strong {
  @apply text-gray-900;
}

.author span {
  @apply text-gray-600;
}

.cta-card {
  @apply text-center space-y-4;
}

.cta-card h3 {
  @apply font-bold text-gray-900;
}
</style>


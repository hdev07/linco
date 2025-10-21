<template>
  <div class="portafolio-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Portafolio</h1>
        <p class="page-subtitle">Eventos corporativos que hemos producido</p>
      </div>
    </section>

    <!-- Filters -->
    <section class="filters-section">
      <div class="container">
        <div class="filters">
          <button
            v-for="tipo in tiposEvento"
            :key="tipo"
            class="filter-button"
            :class="{ active: filtroTipo === tipo }"
            @click="filtroTipo = tipo"
          >
            {{ tipo }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="portfolio-section">
      <div class="container">
        <div class="portfolio-grid">
          <div
            v-for="caso in casosFiltrados"
            :key="caso.id"
            class="portfolio-item group"
            @click="openModal(caso)"
          >
            <div class="portfolio-image">
              <img
                :src="caso.fotos[0] || 'https://picsum.photos/800/600?random=999'"
                :alt="caso.cliente"
                class="image"
                @error="handleImageError"
              />
              <div class="portfolio-overlay">
                <div class="overlay-content">
                  <h3 class="portfolio-title">{{ caso.cliente }}</h3>
                  <p class="portfolio-subtitle">{{ caso.industria }}</p>
                  <div class="portfolio-meta">
                    <span v-if="caso.aforo">{{ caso.aforo }} personas</span>
                    <span>{{ caso.tipoEvento }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePortafolioStore } from '@/stores/portafolio';
import type { CasoEstudio } from '@/types';

const router = useRouter();
const portafolioStore = usePortafolioStore();
const filtroTipo = ref('Todos');

const tiposEvento = [
  'Todos',
  'Conferencia',
  'Gala',
  'Lanzamiento',
  'Expo',
  'Híbrido',
];

const casosFiltrados = computed(() => {
  return portafolioStore.getCasosByTipo(filtroTipo.value);
});

const openModal = (caso: CasoEstudio) => {
  router.push({ name: 'caso-estudio', params: { slug: caso.slug } });
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};
</script>

<style scoped>
@import "tailwindcss" reference;

.portafolio-view {
  @apply bg-gray-50;
}

.hero-simple {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-32 pb-16 lg:pt-36;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.page-title {
  @apply text-4xl lg:text-5xl font-bold mb-4 text-center;
}

.page-subtitle {
  @apply text-lg lg:text-xl text-center opacity-90;
}

.filters-section {
  @apply py-8 bg-white;
}

.filters {
  @apply flex flex-wrap justify-center gap-3;
}

.filter-button {
  @apply px-6 py-2 rounded-full font-medium transition-all;
  @apply bg-gray-100 text-gray-700 hover:bg-gray-200;
}

.filter-button.active {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.portfolio-section {
  @apply py-16;
}

.portfolio-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
}

.portfolio-item {
  @apply cursor-pointer;
}

.portfolio-image {
  @apply relative aspect-video overflow-hidden rounded-lg bg-gray-200;
}

.image {
  @apply w-full h-full object-cover transition-transform duration-300 group-hover:scale-110;
}

.portfolio-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent;
  @apply flex items-end p-6;
  @apply opacity-0 group-hover:opacity-100 transition-opacity duration-300;
}

.overlay-content {
  @apply text-white w-full;
}

.portfolio-title {
  @apply text-xl font-bold mb-1;
}

.portfolio-subtitle {
  @apply text-sm opacity-90 mb-2;
}

.portfolio-meta {
  @apply flex gap-3 text-xs;
}

.portfolio-meta span {
  @apply px-2 py-1 bg-white/20 rounded;
}
</style>


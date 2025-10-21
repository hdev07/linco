<template>
  <div class="catalogo-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Catálogo de Equipos</h1>
        <p class="page-subtitle">
          Equipo profesional de las mejores marcas. Renta por día con soporte técnico incluido.
        </p>
      </div>
    </section>

    <!-- Filtros y Catálogo -->
    <section class="catalog-section">
      <div class="container">
        <div class="catalog-layout">
          <!-- Sidebar Filtros -->
          <aside class="filters-sidebar">
            <div class="filters-header">
              <h2 class="filters-title">Filtros</h2>
              <button class="reset-button" @click="resetFilters">Limpiar</button>
            </div>

            <div class="filter-group">
              <h3 class="filter-title">Categoría</h3>
              <div class="filter-options">
                <label class="filter-option">
                  <input
                    type="radio"
                    name="categoria"
                    :value="undefined"
                    v-model="filtro.categoria"
                    @change="applyFilters"
                  />
                  <span>Todas</span>
                </label>
                <label class="filter-option">
                  <input
                    type="radio"
                    name="categoria"
                    value="audio"
                    v-model="filtro.categoria"
                    @change="applyFilters"
                  />
                  <span>Audio</span>
                </label>
                <label class="filter-option">
                  <input
                    type="radio"
                    name="categoria"
                    value="iluminacion"
                    v-model="filtro.categoria"
                    @change="applyFilters"
                  />
                  <span>Iluminación</span>
                </label>
                <label class="filter-option">
                  <input
                    type="radio"
                    name="categoria"
                    value="pantalla"
                    v-model="filtro.categoria"
                    @change="applyFilters"
                  />
                  <span>Pantallas</span>
                </label>
                <label class="filter-option">
                  <input
                    type="radio"
                    name="categoria"
                    value="escenario"
                    v-model="filtro.categoria"
                    @change="applyFilters"
                  />
                  <span>Escenario</span>
                </label>
              </div>
            </div>

            <div class="filter-group">
              <h3 class="filter-title">Disponibilidad</h3>
              <label class="filter-option">
                <input
                  type="checkbox"
                  v-model="filtro.disponible"
                  @change="applyFilters"
                />
                <span>Solo disponibles</span>
              </label>
            </div>

            <div class="filter-group">
              <h3 class="filter-title">Marcas populares</h3>
              <div class="filter-options">
                <label v-for="tag in topTags" :key="tag" class="filter-option">
                  <input
                    type="checkbox"
                    :value="tag"
                    v-model="filtro.tags"
                    @change="applyFilters"
                  />
                  <span>{{ tag }}</span>
                </label>
              </div>
            </div>
          </aside>

          <!-- Main Content -->
          <div class="catalog-main">
            <!-- Search Bar -->
            <div class="search-bar">
              <input
                v-model="filtro.busqueda"
                type="text"
                placeholder="Buscar equipo..."
                class="search-input"
                @input="applyFilters"
              />
              <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <!-- Results Info -->
            <div class="results-info">
              <p class="results-count">
                {{ equiposFiltrados.length }} equipo{{ equiposFiltrados.length !== 1 ? 's' : '' }} encontrado{{ equiposFiltrados.length !== 1 ? 's' : '' }}
              </p>
            </div>

            <!-- Equipment Grid -->
            <div v-if="equiposFiltrados.length > 0" class="equipment-grid">
              <EquipoCard
                v-for="equipo in equiposFiltrados"
                :key="equipo.id"
                :equipo="equipo"
              />
            </div>

            <!-- Empty State -->
            <div v-else class="empty-state">
              <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 class="empty-title">No se encontraron equipos</h3>
              <p class="empty-text">Intenta ajustar los filtros o la búsqueda</p>
              <BaseButton @click="resetFilters" variant="outline">
                Limpiar filtros
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCatalogoStore } from '@/stores/catalogo';
import EquipoCard from '@/components/ui/EquipoCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import type { CategoriaEquipo } from '@/types';

const catalogoStore = useCatalogoStore();

const filtro = ref({
  categoria: undefined as CategoriaEquipo | undefined,
  busqueda: '',
  tags: [] as string[],
  disponible: false,
});

const equiposFiltrados = computed(() => catalogoStore.equiposFiltrados);

const topTags = computed(() => {
  return catalogoStore.allTags.filter((tag) =>
    ['Yamaha', 'QRX Audio', 'CYM Pro Led', 'dbx by Harman', 'Pioneer DJ', 'AlphaTheta', '18 Eighteen Sound'].includes(tag)
  );
});

const applyFilters = () => {
  catalogoStore.setFiltro(filtro.value);
};

const resetFilters = () => {
  filtro.value = {
    categoria: undefined,
    busqueda: '',
    tags: [],
    disponible: false,
  };
  catalogoStore.resetFiltro();
};
</script>

<style scoped>
@import "tailwindcss" reference;

.catalogo-view {
  @apply bg-gray-50 min-h-screen;
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
  @apply text-lg lg:text-xl text-center max-w-3xl mx-auto opacity-90;
}

.catalog-section {
  @apply py-12;
}

.catalog-layout {
  @apply grid grid-cols-1 lg:grid-cols-4 gap-8;
}

/* Filters Sidebar */
.filters-sidebar {
  @apply lg:col-span-1 space-y-6;
}

.filters-header {
  @apply flex items-center justify-between mb-4;
}

.filters-title {
  @apply text-xl font-bold text-gray-900;
}

.reset-button {
  @apply text-sm text-blue-600 hover:underline;
}

.filter-group {
  @apply bg-white rounded-lg p-4 shadow-sm;
}

.filter-title {
  @apply font-semibold text-gray-900 mb-3 text-sm;
}

.filter-options {
  @apply space-y-2;
}

.filter-option {
  @apply flex items-center gap-2 text-sm text-gray-700 cursor-pointer;
}

.filter-option input {
  @apply w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500;
}

/* Main Content */
.catalog-main {
  @apply lg:col-span-3 space-y-6;
}

.search-bar {
  @apply relative;
}

.search-input {
  @apply w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent;
}

.search-icon {
  @apply absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none;
}

.results-info {
  @apply flex items-center justify-between;
}

.results-count {
  @apply text-sm text-gray-600;
}

.equipment-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

/* Empty State */
.empty-state {
  @apply flex flex-col items-center justify-center py-16 text-center;
}

.empty-icon {
  @apply w-16 h-16 text-gray-400 mb-4;
}

.empty-title {
  @apply text-xl font-semibold text-gray-900 mb-2;
}

.empty-text {
  @apply text-gray-600 mb-6;
}

/* Responsive */
@media (max-width: 1024px) {
  .filters-sidebar {
    @apply bg-white rounded-lg p-6;
  }
}
</style>


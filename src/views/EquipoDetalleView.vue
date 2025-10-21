<template>
  <div v-if="equipo" class="equipo-detalle-view">
    <!-- Breadcrumb -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav class="breadcrumb">
          <RouterLink to="/">Inicio</RouterLink>
          <span>/</span>
          <RouterLink to="/equipos">Equipos</RouterLink>
          <span>/</span>
          <span class="current">{{ equipo.nombre }}</span>
        </nav>
      </div>
    </div>

    <!-- Content -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Images -->
          <div class="image-section">
            <div class="main-image">
              <img
                :src="currentImage"
                :alt="equipo.nombre"
                class="equipment-image"
                @error="handleImageError"
              />
            </div>
            <div v-if="equipo.fotos.length > 1" class="thumbnail-grid">
              <button
                v-for="(foto, index) in equipo.fotos"
                :key="index"
                class="thumbnail"
                :class="{ active: currentImageIndex === index }"
                @click="currentImageIndex = index"
              >
                <img :src="foto" :alt="`${equipo.nombre} ${index + 1}`" />
              </button>
            </div>
          </div>

          <!-- Info -->
          <div class="info-section">
            <div class="categoria-badge">{{ categoriaLabel }}</div>
            <h1 class="equipment-title">{{ equipo.nombre }}</h1>

            <div class="stock-info" :class="stockClass">
              {{ stockText }}
            </div>

            <div class="price-section">
              <span class="price-label">Renta diaria</span>
              <span class="price-amount">${{ formatPrice(equipo.precioDiario) }}</span>
            </div>

            <p v-if="equipo.descripcion" class="description">
              {{ equipo.descripcion }}
            </p>

            <div class="actions">
              <BaseButton
                @click="addToCotizador"
                variant="primary"
                size="lg"
                :disabled="equipo.stock === 0"
                class="action-button"
              >
                Agregar a cotización
              </BaseButton>
              <BaseButton to="/cotizar" variant="outline" size="lg" class="action-button">
                Cotizar evento completo
              </BaseButton>
            </div>

            <div class="specs-section">
              <h2 class="specs-title">Especificaciones Técnicas</h2>
              <dl class="specs-grid">
                <div v-for="(value, key) in equipo.specs" :key="key" class="spec-item">
                  <dt class="spec-label">{{ key }}</dt>
                  <dd class="spec-value">{{ value }}</dd>
                </div>
              </dl>
            </div>

            <div v-if="equipo.accesorios && equipo.accesorios.length" class="accessories-section">
              <h3 class="accessories-title">Accesorios incluidos</h3>
              <ul class="accessories-list">
                <li v-for="(accesorio, index) in equipo.accesorios" :key="index">
                  {{ accesorio }}
                </li>
              </ul>
            </div>

            <div v-if="equipo.tags && equipo.tags.length" class="tags-section">
              <div class="tag" v-for="tag in equipo.tags" :key="tag">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="error-state">
    <div class="container">
      <h1>Equipo no encontrado</h1>
      <BaseButton to="/equipos">Ver catálogo completo</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useCatalogoStore } from '@/stores/catalogo';
import { useCotizadorStore } from '@/stores/cotizador';
import BaseButton from '@/components/ui/BaseButton.vue';

const route = useRoute();
const catalogoStore = useCatalogoStore();
const cotizadorStore = useCotizadorStore();

const currentImageIndex = ref(0);

const equipo = computed(() => {
  const slug = route.params.slug as string;
  return catalogoStore.equipoBySlug(slug);
});

const currentImage = computed(() => {
  return equipo.value?.fotos[currentImageIndex.value] || 'https://picsum.photos/800/600?random=999';
});

const categoriaLabel = computed(() => {
  const labels: Record<string, string> = {
    audio: 'Audio',
    iluminacion: 'Iluminación',
    pantalla: 'Pantallas',
    escenario: 'Escenario',
    streaming: 'Streaming',
  };
  return labels[equipo.value?.categoria || ''] || equipo.value?.categoria || '';
});

const stockClass = computed(() => {
  if (!equipo.value) return '';
  if (equipo.value.stock === 0) return 'out-of-stock';
  if (equipo.value.stock < 5) return 'low-stock';
  return 'in-stock';
});

const stockText = computed(() => {
  if (!equipo.value) return '';
  if (equipo.value.stock === 0) return '⚠️ Agotado temporalmente';
  if (equipo.value.stock < 5) return `⚡ Solo ${equipo.value.stock} disponibles`;
  return '✓ Disponible';
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};

const addToCotizador = () => {
  if (equipo.value) {
    cotizadorStore.addEquipo(equipo.value.id);
    // TODO: Show toast notification
    alert('Equipo agregado a tu cotización');
  }
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};
</script>

<style scoped>
@import "tailwindcss" reference;

.equipo-detalle-view {
  @apply bg-gray-50 min-h-screen;
}

.breadcrumb-section {
  @apply bg-white border-b border-gray-200 py-4;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.breadcrumb {
  @apply flex items-center gap-2 text-sm text-gray-600;
}

.breadcrumb a {
  @apply hover:text-blue-600;
}

.breadcrumb .current {
  @apply text-gray-900 font-medium;
}

.content-section {
  @apply py-12;
}

.content-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12;
}

.image-section {
  @apply space-y-4;
}

.main-image {
  @apply aspect-square bg-white rounded-xl overflow-hidden shadow-lg;
}

.equipment-image {
  @apply w-full h-full object-cover;
}

.thumbnail-grid {
  @apply grid grid-cols-4 gap-2;
}

.thumbnail {
  @apply aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all;
}

.thumbnail.active {
  @apply border-blue-600;
}

.thumbnail img {
  @apply w-full h-full object-cover;
}

.info-section {
  @apply space-y-6;
}

.categoria-badge {
  @apply inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded;
}

.equipment-title {
  @apply text-3xl lg:text-4xl font-bold text-gray-900;
}

.stock-info {
  @apply text-sm font-semibold;
}

.stock-info.in-stock {
  @apply text-green-600;
}

.stock-info.low-stock {
  @apply text-yellow-600;
}

.stock-info.out-of-stock {
  @apply text-red-600;
}

.price-section {
  @apply flex flex-col pb-6 border-b border-gray-200;
}

.price-label {
  @apply text-sm text-gray-500;
}

.price-amount {
  @apply text-4xl font-bold text-blue-600;
}

.description {
  @apply text-gray-700 leading-relaxed;
}

.actions {
  @apply space-y-3;
}

.action-button {
  @apply w-full;
}

.specs-section {
  @apply bg-white rounded-xl p-6 shadow-md;
}

.specs-title {
  @apply text-xl font-bold text-gray-900 mb-4;
}

.specs-grid {
  @apply space-y-3;
}

.spec-item {
  @apply flex justify-between py-2 border-b border-gray-100 last:border-0;
}

.spec-label {
  @apply text-gray-600 font-medium;
}

.spec-value {
  @apply text-gray-900;
}

.accessories-section {
  @apply bg-white rounded-xl p-6 shadow-md;
}

.accessories-title {
  @apply font-semibold text-gray-900 mb-3;
}

.accessories-list {
  @apply space-y-2 text-sm text-gray-700;
}

.accessories-list li::before {
  content: '•';
  @apply mr-2 text-blue-600;
}

.tags-section {
  @apply flex flex-wrap gap-2;
}

.tag {
  @apply px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full;
}

.error-state {
  @apply min-h-screen flex items-center justify-center text-center;
}
</style>


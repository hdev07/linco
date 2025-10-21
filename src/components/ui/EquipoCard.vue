<template>
  <div class="equipo-card">
    <div class="card-image">
      <img
        :src="equipo.fotos[0] || 'https://picsum.photos/400/400?random=999'"
        :alt="equipo.nombre"
        class="image"
        loading="lazy"
      />
      <div class="stock-badge" :class="stockClass">
        {{ stockText }}
      </div>
    </div>

    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">{{ equipo.nombre }}</h3>
        <span class="categoria-badge">{{ categoriaLabel }}</span>
      </div>

      <p v-if="equipo.descripcion" class="card-description">
        {{ equipo.descripcion }}
      </p>

      <div class="specs-preview">
        <div
          v-for="(value, key) in previewSpecs"
          :key="key"
          class="spec-item"
        >
          <span class="spec-label">{{ key }}:</span>
          <span class="spec-value">{{ value }}</span>
        </div>
      </div>

      <div class="tags">
        <span v-for="tag in equipo.tags.slice(0, 3)" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>

      <div class="card-footer">
        <div class="price">
          <span class="price-label">Renta diaria</span>
          <span class="price-amount">${{ formatPrice(equipo.precioDiario) }}</span>
        </div>
        <div class="actions">
          <BaseButton :to="`/equipos/${equipo.slug}`" variant="outline" size="sm">
            Ver detalles
          </BaseButton>
          <BaseButton
            variant="primary"
            size="sm"
            :disabled="equipo.stock === 0"
            @click="addToCotizador"
          >
            + Cotizar
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Equipo } from '@/types';
import BaseButton from './BaseButton.vue';
import { useCotizadorStore } from '@/stores/cotizador';

interface Props {
  equipo: Equipo;
}

const props = defineProps<Props>();
const cotizadorStore = useCotizadorStore();

const categoriaLabel = computed(() => {
  const labels: Record<string, string> = {
    audio: 'Audio',
    iluminacion: 'Iluminación',
    pantalla: 'Pantallas',
    escenario: 'Escenario',
    streaming: 'Streaming',
  };
  return labels[props.equipo.categoria] || props.equipo.categoria;
});

const stockClass = computed(() => {
  if (props.equipo.stock === 0) return 'out-of-stock';
  if (props.equipo.stock < 5) return 'low-stock';
  return 'in-stock';
});

const stockText = computed(() => {
  if (props.equipo.stock === 0) return 'Agotado';
  if (props.equipo.stock < 5) return `Solo ${props.equipo.stock}`;
  return 'Disponible';
});

const previewSpecs = computed(() => {
  const entries = Object.entries(props.equipo.specs);
  return Object.fromEntries(entries.slice(0, 3));
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};

const addToCotizador = () => {
  cotizadorStore.addEquipo(props.equipo.id);
  // TODO: Show toast notification
};
</script>

<style scoped>
@import "tailwindcss" reference;

.equipo-card {
  @apply bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden;
  @apply border border-gray-100 hover:border-blue-200;
}

.card-image {
  @apply relative aspect-video overflow-hidden bg-gray-100;
}

.image {
  @apply w-full h-full object-cover transition-transform duration-300 hover:scale-110;
}

.stock-badge {
  @apply absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm;
}

.stock-badge.in-stock {
  @apply bg-green-500/80 text-white;
}

.stock-badge.low-stock {
  @apply bg-yellow-500/80 text-white;
}

.stock-badge.out-of-stock {
  @apply bg-red-500/80 text-white;
}

.card-content {
  @apply p-4 space-y-3;
}

.card-header {
  @apply flex items-start justify-between gap-2;
}

.card-title {
  @apply text-lg font-bold text-gray-900 line-clamp-2 flex-1;
}

.categoria-badge {
  @apply px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded;
}

.card-description {
  @apply text-sm text-gray-600 line-clamp-2;
}

.specs-preview {
  @apply space-y-1 text-xs;
}

.spec-item {
  @apply flex gap-1;
}

.spec-label {
  @apply font-medium text-gray-500;
}

.spec-value {
  @apply text-gray-700;
}

.tags {
  @apply flex flex-wrap gap-2;
}

.tag {
  @apply px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded;
}

.card-footer {
  @apply space-y-3 pt-3 border-t border-gray-100;
}

.price {
  @apply flex items-baseline gap-2;
}

.price-label {
  @apply text-xs text-gray-500;
}

.price-amount {
  @apply text-xl font-bold text-blue-600;
}

.actions {
  @apply flex gap-2;
}
</style>


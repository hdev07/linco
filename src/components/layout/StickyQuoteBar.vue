<template>
  <div v-if="cotizadorStore.precioEstimado > 0" class="sticky-quote-bar">
    <div class="container">
      <div class="bar-content">
        <div class="quote-info">
          <span class="quote-label">Cotización estimada:</span>
          <span class="quote-amount">${{ formatPrice(cotizadorStore.precioEstimado) }}</span>
          <span class="quote-note">+ IVA</span>
        </div>
        <div class="quote-actions">
          <BaseButton to="/cotizar" variant="primary" size="md">
            Completar cotización
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCotizadorStore } from '@/stores/cotizador';
import BaseButton from '../ui/BaseButton.vue';

const cotizadorStore = useCotizadorStore();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};
</script>

<style scoped>
@import "tailwindcss" reference;

.sticky-quote-bar {
  @apply fixed bottom-0 left-0 right-0 z-40 bg-blue-600 text-white shadow-2xl;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.bar-content {
  @apply flex items-center justify-between gap-4 py-4;
}

.quote-info {
  @apply flex items-baseline gap-3;
}

.quote-label {
  @apply text-sm font-medium opacity-90;
}

.quote-amount {
  @apply text-2xl font-bold;
}

.quote-note {
  @apply text-xs opacity-75;
}

.quote-actions {
  @apply flex gap-2;
}

@media (max-width: 640px) {
  .bar-content {
    @apply flex-col items-stretch text-center;
  }

  .quote-info {
    @apply justify-center;
  }
}
</style>


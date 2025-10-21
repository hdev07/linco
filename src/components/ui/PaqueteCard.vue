<template>
  <div class="paquete-card" :class="{ 'is-destacado': paquete.destacado }">
    <div v-if="paquete.destacado" class="destacado-badge">
      <span>⭐ Más popular</span>
    </div>

    <div class="card-header">
      <h3 class="card-title">{{ paquete.nombre }}</h3>
      <p class="card-description">{{ paquete.descripcion }}</p>
    </div>

    <div class="card-pricing">
      <div class="price">
        <span class="price-label">Desde</span>
        <span class="price-amount">${{ formatPrice(paquete.precioDesde) }}</span>
      </div>
      <div class="aforo">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span>Hasta {{ paquete.aforoRecomendado }} personas</span>
      </div>
    </div>

    <div class="card-content">
      <div class="incluye-section">
        <h4 class="section-title">✓ Incluye:</h4>
        <ul class="feature-list">
          <li v-for="(item, index) in paquete.incluye" :key="index" class="feature-item">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div v-if="paquete.noIncluye && paquete.noIncluye.length" class="no-incluye-section">
        <h4 class="section-title">✗ No incluye:</h4>
        <ul class="feature-list">
          <li v-for="(item, index) in paquete.noIncluye" :key="index" class="feature-item text-gray-500">
            <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="details">
        <div class="detail-item">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{{ paquete.horasIncluidas }} horas incluidas</span>
        </div>
      </div>
    </div>

    <div class="card-actions">
      <BaseButton :to="`/paquetes/${paquete.slug}`" variant="outline" size="md" class="w-full">
        Ver detalles
      </BaseButton>
      <BaseButton
        :to="`/cotizar?paquete=${paquete.id}`"
        variant="primary"
        size="md"
        class="w-full"
      >
        Cotizar paquete
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Paquete } from '@/types';
import BaseButton from './BaseButton.vue';

interface Props {
  paquete: Paquete;
}

defineProps<Props>();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};
</script>

<style scoped>
@import "tailwindcss" reference;

.paquete-card {
  @apply relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden;
  @apply border-2 border-gray-100 hover:border-blue-200;
  @apply flex flex-col;
}

.paquete-card.is-destacado {
  @apply border-blue-500 scale-105 lg:scale-110 shadow-2xl;
  @apply z-10;
}

.destacado-badge {
  @apply absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-bl-xl font-semibold text-sm;
}

.card-header {
  @apply p-6 pb-4 space-y-2;
}

.is-destacado .card-header {
  @apply pt-12;
}

.card-title {
  @apply text-2xl font-bold text-gray-900;
}

.card-description {
  @apply text-gray-600;
}

.card-pricing {
  @apply px-6 pb-6 space-y-3 border-b border-gray-100;
}

.price {
  @apply flex items-baseline gap-2;
}

.price-label {
  @apply text-sm text-gray-500;
}

.price-amount {
  @apply text-3xl font-bold text-blue-600;
}

.aforo {
  @apply flex items-center gap-2 text-gray-700;
}

.card-content {
  @apply p-6 space-y-6 flex-1;
}

.section-title {
  @apply text-sm font-semibold text-gray-700 mb-3;
}

.feature-list {
  @apply space-y-2;
}

.feature-item {
  @apply flex items-start gap-2 text-sm;
}

.details {
  @apply space-y-2 text-sm text-gray-600;
}

.detail-item {
  @apply flex items-center gap-2;
}

.card-actions {
  @apply p-6 pt-0 space-y-3;
}
</style>


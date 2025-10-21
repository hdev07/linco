<template>
  <div class="service-card" :class="{ 'is-featured': featured }">
    <div v-if="icon" class="card-icon">
      <component :is="iconComponent" class="w-8 h-8" />
    </div>
    <div v-if="image" class="card-image">
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <ul v-if="features && features.length" class="card-features">
        <li v-for="(feature, index) in features" :key="index" class="feature-item">
          <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
      <div class="card-footer">
        <div v-if="price" class="card-price">
          <span class="price-label">Desde</span>
          <span class="price-amount">${{ formatPrice(price) }}</span>
        </div>
        <BaseButton :to="ctaLink" variant="outline" size="sm">
          {{ ctaText }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';
import BaseButton from './BaseButton.vue';

interface Props {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  features?: string[];
  price?: number;
  ctaText?: string;
  ctaLink?: string;
  featured?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: 'Ver más',
  ctaLink: '#',
  featured: false,
});

// Simple icon renderer - in production use a proper icon library
const iconComponent = computed(() => {
  const icons: Record<string, any> = {
    'volume-2': () =>
      h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
        }),
      ]),
    lightbulb: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        }),
      ]),
    monitor: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        }),
      ]),
    mic: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
        }),
      ]),
  };

  return icons[props.icon || ''] || icons['volume-2'];
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};
</script>

<style scoped>
@import "tailwindcss" reference;

.service-card {
  @apply bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden;
  @apply border-2 border-transparent hover:border-blue-200;
}

.service-card.is-featured {
  @apply border-blue-500 shadow-lg;
}

.card-icon {
  @apply flex items-center justify-center w-16 h-16 mx-auto mt-8 mb-4 bg-blue-100 text-blue-600 rounded-full;
}

.card-image {
  @apply overflow-hidden;
}

.card-content {
  @apply p-6 space-y-4;
}

.card-title {
  @apply text-xl font-bold text-gray-900;
}

.card-description {
  @apply text-gray-600 leading-relaxed;
}

.card-features {
  @apply space-y-2;
}

.feature-item {
  @apply flex items-start gap-2 text-sm text-gray-700;
}

.card-footer {
  @apply flex items-center justify-between pt-4 border-t border-gray-100;
}

.card-price {
  @apply flex flex-col;
}

.price-label {
  @apply text-xs text-gray-500;
}

.price-amount {
  @apply text-xl font-bold text-blue-600;
}
</style>


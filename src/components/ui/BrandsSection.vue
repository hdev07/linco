<template>
  <div class="brands-section">
    <div class="container">
      <h2 v-if="showTitle" class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>

      <div class="brands-grid">
        <div
          v-for="(brand, index) in brands"
          :key="brand.name"
          class="brand-card"
          :style="{ transitionDelay: `${index * 50}ms` }"
        >
          <div class="brand-content">
            <div class="brand-name">{{ brand.name }}</div>
            <div v-if="brand.category" class="brand-category">{{ brand.category }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Brand {
  name: string;
  category?: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'Marcas con las que Trabajamos',
  subtitle: 'Equipos certificados de las mejores marcas del mercado',
  showTitle: true,
});

const brands: Brand[] = [
  { name: 'Yamaha', category: 'Audio Pro' },
  { name: 'CYM Pro Led', category: 'Iluminación' },
  { name: 'dbx by Harman', category: 'Procesamiento' },
  { name: 'Pioneer DJ', category: 'Audio/DJ' },
  { name: 'AlphaTheta', category: 'DJ Equipment' },
  { name: 'QRX Audio', category: 'Sistemas de Audio' },
  { name: '18 Eighteen Sound', category: 'Componentes Pro' },
];
</script>

<style scoped>
@import "tailwindcss" reference;

.brands-section {
  @apply py-12;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section-title {
  @apply text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-3;
}

.section-subtitle {
  @apply text-center text-gray-600 mb-10;
}

.brands-grid {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4;
}

.brand-card {
  @apply bg-white rounded-lg p-4 flex items-center justify-center;
  @apply shadow-sm hover:shadow-md transition-all duration-300;
  @apply transform hover:-translate-y-1;
  @apply border border-gray-100;
  min-height: 100px;
}

.brand-content {
  @apply text-center;
}

.brand-name {
  @apply font-bold text-gray-800 text-sm lg:text-base mb-1;
}

.brand-category {
  @apply text-xs text-gray-500;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .brands-grid {
    @apply grid-cols-3;
  }
}

@media (max-width: 640px) {
  .brands-grid {
    @apply grid-cols-2;
  }

  .brand-card {
    min-height: 80px;
  }
}
</style>


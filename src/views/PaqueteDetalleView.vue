<template>
  <div v-if="paquete" class="paquete-detalle-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <div v-if="paquete.destacado" class="destacado-badge-hero">⭐ Paquete más popular</div>
        <h1 class="page-title">{{ paquete.nombre }}</h1>
        <p class="page-subtitle">{{ paquete.descripcion }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Main Content -->
          <div class="main-content">
            <div class="content-block">
              <h2 class="section-title">Incluye</h2>
              <ul class="includes-list">
                <li v-for="(item, index) in paquete.incluye" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div v-if="paquete.noIncluye && paquete.noIncluye.length" class="content-block">
              <h2 class="section-title">No incluye</h2>
              <ul class="excludes-list">
                <li v-for="(item, index) in paquete.noIncluye" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div v-if="paquete.galeria && paquete.galeria.length" class="content-block">
              <h2 class="section-title">Galería</h2>
              <div class="gallery-grid">
                <img
                  v-for="(imagen, index) in paquete.galeria"
                  :key="index"
                  :src="imagen"
                  :alt="`${paquete.nombre} ${index + 1}`"
                  class="gallery-image"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="sidebar">
            <div class="pricing-card">
              <div class="price-badge">
                <span class="from">Desde</span>
                <span class="amount">${{ formatPrice(paquete.precioDesde) }}</span>
              </div>

              <div class="package-info">
                <div class="info-item">
                  <span class="info-label">Aforo recomendado:</span>
                  <span class="info-value">{{ paquete.aforoRecomendado }} personas</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Horas incluidas:</span>
                  <span class="info-value">{{ paquete.horasIncluidas }} horas</span>
                </div>
              </div>

              <BaseButton :to="`/cotizar?paquete=${paquete.id}`" variant="primary" size="lg" class="w-full">
                Cotizar paquete
              </BaseButton>
            </div>

            <div class="contact-card">
              <h3 class="contact-title">¿Quieres personalizarlo?</h3>
              <p class="contact-text">Habla con un asesor para adaptar el paquete</p>
              <BaseButton
                href="https://wa.me/5215512345678"
                variant="outline"
                size="md"
                class="w-full"
              >
                WhatsApp
              </BaseButton>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="error-state">
    <div class="container">
      <h1>Paquete no encontrado</h1>
      <BaseButton to="/paquetes">Ver todos los paquetes</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCatalogoStore } from '@/stores/catalogo';
import BaseButton from '@/components/ui/BaseButton.vue';

const route = useRoute();
const catalogoStore = useCatalogoStore();

const paquete = computed(() => {
  const slug = route.params.slug as string;
  return catalogoStore.paqueteBySlug(slug);
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};
</script>

<style scoped>
@import "tailwindcss" reference;

.paquete-detalle-view {
  @apply bg-gray-50;
}

.hero-simple {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 relative;
}

.destacado-badge-hero {
  @apply inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-semibold text-sm mb-4;
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

.content-section {
  @apply py-16;
}

.content-grid {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-8;
}

.main-content {
  @apply lg:col-span-2 space-y-8;
}

.content-block {
  @apply bg-white rounded-xl p-8 shadow-md;
}

.section-title {
  @apply text-2xl font-bold text-gray-900 mb-4;
}

.includes-list {
  @apply space-y-3;
}

.includes-list li {
  @apply flex items-start gap-3 text-gray-700;
}

.includes-list li::before {
  content: '✓';
  @apply text-green-600 font-bold text-xl mt-0.5;
}

.excludes-list {
  @apply space-y-3;
}

.excludes-list li {
  @apply flex items-start gap-3 text-gray-500;
}

.excludes-list li::before {
  content: '✗';
  @apply text-red-400 font-bold text-xl mt-0.5;
}

.gallery-grid {
  @apply grid grid-cols-2 gap-4;
}

.gallery-image {
  @apply w-full aspect-video object-cover rounded-lg;
}

.sidebar {
  @apply space-y-6;
}

.pricing-card {
  @apply bg-white rounded-xl p-6 shadow-md space-y-4 sticky top-6;
}

.price-badge {
  @apply flex flex-col items-center py-4 border-b border-gray-200;
}

.price-badge .from {
  @apply text-sm text-gray-500;
}

.price-badge .amount {
  @apply text-4xl font-bold text-blue-600 my-1;
}

.package-info {
  @apply space-y-3;
}

.info-item {
  @apply flex justify-between text-sm;
}

.info-label {
  @apply text-gray-600;
}

.info-value {
  @apply font-semibold text-gray-900;
}

.contact-card {
  @apply bg-white rounded-xl p-6 shadow-md text-center space-y-3;
}

.contact-title {
  @apply font-bold text-gray-900;
}

.contact-text {
  @apply text-sm text-gray-600;
}

.error-state {
  @apply min-h-screen flex items-center justify-center text-center;
}
</style>


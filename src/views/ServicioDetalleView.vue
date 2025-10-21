<template>
  <div v-if="servicio" class="servicio-detalle-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">{{ servicio.titulo }}</h1>
        <p class="page-subtitle">{{ servicio.resumen }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Main Content -->
          <div class="main-content">
            <div class="content-block">
              <h2 class="section-title">Beneficios</h2>
              <ul class="benefits-list">
                <li v-for="(beneficio, index) in servicio.beneficios" :key="index">
                  {{ beneficio }}
                </li>
              </ul>
            </div>

            <div class="content-block">
              <h2 class="section-title">Lo que incluye</h2>
              <div class="includes-content" v-html="servicio.loIncluye"></div>
            </div>

            <div v-if="servicio.imagenes && servicio.imagenes.length" class="content-block">
              <h2 class="section-title">Galería</h2>
              <div class="gallery-grid">
                <img
                  v-for="(imagen, index) in servicio.imagenes"
                  :key="index"
                  :src="imagen"
                  :alt="`${servicio.titulo} ${index + 1}`"
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
                <span class="amount">${{ formatPrice(servicio.precioBase) }}</span>
                <span class="period">por día</span>
              </div>

              <BaseButton to="/cotizar" variant="primary" size="lg" class="w-full">
                Cotizar este servicio
              </BaseButton>

              <div class="features-list">
                <div class="feature-item">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Técnico incluido</span>
                </div>
                <div class="feature-item">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Montaje y desmontaje</span>
                </div>
                <div class="feature-item">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Equipo de respaldo</span>
                </div>
              </div>
            </div>

            <div class="contact-card">
              <h3 class="contact-title">¿Necesitas más información?</h3>
              <p class="contact-text">Habla con un asesor</p>
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

    <!-- Related Services -->
    <section class="related-section">
      <div class="container">
        <h2 class="section-title">Servicios Relacionados</h2>
        <div class="services-grid">
          <ServiceCard
            v-for="related in relatedServices"
            :key="related.id"
            :title="related.titulo"
            :description="related.resumen"
            :icon="related.icono"
            :price="related.precioBase"
            :features="related.beneficios.slice(0, 3)"
            :cta-link="`/servicios/${related.slug}`"
          />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="error-state">
    <div class="container">
      <h1>Servicio no encontrado</h1>
      <BaseButton to="/servicios">Ver todos los servicios</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCatalogoStore } from '@/stores/catalogo';
import BaseButton from '@/components/ui/BaseButton.vue';
import ServiceCard from '@/components/ui/ServiceCard.vue';

const route = useRoute();
const catalogoStore = useCatalogoStore();

const servicio = computed(() => {
  const slug = route.params.slug as string;
  return catalogoStore.servicioBySlug(slug);
});

const relatedServices = computed(() => {
  return catalogoStore.servicios
    .filter((s) => s.id !== servicio.value?.id)
    .slice(0, 3);
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

.servicio-detalle-view {
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

.benefits-list {
  @apply space-y-3;
}

.benefits-list li {
  @apply flex items-start gap-3 text-gray-700;
}

.benefits-list li::before {
  content: '✓';
  @apply text-green-600 font-bold text-xl mt-0.5;
}

.includes-content {
  @apply text-gray-700 leading-relaxed;
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

.price-badge .period {
  @apply text-sm text-gray-500;
}

.features-list {
  @apply space-y-3 pt-4;
}

.feature-item {
  @apply flex items-center gap-2 text-sm text-gray-700;
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

.related-section {
  @apply py-16 bg-white;
}

.services-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.error-state {
  @apply min-h-screen flex items-center justify-center text-center;
}
</style>


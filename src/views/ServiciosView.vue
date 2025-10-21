<template>
  <div class="servicios-view">
    <!-- Hero with Parallax -->
    <ParallaxSection variant="gradient" :speed="0.4" :overlay="true">
      <HeroSection
        title="Servicios de Producción Audiovisual"
        subtitle="Equipamiento profesional y soporte técnico para eventos corporativos de cualquier magnitud"
      />
    </ParallaxSection>

    <!-- Services Grid -->
    <section class="services-section">
      <div class="container">
        <div class="services-grid">
          <ServiceCard
            v-for="servicio in catalogoStore.servicios"
            :key="servicio.id"
            :title="servicio.titulo"
            :description="servicio.resumen"
            :icon="servicio.icono"
            :price="servicio.precioBase"
            :features="servicio.beneficios"
            :cta-text="'Ver detalles'"
            :cta-link="`/servicios/${servicio.slug}`"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Necesitas un paquete personalizado?</h2>
          <p class="cta-subtitle">
            Armamos soluciones a tu medida combinando los servicios que necesites
          </p>
          <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar ahora </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCatalogoStore } from '@/stores/catalogo';
import HeroSection from '@/components/ui/HeroSection.vue';
import ServiceCard from '@/components/ui/ServiceCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ParallaxSection from '@/components/ui/ParallaxSection.vue';

const catalogoStore = useCatalogoStore();
</script>

<style scoped>
@import "tailwindcss" reference;

.servicios-view {
  @apply bg-gray-50;
}

.services-section {
  @apply py-16;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.services-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.cta-section {
  @apply bg-blue-600 text-white py-16;
}

.cta-content {
  @apply text-center space-y-6;
}

.cta-title {
  @apply text-3xl font-bold;
}

.cta-subtitle {
  @apply text-lg opacity-90;
}
</style>


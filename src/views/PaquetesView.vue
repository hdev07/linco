<template>
  <div class="paquetes-view">
    <!-- Hero with Parallax -->
    <ParallaxSection variant="gradient" :speed="0.5">
      <div class="container">
        <h1 class="page-title">Paquetes Todo Incluido</h1>
        <p class="page-subtitle">
          Soluciones completas para eventos corporativos. Equipo profesional, técnicos certificados y
          montaje incluido.
        </p>
      </div>
    </ParallaxSection>

    <!-- Tabla Comparativa -->
    <section class="comparison-section">
      <div class="container">
        <h2 class="section-title">Compara Paquetes</h2>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-column">Característica</th>
                <th v-for="paquete in catalogoStore.paquetes" :key="paquete.id" class="package-column">
                  <div class="package-header">
                    <h3 class="package-name">{{ paquete.nombre }}</h3>
                    <div class="package-price">
                      <span class="from">Desde</span>
                      <span class="amount">${{ formatPrice(paquete.precioDesde) }}</span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-label">Aforo recomendado</td>
                <td v-for="paquete in catalogoStore.paquetes" :key="`aforo-${paquete.id}`">
                  {{ paquete.aforoRecomendado }} personas
                </td>
              </tr>
              <tr>
                <td class="feature-label">Horas incluidas</td>
                <td v-for="paquete in catalogoStore.paquetes" :key="`horas-${paquete.id}`">
                  {{ paquete.horasIncluidas }} horas
                </td>
              </tr>
              <tr>
                <td class="feature-label">Técnico incluido</td>
                <td v-for="paquete in catalogoStore.paquetes" :key="`tecnico-${paquete.id}`">
                  <span class="check">✓</span>
                </td>
              </tr>
              <tr>
                <td class="feature-label">Montaje/Desmontaje</td>
                <td v-for="paquete in catalogoStore.paquetes" :key="`montaje-${paquete.id}`">
                  <span class="check">✓</span>
                </td>
              </tr>
              <tr>
                <td></td>
                <td v-for="paquete in catalogoStore.paquetes" :key="`cta-${paquete.id}`">
                  <BaseButton :to="`/paquetes/${paquete.slug}`" variant="outline" size="sm" class="w-full">
                    Ver detalles
                  </BaseButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Paquetes Cards -->
    <section class="packages-section">
      <div class="container">
        <div class="packages-grid">
          <PaqueteCard v-for="paquete in catalogoStore.paquetes" :key="paquete.id" :paquete="paquete" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿No encuentras el paquete ideal?</h2>
          <p class="cta-subtitle">Diseñamos soluciones personalizadas para tu evento</p>
          <BaseButton to="/cotizar" variant="primary" size="lg">
            Cotiza a tu medida
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCatalogoStore } from '@/stores/catalogo';
import PaqueteCard from '@/components/ui/PaqueteCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ParallaxSection from '@/components/ui/ParallaxSection.vue';

const catalogoStore = useCatalogoStore();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};
</script>

<style scoped>
@import "tailwindcss" reference;

.paquetes-view {
  @apply bg-gray-50;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.page-title {
  @apply text-4xl lg:text-5xl font-bold mb-4 text-center text-white;
}

.page-subtitle {
  @apply text-lg lg:text-xl text-center max-w-3xl mx-auto text-white/90;
}

.comparison-section {
  @apply py-16 bg-white;
}

.section-title {
  @apply text-3xl font-bold text-center mb-12 text-gray-900;
}

.comparison-table-wrapper {
  @apply overflow-x-auto -mx-4 px-4;
}

.comparison-table {
  @apply w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden;
  min-width: 800px;
}

.comparison-table thead {
  @apply bg-gray-50;
}

.comparison-table th {
  @apply p-6 border-b-2 border-gray-200;
}

.feature-column {
  @apply font-semibold text-gray-700 w-1/4;
}

.package-column {
  @apply text-center;
}

.package-header {
  @apply space-y-2;
}

.package-name {
  @apply text-lg font-bold text-gray-900;
}

.package-price {
  @apply flex flex-col;
}

.package-price .from {
  @apply text-xs text-gray-500;
}

.package-price .amount {
  @apply text-2xl font-bold text-blue-600;
}

.comparison-table tbody tr {
  @apply border-b border-gray-100 hover:bg-gray-50;
}

.comparison-table td {
  @apply p-4 text-center;
}

.feature-label {
  @apply text-left font-medium text-gray-700;
}

.check {
  @apply text-2xl text-green-600;
}

.packages-section {
  @apply py-16;
}

.packages-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start;
}

.cta-section {
  @apply bg-blue-50 py-16;
}

.cta-content {
  @apply text-center space-y-6;
}

.cta-title {
  @apply text-3xl font-bold text-gray-900;
}

.cta-subtitle {
  @apply text-lg text-gray-600;
}
</style>


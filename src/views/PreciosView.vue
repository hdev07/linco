<template>
  <div class="precios-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Precios Transparentes</h1>
        <p class="page-subtitle">Conoce nuestras tarifas base · Cotizaciones personalizadas sin compromiso</p>
      </div>
    </section>

    <!-- Pricing Info -->
    <section class="pricing-info-section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">💰</div>
            <h3 class="info-title">Precio Justo</h3>
            <p class="info-text">Sin costos ocultos. Todo transparente desde la cotización.</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📊</div>
            <h3 class="info-title">Cotización en 2 min</h3>
            <p class="info-text">Estimado inmediato con nuestro cotizador online.</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🎯</div>
            <h3 class="info-title">Paquetes a medida</h3>
            <p class="info-text">Armamos soluciones según tu presupuesto.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Pricing -->
    <section class="services-pricing-section">
      <div class="container">
        <h2 class="section-title">Precios por Servicio</h2>
        <p class="section-subtitle">Tarifas base por día · Incluyen técnico operador</p>

        <div class="pricing-grid">
          <div class="pricing-card">
            <h3 class="service-name">Audio Profesional</h3>
            <div class="price-range">
              <span class="from">Desde</span>
              <span class="amount">$8,000</span>
            </div>
            <ul class="includes-list">
              <li>Bocinas activas</li>
              <li>Micrófonos</li>
              <li>Consola digital</li>
              <li>Cableado</li>
              <li>Técnico certificado</li>
            </ul>
            <BaseButton to="/cotizar?servicio=audio" variant="outline" size="md" class="w-full">
              Cotizar
            </BaseButton>
          </div>

          <div class="pricing-card">
            <h3 class="service-name">Iluminación Escénica</h3>
            <div class="price-range">
              <span class="from">Desde</span>
              <span class="amount">$6,000</span>
            </div>
            <ul class="includes-list">
              <li>Focos LED</li>
              <li>Moving heads</li>
              <li>Control DMX</li>
              <li>Truss y montaje</li>
              <li>Programación</li>
            </ul>
            <BaseButton to="/cotizar?servicio=iluminacion" variant="outline" size="md" class="w-full">
              Cotizar
            </BaseButton>
          </div>

          <div class="pricing-card">
            <h3 class="service-name">Pantallas LED</h3>
            <div class="price-range">
              <span class="from">Desde</span>
              <span class="amount">$10,000</span>
            </div>
            <ul class="includes-list">
              <li>Pantalla P3 o P2.6</li>
              <li>Procesador de video</li>
              <li>Estructura de soporte</li>
              <li>Calibración</li>
              <li>Técnico de video</li>
            </ul>
            <BaseButton to="/cotizar?servicio=pantallas" variant="outline" size="md" class="w-full">
              Cotizar
            </BaseButton>
          </div>

          <div class="pricing-card">
            <h3 class="service-name">MC / Conducción</h3>
            <div class="price-range">
              <span class="from">Desde</span>
              <span class="amount">$5,000</span>
            </div>
            <ul class="includes-list">
              <li>Presentador profesional</li>
              <li>Coordinación previa</li>
              <li>Guion (opcional)</li>
              <li>Bilingüe disponible</li>
              <li>Experiencia corporativa</li>
            </ul>
            <BaseButton to="/cotizar?servicio=mc" variant="outline" size="md" class="w-full">
              Cotizar
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Costs -->
    <section class="additional-costs-section">
      <div class="container">
        <h2 class="section-title">Costos Adicionales</h2>
        <div class="costs-grid">
          <div class="cost-item">
            <h3 class="cost-title">Transporte</h3>
            <p class="cost-desc">Incluido en CDMX. Estado de México desde $500</p>
          </div>
          <div class="cost-item">
            <h3 class="cost-title">Horas Extra</h3>
            <p class="cost-desc">15% del costo base del paquete por hora</p>
          </div>
          <div class="cost-item">
            <h3 class="cost-title">Montaje Previo</h3>
            <p class="cost-desc">Desde $1,500 (eventos grandes)</p>
          </div>
          <div class="cost-item">
            <h3 class="cost-title">Generador Eléctrico</h3>
            <p class="cost-desc">Desde $3,000 (eventos outdoor)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Discounts -->
    <section class="discounts-section">
      <div class="container">
        <div class="discounts-content">
          <h2 class="section-title">Descuentos Disponibles</h2>
          <div class="discount-list">
            <div class="discount-item">
              <span class="discount-badge">10%</span>
              <span class="discount-text">Eventos recurrentes (3+ al año)</span>
            </div>
            <div class="discount-item">
              <span class="discount-badge">15%</span>
              <span class="discount-text">Contrato anual</span>
            </div>
            <div class="discount-item">
              <span class="discount-badge">5%</span>
              <span class="discount-text">Pago anticipado (30 días)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para tu cotización?</h2>
          <p class="cta-subtitle">Recibe un estimado personalizado en minutos</p>
          <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar ahora </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<style scoped>
@import "tailwindcss" reference;

.precios-view {
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
  @apply text-lg text-center opacity-90;
}

.pricing-info-section {
  @apply py-12 bg-white;
}

.info-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8;
}

.info-card {
  @apply text-center;
}

.info-icon {
  @apply text-5xl mb-4;
}

.info-title {
  @apply text-xl font-bold text-gray-900 mb-2;
}

.info-text {
  @apply text-gray-600;
}

.services-pricing-section {
  @apply py-16;
}

.section-title {
  @apply text-3xl font-bold text-center text-gray-900 mb-3;
}

.section-subtitle {
  @apply text-center text-gray-600 mb-12;
}

.pricing-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.pricing-card {
  @apply bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow space-y-4;
}

.service-name {
  @apply text-xl font-bold text-gray-900;
}

.price-range {
  @apply flex flex-col pb-4 border-b border-gray-200;
}

.price-range .from {
  @apply text-sm text-gray-500;
}

.price-range .amount {
  @apply text-3xl font-bold text-blue-600;
}

.includes-list {
  @apply space-y-2 text-sm text-gray-600;
}

.includes-list li {
  @apply flex items-center gap-2;
}

.includes-list li::before {
  content: '✓';
  @apply text-green-600 font-bold;
}

.additional-costs-section {
  @apply py-16 bg-white;
}

.costs-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.cost-item {
  @apply bg-gray-50 p-6 rounded-lg;
}

.cost-title {
  @apply font-semibold text-gray-900 mb-2;
}

.cost-desc {
  @apply text-sm text-gray-600;
}

.discounts-section {
  @apply py-16 bg-blue-50;
}

.discounts-content {
  @apply text-center;
}

.discount-list {
  @apply flex flex-col md:flex-row justify-center gap-6 mt-8;
}

.discount-item {
  @apply flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-sm;
}

.discount-badge {
  @apply text-2xl font-bold text-blue-600;
}

.discount-text {
  @apply text-gray-700;
}

.cta-section {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16;
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


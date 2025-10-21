<template>
  <div class="nosotros-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Nosotros</h1>
        <p class="page-subtitle">
          Más de 10 años produciendo eventos corporativos en CDMX y Estado de México
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2 class="section-title">¿Quiénes Somos?</h2>
            <div class="content-text">
              <p>
                Linco es una empresa especializada en renta de equipo de audio, iluminación y video para
                eventos corporativos. Desde 2014 hemos trabajado con más de 500 empresas en la Ciudad de
                México y el Estado de México, brindando soluciones integrales de producción audiovisual.
              </p>
              <p>
                Nuestro equipo está conformado por técnicos certificados y profesionales con amplia
                experiencia en eventos corporativos, conferencias, lanzamientos, ferias, galas y eventos
                híbridos.
              </p>
              <p>
                Trabajamos con las mejores marcas del mercado y mantenemos nuestro inventario en óptimas
                condiciones. Cada evento cuenta con respaldo de equipo y técnico de guardia para
                garantizar el éxito de tu producción.
              </p>
            </div>
          </div>

          <div class="about-image">
            <img
              src="https://picsum.photos/800/600?random=10"
              alt="Equipo Linco"
              class="team-image"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Eventos Exitosos</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">Años de Experiencia</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">9.3/10</div>
            <div class="stat-label">Calificación NPS</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Equipos Certificados</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">Nuestros Valores</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3 class="value-title">Puntualidad</h3>
            <p class="value-text">
              Llegamos con anticipación y cumplimos estrictamente con los horarios acordados. Tu
              evento comienza a tiempo.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">✨</div>
            <h3 class="value-title">Calidad</h3>
            <p class="value-text">
              Solo trabajamos con equipos de marcas reconocidas, en perfecto estado y con
              mantenimiento constante.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3 class="value-title">Confiabilidad</h3>
            <p class="value-text">
              Respaldo de equipo en cada evento y técnicos capacitados para resolver cualquier
              contingencia.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">💡</div>
            <h3 class="value-title">Innovación</h3>
            <p class="value-text">
              Actualizamos constantemente nuestro inventario con la última tecnología en producción
              audiovisual.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Marcas -->
    <section class="brands-section-wrapper">
      <BrandsSection title="Marcas de Confianza" subtitle="Trabajamos exclusivamente con equipos de las mejores marcas del mercado" />
    </section>

    <!-- Certifications -->
    <section class="certifications-section">
      <div class="container">
        <h2 class="section-title">Certificaciones y Membresías</h2>
        <div class="certifications-grid">
          <div class="cert-card">
            <h3 class="cert-title">Dante Certified</h3>
            <p class="cert-text">Audio digital en red</p>
          </div>
          <div class="cert-card">
            <h3 class="cert-title">AVIXA Member</h3>
            <p class="cert-text">Asociación de integración audiovisual</p>
          </div>
          <div class="cert-card">
            <h3 class="cert-title">Seguro de Responsabilidad</h3>
            <p class="cert-text">Cobertura hasta $5,000,000 MXN</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Coverage -->
    <section class="coverage-section">
      <div class="container">
        <h2 class="section-title">Cobertura</h2>
        <p class="coverage-text">
          Brindamos servicio en toda la Ciudad de México y el Estado de México. Para eventos fuera
          de esta zona, contáctanos para una cotización personalizada.
        </p>
        <div class="coverage-areas">
          <div class="area-tag">Ciudad de México</div>
          <div class="area-tag">Naucalpan</div>
          <div class="area-tag">Tlalnepantla</div>
          <div class="area-tag">Nezahualcóyotl</div>
          <div class="area-tag">Ecatepec</div>
          <div class="area-tag">Cuautitlán Izcalli</div>
          <div class="area-tag">Atizapán</div>
          <div class="area-tag">Satélite</div>
          <div class="area-tag">Interlomas</div>
          <div class="area-tag">Santa Fe</div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para trabajar con nosotros?</h2>
          <p class="cta-subtitle">Cotiza tu evento sin compromiso</p>
          <div class="cta-buttons">
            <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar evento </BaseButton>
            <BaseButton to="/portafolio" variant="outline" size="lg" class="outline-white">
              Ver portafolio
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import BrandsSection from '@/components/ui/BrandsSection.vue';

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};
</script>

<style scoped>
@import "tailwindcss" reference;

.nosotros-view {
  @apply bg-white;
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
  @apply text-lg lg:text-xl text-center opacity-90;
}

.about-section {
  @apply py-16;
}

.about-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;
}

.section-title {
  @apply text-3xl font-bold text-gray-900 mb-6;
}

.content-text {
  @apply space-y-4 text-gray-600 leading-relaxed;
}

.about-image {
  @apply rounded-xl overflow-hidden shadow-xl;
}

.team-image {
  @apply w-full h-full object-cover;
}

.stats-section {
  @apply bg-blue-600 text-white py-16;
}

.stats-grid {
  @apply grid grid-cols-2 lg:grid-cols-4 gap-8;
}

.stat-card {
  @apply text-center;
}

.stat-number {
  @apply text-5xl font-bold mb-2;
}

.stat-label {
  @apply text-lg opacity-90;
}

.values-section {
  @apply py-16 bg-gray-50;
}

.brands-section-wrapper {
  @apply bg-white py-16;
}

.values-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8;
}

.value-card {
  @apply text-center;
}

.value-icon {
  @apply text-5xl mb-4;
}

.value-title {
  @apply text-xl font-bold text-gray-900 mb-3;
}

.value-text {
  @apply text-gray-600;
}

.certifications-section {
  @apply py-16;
}

.certifications-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8;
}

.cert-card {
  @apply bg-gray-50 p-8 rounded-xl text-center;
}

.cert-title {
  @apply text-xl font-bold text-gray-900 mb-2;
}

.cert-text {
  @apply text-gray-600;
}

.coverage-section {
  @apply py-16 bg-gray-50;
}

.coverage-text {
  @apply text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8;
}

.coverage-areas {
  @apply flex flex-wrap justify-center gap-3;
}

.area-tag {
  @apply px-4 py-2 bg-white text-gray-700 rounded-full font-medium shadow-sm;
}

.cta-section {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16;
}

.cta-content {
  @apply text-center space-y-6;
}

.cta-title {
  @apply text-3xl lg:text-4xl font-bold;
}

.cta-subtitle {
  @apply text-lg opacity-90;
}

.cta-buttons {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}

.outline-white {
  @apply bg-transparent border-white text-white hover:bg-white/10;
}
</style>


<template>
  <div class="home-view">
    <!-- Hero Section with Parallax Background -->
    <div class="hero-parallax-wrapper">
      <div ref="heroBgRef" class="hero-parallax-bg"></div>
      <div class="hero-parallax-overlay"></div>
      <HeroSection
        title="Audio e Iluminación Pro para Tu Evento Corporativo"
        subtitle="Cotiza en 2 minutos. Equipo certificado y puntualidad garantizada. +500 eventos exitosos en CDMX y Estado de México."
        :badges="[
          { icon: '🎯', text: '500+ eventos' },
          { icon: '⭐', text: 'NPS 9.3/10' },
          { icon: '🛡️', text: 'Seguro incluido' },
        ]"
      />
    </div>

    <!-- Trust Badges with Fade In -->
    <section class="trust-section">
      <div class="container">
        <div ref="trustGridRef" class="trust-grid fade-in-element">
          <div class="trust-item" v-for="(item, index) in trustItems" :key="index" :style="{ transitionDelay: `${index * 100}ms` }">
            <div class="trust-icon">{{ item.icon }}</div>
            <div class="trust-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Destacados with Parallax -->
    <section class="services-section">
      <div ref="servicesBgRef" class="services-parallax-bg"></div>
      <div class="container">
        <div ref="servicesHeaderRef" class="section-header fade-in-element">
          <h2 class="section-title">Nuestros Servicios</h2>
          <p class="section-subtitle">
            Soluciones completas para eventos corporativos de cualquier tamaño
          </p>
        </div>
        <div ref="servicesGridRef" class="services-grid fade-in-element">
          <ServiceCard
            v-for="servicio in servicios.slice(0, 4)"
            :key="servicio.id"
            :title="servicio.titulo"
            :description="servicio.resumen"
            :icon="servicio.icono"
            :price="servicio.precioBase"
            :features="servicio.beneficios.slice(0, 3)"
            :cta-text="'Ver servicio'"
            :cta-link="`/servicios/${servicio.slug}`"
          />
        </div>
        <div class="section-cta">
          <BaseButton to="/servicios" variant="outline" size="lg">
            Ver todos los servicios
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Paquetes Populares -->
    <section class="packages-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Paquetes Populares</h2>
          <p class="section-subtitle">Todo incluido para que solo te preocupes por tu evento</p>
        </div>
        <div class="packages-grid">
          <PaqueteCard v-for="paquete in paquetesDestacados" :key="paquete.id" :paquete="paquete" />
        </div>
        <div class="section-cta">
          <BaseButton to="/paquetes" variant="primary" size="lg"> Ver todos los paquetes </BaseButton>
        </div>
      </div>
    </section>

    <!-- Portafolio Preview -->
    <section class="portfolio-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Eventos Recientes</h2>
          <p class="section-subtitle">Algunos de los eventos que hemos producido</p>
        </div>
        <div class="portfolio-grid">
          <div v-for="i in 6" :key="i" class="portfolio-item">
            <div class="portfolio-image">
              <img
                :src="`/images/portfolio/evento-${i}.jpg`"
                :alt="`Evento ${i}`"
                class="portfolio-img"
                @error="handleImageError"
              />
              <div class="portfolio-overlay">
                <h4 class="portfolio-title">Conferencia Corporativa</h4>
                <p class="portfolio-info">200 personas · CDMX</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-cta">
          <BaseButton to="/portafolio" variant="outline" size="lg">
            Ver portafolio completo
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Clientes -->
    <section class="clients-section">
      <div class="container">
        <h2 class="section-title-small">Confían en nosotros</h2>
        <div class="clients-grid">
          <div v-for="i in 8" :key="i" class="client-logo">
            <div class="logo-placeholder">Cliente {{ i }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p class="section-subtitle">Calificación promedio: 9.3/10</p>
        </div>
        <div class="testimonials-grid">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
          />
        </div>
        <div class="section-cta">
          <BaseButton to="/testimonios" variant="ghost" size="md">
            Ver todos los testimonios
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para tu evento?</h2>
          <p class="cta-subtitle">Obtén tu cotización en menos de 2 minutos</p>
          <div class="cta-buttons">
            <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar ahora </BaseButton>
            <BaseButton
              href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20cotizar%20un%20evento"
              variant="outline"
              size="lg"
              class="whatsapp-btn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              Contactar por WhatsApp
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HeroSection from '@/components/ui/HeroSection.vue';
import ServiceCard from '@/components/ui/ServiceCard.vue';
import PaqueteCard from '@/components/ui/PaqueteCard.vue';
import TestimonialCard from '@/components/ui/TestimonialCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useCatalogoStore } from '@/stores/catalogo';
import { useBackgroundParallax, useFadeInOnScroll } from '@/composables/useParallax';

const catalogoStore = useCatalogoStore();

// Parallax effects
const { bgRef: heroBgRef } = useBackgroundParallax(0.5);
const { bgRef: servicesBgRef } = useBackgroundParallax(0.3);
const { elementRef: trustGridRef } = useFadeInOnScroll(0.2);
const { elementRef: servicesHeaderRef } = useFadeInOnScroll(0.2);
const { elementRef: servicesGridRef } = useFadeInOnScroll(0.1);

const trustItems = [
  {
    icon: '✓',
    title: 'Equipo Certificado',
    description: 'Marcas líderes: Shure, JBL, Chauvet',
  },
  {
    icon: '🔧',
    title: 'Backup Garantizado',
    description: 'Equipo de respaldo y técnico de guardia',
  },
  {
    icon: '⚡',
    title: 'Montaje Express',
    description: 'Instalación rápida y puntual',
  },
  {
    icon: '💼',
    title: 'Cobertura Amplia',
    description: 'CDMX y Estado de México',
  },
];

const servicios = computed(() => catalogoStore.servicios);
const paquetesDestacados = computed(() => catalogoStore.paquetesDestacados);

// Mock testimonials
const testimonials = [
  {
    id: '1',
    autor: 'María González',
    rol: 'Directora de Marketing',
    empresa: 'Tech Corp',
    cita: 'Excelente servicio, el equipo de audio funcionó perfectamente durante toda la conferencia. El técnico fue muy profesional.',
    rating: 5,
  },
  {
    id: '2',
    autor: 'Carlos Ramírez',
    rol: 'Gerente de Eventos',
    empresa: 'Innovate SA',
    cita: 'La iluminación le dio un toque muy profesional a nuestro lanzamiento. Altamente recomendables.',
    rating: 5,
  },
  {
    id: '3',
    autor: 'Ana Martínez',
    rol: 'Coordinadora RRHH',
    empresa: 'Global Solutions',
    cita: 'Puntuales, profesionales y con excelente calidad de equipo. Nuestra posada fue un éxito total.',
    rating: 5,
  },
];

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};
</script>

<style scoped>
@import "tailwindcss" reference;

.home-view {
  @apply space-y-0 overflow-hidden;
}

section {
  @apply py-16 lg:py-24 relative;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10;
}

/* Hero Parallax */
.hero-parallax-wrapper {
  @apply relative overflow-hidden;
}

.hero-parallax-bg {
  @apply absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900;
  @apply will-change-transform;
  height: 120%;
  top: -10%;
}

.hero-parallax-bg::before {
  content: '';
  @apply absolute inset-0 opacity-10;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.hero-parallax-overlay {
  @apply absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none;
}

/* Trust Section */
.trust-section {
  @apply bg-gray-50 py-12;
}

.trust-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.trust-item {
  @apply flex items-start gap-4 bg-white p-6 rounded-lg;
  @apply transform transition-all duration-700 opacity-0 translate-y-8;
}

.fade-in-element.fade-in-active .trust-item {
  @apply opacity-100 translate-y-0;
}

.trust-icon {
  @apply text-3xl flex-shrink-0;
}

.trust-text h3 {
  @apply font-semibold text-gray-900 mb-1;
}

.trust-text p {
  @apply text-sm text-gray-600;
}

/* Section Headers */
.section-header {
  @apply text-center mb-12;
}

.section-title {
  @apply text-3xl lg:text-4xl font-bold text-gray-900 mb-4;
}

.section-subtitle {
  @apply text-lg text-gray-600 max-w-2xl mx-auto;
}

.section-title-small {
  @apply text-2xl font-bold text-center text-gray-700 mb-8;
}

.section-cta {
  @apply flex justify-center mt-12;
}

/* Services Section with Parallax */
.services-section {
  @apply bg-white relative;
}

.services-parallax-bg {
  @apply absolute inset-0 opacity-5 pointer-events-none will-change-transform;
  background-image:
    linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.services-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

/* Fade in animations */
.fade-in-element {
  @apply opacity-0 translate-y-12 transition-all duration-1000 ease-out;
}

.fade-in-element.fade-in-active {
  @apply opacity-100 translate-y-0;
}

/* Packages Section */
.packages-section {
  @apply bg-gray-50;
}

.packages-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center;
}

/* Portfolio Section */
.portfolio-section {
  @apply bg-white;
}

.portfolio-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
}

.portfolio-item {
  @apply relative cursor-pointer;
}

.portfolio-image {
  @apply relative aspect-video overflow-hidden rounded-lg bg-gray-200;
}

.portfolio-img {
  @apply w-full h-full object-cover transition-transform duration-300;
}

.portfolio-item:hover .portfolio-img {
  @apply scale-110;
}

.portfolio-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300;
}

.portfolio-item:hover .portfolio-overlay {
  @apply opacity-100;
}

.portfolio-title {
  @apply text-white font-bold text-lg;
}

.portfolio-info {
  @apply text-white/80 text-sm;
}

/* Clients Section */
.clients-section {
  @apply bg-gray-50 py-12;
}

.clients-grid {
  @apply grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4;
}

.client-logo {
  @apply flex items-center justify-center aspect-square;
}

.logo-placeholder {
  @apply w-full h-full flex items-center justify-center bg-white rounded-lg shadow-sm text-xs text-gray-400 font-medium;
}

/* Testimonials Section */
.testimonials-section {
  @apply bg-white;
}

.testimonials-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

/* CTA Section */
.cta-section {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white;
}

.cta-content {
  @apply text-center max-w-3xl mx-auto;
}

.cta-title {
  @apply text-3xl lg:text-4xl font-bold mb-4;
}

.cta-subtitle {
  @apply text-xl mb-8 opacity-90;
}

.cta-buttons {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}

.whatsapp-btn {
  @apply bg-white/10 border-2 border-white text-white hover:bg-white/20;
}
</style>


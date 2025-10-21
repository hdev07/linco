<template>
  <div class="testimonios-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Testimonios</h1>
        <p class="page-subtitle">Lo que nuestros clientes dicen de nosotros</p>
        <div class="rating-badge">
          <div class="stars">★★★★★</div>
          <div class="rating-text">9.3/10 · Basado en 250+ reseñas</div>
        </div>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="testimonials-section">
      <div class="container">
        <div class="testimonials-grid">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para tu evento exitoso?</h2>
          <p class="cta-subtitle">Únete a más de 500 empresas satisfechas</p>
          <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar evento </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TestimonialCard from '@/components/ui/TestimonialCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    autor: 'María González',
    rol: 'Directora de Marketing',
    empresa: 'Tech Corp',
    cita: 'Excelente servicio, el equipo de audio funcionó perfectamente durante toda la conferencia. El técnico fue muy profesional y atento.',
    rating: 5,
  },
  {
    id: '2',
    autor: 'Carlos Ramírez',
    rol: 'Gerente de Eventos',
    empresa: 'Innovate SA',
    cita: 'La iluminación le dio un toque muy profesional a nuestro lanzamiento de producto. Altamente recomendables.',
    rating: 5,
  },
  {
    id: '3',
    autor: 'Ana Martínez',
    rol: 'Coordinadora RRHH',
    empresa: 'Global Solutions',
    cita: 'Puntuales, profesionales y con excelente calidad de equipo. Nuestra posada corporativa fue un éxito total.',
    rating: 5,
  },
  {
    id: '4',
    autor: 'Roberto Sánchez',
    rol: 'Director General',
    empresa: 'Grupo Empresarial MX',
    cita: 'Hemos trabajado con ellos en 5 eventos diferentes. Siempre cumplen y el equipo es de primera.',
    rating: 5,
  },
  {
    id: '5',
    autor: 'Laura Pérez',
    rol: 'Event Manager',
    empresa: 'BTL Agency',
    cita: 'Como agencia necesitamos proveedores confiables. Linco siempre entrega a tiempo y con calidad.',
    rating: 5,
  },
  {
    id: '6',
    autor: 'Jorge Hernández',
    rol: 'Coordinador de Producción',
    empresa: 'Hotel Ejecutivo',
    cita: 'El servicio de streaming para evento híbrido funcionó perfecto. Muy profesionales en todo momento.',
    rating: 5,
  },
  {
    id: '7',
    autor: 'Patricia Torres',
    rol: 'Gerente de Comunicación',
    empresa: 'Corporativo ABC',
    cita: 'La pantalla LED hizo que nuestras presentaciones se vieran increíbles. Excelente relación calidad-precio.',
    rating: 5,
  },
  {
    id: '8',
    autor: 'Fernando López',
    rol: 'Director de Operaciones',
    empresa: 'Industrias XYZ',
    cita: 'Rápidos en la respuesta y muy flexibles con los cambios de último minuto. Muy recomendables.',
    rating: 4,
  },
  {
    id: '9',
    autor: 'Claudia Ruiz',
    rol: 'Jefa de Marketing',
    empresa: 'Retail Group',
    cita: 'El MC que proporcionaron fue excelente, manejó todo el evento de manera impecable.',
    rating: 5,
  },
];
</script>

<style scoped>
@import "tailwindcss" reference;

.testimonios-view {
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
  @apply text-lg lg:text-xl text-center mb-6 opacity-90;
}

.rating-badge {
  @apply inline-flex flex-col items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg mx-auto;
}

.stars {
  @apply text-3xl text-yellow-400 mb-2;
}

.rating-text {
  @apply text-sm opacity-90;
}

.testimonials-section {
  @apply py-16;
}

.testimonials-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
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


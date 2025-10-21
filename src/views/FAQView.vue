<template>
  <div class="faq-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Preguntas Frecuentes</h1>
        <p class="page-subtitle">
          Todo lo que necesitas saber sobre nuestros servicios de renta de equipo
        </p>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-grid">
          <!-- Categories -->
          <aside class="categories-sidebar">
            <h2 class="sidebar-title">Categorías</h2>
            <nav class="categories-nav">
              <button
                v-for="cat in categories"
                :key="cat"
                class="category-button"
                :class="{ active: selectedCategory === cat }"
                @click="selectedCategory = cat"
              >
                {{ cat }}
              </button>
            </nav>
          </aside>

          <!-- FAQ List -->
          <div class="faq-main">
            <FAQAccordion :items="filteredFAQs" />
          </div>
        </div>

        <!-- CTA Contact -->
        <div class="faq-cta">
          <h2 class="cta-title">¿No encuentras tu respuesta?</h2>
          <p class="cta-text">Contacta a nuestro equipo, estamos listos para ayudarte</p>
          <div class="cta-buttons">
            <BaseButton to="/contacto" variant="primary" size="lg">
              Enviar mensaje
            </BaseButton>
            <BaseButton
              href="https://wa.me/5215512345678?text=Hola,%20tengo%20una%20pregunta"
              variant="outline"
              size="lg"
            >
              WhatsApp
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FAQAccordion from '@/components/ui/FAQAccordion.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import type { FAQ } from '@/types';

const selectedCategory = ref('Todos');

const categories = ['Todos', 'Servicios', 'Pagos', 'Logística', 'Técnico'];

const allFAQs: FAQ[] = [
  {
    id: '1',
    pregunta: '¿Incluyen técnico operador?',
    respuesta:
      'Sí, todos nuestros paquetes incluyen al menos un técnico certificado que estará presente durante todo el evento para operar el equipo y resolver cualquier inconveniente.',
    categoria: 'Servicios',
  },
  {
    id: '2',
    pregunta: '¿Cómo se calcula el costo de traslado?',
    respuesta:
      'El costo de traslado se calcula de acuerdo a la zona y accesibilidad del venue. Dentro de CDMX el traslado suele estar incluido. Para zonas del Estado de México cotizamos por kilómetro y tiempo de descarga.',
    categoria: 'Servicios',
  },
  {
    id: '3',
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta:
      'Aceptamos transferencia bancaria, depósito en efectivo, y tarjetas de crédito/débito. Para apartar tu fecha requerimos un anticipo del 50%, y el saldo restante se paga 48 horas antes del evento o contra entrega.',
    categoria: 'Pagos',
  },
  {
    id: '4',
    pregunta: '¿Qué pasa si cancelo el evento?',
    respuesta:
      'Si cancelas con más de 15 días de anticipación, reembolsamos el 80% del anticipo. Entre 7 y 14 días, reembolsamos el 50%. Con menos de 7 días no hay reembolso, pero puedes reprogramar una vez sin costo adicional.',
    categoria: 'Pagos',
  },
  {
    id: '5',
    pregunta: '¿Qué equipo de respaldo incluyen?',
    respuesta:
      'Llevamos equipo de respaldo crítico: micrófonos, cables, y procesadores adicionales. En paquetes premium incluimos bocinas y consolas de respaldo. El técnico está capacitado para hacer cambios rápidos si es necesario.',
    categoria: 'Técnico',
  },
  {
    id: '6',
    pregunta: '¿Cuánto tiempo antes llegan al montaje?',
    respuesta:
      'Llegamos entre 2 y 4 horas antes del inicio del evento, dependiendo del tamaño del montaje. Para eventos grandes coordinamos un día previo de pre-montaje. Todo queda listo y probado antes de que lleguen tus invitados.',
    categoria: 'Logística',
  },
  {
    id: '7',
    pregunta: '¿Qué pasa si el evento se alarga?',
    respuesta:
      'Las horas extras se cobran prorrateadas. El costo por hora extra depende del paquete, generalmente es el 15% del costo base del paquete. Te avisamos cuando estés por cumplir el tiempo contratado.',
    categoria: 'Servicios',
  },
  {
    id: '8',
    pregunta: '¿Requieren acceso a corriente eléctrica?',
    respuesta:
      'Sí, requerimos acceso a tomas de corriente de 110V o 220V según el equipo. Te indicamos los requerimientos específicos en la cotización. Si el venue no tiene la capacidad eléctrica, podemos cotizar generador.',
    categoria: 'Técnico',
  },
  {
    id: '9',
    pregunta: '¿Pueden hacer eventos al aire libre?',
    respuesta:
      'Sí, tenemos equipo adecuado para exteriores. En caso de lluvia, el equipo debe protegerse con carpas o techos. Si el clima es extremo, podemos reprogramar sin costo adicional con 24h de anticipación.',
    categoria: 'Logística',
  },
  {
    id: '10',
    pregunta: '¿Ofrecen pruebas de sonido previas?',
    respuesta:
      'Sí, para eventos grandes (más de 300 personas) o con requerimientos especiales, podemos agendar una prueba de sonido el día previo. Tiene un costo adicional que se cotiza según el caso.',
    categoria: 'Técnico',
  },
];

const filteredFAQs = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return allFAQs;
  }
  return allFAQs.filter((faq) => faq.categoria === selectedCategory.value);
});
</script>

<style scoped>
@import "tailwindcss" reference;

.faq-view {
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

.faq-section {
  @apply py-16;
}

.faq-grid {
  @apply grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16;
}

.categories-sidebar {
  @apply lg:col-span-1;
}

.sidebar-title {
  @apply text-lg font-bold text-gray-900 mb-4;
}

.categories-nav {
  @apply space-y-2 bg-white rounded-lg p-4 shadow-sm;
}

.category-button {
  @apply w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors;
}

.category-button.active {
  @apply bg-blue-600 text-white hover:bg-blue-700 hover:text-white;
}

.faq-main {
  @apply lg:col-span-3;
}

.faq-cta {
  @apply bg-white rounded-2xl p-12 text-center shadow-lg;
}

.cta-title {
  @apply text-3xl font-bold text-gray-900 mb-3;
}

.cta-text {
  @apply text-lg text-gray-600 mb-8;
}

.cta-buttons {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}
</style>


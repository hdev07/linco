<template>
  <div class="cotizador-exitoso-view">
    <div class="container">
      <div class="success-card">
        <!-- Icono de éxito -->
        <div class="success-icon">
          <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <!-- Mensaje principal -->
        <h1 class="success-title">¡Cotización Enviada Exitosamente!</h1>
        <p class="success-subtitle">
          Hemos recibido tu solicitud de cotización correctamente
        </p>

        <!-- ID de cotización -->
        <div class="quotation-id">
          <span class="id-label">ID de cotización:</span>
          <span class="id-value">{{ quotationId }}</span>
        </div>

        <!-- Información adicional -->
        <div class="info-card">
          <h2 class="info-title">¿Qué sigue?</h2>
          <ul class="info-list">
            <li>
              <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Nuestro equipo revisará tu solicitud en las próximas 24 horas</span>
            </li>
            <li>
              <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Te contactaremos por {{ contactMethod }} para confirmar detalles</span>
            </li>
            <li>
              <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Recibirás una cotización detallada con los precios finales</span>
            </li>
            <li>
              <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>También hemos enviado una copia de confirmación a tu correo</span>
            </li>
          </ul>
        </div>

        <!-- Contacto rápido -->
        <div class="contact-section">
          <p class="contact-text">¿Tienes alguna pregunta urgente?</p>
          <div class="contact-buttons">
            <BaseButton
              variant="primary"
              size="lg"
              @click="contactWhatsApp"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              to="/contacto"
            >
              Ir a Contacto
            </BaseButton>
          </div>
        </div>

        <!-- Acciones -->
        <div class="actions">
          <BaseButton to="/" variant="outline" size="md">
            Volver al inicio
          </BaseButton>
          <BaseButton to="/servicios" variant="primary" size="md">
            Ver nuestros servicios
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCotizadorStore } from '@/stores/cotizador';
import { useWhatsApp } from '@/composables/useWhatsApp';
import BaseButton from '@/components/ui/BaseButton.vue';

const route = useRoute();
const cotizadorStore = useCotizadorStore();
const whatsapp = useWhatsApp();

const quotationId = ref('');

const contactMethod = computed(() => {
  const method = cotizadorStore.data.metodoContacto;
  const methods = {
    whatsapp: 'WhatsApp',
    telefono: 'teléfono',
    email: 'correo electrónico',
  };
  return methods[method as keyof typeof methods] || 'WhatsApp';
});

onMounted(() => {
  // Obtener el ID de la cotización de la URL
  quotationId.value = (route.query.id as string) || 'N/A';

  // Resetear el store del cotizador después de mostrar el éxito
  // Esperar un poco para que el usuario vea el mensaje
  setTimeout(() => {
    cotizadorStore.reset();
  }, 500);
});

const contactWhatsApp = () => {
  const message = `Hola, acabo de enviar una cotización con ID: ${quotationId.value}. Quisiera obtener más información.`;
  whatsapp.sendMessage(message);
};
</script>

<style scoped>
@import "tailwindcss" reference;

.cotizador-exitoso-view {
  @apply min-h-screen bg-gray-50 py-12;
}

.container {
  @apply max-w-3xl mx-auto px-4 sm:px-6 lg:px-8;
}

.success-card {
  @apply bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 text-center;
}

.success-icon {
  @apply flex justify-center text-green-500;
}

.success-title {
  @apply text-3xl md:text-4xl font-bold text-gray-900;
}

.success-subtitle {
  @apply text-lg text-gray-600;
}

.quotation-id {
  @apply inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-lg border-2 border-blue-200;
}

.id-label {
  @apply text-sm font-medium text-gray-600;
}

.id-value {
  @apply text-lg font-bold text-blue-600 font-mono;
}

.info-card {
  @apply bg-gray-50 rounded-xl p-6 text-left;
}

.info-title {
  @apply text-xl font-semibold text-gray-900 mb-4;
}

.info-list {
  @apply space-y-4;
}

.info-list li {
  @apply flex items-start gap-3;
}

.info-list .icon {
  @apply w-6 h-6 text-green-500 flex-shrink-0 mt-0.5;
}

.info-list span {
  @apply text-gray-700;
}

.contact-section {
  @apply space-y-4 pt-6 border-t border-gray-200;
}

.contact-text {
  @apply text-gray-700 font-medium;
}

.contact-buttons {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}

.actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-200;
}
</style>



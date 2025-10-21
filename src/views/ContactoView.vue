<template>
  <div class="contacto-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Contáctanos</h1>
        <p class="page-subtitle">Estamos listos para ayudarte con tu evento</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="info-title">Información de Contacto</h2>
            <p class="info-text">
              Respuesta en menos de 2 horas en horario de oficina (Lun-Sáb, 9am-8pm)
            </p>

            <div class="contact-methods">
              <a href="tel:+525512345678" class="contact-method">
                <div class="method-icon phone">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">Teléfono</div>
                  <div class="method-value">55 1234 5678</div>
                </div>
              </a>

              <a
                href="https://wa.me/5215512345678?text=Hola,%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n"
                target="_blank"
                class="contact-method"
              >
                <div class="method-icon whatsapp">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">WhatsApp</div>
                  <div class="method-value">55 1234 5678</div>
                </div>
              </a>

              <a href="mailto:contacto@linco.com.mx" class="contact-method">
                <div class="method-icon email">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">Email</div>
                  <div class="method-value">contacto@linco.com.mx</div>
                </div>
              </a>

              <div class="contact-method">
                <div class="method-icon location">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">Cobertura</div>
                  <div class="method-value">CDMX y Estado de México</div>
                </div>
              </div>
            </div>

            <div class="office-hours">
              <h3 class="hours-title">Horario de Atención</h3>
              <p class="hours-text">Lunes a Sábado: 9:00 AM - 8:00 PM</p>
              <p class="hours-text">Domingo: Bajo cita</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <h2 class="form-title">Envíanos un Mensaje</h2>

              <div class="form-group">
                <label class="form-label">Nombre completo *</label>
                <input
                  v-model="formData.nombre"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Tu nombre"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Email *</label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="form-input"
                  placeholder="tu@email.com"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Teléfono *</label>
                <input
                  v-model="formData.telefono"
                  type="tel"
                  required
                  class="form-input"
                  placeholder="55 1234 5678"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Mensaje *</label>
                <textarea
                  v-model="formData.mensaje"
                  required
                  rows="6"
                  class="form-textarea"
                  placeholder="Cuéntanos sobre tu evento..."
                ></textarea>
              </div>

              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="formData.aceptoPrivacidad" required />
                  <span>
                    Acepto la
                    <RouterLink to="/legal/privacidad" class="link" target="_blank">
                      política de privacidad
                    </RouterLink>
                  </span>
                </label>
              </div>

              <div v-if="successMessage" class="success-message">
                {{ successMessage }}
              </div>

              <div v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </div>

              <BaseButton type="submit" variant="primary" size="lg" :loading="isSubmitting" class="w-full">
                Enviar mensaje
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import BaseButton from '@/components/ui/BaseButton.vue';
import type { ContactoForm } from '@/types';

const formData = reactive<ContactoForm>({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
  aceptoPrivacidad: false,
});

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Contact form submitted:', formData);

    successMessage.value = '¡Mensaje enviado! Te contactaremos pronto.';

    // Reset form
    Object.assign(formData, {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      aceptoPrivacidad: false,
    });
  } catch (error) {
    errorMessage.value = 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@import "tailwindcss" reference;

.contacto-view {
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
  @apply text-lg lg:text-xl text-center opacity-90;
}

.contact-section {
  @apply py-16;
}

.contact-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12;
}

/* Contact Info */
.contact-info {
  @apply space-y-8;
}

.info-title {
  @apply text-2xl font-bold text-gray-900;
}

.info-text {
  @apply text-gray-600;
}

.contact-methods {
  @apply space-y-4;
}

.contact-method {
  @apply flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow;
}

.method-icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0;
}

.method-icon.phone {
  @apply bg-blue-100 text-blue-600;
}

.method-icon.whatsapp {
  @apply bg-green-100 text-green-600;
}

.method-icon.email {
  @apply bg-purple-100 text-purple-600;
}

.method-icon.location {
  @apply bg-red-100 text-red-600;
}

.method-content {
  @apply flex-1;
}

.method-label {
  @apply text-sm text-gray-500 mb-1;
}

.method-value {
  @apply text-lg font-semibold text-gray-900;
}

.office-hours {
  @apply bg-white p-6 rounded-lg;
}

.hours-title {
  @apply font-semibold text-gray-900 mb-3;
}

.hours-text {
  @apply text-gray-600 text-sm;
}

/* Contact Form */
.contact-form-wrapper {
  @apply bg-white rounded-xl shadow-lg p-8;
}

.contact-form {
  @apply space-y-6;
}

.form-title {
  @apply text-2xl font-bold text-gray-900 mb-6;
}

.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input,
.form-textarea {
  @apply w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all;
}

.checkbox-label {
  @apply flex items-start gap-2 text-sm text-gray-700;
}

.checkbox-label input[type='checkbox'] {
  @apply w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5;
}

.link {
  @apply text-blue-600 hover:underline;
}

.success-message {
  @apply p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg;
}

.error-message {
  @apply p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg;
}
</style>


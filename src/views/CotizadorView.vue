<template>
  <div class="cotizador-view">
    <div class="container">
      <div class="cotizador-header">
        <h1 class="page-title">Cotiza tu Evento</h1>
        <p class="page-subtitle">Obtén una estimación en minutos</p>
      </div>

      <!-- Stepper Progress -->
      <StepperProgress
        :steps="stepLabels"
        :current-step="cotizadorStore.step"
        :allow-click-navigation="true"
        @step-click="handleStepClick"
      />

      <div class="cotizador-content">
        <!-- Step 1: Tipo de Evento y Aforo -->
        <div v-if="cotizadorStore.step === 1" class="step-content">
          <h2 class="step-title">Información del Evento</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Tipo de evento *</label>
              <select
                v-model="formData.tipoEvento"
                class="form-select"
                @change="updateCotizador"
              >
                <option value="conferencia">Conferencia</option>
                <option value="expo">Expo / Feria</option>
                <option value="gala">Gala</option>
                <option value="posada">Posada / Evento Social</option>
                <option value="lanzamiento">Lanzamiento de Producto</option>
                <option value="hibrido">Evento Híbrido</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Nombre del evento (opcional)</label>
              <input
                v-model="formData.nombreEvento"
                type="text"
                class="form-input"
                placeholder="Ej: Conferencia Anual 2025"
                @blur="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Aforo aproximado *</label>
              <input
                v-model.number="formData.aforo"
                type="number"
                min="1"
                max="5000"
                class="form-input"
                placeholder="Número de personas"
                @blur="updateCotizador"
              />
              <p class="form-hint">Nos ayuda a dimensionar el equipo necesario</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Fecha y Horario -->
        <div v-if="cotizadorStore.step === 2" class="step-content">
          <h2 class="step-title">Fecha y Horario</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Fecha del evento *</label>
              <input
                v-model="formData.fecha"
                type="date"
                class="form-input"
                :min="minDate"
                @change="checkDisponibilidad"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Hora de inicio *</label>
              <input
                v-model="formData.horaInicio"
                type="time"
                class="form-input"
                @change="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Hora de fin *</label>
              <input
                v-model="formData.horaFin"
                type="time"
                class="form-input"
                @change="updateCotizador"
              />
            </div>
          </div>

          <div v-if="disponibilidadChecked" class="availability-message" :class="disponibilidadClass">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                v-if="cotizadorStore.disponibilidad"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
              <path
                v-else
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{{ disponibilidadMessage }}</span>
          </div>
        </div>

        <!-- Step 3: Ubicación -->
        <div v-if="cotizadorStore.step === 3" class="step-content">
          <h2 class="step-title">Ubicación del Evento</h2>
          <div class="form-grid">
            <div class="form-group col-span-2">
              <label class="form-label">Dirección *</label>
              <input
                v-model="formData.direccion"
                type="text"
                class="form-input"
                placeholder="Calle y número"
                @blur="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Colonia</label>
              <input v-model="formData.colonia" type="text" class="form-input" @blur="updateCotizador" />
            </div>

            <div class="form-group">
              <label class="form-label">Ciudad *</label>
              <input v-model="formData.ciudad" type="text" class="form-input" @blur="updateCotizador" />
            </div>

            <div class="form-group">
              <label class="form-label">Código Postal *</label>
              <input
                v-model="formData.cp"
                type="text"
                maxlength="5"
                class="form-input"
                @blur="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Piso/Nivel (opcional)</label>
              <input
                v-model="formData.nivel"
                type="text"
                class="form-input"
                placeholder="Ej: Piso 3, Salón Principal"
              />
            </div>

            <div class="form-group col-span-2">
              <label class="form-label">Accesos disponibles</label>
              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" value="rampa" v-model="formData.accesos" />
                  <span>Rampa</span>
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" value="elevador" v-model="formData.accesos" />
                  <span>Elevador de carga</span>
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" value="estacionamiento" v-model="formData.accesos" />
                  <span>Estacionamiento cercano</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Selección de Servicios -->
        <div v-if="cotizadorStore.step === 4" class="step-content">
          <h2 class="step-title">Selecciona Servicios</h2>

          <div class="services-selection">
            <h3 class="subsection-title">Paquetes</h3>
            <div class="packages-list">
              <label
                v-for="paquete in catalogoStore.paquetes"
                :key="paquete.id"
                class="package-option"
                :class="{ selected: formData.seleccion.paquetes.includes(paquete.id) }"
              >
                <input
                  type="checkbox"
                  :value="paquete.id"
                  v-model="formData.seleccion.paquetes"
                  @change="updateCotizador"
                  class="hidden"
                />
                <div class="package-card-mini">
                  <div class="package-header">
                    <h4 class="package-name">{{ paquete.nombre }}</h4>
                    <span class="package-price">${{ formatPrice(paquete.precioDesde) }}</span>
                  </div>
                  <p class="package-desc">{{ paquete.descripcion }}</p>
                </div>
              </label>
            </div>

            <h3 class="subsection-title mt-8">Extras</h3>
            <div class="extras-list">
              <label
                v-for="extra in extrasDisponibles"
                :key="extra"
                class="extra-option"
                :class="{ selected: formData.seleccion.extras.includes(extra) }"
              >
                <input
                  type="checkbox"
                  :value="extra"
                  v-model="formData.seleccion.extras"
                  @change="updateCotizador"
                />
                <span>{{ extra }}</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Step 5: Datos de Contacto -->
        <div v-if="cotizadorStore.step === 5" class="step-content">
          <h2 class="step-title">Datos de Contacto</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Nombre completo *</label>
              <input
                v-model="formData.nombre"
                type="text"
                class="form-input"
                placeholder="Tu nombre"
                @blur="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Empresa (opcional)</label>
              <input v-model="formData.empresa" type="text" class="form-input" @blur="updateCotizador" />
            </div>

            <div class="form-group">
              <label class="form-label">Email *</label>
              <input
                v-model="formData.email"
                type="email"
                class="form-input"
                placeholder="tu@email.com"
                @blur="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Teléfono / WhatsApp *</label>
              <input
                v-model="formData.telefono"
                type="tel"
                class="form-input"
                placeholder="55 1234 5678"
                @blur="updateCotizador"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Método de contacto preferido</label>
              <select v-model="formData.metodoContacto" class="form-select" @change="updateCotizador">
                <option value="whatsapp">WhatsApp</option>
                <option value="telefono">Llamada telefónica</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Presupuesto aproximado (opcional)</label>
              <input
                v-model.number="formData.presupuesto"
                type="number"
                class="form-input"
                placeholder="MXN"
              />
            </div>

            <div class="form-group col-span-2">
              <label class="form-label">Notas adicionales</label>
              <textarea
                v-model="formData.notas"
                class="form-textarea"
                rows="4"
                placeholder="Cualquier detalle adicional que debamos conocer..."
              ></textarea>
            </div>

            <div class="form-group col-span-2">
              <label class="checkbox-label">
                <input type="checkbox" v-model="formData.aceptoTerminos" required />
                <span>
                  Acepto los
                  <RouterLink to="/legal/terminos" class="link" target="_blank">
                    términos y condiciones
                  </RouterLink>
                  y la
                  <RouterLink to="/legal/privacidad" class="link" target="_blank">
                    política de privacidad
                  </RouterLink>
                </span>
              </label>
            </div>
          </div>
        </div>

        <!-- Step 6: Resumen -->
        <div v-if="cotizadorStore.step === 6" class="step-content">
          <h2 class="step-title">Resumen de tu Cotización</h2>

          <div class="summary-card">
            <div class="summary-section">
              <h3 class="summary-heading">Evento</h3>
              <div class="summary-item">
                <span class="summary-label">Tipo:</span>
                <span>{{ formData.tipoEvento }}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Aforo:</span>
                <span>{{ formData.aforo }} personas</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Fecha:</span>
                <span>{{ formatDate(formData.fecha) }}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Horario:</span>
                <span>{{ formData.horaInicio }} - {{ formData.horaFin }}</span>
              </div>
            </div>

            <div class="summary-section">
              <h3 class="summary-heading">Ubicación</h3>
              <p>{{ formData.direccion }}, {{ formData.ciudad }}, {{ formData.cp }}</p>
            </div>

            <div class="summary-section">
              <h3 class="summary-heading">Servicios Seleccionados</h3>
              <ul class="summary-list">
                <li v-for="paqueteId in formData.seleccion.paquetes" :key="paqueteId">
                  {{ getPaqueteName(paqueteId) }}
                </li>
                <li v-for="extra in formData.seleccion.extras" :key="extra">
                  {{ extra }}
                </li>
              </ul>
            </div>

            <div class="summary-total">
              <span class="total-label">Precio estimado:</span>
              <span class="total-amount">${{ formatPrice(cotizadorStore.precioEstimado) }}</span>
              <span class="total-note">+ IVA</span>
            </div>
          </div>

          <div v-if="submitError" class="error-message">
            {{ submitError }}
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="step-navigation">
          <BaseButton
            v-if="cotizadorStore.step > 1"
            variant="outline"
            size="lg"
            @click="prevStep"
          >
            ← Anterior
          </BaseButton>
          <div class="flex-1"></div>
          <BaseButton
            v-if="cotizadorStore.step < 6"
            variant="primary"
            size="lg"
            :disabled="!canProceed"
            @click="nextStep"
          >
            Siguiente →
          </BaseButton>
          <BaseButton
            v-else
            variant="primary"
            size="lg"
            :loading="isSubmitting"
            :disabled="!formData.aceptoTerminos"
            @click="submitCotizacion"
          >
            Enviar cotización
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useCotizadorStore } from '@/stores/cotizador';
import { useCatalogoStore } from '@/stores/catalogo';
import StepperProgress from '@/components/ui/StepperProgress.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const router = useRouter();
const cotizadorStore = useCotizadorStore();
const catalogoStore = useCatalogoStore();

const stepLabels = [
  'Evento',
  'Fecha',
  'Ubicación',
  'Servicios',
  'Contacto',
  'Resumen',
];

const formData = reactive({
  tipoEvento: cotizadorStore.data.tipoEvento || 'conferencia',
  nombreEvento: cotizadorStore.data.nombreEvento || '',
  aforo: cotizadorStore.data.aforo || 50,
  fecha: cotizadorStore.data.fecha || '',
  horaInicio: cotizadorStore.data.horaInicio || '',
  horaFin: cotizadorStore.data.horaFin || '',
  direccion: cotizadorStore.data.direccion || '',
  colonia: cotizadorStore.data.colonia || '',
  ciudad: cotizadorStore.data.ciudad || 'Ciudad de México',
  cp: cotizadorStore.data.cp || '',
  nivel: cotizadorStore.data.nivel || '',
  accesos: cotizadorStore.data.accesos || [],
  seleccion: cotizadorStore.data.seleccion || {
    paquetes: [],
    equipos: [],
    extras: [],
  },
  nombre: cotizadorStore.data.nombre || '',
  empresa: cotizadorStore.data.empresa || '',
  email: cotizadorStore.data.email || '',
  telefono: cotizadorStore.data.telefono || '',
  metodoContacto: cotizadorStore.data.metodoContacto || 'whatsapp',
  presupuesto: cotizadorStore.data.presupuesto,
  notas: cotizadorStore.data.notas || '',
  aceptoTerminos: cotizadorStore.data.aceptoTerminos || false,
});

const disponibilidadChecked = ref(false);
const isSubmitting = ref(false);
const submitError = ref('');

const extrasDisponibles = [
  'Micrófonos inalámbricos adicionales',
  'Grabación de video',
  'Streaming profesional',
  'Luces ambientales',
  'DJ / Música',
  'Fotógrafo',
  'Backdrop / Fondo personalizado',
];

const minDate = computed(() => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  return today.toISOString().split('T')[0];
});

const canProceed = computed(() => {
  return cotizadorStore.isStepValid;
});

const disponibilidadClass = computed(() => {
  return cotizadorStore.disponibilidad ? 'available' : 'unavailable';
});

const disponibilidadMessage = computed(() => {
  return cotizadorStore.disponibilidad
    ? '✓ Fecha disponible'
    : '✗ Fecha no disponible. Por favor elige otra fecha.';
});

const updateCotizador = () => {
  cotizadorStore.updateData(formData as any);
};

watch(formData, () => {
  updateCotizador();
}, { deep: true });

const handleStepClick = (step: number) => {
  if (step <= cotizadorStore.step) {
    cotizadorStore.goToStep(step);
  }
};

const nextStep = () => {
  if (canProceed.value) {
    cotizadorStore.nextStep();
  }
};

const prevStep = () => {
  cotizadorStore.prevStep();
};

const checkDisponibilidad = async () => {
  if (formData.fecha) {
    await cotizadorStore.checkDisponibilidad();
    disponibilidadChecked.value = true;
  }
};

const submitCotizacion = async () => {
  if (!formData.aceptoTerminos) {
    submitError.value = 'Debes aceptar los términos y condiciones';
    return;
  }

  isSubmitting.value = true;
  submitError.value = '';

  try {
    const result = await cotizadorStore.submitCotizacion();
    if (result.success) {
      // Redirect to success page or show success message
      router.push(`/cotizar/exitoso?id=${result.id}`);
    }
  } catch (error) {
    submitError.value = 'Hubo un error al enviar la cotización. Por favor intenta de nuevo.';
  } finally {
    isSubmitting.value = false;
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX').format(price);
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getPaqueteName = (paqueteId: string) => {
  const paquete = catalogoStore.paqueteById(paqueteId);
  return paquete?.nombre || paqueteId;
};
</script>

<style scoped>
@import "tailwindcss" reference;

.cotizador-view {
  @apply py-12 bg-gray-50 min-h-screen;
}

.container {
  @apply max-w-4xl mx-auto px-4 sm:px-6 lg:px-8;
}

.cotizador-header {
  @apply text-center mb-12;
}

.page-title {
  @apply text-4xl font-bold text-gray-900 mb-3;
}

.page-subtitle {
  @apply text-lg text-gray-600;
}

.cotizador-content {
  @apply mt-12 mb-8;
}

.step-content {
  @apply bg-white rounded-xl shadow-lg p-8 mb-8 min-h-[400px];
}

.step-title {
  @apply text-2xl font-bold text-gray-900 mb-6;
}

.subsection-title {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.form-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.col-span-2 {
  @apply md:col-span-2;
}

.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input,
.form-select,
.form-textarea {
  @apply w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all;
}

.form-hint {
  @apply text-xs text-gray-500 mt-1;
}

.checkbox-group {
  @apply flex flex-wrap gap-4;
}

.checkbox-label {
  @apply flex items-center gap-2 text-sm text-gray-700 cursor-pointer;
}

.checkbox-label input[type="checkbox"] {
  @apply w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500;
}

.availability-message {
  @apply flex items-center gap-3 p-4 rounded-lg mt-6;
}

.availability-message.available {
  @apply bg-green-50 text-green-800 border border-green-200;
}

.availability-message.unavailable {
  @apply bg-red-50 text-red-800 border border-red-200;
}

.services-selection {
  @apply space-y-6;
}

.packages-list {
  @apply space-y-3;
}

.package-option {
  @apply block cursor-pointer;
}

.package-option.selected .package-card-mini {
  @apply border-blue-500 bg-blue-50 ring-2 ring-blue-200;
}

.package-card-mini {
  @apply border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all;
}

.package-header {
  @apply flex justify-between items-start mb-2;
}

.package-name {
  @apply font-semibold text-gray-900;
}

.package-price {
  @apply text-blue-600 font-bold;
}

.package-desc {
  @apply text-sm text-gray-600;
}

.extras-list {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-3;
}

.extra-option {
  @apply flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 transition-all;
}

.extra-option.selected {
  @apply border-blue-500 bg-blue-50;
}

.summary-card {
  @apply space-y-6;
}

.summary-section {
  @apply pb-4 border-b border-gray-200;
}

.summary-heading {
  @apply font-semibold text-gray-900 mb-3;
}

.summary-item {
  @apply flex justify-between py-1.5;
}

.summary-label {
  @apply text-gray-600;
}

.summary-list {
  @apply list-disc list-inside space-y-1 text-gray-700;
}

.summary-total {
  @apply flex items-baseline gap-3 p-6 bg-blue-50 rounded-lg;
}

.total-label {
  @apply text-lg font-medium text-gray-700;
}

.total-amount {
  @apply text-3xl font-bold text-blue-600;
}

.total-note {
  @apply text-sm text-gray-500;
}

.step-navigation {
  @apply flex items-center gap-4;
}

.error-message {
  @apply mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg;
}

.link {
  @apply text-blue-600 hover:underline;
}
</style>


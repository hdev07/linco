<template>
  <div class="legal-view">
    <div class="container">
      <h1 class="page-title">Términos y Condiciones</h1>
      <div class="legal-content">
        <section>
          <h2>1. Aceptación de Términos</h2>
          <p>
            Al utilizar los servicios de Linco, aceptas estos términos y condiciones en su totalidad.
            Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros
            servicios.
          </p>
        </section>

        <section>
          <h2>2. Servicios</h2>
          <p>
            Linco proporciona servicios de renta de equipo audiovisual para eventos corporativos,
            incluyendo pero no limitado a: audio profesional, iluminación, pantallas LED, proyección
            y maestros de ceremonia.
          </p>
        </section>

        <section>
          <h2>3. Cotizaciones y Precios</h2>
          <p>
            Las cotizaciones tienen una vigencia de 7 días hábiles. Los precios están sujetos a
            cambios sin previo aviso. El precio final puede variar según disponibilidad, fechas
            especiales y requerimientos específicos del evento.
          </p>
        </section>

        <section>
          <h2>4. Reservaciones y Pagos</h2>
          <p>
            Para apartar una fecha se requiere un anticipo del 50% del costo total. El saldo
            restante debe liquidarse 48 horas antes del evento o contra entrega según lo acordado.
            Aceptamos transferencia bancaria, depósito en efectivo y tarjetas de crédito/débito.
          </p>
        </section>

        <section>
          <h2>5. Cancelaciones y Reembolsos</h2>
          <ul>
            <li>Más de 15 días de anticipación: Reembolso del 80% del anticipo</li>
            <li>Entre 7 y 14 días: Reembolso del 50% del anticipo</li>
            <li>Menos de 7 días: No hay reembolso, pero se puede reprogramar una vez sin costo</li>
          </ul>
        </section>

        <section>
          <h2>6. Responsabilidades del Cliente</h2>
          <p>
            El cliente es responsable de proporcionar acceso adecuado al venue, energía eléctrica
            suficiente según especificaciones técnicas, seguridad del equipo durante el evento, y
            cualquier permiso o licencia requerida por el venue o autoridades locales.
          </p>
        </section>

        <section>
          <h2>7. Responsabilidades de Linco</h2>
          <p>
            Linco se compromete a proporcionar equipo en perfecto estado de funcionamiento, técnicos
            certificados y capacitados, equipo de respaldo para componentes críticos, y soporte
            técnico durante todo el evento.
          </p>
        </section>

        <section>
          <h2>8. Limitación de Responsabilidad</h2>
          <p>
            Linco no será responsable por daños indirectos, pérdidas de ganancias o daños
            consecuentes. Nuestra responsabilidad máxima está limitada al monto pagado por el
            servicio.
          </p>
        </section>

        <section>
          <h2>9. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
            entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
          </p>
        </section>

        <section>
          <h2>10. Contacto</h2>
          <p>
            Para cualquier pregunta sobre estos términos, contáctanos en:
            <a href="mailto:contacto@linco.com.mx" class="link">contacto@linco.com.mx</a>
          </p>
        </section>

        <p class="last-updated">Última actualización: Octubre 2024</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "tailwindcss" reference;

.legal-view {
  @apply bg-white py-16 min-h-screen;
}

.container {
  @apply max-w-4xl mx-auto px-4 sm:px-6 lg:px-8;
}

.page-title {
  @apply text-4xl font-bold text-gray-900 mb-8;
}

.legal-content {
  @apply space-y-8 text-gray-700;
}

.legal-content h2 {
  @apply text-2xl font-bold text-gray-900 mb-4;
}

.legal-content p {
  @apply leading-relaxed mb-4;
}

.legal-content ul {
  @apply list-disc list-inside space-y-2 ml-4;
}

.link {
  @apply text-blue-600 hover:underline;
}

.last-updated {
  @apply text-sm text-gray-500 italic pt-8 border-t border-gray-200;
}
</style>


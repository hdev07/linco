<template>
  <div class="legal-view">
    <div class="container">
      <h1 class="page-title">Contrato de Renta de Equipo</h1>
      <div class="legal-content">
        <p class="intro">
          Este documento establece los términos y condiciones del contrato de renta de equipo
          audiovisual entre Linco y el Cliente.
        </p>

        <section>
          <h2>1. Objeto del Contrato</h2>
          <p>
            El presente contrato tiene por objeto la renta de equipo audiovisual especificado en la
            cotización aceptada, incluyendo su transporte, montaje, operación y desmontaje para el
            evento del Cliente.
          </p>
        </section>

        <section>
          <h2>2. Equipo y Servicios Incluidos</h2>
          <p>El contrato incluye:</p>
          <ul>
            <li>Equipo detallado en la cotización</li>
            <li>Transporte del equipo al venue</li>
            <li>Montaje y pruebas técnicas</li>
            <li>Técnico(s) operador(es) durante el evento</li>
            <li>Desmontaje y retiro del equipo</li>
            <li>Equipo de respaldo según lo especificado</li>
          </ul>
        </section>

        <section>
          <h2>3. Precio y Forma de Pago</h2>
          <p>
            El precio total del servicio es el especificado en la cotización aceptada. El Cliente se
            compromete a pagar:
          </p>
          <ul>
            <li>50% de anticipo para apartar la fecha</li>
            <li>50% restante 48 horas antes del evento o contra entrega</li>
          </ul>
        </section>

        <section>
          <h2>4. Obligaciones del Cliente</h2>
          <ul>
            <li>Proporcionar acceso libre al venue para montaje y desmontaje</li>
            <li>Garantizar energía eléctrica suficiente según especificaciones técnicas</li>
            <li>Proporcionar seguridad del equipo durante el evento</li>
            <li>Notificar cualquier cambio con al menos 48 horas de anticipación</li>
            <li>Permitir el libre tránsito del personal técnico</li>
          </ul>
        </section>

        <section>
          <h2>5. Obligaciones de Linco</h2>
          <ul>
            <li>Entregar el equipo en perfecto estado de funcionamiento</li>
            <li>Realizar montaje profesional y pruebas previas</li>
            <li>Proporcionar técnicos certificados y capacitados</li>
            <li>Mantener equipo de respaldo disponible</li>
            <li>Brindar soporte técnico durante todo el evento</li>
          </ul>
        </section>

        <section>
          <h2>6. Daños y Pérdidas</h2>
          <p>
            El Cliente será responsable de cualquier daño, pérdida o robo del equipo durante el
            período del evento, excepto por desgaste normal. El costo de reparación o reemplazo será
            facturado al Cliente.
          </p>
        </section>

        <section>
          <h2>7. Horas Extras</h2>
          <p>
            El servicio incluye las horas especificadas en la cotización. Las horas adicionales se
            cobrarán al 15% del costo base del paquete por hora o fracción.
          </p>
        </section>

        <section>
          <h2>8. Cancelación y Reprogramación</h2>
          <p>Aplican las políticas de cancelación establecidas en los Términos y Condiciones:</p>
          <ul>
            <li>Más de 15 días: Reembolso del 80%</li>
            <li>7-14 días: Reembolso del 50%</li>
            <li>Menos de 7 días: Sin reembolso, opción de reprogramar una vez</li>
          </ul>
        </section>

        <section>
          <h2>9. Fuerza Mayor</h2>
          <p>
            Ninguna de las partes será responsable por incumplimiento debido a causas de fuerza mayor
            (desastres naturales, pandemias, disturbios, etc.). En estos casos se podrá reprogramar
            sin penalización.
          </p>
        </section>

        <section>
          <h2>10. Eventos al Aire Libre</h2>
          <p>
            Para eventos outdoor, el equipo debe protegerse adecuadamente contra lluvia y condiciones
            climáticas adversas. En caso de clima extremo, Linco puede suspender el servicio por
            seguridad sin responsabilidad.
          </p>
        </section>

        <section>
          <h2>11. Jurisdicción</h2>
          <p>
            Este contrato se rige por las leyes de los Estados Unidos Mexicanos. Cualquier
            controversia se resolverá en los tribunales de la Ciudad de México.
          </p>
        </section>

        <section>
          <h2>12. Aceptación</h2>
          <p>
            La firma de la cotización y el pago del anticipo constituyen la aceptación total de este
            contrato y sus términos.
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

.intro {
  @apply text-lg text-gray-600 mb-8 pb-8 border-b border-gray-200;
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

.last-updated {
  @apply text-sm text-gray-500 italic pt-8 border-t border-gray-200;
}
</style>


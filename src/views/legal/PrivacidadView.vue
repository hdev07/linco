<template>
  <div class="legal-view">
    <div class="container">
      <h1 class="page-title">Política de Privacidad</h1>
      <div class="legal-content">
        <section>
          <h2>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información personal que nos proporcionas directamente al solicitar una
            cotización o contratar nuestros servicios, incluyendo:
          </p>
          <ul>
            <li>Nombre completo</li>
            <li>Email</li>
            <li>Teléfono</li>
            <li>Empresa</li>
            <li>Detalles del evento</li>
          </ul>
        </section>

        <section>
          <h2>2. Uso de la Información</h2>
          <p>Utilizamos tu información personal para:</p>
          <ul>
            <li>Procesar y responder a tus solicitudes de cotización</li>
            <li>Coordinar y ejecutar los servicios contratados</li>
            <li>Enviar confirmaciones y actualizaciones sobre tu evento</li>
            <li>Mejorar nuestros servicios</li>
            <li>Comunicaciones de marketing (con tu consentimiento)</li>
          </ul>
        </section>

        <section>
          <h2>3. Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información
            personal contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>
        </section>

        <section>
          <h2>4. Compartir Información</h2>
          <p>
            No vendemos ni alquilamos tu información personal a terceros. Podemos compartir
            información con proveedores de servicios que nos ayudan a operar nuestro negocio
            (procesamiento de pagos, servicios de email, etc.), siempre bajo acuerdos de
            confidencialidad.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio
            web, analizar el tráfico y personalizar el contenido. Puedes controlar las cookies a
            través de la configuración de tu navegador.
          </p>
        </section>

        <section>
          <h2>6. Tus Derechos</h2>
          <p>De acuerdo con la Ley Federal de Protección de Datos Personales (México), tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Cancelar tu registro</li>
            <li>Oponerte al procesamiento de tus datos</li>
          </ul>
        </section>

        <section>
          <h2>7. Retención de Datos</h2>
          <p>
            Conservamos tu información personal mientras sea necesario para proporcionar nuestros
            servicios o según lo requiera la ley. Después de este período, eliminaremos o
            anonimizaremos tu información de manera segura.
          </p>
        </section>

        <section>
          <h2>8. Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre
            cambios significativos publicando la nueva política en nuestro sitio web.
          </p>
        </section>

        <section>
          <h2>9. Contacto</h2>
          <p>
            Para ejercer tus derechos o si tienes preguntas sobre esta política, contáctanos en:
            <a href="mailto:privacidad@linco.com.mx" class="link">privacidad@linco.com.mx</a>
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


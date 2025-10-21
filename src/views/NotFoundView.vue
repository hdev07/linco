<template>
  <div class="not-found-view">
    <div class="container">
      <div class="content">
        <div class="error-code">404</div>
        <h1 class="error-title">Página No Encontrada</h1>
        <p class="error-text">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div class="error-actions">
          <BaseButton to="/" variant="primary" size="lg">
            Ir al inicio
          </BaseButton>
          <BaseButton to="/servicios" variant="outline" size="lg">
            Ver servicios
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<style scoped>
@import "tailwindcss" reference;

.not-found-view {
  @apply min-h-screen flex items-center justify-center bg-gray-50 py-12;
}

.container {
  @apply max-w-2xl mx-auto px-4 sm:px-6 lg:px-8;
}

.content {
  @apply text-center;
}

.error-code {
  @apply text-9xl font-bold text-blue-600 mb-4;
  text-shadow: 4px 4px 0px rgba(59, 130, 246, 0.1);
}

.error-title {
  @apply text-4xl font-bold text-gray-900 mb-4;
}

.error-text {
  @apply text-lg text-gray-600 mb-8;
}

.error-actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}
</style>


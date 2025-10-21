<template>
  <section class="hero-section" :class="variant">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <slot name="title">{{ title }}</slot>
          </h1>
          <p v-if="subtitle || $slots.subtitle" class="hero-subtitle">
            <slot name="subtitle">{{ subtitle }}</slot>
          </p>
          <div v-if="$slots.actions || showDefaultCTA" class="hero-actions">
            <slot name="actions">
              <BaseButton to="/cotizar" variant="primary" size="lg"> Cotizar ahora </BaseButton>
              <BaseButton
                :href="whatsappLink"
                variant="outline"
                size="lg"
                class="hero-cta-secondary"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
                WhatsApp
              </BaseButton>
            </slot>
          </div>
          <div v-if="badges && badges.length" class="hero-badges">
            <div v-for="(badge, index) in badges" :key="index" class="badge">
              <span class="badge-icon">{{ badge.icon }}</span>
              <span class="badge-text">{{ badge.text }}</span>
            </div>
          </div>
        </div>
        <div v-if="image || $slots.image" class="hero-image">
          <slot name="image">
            <img :src="image" :alt="title" class="hero-img" />
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';

interface Badge {
  icon: string;
  text: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  variant?: 'default' | 'dark' | 'gradient';
  showDefaultCTA?: boolean;
  badges?: Badge[];
}

withDefaults(defineProps<Props>(), {
  variant: 'gradient',
  showDefaultCTA: true,
});

const whatsappLink = 'https://wa.me/5215512345678?text=Hola,%20me%20interesa%20cotizar%20un%20evento';
</script>

<style scoped>
@import "tailwindcss" reference;

.hero-section {
  @apply relative py-20 lg:py-32 overflow-hidden;
}

.hero-section.default {
  @apply bg-white;
}

.hero-section.dark {
  @apply bg-gray-900 text-white;
}

.hero-section.gradient {
  @apply bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white;
}

.hero-overlay {
  @apply absolute inset-0 bg-black/10 pointer-events-none;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10;
}

.hero-content {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;
}

.hero-text {
  @apply space-y-6;
}

.hero-title {
  @apply text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight;
}

.hero-subtitle {
  @apply text-lg sm:text-xl text-gray-100 leading-relaxed max-w-2xl;
}

.default .hero-subtitle {
  @apply text-gray-600;
}

.dark .hero-subtitle {
  @apply text-gray-300;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4 pt-4;
}

.hero-cta-secondary {
  @apply bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm;
}

.hero-badges {
  @apply flex flex-wrap gap-6 pt-6;
}

.badge {
  @apply flex items-center gap-2 text-sm;
}

.badge-icon {
  @apply text-2xl;
}

.badge-text {
  @apply font-medium;
}

.hero-image {
  @apply relative;
}

.hero-img {
  @apply w-full h-auto rounded-lg shadow-2xl;
}

@media (max-width: 1024px) {
  .hero-content {
    @apply text-center;
  }

  .hero-actions {
    @apply justify-center;
  }

  .hero-badges {
    @apply justify-center;
  }
}
</style>


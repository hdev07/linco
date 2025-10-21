<template>
  <section class="parallax-section" :class="variant">
    <div ref="bgRef" class="parallax-bg" :style="bgStyle"></div>
    <div class="parallax-overlay" v-if="overlay"></div>
    <div class="parallax-content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBackgroundParallax } from '@/composables/useParallax';

interface Props {
  variant?: 'light' | 'dark' | 'gradient' | 'primary';
  speed?: number;
  overlay?: boolean;
  backgroundImage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  speed: 0.3,
  overlay: true,
});

const { bgRef } = useBackgroundParallax(props.speed);

const bgStyle = computed(() => {
  if (props.backgroundImage) {
    return {
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }
  return {};
});
</script>

<style scoped>
@import "tailwindcss" reference;

.parallax-section {
  @apply relative overflow-hidden min-h-[400px] flex items-center;
}

.parallax-bg {
  @apply absolute inset-0 will-change-transform;
  height: 120%;
  top: -10%;
}

.parallax-section.light .parallax-bg {
  @apply bg-gray-50;
}

.parallax-section.dark .parallax-bg {
  @apply bg-gray-900;
}

.parallax-section.gradient .parallax-bg {
  @apply bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800;
}

.parallax-section.primary .parallax-bg {
  @apply bg-blue-600;
}

.parallax-overlay {
  @apply absolute inset-0 bg-black/10 pointer-events-none z-[1];
}

.parallax-content {
  @apply relative z-10 w-full;
}
</style>


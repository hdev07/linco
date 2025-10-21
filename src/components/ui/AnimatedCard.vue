<template>
  <div
    ref="cardRef"
    class="animated-card"
    :class="[animationClass, { 'is-visible': isVisible }]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
  threshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade-up',
  delay: 0,
  threshold: 0.1,
});

const cardRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const animationClass = `animation-${props.animation}`;

onMounted(() => {
  if (!cardRef.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true;
        }
      });
    },
    { threshold: props.threshold }
  );

  observer.observe(cardRef.value);

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
@import "tailwindcss" reference;

.animated-card {
  @apply transition-all duration-700 ease-out;
}

/* Fade Up */
.animation-fade-up {
  @apply opacity-0 translate-y-12;
}

.animation-fade-up.is-visible {
  @apply opacity-100 translate-y-0;
}

/* Fade In */
.animation-fade-in {
  @apply opacity-0;
}

.animation-fade-in.is-visible {
  @apply opacity-100;
}

/* Scale */
.animation-scale {
  @apply opacity-0 scale-95;
}

.animation-scale.is-visible {
  @apply opacity-100 scale-100;
}

/* Slide Left */
.animation-slide-left {
  @apply opacity-0 translate-x-12;
}

.animation-slide-left.is-visible {
  @apply opacity-100 translate-x-0;
}

/* Slide Right */
.animation-slide-right {
  @apply opacity-0 -translate-x-12;
}

.animation-slide-right.is-visible {
  @apply opacity-100 translate-x-0;
}
</style>


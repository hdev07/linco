<template>
  <div class="faq-accordion">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="accordion-item"
      :class="{ 'is-open': openIndex === index }"
    >
      <button
        class="accordion-button"
        @click="toggle(index)"
        :aria-expanded="openIndex === index"
      >
        <span class="question">{{ item.pregunta }}</span>
        <svg
          class="icon"
          :class="{ 'is-rotated': openIndex === index }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <Transition name="accordion">
        <div v-if="openIndex === index" class="accordion-content">
          <div class="answer" v-html="item.respuesta"></div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FAQ } from '@/types';

interface Props {
  items: FAQ[];
  allowMultiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  allowMultiple: false,
});

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
};
</script>

<style scoped>
@import "tailwindcss" reference;

.faq-accordion {
  @apply space-y-3;
}

.accordion-item {
  @apply bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200;
}

.accordion-item.is-open {
  @apply border-blue-300 shadow-md;
}

.accordion-button {
  @apply w-full flex items-start justify-between gap-4 p-5 text-left transition-colors;
  @apply hover:bg-gray-50;
}

.question {
  @apply flex-1 font-semibold text-gray-900;
}

.icon {
  @apply w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 mt-0.5;
}

.icon.is-rotated {
  @apply rotate-180 text-blue-600;
}

.accordion-content {
  @apply px-5 pb-5;
}

.answer {
  @apply text-gray-600 leading-relaxed;
}

/* Transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>


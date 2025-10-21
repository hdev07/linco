<template>
  <div class="stepper-progress">
    <div class="stepper-bar">
      <div class="progress-fill" :style="{ width: `${progressPercentage}%` }"></div>
    </div>
    <div class="stepper-steps">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
        :class="{
          'is-active': currentStep === index + 1,
          'is-completed': currentStep > index + 1,
        }"
        @click="onStepClick(index + 1)"
      >
        <div class="step-circle">
          <svg
            v-if="currentStep > index + 1"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <span class="step-label">{{ step }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  steps: string[];
  currentStep: number;
  allowClickNavigation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  allowClickNavigation: false,
});

const emit = defineEmits<{
  (e: 'step-click', step: number): void;
}>();

const progressPercentage = computed(() => {
  return ((props.currentStep - 1) / (props.steps.length - 1)) * 100;
});

const onStepClick = (step: number) => {
  if (props.allowClickNavigation && step <= props.currentStep) {
    emit('step-click', step);
  }
};
</script>

<style scoped>
@import "tailwindcss" reference;

.stepper-progress {
  @apply space-y-8;
}

.stepper-bar {
  @apply relative w-full h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress-fill {
  @apply absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300 ease-in-out;
}

.stepper-steps {
  @apply flex justify-between items-start;
}

.step {
  @apply flex flex-col items-center gap-2 flex-1 relative cursor-pointer;
}

.step.is-active .step-circle {
  @apply bg-blue-600 text-white ring-4 ring-blue-100;
}

.step.is-completed .step-circle {
  @apply bg-green-600 text-white;
}

.step-circle {
  @apply w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold transition-all duration-200;
  @apply hover:bg-gray-300;
}

.step.is-active .step-circle,
.step.is-completed .step-circle {
  @apply hover:scale-110;
}

.step-label {
  @apply text-xs sm:text-sm text-gray-600 text-center max-w-[80px] leading-tight;
}

.step.is-active .step-label {
  @apply text-blue-600 font-semibold;
}

.step.is-completed .step-label {
  @apply text-green-600;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .step-label {
    @apply hidden;
  }

  .step.is-active .step-label {
    @apply block;
  }
}
</style>


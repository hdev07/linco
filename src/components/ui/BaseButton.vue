<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    class="base-button"
    :class="[variantClass, sizeClass, { 'is-disabled': disabled, 'is-loading': loading }]"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  to?: string | object;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
});

const tag = computed(() => {
  if (props.to) return RouterLink;
  if (props.href) return 'a';
  return 'button';
});

const variantClass = computed(() => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
  };
  return variants[props.variant];
});

const sizeClass = computed(() => {
  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };
  return sizes[props.size];
});
</script>

<style scoped>
@import "tailwindcss" reference;

.base-button {
  @apply inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer border-2 border-transparent;
  @apply focus:outline-none focus:ring-4;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300;
}

.btn-secondary {
  @apply bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300;
}

.btn-outline {
  @apply border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300;
}

.btn-ghost {
  @apply text-gray-700 hover:bg-gray-100 focus:ring-gray-300;
}

.btn-danger {
  @apply bg-red-600 text-white hover:bg-red-700 focus:ring-red-300;
}

.btn-sm {
  @apply px-3 py-1.5 text-sm;
}

.btn-md {
  @apply px-4 py-2.5 text-base;
}

.btn-lg {
  @apply px-6 py-3.5 text-lg;
}

.is-loading {
  @apply pointer-events-none;
}

.loading-spinner {
  @apply w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin;
}

.is-disabled {
  @apply pointer-events-none;
}
</style>


<template>
  <div class="testimonial-card">
    <div class="rating">
      <svg
        v-for="star in 5"
        :key="star"
        class="star"
        :class="{ 'is-filled': star <= testimonial.rating }"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </div>

    <blockquote class="quote">
      "{{ testimonial.cita }}"
    </blockquote>

    <div class="author">
      <img
        v-if="testimonial.foto"
        :src="testimonial.foto"
        :alt="testimonial.autor"
        class="avatar"
      />
      <div v-else class="avatar-placeholder">
        {{ testimonial.autor.charAt(0) }}
      </div>
      <div class="author-info">
        <div class="author-name">{{ testimonial.autor }}</div>
        <div class="author-role">
          {{ testimonial.rol }}
          <span v-if="testimonial.empresa"> · {{ testimonial.empresa }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types';

interface Props {
  testimonial: Testimonial;
}

defineProps<Props>();
</script>

<style scoped>
@import "tailwindcss" reference;

.testimonial-card {
  @apply bg-white p-6 rounded-xl shadow-md space-y-4;
}

.rating {
  @apply flex gap-1;
}

.star {
  @apply w-5 h-5 text-gray-300;
}

.star.is-filled {
  @apply text-yellow-400;
}

.quote {
  @apply text-gray-700 italic leading-relaxed;
}

.author {
  @apply flex items-center gap-3 pt-4 border-t border-gray-100;
}

.avatar,
.avatar-placeholder {
  @apply w-12 h-12 rounded-full flex-shrink-0;
}

.avatar {
  @apply object-cover;
}

.avatar-placeholder {
  @apply bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-lg;
}

.author-info {
  @apply flex-1;
}

.author-name {
  @apply font-semibold text-gray-900;
}

.author-role {
  @apply text-sm text-gray-600;
}
</style>


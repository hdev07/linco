<template>
  <div class="blog-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Blog</h1>
        <p class="page-subtitle">Guías, tips y noticias sobre producción audiovisual</p>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="blog-section">
      <div class="container">
        <div class="blog-grid">
          <article v-for="post in posts" :key="post.id" class="blog-card">
            <div class="card-image">
              <img
                :src="post.portada"
                :alt="post.titulo"
                class="image"
                @error="handleImageError"
              />
            </div>
            <div class="card-content">
              <div class="card-meta">
                <span class="date">{{ formatDate(post.fechaPublicacion) }}</span>
                <span v-if="post.categoria" class="category">{{ post.categoria }}</span>
              </div>
              <h2 class="card-title">{{ post.titulo }}</h2>
              <p class="card-excerpt">{{ post.extracto }}</p>
              <BaseButton :to="`/blog/${post.slug}`" variant="ghost" size="sm">
                Leer más →
              </BaseButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import type { BlogPost } from '@/types';

// Mock blog posts
const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'checklist-audio-conferencia',
    titulo: 'Checklist de Audio para Conferencias de 200+ Personas',
    extracto:
      'Todo lo que necesitas considerar para garantizar audio perfecto en tu conferencia corporativa.',
    portada: 'https://picsum.photos/800/600?random=1',
    contenido: '',
    keywords: ['audio', 'conferencia', 'checklist'],
    fechaPublicacion: '2024-10-15',
    categoria: 'Guías',
  },
  {
    id: '2',
    slug: 'pantalla-led-vs-proyeccion',
    titulo: 'Pantalla LED vs Proyección: Cuál Conviene para Tu Evento',
    extracto:
      'Comparativa completa para ayudarte a elegir la mejor opción según tu tipo de evento.',
    portada: 'https://picsum.photos/800/600?random=2',
    contenido: '',
    keywords: ['pantallas', 'led', 'proyección'],
    fechaPublicacion: '2024-10-10',
    categoria: 'Comparativas',
  },
  {
    id: '3',
    slug: 'iluminacion-eventos-corporativos',
    titulo: 'Guía de Iluminación para Eventos Corporativos',
    extracto:
      'Cómo la iluminación profesional puede transformar tu evento y fortalecer tu marca.',
    portada: 'https://picsum.photos/800/600?random=3',
    contenido: '',
    keywords: ['iluminación', 'corporativo', 'eventos'],
    fechaPublicacion: '2024-10-05',
    categoria: 'Guías',
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://picsum.photos/800/600?random=999';
};
</script>

<style scoped>
@import "tailwindcss" reference;

.blog-view {
  @apply bg-gray-50 min-h-screen;
}

.hero-simple {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-32 pb-16 lg:pt-36;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.page-title {
  @apply text-4xl lg:text-5xl font-bold mb-4 text-center;
}

.page-subtitle {
  @apply text-lg text-center opacity-90;
}

.blog-section {
  @apply py-16;
}

.blog-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.blog-card {
  @apply bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden;
}

.card-image {
  @apply aspect-video overflow-hidden bg-gray-200;
}

.image {
  @apply w-full h-full object-cover hover:scale-105 transition-transform duration-300;
}

.card-content {
  @apply p-6 space-y-3;
}

.card-meta {
  @apply flex items-center gap-3 text-sm text-gray-500;
}

.category {
  @apply px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium;
}

.card-title {
  @apply text-xl font-bold text-gray-900 line-clamp-2;
}

.card-excerpt {
  @apply text-gray-600 line-clamp-3;
}
</style>


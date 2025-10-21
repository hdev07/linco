<template>
  <nav class="app-navbar" :class="{ 'is-scrolled': isScrolled, 'is-open': mobileMenuOpen }">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <RouterLink to="/" class="logo">
          <span class="logo-text">Linco</span>
          <span class="logo-tagline">Audio & Iluminación</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="desktop-menu">
          <RouterLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="menu-item"
            active-class="is-active"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <a :href="whatsappLink" target="_blank" class="cta-whatsapp" aria-label="WhatsApp">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
            <span class="hidden lg:inline">WhatsApp</span>
          </a>
          <BaseButton to="/cotizar" variant="primary" size="md"> Cotizar ahora </BaseButton>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Menú">
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <RouterLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="mobile-menu-item"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import BaseButton from '../ui/BaseButton.vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const menuItems = [
  { label: 'Servicios', path: '/servicios' },
  { label: 'Paquetes', path: '/paquetes' },
  { label: 'Equipos', path: '/equipos' },
  { label: 'Portafolio', path: '/portafolio' },
  { label: 'Precios', path: '/precios' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contacto', path: '/contacto' },
];

const whatsappLink = 'https://wa.me/5215512345678?text=Hola,%20me%20interesa%20cotizar%20un%20evento';

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@import "tailwindcss" reference;

.app-navbar {
  @apply fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300;
}

.app-navbar.is-scrolled {
  @apply shadow-lg;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.navbar-content {
  @apply flex items-center justify-between h-20;
}

.logo {
  @apply flex flex-col -space-y-1 cursor-pointer;
}

.logo-text {
  @apply text-2xl font-bold text-blue-600;
}

.logo-tagline {
  @apply text-xs text-gray-600 font-medium;
}

.desktop-menu {
  @apply hidden lg:flex items-center space-x-8;
}

.menu-item {
  @apply text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative;
}

.menu-item.is-active {
  @apply text-blue-600;
}

.menu-item.is-active::after {
  @apply content-[''] absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600;
}

.cta-buttons {
  @apply hidden lg:flex items-center space-x-3;
}

.cta-whatsapp {
  @apply flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200;
}

.mobile-menu-toggle {
  @apply lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors;
}

.mobile-menu {
  @apply lg:hidden py-4 border-t border-gray-200;
}

.mobile-menu-item {
  @apply block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition-colors;
}
</style>


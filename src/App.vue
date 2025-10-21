<template>
  <div id="app" class="flex flex-col min-h-screen">
    <AppNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
    <StickyQuoteBar />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavbar from './components/layout/AppNavbar.vue';
import AppFooter from './components/layout/AppFooter.vue';
import StickyQuoteBar from './components/layout/StickyQuoteBar.vue';
</script>

<style>
@import './styles/main.css';
</style>

<template>
  <div class="disponibilidad-view">
    <!-- Hero -->
    <section class="hero-simple">
      <div class="container">
        <h1 class="page-title">Disponibilidad</h1>
        <p class="page-subtitle">Consulta las fechas disponibles para tu evento</p>
      </div>
    </section>

    <!-- Calendar Section -->
    <section class="calendar-section">
      <div class="container">
        <div class="calendar-wrapper">
          <div class="calendar-header">
            <button @click="prevMonth" class="nav-button">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 class="month-title">{{ currentMonthLabel }}</h2>
            <button @click="nextMonth" class="nav-button">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Simple Calendar Grid -->
          <div class="calendar-grid">
            <div v-for="day in daysOfWeek" :key="day" class="day-header">
              {{ day }}
            </div>
            <div
              v-for="date in calendarDays"
              :key="date.key"
              class="calendar-day"
              :class="{
                'is-other-month': !date.isCurrentMonth,
                'is-occupied': date.isOccupied,
                'is-available': date.isAvailable && date.isCurrentMonth,
                'is-past': date.isPast,
              }"
            >
              <span class="day-number">{{ date.day }}</span>
              <span v-if="date.isOccupied" class="status-badge occupied">Ocupado</span>
              <span v-else-if="date.isAvailable && !date.isPast" class="status-badge available">
                Disponible
              </span>
            </div>
          </div>

          <div class="calendar-legend">
            <div class="legend-item">
              <span class="legend-dot available"></span>
              <span>Disponible</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot occupied"></span>
              <span>Ocupado</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot past"></span>
              <span>Pasado</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="calendar-cta">
          <p class="cta-text">
            ¿Encontraste una fecha disponible? Cotiza tu evento ahora
          </p>
          <BaseButton to="/cotizar" variant="primary" size="lg">
            Cotizar evento
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const currentDate = ref(new Date());

const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Mock occupied dates
const occupiedDates = new Set([
  '2025-10-25',
  '2025-10-30',
  '2025-11-05',
  '2025-11-12',
  '2025-11-20',
]);

const currentMonthLabel = computed(() => {
  return currentDate.value.toLocaleDateString('es-MX', {
    month: 'long',
    year: 'numeric',
  });
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);

  const firstDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const daysInPrevMonth = prevLastDay.getDate();

  const days = [];

  // Previous month days
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const date = new Date(year, month - 1, day);
    days.push(createDayObject(date, false));
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    days.push(createDayObject(date, true));
  }

  // Next month days to fill grid
  const remainingDays = 42 - days.length; // 6 weeks * 7 days
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push(createDayObject(date, false));
  }

  return days;
});

function createDayObject(date: Date, isCurrentMonth: boolean) {
  const dateString = date.toISOString().split('T')[0];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    day: date.getDate(),
    key: dateString,
    isCurrentMonth,
    isOccupied: occupiedDates.has(dateString),
    isAvailable: !occupiedDates.has(dateString),
    isPast: date < today,
  };
}

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
}
</script>

<style scoped>
@import "tailwindcss" reference;

.disponibilidad-view {
  @apply bg-gray-50 min-h-screen;
}

.hero-simple {
  @apply bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16;
}

.container {
  @apply max-w-5xl mx-auto px-4 sm:px-6 lg:px-8;
}

.page-title {
  @apply text-4xl lg:text-5xl font-bold mb-4 text-center;
}

.page-subtitle {
  @apply text-lg text-center opacity-90;
}

.calendar-section {
  @apply py-16;
}

.calendar-wrapper {
  @apply bg-white rounded-2xl shadow-lg p-8 mb-8;
}

.calendar-header {
  @apply flex items-center justify-between mb-8;
}

.nav-button {
  @apply p-2 hover:bg-gray-100 rounded-lg transition-colors;
}

.month-title {
  @apply text-2xl font-bold text-gray-900 capitalize;
}

.calendar-grid {
  @apply grid grid-cols-7 gap-2;
}

.day-header {
  @apply text-center font-semibold text-gray-600 text-sm py-2;
}

.calendar-day {
  @apply relative aspect-square flex flex-col items-center justify-center p-2 rounded-lg border-2 border-gray-100 transition-all;
}

.calendar-day.is-other-month {
  @apply opacity-30;
}

.calendar-day.is-past {
  @apply bg-gray-50 text-gray-400;
}

.calendar-day.is-available {
  @apply border-green-200 bg-green-50 hover:border-green-400 cursor-pointer;
}

.calendar-day.is-occupied {
  @apply border-red-200 bg-red-50;
}

.day-number {
  @apply text-lg font-semibold;
}

.status-badge {
  @apply text-xs font-medium mt-1;
}

.status-badge.available {
  @apply text-green-600;
}

.status-badge.occupied {
  @apply text-red-600;
}

.calendar-legend {
  @apply flex justify-center gap-6 mt-8 pt-6 border-t border-gray-200;
}

.legend-item {
  @apply flex items-center gap-2 text-sm text-gray-600;
}

.legend-dot {
  @apply w-4 h-4 rounded-full;
}

.legend-dot.available {
  @apply bg-green-500;
}

.legend-dot.occupied {
  @apply bg-red-500;
}

.legend-dot.past {
  @apply bg-gray-300;
}

.calendar-cta {
  @apply text-center space-y-4;
}

.cta-text {
  @apply text-lg text-gray-700;
}
</style>


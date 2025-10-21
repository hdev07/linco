# Guía de Efectos Parallax - Linco

## 🎨 Efectos Implementados

Esta guía explica cómo usar los efectos parallax y animaciones profesionales implementados en el sitio de Linco.

## 📦 Composables Disponibles

### 1. `useParallax(speed)`

Efecto parallax básico para elementos.

```typescript
import { useParallax } from '@/composables/useParallax';

const { parallaxRef } = useParallax(0.5); // speed: 0.1 - 1.0
```

**Uso en template:**
```vue
<div ref="parallaxRef" class="mi-elemento">
  Contenido con parallax
</div>
```

### 2. `useBackgroundParallax(speed)`

Efecto parallax optimizado para fondos.

```typescript
import { useBackgroundParallax } from '@/composables/useParallax';

const { bgRef } = useBackgroundParallax(0.3);
```

**Uso en template:**
```vue
<div ref="bgRef" class="fondo-parallax"></div>
```

### 3. `useFadeInOnScroll(threshold)`

Fade in cuando el elemento entra en viewport.

```typescript
import { useFadeInOnScroll } from '@/composables/useParallax';

const { elementRef } = useFadeInOnScroll(0.2); // threshold: 0-1
```

**Uso en template:**
```vue
<div ref="elementRef" class="fade-in-element">
  Este elemento aparece al hacer scroll
</div>
```

### 4. `useScaleOnScroll()`

Efecto de escala basado en scroll.

```typescript
import { useScaleOnScroll } from '@/composables/useParallax';

const { scaleRef } = useScaleOnScroll();
```

## 🎯 Componentes Listos

### ParallaxSection

Sección completa con parallax en el fondo.

```vue
<ParallaxSection 
  variant="gradient" 
  :speed="0.4" 
  :overlay="true"
  background-image="/images/fondo.jpg"
>
  <div class="container">
    <h1>Título</h1>
    <p>Contenido</p>
  </div>
</ParallaxSection>
```

**Props:**
- `variant`: `'light' | 'dark' | 'gradient' | 'primary'`
- `speed`: Velocidad del parallax (0.1 - 1.0)
- `overlay`: Mostrar overlay oscuro
- `backgroundImage`: URL de imagen de fondo

### AnimatedCard

Card con animaciones al aparecer.

```vue
<AnimatedCard 
  animation="fade-up" 
  :delay="100"
  :threshold="0.1"
>
  <div class="card-content">
    Contenido de la card
  </div>
</AnimatedCard>
```

**Props:**
- `animation`: `'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right'`
- `delay`: Delay en ms antes de animar
- `threshold`: Cuánto del elemento debe estar visible (0-1)

## 💡 Ejemplos de Uso

### Ejemplo 1: Hero con Parallax

```vue
<template>
  <div class="hero-wrapper">
    <div ref="heroBgRef" class="hero-bg"></div>
    <div class="hero-content">
      <h1>Título del Hero</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBackgroundParallax } from '@/composables/useParallax';

const { bgRef: heroBgRef } = useBackgroundParallax(0.5);
</script>

<style scoped>
.hero-wrapper {
  @apply relative overflow-hidden min-h-screen;
}

.hero-bg {
  @apply absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800;
  @apply will-change-transform;
  height: 120%;
  top: -10%;
}

.hero-content {
  @apply relative z-10 flex items-center justify-center min-h-screen;
}
</style>
```

### Ejemplo 2: Grid con Fade In Secuencial

```vue
<template>
  <div ref="gridRef" class="grid-container fade-in-element">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="grid-item"
      :style="{ transitionDelay: `${index * 100}ms` }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFadeInOnScroll } from '@/composables/useParallax';

const { elementRef: gridRef } = useFadeInOnScroll(0.2);

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
</script>

<style scoped>
.grid-container {
  @apply grid grid-cols-4 gap-6;
}

.grid-item {
  @apply transform transition-all duration-700 opacity-0 translate-y-8;
}

.fade-in-element.fade-in-active .grid-item {
  @apply opacity-100 translate-y-0;
}
</style>
```

### Ejemplo 3: Sección con Múltiples Efectos

```vue
<template>
  <section class="features-section">
    <!-- Fondo animado -->
    <div ref="bgRef" class="animated-bg"></div>
    
    <!-- Contenido con fade in -->
    <div class="container">
      <div ref="headerRef" class="fade-in-element">
        <h2>Características</h2>
      </div>
      
      <!-- Cards animadas individualmente -->
      <div class="features-grid">
        <AnimatedCard
          v-for="(feature, index) in features"
          :key="index"
          animation="fade-up"
          :delay="index * 150"
        >
          <FeatureCard :feature="feature" />
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBackgroundParallax, useFadeInOnScroll } from '@/composables/useParallax';
import AnimatedCard from '@/components/ui/AnimatedCard.vue';

const { bgRef } = useBackgroundParallax(0.3);
const { elementRef: headerRef } = useFadeInOnScroll(0.2);

const features = [
  { title: 'Feature 1', description: 'Description' },
  { title: 'Feature 2', description: 'Description' },
  { title: 'Feature 3', description: 'Description' },
];
</script>
```

## 🎭 Clases CSS Disponibles

### Fade In Element

```css
.fade-in-element {
  @apply opacity-0 translate-y-12 transition-all duration-1000 ease-out;
}

.fade-in-element.fade-in-active {
  @apply opacity-100 translate-y-0;
}
```

### Animaciones Personalizadas

```css
/* Gradiente animado de fondo */
.animated-gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## ⚡ Best Practices

### 1. Performance

- Usa `will-change-transform` para elementos con parallax
- Limita el número de elementos con parallax en una misma página
- Prefiere `transform` sobre `top/left` para animaciones

```css
.parallax-element {
  @apply will-change-transform;
  /* Mejor que usar will-change: opacity, transform; */
}
```

### 2. Velocidades Recomendadas

- **Hero backgrounds**: 0.4 - 0.6
- **Section backgrounds**: 0.2 - 0.4
- **Decorative elements**: 0.6 - 0.8

### 3. Thresholds para Fade In

- **Headers**: 0.2 - 0.3
- **Content blocks**: 0.1 - 0.2
- **Cards/grids**: 0.1

### 4. Delays Secuenciales

Para elementos en lista, usa delays incrementales:

```typescript
// Mal - Todos aparecen a la vez
:style="{ transitionDelay: '0ms' }"

// Bien - Aparecen secuencialmente
:style="{ transitionDelay: `${index * 100}ms` }"
```

## 🎨 Paleta de Efectos por Sección

### Hero
- ✅ Parallax de fondo (speed: 0.5)
- ✅ Overlay con gradiente
- ✅ Fade in del contenido

### Trust Badges / Features
- ✅ Fade in secuencial con delays
- ✅ Transform (translate-y)

### Services / Products
- ✅ Fondo animado sutil
- ✅ Fade in del grid
- ✅ Hover effects en cards

### Testimonials
- ✅ Scale on scroll
- ✅ Fade in individual

### CTA Sections
- ✅ Parallax de fondo
- ✅ Fade in con scale

## 🚫 Evitar

1. **No uses parallax en mobile** (opcional, causa lag)
2. **No abuses de los efectos** - La seriedad viene de la sutileza
3. **No uses velocidades muy altas** - Máximo 0.8
4. **No animes demasiados elementos a la vez**

## 🔧 Desactivar en Mobile (Opcional)

Si quieres desactivar parallax en dispositivos móviles:

```typescript
import { useBackgroundParallax } from '@/composables/useParallax';
import { computed } from 'vue';

const isMobile = computed(() => window.innerWidth < 768);
const speed = computed(() => isMobile.value ? 0 : 0.5);

const { bgRef } = useBackgroundParallax(speed.value);
```

## 📱 Responsive

Los efectos están optimizados para todos los dispositivos:

- Desktop: Todos los efectos activos
- Tablet: Efectos con velocidades reducidas
- Mobile: Efectos sutiles, parallax opcional

## 🎯 Resultado Final

Con estos efectos lograrás:

- ✅ **Profesionalismo**: Animaciones suaves y elegantes
- ✅ **Seriedad**: Efectos sutiles que no distraen
- ✅ **Modernidad**: Look & feel actualizado
- ✅ **Performance**: Optimizado para todos los dispositivos
- ✅ **UX**: Experiencia fluida y agradable

---

**Recuerda**: La clave está en la **sutileza**. Los efectos deben complementar el contenido, no competir con él.




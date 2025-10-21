import { onMounted, onUnmounted, ref } from 'vue';

export function useParallax(speed: number = 0.5) {
  const parallaxRef = ref<HTMLElement | null>(null);

  const handleScroll = () => {
    if (!parallaxRef.value) return;

    const scrolled = window.pageYOffset;
    const rect = parallaxRef.value.getBoundingClientRect();
    const elementTop = rect.top + scrolled;
    const elementHeight = rect.height;

    // Solo aplicar parallax si el elemento está en viewport
    if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
      const yPos = -(scrolled - elementTop) * speed;
      parallaxRef.value.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    parallaxRef,
  };
}

// Parallax para elementos de fondo
export function useBackgroundParallax(speed: number = 0.3) {
  const bgRef = ref<HTMLElement | null>(null);

  const handleScroll = () => {
    if (!bgRef.value) return;

    const scrolled = window.pageYOffset;
    const rect = bgRef.value.getBoundingClientRect();
    const elementTop = rect.top + scrolled;

    if (scrolled + window.innerHeight > elementTop) {
      const yPos = (scrolled - elementTop) * speed;
      bgRef.value.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    bgRef,
  };
}

// Fade in on scroll
export function useFadeInOnScroll(threshold: number = 0.1) {
  const elementRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (!elementRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
          }
        });
      },
      { threshold }
    );

    observer.observe(elementRef.value);

    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return {
    elementRef,
  };
}

// Scale on scroll
export function useScaleOnScroll() {
  const scaleRef = ref<HTMLElement | null>(null);

  const handleScroll = () => {
    if (!scaleRef.value) return;

    const rect = scaleRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calcular el progreso del scroll (0 a 1)
    const progress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));

    // Escala sutil de 0.95 a 1
    const scale = 0.95 + progress * 0.05;
    const opacity = 0.5 + progress * 0.5;

    scaleRef.value.style.transform = `scale(${scale})`;
    scaleRef.value.style.opacity = opacity.toString();
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    scaleRef,
  };
}




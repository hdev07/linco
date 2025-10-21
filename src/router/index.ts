import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Inicio',
      },
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServiciosView.vue'),
      meta: {
        title: 'Servicios',
      },
    },
    {
      path: '/servicios/:slug',
      name: 'servicio-detalle',
      component: () => import('../views/ServicioDetalleView.vue'),
      meta: {
        title: 'Servicio',
      },
    },
    {
      path: '/paquetes',
      name: 'paquetes',
      component: () => import('../views/PaquetesView.vue'),
      meta: {
        title: 'Paquetes',
      },
    },
    {
      path: '/paquetes/:slug',
      name: 'paquete-detalle',
      component: () => import('../views/PaqueteDetalleView.vue'),
      meta: {
        title: 'Paquete',
      },
    },
    {
      path: '/equipos',
      name: 'catalogo-equipos',
      component: () => import('../views/CatalogoEquiposView.vue'),
      meta: {
        title: 'Catálogo de Equipos',
      },
    },
    {
      path: '/equipos/:slug',
      name: 'equipo-detalle',
      component: () => import('../views/EquipoDetalleView.vue'),
      meta: {
        title: 'Equipo',
      },
    },
    {
      path: '/portafolio',
      name: 'portafolio',
      component: () => import('../views/PortafolioView.vue'),
      meta: {
        title: 'Portafolio',
      },
    },
    {
      path: '/portafolio/:slug',
      name: 'caso-estudio',
      component: () => import('../views/CasoEstudioView.vue'),
      meta: {
        title: 'Caso de Estudio',
      },
    },
    {
      path: '/precios',
      name: 'precios',
      component: () => import('../views/PreciosView.vue'),
      meta: {
        title: 'Precios',
      },
    },
    {
      path: '/cotizar',
      name: 'cotizar',
      component: () => import('../views/CotizadorView.vue'),
      meta: {
        title: 'Cotizar',
      },
    },
    {
      path: '/cotizar/exitoso',
      name: 'cotizador-exitoso',
      component: () => import('../views/CotizadorExitosoView.vue'),
      meta: {
        title: 'Cotización Enviada',
      },
    },
    {
      path: '/disponibilidad',
      name: 'disponibilidad',
      component: () => import('../views/DisponibilidadView.vue'),
      meta: {
        title: 'Disponibilidad',
      },
    },
    {
      path: '/testimonios',
      name: 'testimonios',
      component: () => import('../views/TestimoniosView.vue'),
      meta: {
        title: 'Testimonios',
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue'),
      meta: {
        title: 'Preguntas Frecuentes',
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'Blog',
      },
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
      meta: {
        title: 'Artículo',
      },
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/NosotrosView.vue'),
      meta: {
        title: 'Nosotros',
      },
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
      meta: {
        title: 'Contacto',
      },
    },
    {
      path: '/legal/terminos',
      name: 'terminos',
      component: () => import('../views/legal/TerminosView.vue'),
      meta: {
        title: 'Términos y Condiciones',
      },
    },
    {
      path: '/legal/privacidad',
      name: 'privacidad',
      component: () => import('../views/legal/PrivacidadView.vue'),
      meta: {
        title: 'Política de Privacidad',
      },
    },
    {
      path: '/legal/contrato',
      name: 'contrato',
      component: () => import('../views/legal/ContratoView.vue'),
      meta: {
        title: 'Contrato de Renta',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: '404 - Página no encontrada',
      },
    },
  ],
});

// Set page title
router.afterEach((to) => {
  const baseTitle = 'Linco - Renta de Audio e Iluminación';
  document.title = to.meta.title ? `${to.meta.title} | ${baseTitle}` : baseTitle;
});

export default router;

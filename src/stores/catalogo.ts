import { defineStore } from 'pinia';
import type { Equipo, Paquete, Servicio, FiltroCatalogo } from '@/types';

// Mock data - en producción vendría del CMS
const mockEquipos: Equipo[] = [
  {
    id: 'eq-1',
    slug: 'microfono-shure-sm58',
    nombre: 'Micrófono Shure SM58',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=101'],
    specs: {
      tipo: 'Dinámico',
      respuesta: '50Hz - 15kHz',
      impedancia: '150 Ohms',
      patron: 'Cardioide',
    },
    precioDiario: 500,
    stock: 12,
    tags: ['Shure', 'microfono', 'vocal', 'profesional'],
    descripcion: 'Micrófono vocal dinámico, el estándar de la industria para presentaciones y conferencias.',
  },
  {
    id: 'eq-2',
    slug: 'bocina-jbl-srx815p',
    nombre: 'Bocina JBL SRX815P',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=102'],
    specs: {
      potencia: '2000W',
      spl: '133 dB',
      cobertura: '90° x 50°',
      tipo: 'Activa',
    },
    potenciaW: 2000,
    precioDiario: 3500,
    stock: 8,
    tags: ['JBL', 'bocina', 'activa', 'alta-potencia'],
    descripcion: 'Bocina activa de 15" con alto SPL, ideal para eventos de mediano y gran formato.',
  },
  {
    id: 'eq-3',
    slug: 'pantalla-led-p3-3x2m',
    nombre: 'Pantalla LED P3 3x2m',
    categoria: 'pantalla',
    fotos: ['https://picsum.photos/400/400?random=103'],
    specs: {
      pitch: '3mm',
      resolucion: '1000 x 667 px',
      brillo: '1200 nits',
      dimensiones: '3m x 2m',
    },
    precioDiario: 12000,
    stock: 3,
    tags: ['LED', 'pantalla', 'alta-resolucion', 'indoor'],
    descripcion: 'Pantalla LED de alta resolución para presentaciones corporativas en interiores.',
  },
  {
    id: 'eq-4',
    slug: 'foco-par-led-chauvet',
    nombre: 'Foco PAR LED Chauvet',
    categoria: 'iluminacion',
    fotos: ['https://picsum.photos/400/400?random=104'],
    specs: {
      leds: '12x 10W RGBWA',
      potencia: '120W',
      angulo: '25°',
      control: 'DMX',
    },
    potenciaW: 120,
    precioDiario: 800,
    stock: 24,
    tags: ['Chauvet', 'LED', 'PAR', 'RGBWA', 'iluminacion'],
    descripcion: 'Foco PAR LED de color variable, ideal para iluminación ambiental y escénica.',
  },
];

const mockPaquetes: Paquete[] = [
  {
    id: 'paq-1',
    slug: 'conferencia-100',
    nombre: 'Paquete Conferencia 100',
    descripcion: 'Solución completa para conferencias de hasta 100 personas',
    aforoRecomendado: 100,
    incluye: [
      '2 Bocinas activas JBL',
      '4 Micrófonos inalámbricos',
      'Consola digital 16 canales',
      'Proyector 5000 lúmenes + pantalla 3x2m',
      '8 Focos LED para escenario',
      'Técnico operador',
      'Montaje y desmontaje',
    ],
    noIncluye: ['Transporte fuera de CDMX', 'Horas extras', 'MC/Presentador'],
    precioDesde: 18000,
    equipos: [
      { equipoId: 'eq-2', cantidad: 2 },
      { equipoId: 'eq-1', cantidad: 4 },
      { equipoId: 'eq-4', cantidad: 8 },
    ],
    upsells: ['paq-2', 'paq-3'],
    galeria: ['https://picsum.photos/800/600?random=201', 'https://picsum.photos/800/600?random=202'],
    horasIncluidas: 8,
    destacado: true,
  },
  {
    id: 'paq-2',
    slug: 'gala-posada-200',
    nombre: 'Paquete Gala/Posada 200',
    descripcion: 'Producción completa para eventos sociales corporativos hasta 200 personas',
    aforoRecomendado: 200,
    incluye: [
      '4 Bocinas de línea',
      '6 Micrófonos (4 inalámbricos + 2 de solapa)',
      'Sistema de iluminación LED (20 focos)',
      'Pantalla LED 4x3m',
      'DJ + MC',
      '2 Técnicos',
      'Montaje y desmontaje',
    ],
    precioDesde: 35000,
    equipos: [
      { equipoId: 'eq-2', cantidad: 4 },
      { equipoId: 'eq-1', cantidad: 6 },
      { equipoId: 'eq-4', cantidad: 20 },
      { equipoId: 'eq-3', cantidad: 1 },
    ],
    galeria: ['https://picsum.photos/800/600?random=203', 'https://picsum.photos/800/600?random=204'],
    horasIncluidas: 10,
  },
  {
    id: 'paq-3',
    slug: 'hibrido-streaming',
    nombre: 'Paquete Híbrido + Streaming',
    descripcion: 'Evento presencial con transmisión en vivo profesional',
    aforoRecomendado: 150,
    incluye: [
      'Audio profesional completo',
      'Sistema de iluminación',
      '3 Cámaras Full HD',
      'Switcher de video',
      'Streaming encoder',
      'Pantalla LED para presencial',
      'Gráficos y overlays',
      '3 Técnicos',
    ],
    precioDesde: 45000,
    equipos: [
      { equipoId: 'eq-2', cantidad: 3 },
      { equipoId: 'eq-1', cantidad: 5 },
      { equipoId: 'eq-4', cantidad: 16 },
      { equipoId: 'eq-3', cantidad: 1 },
    ],
    galeria: ['https://picsum.photos/800/600?random=205'],
    horasIncluidas: 8,
  },
];

const mockServicios: Servicio[] = [
  {
    id: 'srv-1',
    slug: 'audio-profesional',
    titulo: 'Audio Profesional',
    resumen: 'Sistemas de audio de alta fidelidad para cualquier tipo de evento corporativo',
    beneficios: [
      'Claridad cristalina para conferencias',
      'Cobertura uniforme en todo el venue',
      'Equipos de marcas líderes (JBL, Shure, Yamaha)',
      'Técnico especializado incluido',
    ],
    loIncluye:
      'Bocinas, micrófonos, consola, procesamiento digital, cableado, montaje y técnico operador',
    imagenes: ['https://picsum.photos/800/600?random=301', 'https://picsum.photos/800/600?random=302'],
    precioBase: 8000,
    ctaTarget: '/cotizar?servicio=audio',
    icono: 'volume-2',
  },
  {
    id: 'srv-2',
    slug: 'iluminacion-escenica',
    titulo: 'Iluminación Escénica',
    resumen: 'Iluminación profesional que eleva tu marca y crea el ambiente perfecto',
    beneficios: [
      'Diseño de iluminación personalizado',
      'Tecnología LED de última generación',
      'Control DMX profesional',
      'Efectos dinámicos y ambientales',
    ],
    loIncluye:
      'Focos LED, moving heads, barras, control DMX, programación, montaje en truss y técnico',
    imagenes: ['https://picsum.photos/800/600?random=303', 'https://picsum.photos/800/600?random=304'],
    precioBase: 6000,
    ctaTarget: '/cotizar?servicio=iluminacion',
    icono: 'lightbulb',
  },
  {
    id: 'srv-3',
    slug: 'pantallas-proyeccion',
    titulo: 'Pantallas LED y Proyección',
    resumen: 'Pantallas LED de alta resolución y proyección Full HD para presentaciones impactantes',
    beneficios: [
      'Pantallas LED desde P2.6 (alta resolución)',
      'Proyectores de 5,000 a 12,000 lúmenes',
      'Tamaños personalizados',
      'Procesamiento de video profesional',
    ],
    loIncluye: 'Pantalla LED o proyector, pantalla de proyección, procesador, técnico de video',
    imagenes: ['https://picsum.photos/800/600?random=305'],
    precioBase: 10000,
    ctaTarget: '/cotizar?servicio=pantallas',
    icono: 'monitor',
  },
  {
    id: 'srv-4',
    slug: 'maestro-ceremonias',
    titulo: 'Maestro de Ceremonias',
    resumen: 'Conducción profesional para que tu evento fluya sin contratiempos',
    beneficios: [
      'Presentadores profesionales bilingües',
      'Experiencia en eventos corporativos',
      'Adaptación al protocolo de tu empresa',
      'Manejo de contingencias',
    ],
    loIncluye: 'MC profesional, coordinación previa, guion (si se requiere)',
    imagenes: ['https://picsum.photos/800/600?random=306'],
    precioBase: 5000,
    ctaTarget: '/cotizar?servicio=mc',
    icono: 'mic',
  },
];

export const useCatalogoStore = defineStore('catalogo', {
  state: () => ({
    equipos: mockEquipos,
    paquetes: mockPaquetes,
    servicios: mockServicios,
    filtro: {
      categoria: undefined,
      busqueda: '',
      tags: [],
      precioMin: undefined,
      precioMax: undefined,
      disponible: undefined,
    } as FiltroCatalogo,
  }),

  getters: {
    equiposFiltrados: (state) => {
      return state.equipos.filter((equipo) => {
        if (state.filtro.categoria && equipo.categoria !== state.filtro.categoria) {
          return false;
        }
        if (state.filtro.busqueda) {
          const search = state.filtro.busqueda.toLowerCase();
          if (
            !equipo.nombre.toLowerCase().includes(search) &&
            !equipo.tags.some((tag) => tag.toLowerCase().includes(search))
          ) {
            return false;
          }
        }
        if (state.filtro.tags && state.filtro.tags.length > 0) {
          if (!state.filtro.tags.some((tag) => equipo.tags.includes(tag))) {
            return false;
          }
        }
        if (state.filtro.precioMin && equipo.precioDiario < state.filtro.precioMin) {
          return false;
        }
        if (state.filtro.precioMax && equipo.precioDiario > state.filtro.precioMax) {
          return false;
        }
        if (state.filtro.disponible && equipo.stock === 0) {
          return false;
        }
        return true;
      });
    },

    equipoById: (state) => {
      return (id: string) => state.equipos.find((e) => e.id === id);
    },

    equipoBySlug: (state) => {
      return (slug: string) => state.equipos.find((e) => e.slug === slug);
    },

    paqueteById: (state) => {
      return (id: string) => state.paquetes.find((p) => p.id === id);
    },

    paqueteBySlug: (state) => {
      return (slug: string) => state.paquetes.find((p) => p.slug === slug);
    },

    servicioById: (state) => {
      return (id: string) => state.servicios.find((s) => s.id === id);
    },

    servicioBySlug: (state) => {
      return (slug: string) => state.servicios.find((s) => s.slug === slug);
    },

    paquetesDestacados: (state) => {
      return state.paquetes.filter((p) => p.destacado);
    },

    allTags: (state) => {
      const tags = new Set<string>();
      state.equipos.forEach((equipo) => {
        equipo.tags.forEach((tag) => tags.add(tag));
      });
      return Array.from(tags).sort();
    },
  },

  actions: {
    setFiltro(filtro: Partial<FiltroCatalogo>) {
      this.filtro = { ...this.filtro, ...filtro };
    },

    resetFiltro() {
      this.filtro = {
        categoria: undefined,
        busqueda: '',
        tags: [],
        precioMin: undefined,
        precioMax: undefined,
        disponible: undefined,
      };
    },

    // Simular carga de datos del CMS
    async fetchEquipos() {
      // En producción, esto haría fetch al CMS
      return Promise.resolve(this.equipos);
    },

    async fetchPaquetes() {
      return Promise.resolve(this.paquetes);
    },

    async fetchServicios() {
      return Promise.resolve(this.servicios);
    },
  },
});




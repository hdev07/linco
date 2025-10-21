import { defineStore } from 'pinia';
import type { Equipo, Paquete, Servicio, FiltroCatalogo } from '@/types';

// Mock data - en producción vendría del CMS
const mockEquipos: Equipo[] = [
  {
    id: 'eq-1',
    slug: 'consola-yamaha-mg16xu',
    nombre: 'Consola Yamaha MG16XU',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=101'],
    specs: {
      canales: '16',
      efectos: 'SPX Digital Reverb/Delay',
      interface: 'USB Audio',
      eq: '3-band EQ',
    },
    precioDiario: 2500,
    stock: 6,
    tags: ['Yamaha', 'consola', 'mixer', 'digital', 'profesional'],
    descripcion: 'Consola de mezcla profesional de 16 canales con efectos digitales integrados y interface USB.',
  },
  {
    id: 'eq-2',
    slug: 'bocina-qrx-audio-k12',
    nombre: 'Bocina QRX Audio K12',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=102'],
    specs: {
      potencia: '2000W',
      spl: '131 dB',
      cobertura: '90° x 60°',
      tipo: 'Activa',
    },
    potenciaW: 2000,
    precioDiario: 3200,
    stock: 10,
    tags: ['QRX Audio', 'bocina', 'activa', 'alta-potencia'],
    descripcion: 'Bocina activa de 12" con alto SPL, ideal para eventos de mediano y gran formato.',
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
    slug: 'foco-par-led-cym-pro',
    nombre: 'Foco PAR LED CYM Pro Led',
    categoria: 'iluminacion',
    fotos: ['https://picsum.photos/400/400?random=104'],
    specs: {
      leds: '18x 10W RGBWA+UV',
      potencia: '180W',
      angulo: '25°',
      control: 'DMX 512',
    },
    potenciaW: 180,
    precioDiario: 900,
    stock: 20,
    tags: ['CYM Pro Led', 'LED', 'PAR', 'RGBWA', 'iluminacion'],
    descripcion: 'Foco PAR LED de color variable con UV, ideal para iluminación ambiental y escénica.',
  },
  {
    id: 'eq-5',
    slug: 'procesador-dbx-driverack-pa2',
    nombre: 'Procesador dbx DriveRack PA2',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=105'],
    specs: {
      entradas: '2 XLR',
      salidas: '6 XLR',
      procesamiento: 'DSP Digital',
      funciones: 'EQ, Crossover, Limiter',
    },
    precioDiario: 1800,
    stock: 4,
    tags: ['dbx by Harman', 'procesador', 'DSP', 'sistema-audio'],
    descripcion: 'Procesador de sistema de audio profesional con DSP digital, EQ paramétrico y crossover.',
  },
  {
    id: 'eq-6',
    slug: 'controladora-pioneer-xdj-xz',
    nombre: 'Controladora Pioneer DJ XDJ-XZ',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=106'],
    specs: {
      canales: '4',
      pantalla: '10.1" Touchscreen',
      efectos: 'Beat FX',
      conectividad: 'USB, LAN',
    },
    precioDiario: 4500,
    stock: 2,
    tags: ['Pioneer DJ', 'controladora', 'DJ', 'eventos'],
    descripcion: 'Controladora DJ profesional todo-en-uno con pantallas táctiles y efectos integrados.',
  },
  {
    id: 'eq-7',
    slug: 'tornamesa-technics-sl1200mk7',
    nombre: 'Tornamesa Technics SL-1200MK7',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=107'],
    specs: {
      tipo: 'Direct Drive',
      rpm: '33/45',
      torque: 'Alto',
      salida: 'RCA',
    },
    precioDiario: 3000,
    stock: 4,
    tags: ['AlphaTheta', 'tornamesa', 'DJ', 'vinilo'],
    descripcion: 'Tornamesa profesional de tracción directa, el estándar de la industria para DJ.',
  },
  {
    id: 'eq-8',
    slug: 'woofer-eighteen-sound-18nlw9601',
    nombre: 'Woofer 18" Eighteen Sound',
    categoria: 'audio',
    fotos: ['https://picsum.photos/400/400?random=108'],
    specs: {
      tamano: '18 pulgadas',
      potencia: '1200W RMS',
      impedancia: '8 Ohms',
      sensibilidad: '99 dB',
    },
    potenciaW: 1200,
    precioDiario: 2800,
    stock: 6,
    tags: ['18 Eighteen Sound', 'woofer', 'subwoofer', 'componente'],
    descripcion: 'Componente de audio profesional de 18" para sistemas de refuerzo de graves de alta calidad.',
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
      '2 Bocinas activas QRX Audio K12',
      'Consola Yamaha MG16XU (16 canales)',
      'Procesador dbx DriveRack PA2',
      '4 Micrófonos inalámbricos',
      'Proyector 5000 lúmenes + pantalla 3x2m',
      '8 Focos LED CYM Pro Led',
      'Técnico operador certificado',
      'Montaje y desmontaje',
    ],
    noIncluye: ['Transporte fuera de CDMX', 'Horas extras', 'MC/Presentador'],
    precioDesde: 18000,
    equipos: [
      { equipoId: 'eq-2', cantidad: 2 },
      { equipoId: 'eq-1', cantidad: 1 },
      { equipoId: 'eq-5', cantidad: 1 },
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
      '4 Bocinas QRX Audio + Subwoofers 18 Sound',
      'Consola Yamaha + Procesador dbx',
      '6 Micrófonos profesionales',
      'Sistema de iluminación LED CYM Pro (20 focos)',
      'Pantalla LED 4x3m',
      'Controladora Pioneer DJ XDJ-XZ',
      'DJ + MC',
      '2 Técnicos certificados',
      'Montaje y desmontaje',
    ],
    precioDesde: 35000,
    equipos: [
      { equipoId: 'eq-2', cantidad: 4 },
      { equipoId: 'eq-8', cantidad: 2 },
      { equipoId: 'eq-1', cantidad: 1 },
      { equipoId: 'eq-5', cantidad: 1 },
      { equipoId: 'eq-4', cantidad: 20 },
      { equipoId: 'eq-3', cantidad: 1 },
      { equipoId: 'eq-6', cantidad: 1 },
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
      'Sistema de audio QRX + Yamaha + dbx',
      'Sistema de iluminación CYM Pro Led',
      '3 Cámaras Full HD',
      'Switcher de video profesional',
      'Streaming encoder',
      'Pantalla LED 3x2m para presencial',
      'Gráficos y overlays personalizados',
      '3 Técnicos especializados',
    ],
    precioDesde: 45000,
    equipos: [
      { equipoId: 'eq-2', cantidad: 3 },
      { equipoId: 'eq-1', cantidad: 1 },
      { equipoId: 'eq-5', cantidad: 1 },
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
      'Equipos de marcas líderes (Yamaha, QRX Audio, dbx by Harman)',
      'Técnico especializado incluido',
    ],
    loIncluye:
      'Bocinas QRX Audio, micrófonos, consola Yamaha, procesamiento dbx, cableado profesional, montaje y técnico operador certificado',
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
      'Tecnología LED CYM Pro de última generación',
      'Control DMX 512 profesional',
      'Efectos dinámicos y ambientales',
    ],
    loIncluye:
      'Focos LED CYM Pro, moving heads, barras LED, control DMX, programación personalizada, montaje en truss y técnico',
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




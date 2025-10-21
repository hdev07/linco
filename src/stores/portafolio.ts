import { defineStore } from 'pinia';
import type { CasoEstudio } from '@/types';

export const usePortafolioStore = defineStore('portafolio', {
  state: () => ({
    casos: [
      {
        id: '1',
        slug: 'conferencia-tech-corp',
        cliente: 'Tech Corp',
        industria: 'Tecnología',
        tipoEvento: 'conferencia',
        aforo: 200,
        objetivo: 'Conferencia anual para colaboradores',
        solucion: 'Audio profesional, iluminación LED y pantallas de 4x3m',
        listaEquipo: ['2 Bocinas JBL', '4 Micrófonos Shure', 'Pantalla LED'],
        fotos: ['https://picsum.photos/800/600?random=401'],
        resultado: 'Evento exitoso con excelente retroalimentación',
        fecha: '2024-10-15',
        sede: 'CDMX',
      },
      {
        id: '2',
        slug: 'gala-innovate',
        cliente: 'Innovate SA',
        industria: 'Corporativo',
        tipoEvento: 'gala',
        aforo: 150,
        objetivo: 'Gala de aniversario',
        solucion: 'Producción completa con iluminación ambiental y DJ',
        listaEquipo: ['4 Bocinas', '20 Focos LED', 'DJ + MC'],
        fotos: ['https://picsum.photos/800/600?random=402'],
        resultado: 'Excelente ambiente y producción',
        fecha: '2024-09-20',
        sede: 'CDMX',
      },
      {
        id: '3',
        slug: 'lanzamiento-producto-xyz',
        cliente: 'Producto XYZ',
        industria: 'Retail',
        tipoEvento: 'lanzamiento',
        aforo: 100,
        objetivo: 'Lanzamiento de nuevo producto',
        solucion: 'Iluminación especial y pantallas para video',
        listaEquipo: ['Pantallas LED', 'Moving heads', 'Audio'],
        fotos: ['https://picsum.photos/800/600?random=403'],
        resultado: 'Lanzamiento impactante',
        fecha: '2024-08-10',
        sede: 'Estado de México',
      },
    ] as CasoEstudio[],
  }),

  getters: {
    getCasoBySlug: (state) => (slug: string) => {
      return state.casos.find((caso) => caso.slug === slug);
    },

    getCasosByTipo: (state) => (tipo: string) => {
      if (tipo === 'Todos') return state.casos;
      return state.casos.filter((caso) => caso.tipoEvento === tipo.toLowerCase());
    },
  },
});


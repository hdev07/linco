import { defineStore } from 'pinia';
import type { LeadCotizacion, CotizadorState } from '@/types';
import { useCatalogoStore } from './catalogo';

export const useCotizadorStore = defineStore('cotizador', {
  state: (): CotizadorState => ({
    step: 1,
    data: {
      tipoEvento: 'conferencia',
      aforo: 50,
      fecha: '',
      horaInicio: '',
      horaFin: '',
      direccion: '',
      ciudad: 'Ciudad de México',
      cp: '',
      seleccion: {
        paquetes: [],
        equipos: [],
        extras: [],
      },
      nombre: '',
      email: '',
      telefono: '',
      metodoContacto: 'whatsapp',
      aceptoTerminos: false,
    },
    precioEstimado: 0,
    disponibilidad: true,
  }),

  getters: {
    isStepValid: (state) => {
      switch (state.step) {
        case 1:
          return !!(state.data.tipoEvento && state.data.aforo > 0);
        case 2:
          return !!(state.data.fecha && state.data.horaInicio && state.data.horaFin);
        case 3:
          return !!(state.data.direccion && state.data.ciudad && state.data.cp);
        case 4:
          return (
            state.data.seleccion?.paquetes.length > 0 ||
            state.data.seleccion?.equipos.length > 0
          );
        case 5:
          return !!(
            state.data.nombre &&
            state.data.email &&
            state.data.telefono &&
            state.data.aceptoTerminos
          );
        default:
          return false;
      }
    },

    totalSteps: () => 6, // Incluyendo el resumen

    progressPercentage: (state) => {
      return Math.round((state.step / 6) * 100);
    },
  },

  actions: {
    nextStep() {
      if (this.step < 6) {
        this.step++;
      }
    },

    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },

    goToStep(step: number) {
      if (step >= 1 && step <= 6) {
        this.step = step;
      }
    },

    updateData(data: Partial<LeadCotizacion>) {
      this.data = { ...this.data, ...data };
      this.calculatePrecio();
    },

    calculatePrecio() {
      // Lógica de cálculo de precio
      let total = 0;
      const catalogoStore = useCatalogoStore();

      // Precio base por paquetes (usando precios reales del catálogo)
      if (this.data.seleccion?.paquetes.length) {
        this.data.seleccion.paquetes.forEach(paqueteId => {
          const paquete = catalogoStore.paqueteById(paqueteId);
          if (paquete) {
            total += paquete.precioDesde;
          }
        });
      }

      // Precio por equipos individuales (usando precios reales del catálogo)
      if (this.data.seleccion?.equipos.length) {
        total += this.data.seleccion.equipos.reduce((sum, eq) => {
          const equipo = catalogoStore.equipoById(eq.equipoId);
          if (equipo) {
            return sum + (eq.cantidad * equipo.precioDiario);
          }
          return sum;
        }, 0);
      }

      // Extras (precio estimado por tipo de extra)
      if (this.data.seleccion?.extras.length) {
        this.data.seleccion.extras.forEach(extra => {
          // Precios diferenciados por tipo de extra
          if (extra.includes('Grabación') || extra.includes('Streaming')) {
            total += 5000;
          } else if (extra.includes('DJ') || extra.includes('Música')) {
            total += 4000;
          } else if (extra.includes('Fotógrafo')) {
            total += 3500;
          } else if (extra.includes('Backdrop')) {
            total += 2500;
          } else if (extra.includes('Luces ambientales')) {
            total += 3000;
          } else {
            total += 1500; // Precio por defecto
          }
        });
      }

      // Ajuste por aforo (solo si no hay paquetes seleccionados)
      if (!this.data.seleccion?.paquetes.length && this.data.aforo) {
        if (this.data.aforo > 200) {
          total *= 1.3;
        } else if (this.data.aforo > 100) {
          total *= 1.15;
        }
      }

      // Ajuste por duración (si hay más de 8 horas)
      if (this.data.horaInicio && this.data.horaFin) {
        const inicio = parseInt(this.data.horaInicio.split(':')[0]);
        const fin = parseInt(this.data.horaFin.split(':')[0]);
        const duracion = fin - inicio;
        if (duracion > 8) {
          total += (duracion - 8) * 1000; // $1,000 por hora extra
        }
      }

      this.precioEstimado = Math.round(total);
    },

    async checkDisponibilidad() {
      // Simulación de verificación de disponibilidad
      // En producción, esto haría una llamada a la API
      return new Promise<boolean>((resolve) => {
        setTimeout(() => {
          this.disponibilidad = Math.random() > 0.2; // 80% de probabilidad de estar disponible
          resolve(this.disponibilidad);
        }, 500);
      });
    },

    async submitCotizacion() {
      const cotizacion: LeadCotizacion = {
        ...this.data,
        id: `COT-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: 'lead',
        precioEstimado: this.precioEstimado,
      } as LeadCotizacion;

      // Aquí se enviaría a la API
      console.log('Cotización enviada:', cotizacion);

      // Simular envío
      return new Promise<{ success: boolean; id: string }>((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            id: cotizacion.id!,
          });
        }, 1000);
      });
    },

    reset() {
      this.$reset();
    },

    addEquipo(equipoId: string, cantidad: number = 1) {
      if (!this.data.seleccion) {
        this.data.seleccion = { paquetes: [], equipos: [], extras: [] };
      }
      const existing = this.data.seleccion.equipos.find((e) => e.equipoId === equipoId);
      if (existing) {
        existing.cantidad += cantidad;
      } else {
        this.data.seleccion.equipos.push({ equipoId, cantidad });
      }
      this.calculatePrecio();
    },

    removeEquipo(equipoId: string) {
      if (this.data.seleccion) {
        this.data.seleccion.equipos = this.data.seleccion.equipos.filter(
          (e) => e.equipoId !== equipoId
        );
        this.calculatePrecio();
      }
    },

    addPaquete(paqueteId: string) {
      if (!this.data.seleccion) {
        this.data.seleccion = { paquetes: [], equipos: [], extras: [] };
      }
      if (!this.data.seleccion.paquetes.includes(paqueteId)) {
        this.data.seleccion.paquetes.push(paqueteId);
        this.calculatePrecio();
      }
    },

    removePaquete(paqueteId: string) {
      if (this.data.seleccion) {
        this.data.seleccion.paquetes = this.data.seleccion.paquetes.filter(
          (p) => p !== paqueteId
        );
        this.calculatePrecio();
      }
    },

    toggleExtra(extra: string) {
      if (!this.data.seleccion) {
        this.data.seleccion = { paquetes: [], equipos: [], extras: [] };
      }
      const index = this.data.seleccion.extras.indexOf(extra);
      if (index > -1) {
        this.data.seleccion.extras.splice(index, 1);
      } else {
        this.data.seleccion.extras.push(extra);
      }
      this.calculatePrecio();
    },
  },
});



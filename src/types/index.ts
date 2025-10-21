// Tipos principales del sistema de renta

export type CategoriaEquipo = 'audio' | 'iluminacion' | 'pantalla' | 'escenario' | 'streaming';
export type TipoEvento = 'conferencia' | 'expo' | 'gala' | 'posada' | 'lanzamiento' | 'hibrido' | 'otro';
export type MetodoContacto = 'whatsapp' | 'telefono' | 'email';
export type StatusEvento = 'lead' | 'cotizado' | 'firmado' | 'cerrado' | 'cancelado';

export interface Equipo {
  id: string;
  slug: string;
  nombre: string;
  categoria: CategoriaEquipo;
  fotos: string[];
  specs: Record<string, string | number>;
  potenciaW?: number;
  precioDiario: number;
  stock: number;
  tags: string[];
  accesorios?: string[];
  requerimientosElectricos?: string;
  descripcion?: string;
}

export interface Paquete {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  aforoRecomendado: number;
  incluye: string[];
  noIncluye?: string[];
  precioDesde: number;
  equipos: { equipoId: string; cantidad: number }[];
  upsells?: string[];
  galeria: string[];
  horasIncluidas: number;
  destacado?: boolean;
}

export interface Servicio {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  beneficios: string[];
  loIncluye: string;
  imagenes: string[];
  precioBase: number;
  ctaTarget: string;
  icono?: string;
}

export interface CasoEstudio {
  id: string;
  slug: string;
  cliente: string;
  industria: string;
  tipoEvento: TipoEvento;
  aforo?: number;
  objetivo: string;
  solucion: string;
  listaEquipo: string[];
  fotos: string[];
  video?: string;
  resultado: string;
  testimonial?: Testimonial;
  fecha: string;
  sede?: string;
}

export interface Testimonial {
  id: string;
  autor: string;
  rol: string;
  empresa: string;
  cita: string;
  rating: number;
  foto?: string;
  casoRelacionado?: string;
}

export interface FAQ {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: string;
  orden?: number;
}

export interface LeadCotizacion {
  id?: string;
  // Datos del evento
  tipoEvento: TipoEvento;
  nombreEvento?: string;
  aforo: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;

  // Ubicación
  direccion: string;
  colonia?: string;
  ciudad: string;
  cp: string;
  nivel?: string;
  accesos?: string[];

  // Selección de servicios
  seleccion: {
    paquetes: string[];
    equipos: { equipoId: string; cantidad: number }[];
    extras: string[];
  };

  // Datos de contacto
  nombre: string;
  empresa?: string;
  email: string;
  telefono: string;
  metodoContacto: MetodoContacto;

  // Adicional
  presupuesto?: number;
  notas?: string;
  adjuntos?: string[];
  aceptoTerminos: boolean;

  // Sistema
  createdAt?: string;
  status?: StatusEvento;
  precioEstimado?: number;
}

export interface EventoInterno {
  id: string;
  fecha: string;
  cliente: string;
  status: StatusEvento;
  items: { equipoId: string; cantidad: number }[];
  tecnicosAsignados?: string[];
  direccion: string;
  horaInicio: string;
  horaFin: string;
  enlaces?: {
    calendar?: string;
    drive?: string;
  };
  notas?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titulo: string;
  extracto: string;
  portada: string;
  contenido: string;
  keywords: string[];
  autor?: string;
  fechaPublicacion: string;
  categoria?: string;
  readTime?: string;
  ctaTitle?: string;
  ctaText?: string;
}

export interface ContactoForm {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  aceptoPrivacidad: boolean;
}

export interface TestimonialForm {
  nombre: string;
  empresa: string;
  proyecto: string;
  calificacion: number;
  comentario: string;
  consentimientoUso: boolean;
}

// Utilidades para el cotizador
export interface CotizadorState {
  step: number;
  data: Partial<LeadCotizacion>;
  precioEstimado: number;
  disponibilidad: boolean;
}

export interface FiltroCatalogo {
  categoria?: CategoriaEquipo;
  busqueda?: string;
  tags?: string[];
  precioMin?: number;
  precioMax?: number;
  disponible?: boolean;
}



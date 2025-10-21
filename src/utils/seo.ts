// SEO Utilities and Helpers

export const seoConfig = {
  siteName: 'Linco - Renta de Audio e Iluminación',
  description:
    'Renta de equipo profesional de audio, iluminación, pantallas LED y MC para eventos corporativos en CDMX y Estado de México. +500 eventos exitosos.',
  keywords: [
    'renta de audio',
    'renta de iluminación',
    'pantallas LED',
    'eventos corporativos',
    'audio profesional CDMX',
    'producción audiovisual',
    'maestro de ceremonias',
    'conferencias',
    'eventos empresariales',
  ],
  author: 'Linco',
  twitterHandle: '@linco_eventos',
  fbAppId: '',
};

export function generatePageTitle(title: string): string {
  return `${title} | ${seoConfig.siteName}`;
}

export function generateOgImage(title: string, description?: string): string {
  // In production, use a service like Vercel OG or generate actual images
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://tudominio.com';
  return `${baseUrl}/og-images/default.jpg`;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Linco',
    url: import.meta.env.VITE_BASE_URL || 'https://tudominio.com',
    logo: `${import.meta.env.VITE_BASE_URL}/logo.png`,
    description: seoConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-55-1234-5678',
      contactType: 'customer service',
      areaServed: 'MX',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/linco',
      'https://www.instagram.com/linco',
      'https://www.linkedin.com/company/linco',
    ],
  };
}

// Sitemap generator helper
export const sitemapRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/servicios', priority: 0.9, changefreq: 'weekly' },
  { path: '/paquetes', priority: 0.9, changefreq: 'weekly' },
  { path: '/equipos', priority: 0.8, changefreq: 'weekly' },
  { path: '/portafolio', priority: 0.8, changefreq: 'monthly' },
  { path: '/precios', priority: 0.9, changefreq: 'weekly' },
  { path: '/cotizar', priority: 1.0, changefreq: 'daily' },
  { path: '/disponibilidad', priority: 0.8, changefreq: 'daily' },
  { path: '/testimonios', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.7, changefreq: 'weekly' },
  { path: '/nosotros', priority: 0.7, changefreq: 'monthly' },
  { path: '/contacto', priority: 0.8, changefreq: 'monthly' },
];




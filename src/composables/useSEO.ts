import { useHead } from '@unhead/vue';

export interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  jsonLd?: Record<string, any>;
}

export function useSEO(config: SEOConfig) {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://tudominio.com';

  const meta: any[] = [
    { name: 'description', content: config.description },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:type', content: config.type || 'website' },
    { property: 'og:url', content: config.url || baseUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
  ];

  if (config.image) {
    meta.push(
      { property: 'og:image', content: config.image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:image', content: config.image }
    );
  }

  if (config.keywords && config.keywords.length > 0) {
    meta.push({ name: 'keywords', content: config.keywords.join(', ') });
  }

  const head: any = {
    title: config.title,
    meta,
  };

  if (config.jsonLd) {
    head.script = [
      {
        type: 'application/ld+json',
        children: JSON.stringify(config.jsonLd),
      },
    ];
  }

  useHead(head);
}

// Schemas JSON-LD predefinidos
export const createLocalBusinessSchema = (data: {
  name: string;
  image: string;
  url: string;
  telephone: string;
  address: {
    street: string;
    locality: string;
    postalCode: string;
  };
  social: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: data.name,
  image: data.image,
  url: data.url,
  telephone: data.telephone,
  areaServed: 'Ciudad de México y Estado de México',
  address: {
    '@type': 'PostalAddress',
    streetAddress: data.address.street,
    addressLocality: data.address.locality,
    postalCode: data.address.postalCode,
    addressCountry: 'MX',
  },
  openingHours: 'Mo-Sa 09:00-20:00',
  sameAs: data.social,
});

export const createFAQSchema = (faqs: { pregunta: string; respuesta: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.respuesta,
    },
  })),
});

export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  availability: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  offers: {
    '@type': 'Offer',
    price: product.price,
    priceCurrency: 'MXN',
    availability: `https://schema.org/${product.availability}`,
  },
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  description: service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: service.provider,
  },
  areaServed: service.areaServed,
});

export const createEventSchema = (event: {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.name,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    '@type': 'Place',
    name: event.location,
  },
  description: event.description,
  ...(event.image && { image: event.image }),
});



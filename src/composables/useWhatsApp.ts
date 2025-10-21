// WhatsApp Integration Helper

export function useWhatsApp() {
  const businessNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5215512345678';

  const createWhatsAppLink = (message: string = '') => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${businessNumber}?text=${encodedMessage}`;
  };

  const sendQuoteViaWhatsApp = (quoteData: {
    nombre: string;
    tipoEvento: string;
    fecha: string;
    aforo: number;
    precioEstimado: number;
  }) => {
    const message = `Hola! Me interesa cotizar mi evento:

📅 Tipo: ${quoteData.tipoEvento}
👥 Aforo: ${quoteData.aforo} personas
📆 Fecha: ${quoteData.fecha}
💰 Estimado: $${quoteData.precioEstimado.toLocaleString('es-MX')} MXN

Mi nombre es ${quoteData.nombre}`;

    const link = createWhatsAppLink(message);
    window.open(link, '_blank');
  };

  const openWhatsAppChat = (customMessage?: string) => {
    const defaultMessage = 'Hola, me interesa obtener información sobre sus servicios';
    const link = createWhatsAppLink(customMessage || defaultMessage);
    window.open(link, '_blank');
  };

  const sendMessage = (message: string) => {
    const link = createWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return {
    businessNumber,
    createWhatsAppLink,
    sendQuoteViaWhatsApp,
    openWhatsAppChat,
    sendMessage,
  };
}



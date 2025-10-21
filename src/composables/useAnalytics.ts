// Google Analytics 4 Integration
// Install: npm install vue-gtag-next

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Mock implementation - replace with actual GA4
export function useAnalytics() {
  const trackEvent = (event: AnalyticsEvent) => {
    // In production, replace with actual GA4 call
    console.log('[Analytics Event]', event);

    // Example with gtag:
    // if (window.gtag) {
    //   window.gtag('event', event.action, {
    //     event_category: event.category,
    //     event_label: event.label,
    //     value: event.value,
    //   });
    // }
  };

  const trackPageView = (path: string, title?: string) => {
    console.log('[Analytics PageView]', { path, title });

    // Example with gtag:
    // if (window.gtag) {
    //   window.gtag('config', 'G-XXXXXXXXXX', {
    //     page_path: path,
    //     page_title: title,
    //   });
    // }
  };

  // Predefined events for common actions
  const trackLeadSubmit = (source: string) => {
    trackEvent({
      action: 'lead_submit',
      category: 'conversion',
      label: source,
    });
  };

  const trackWhatsAppClick = (location: string) => {
    trackEvent({
      action: 'whatsapp_click',
      category: 'engagement',
      label: location,
    });
  };

  const trackCallClick = (location: string) => {
    trackEvent({
      action: 'call_click',
      category: 'engagement',
      label: location,
    });
  };

  const trackQuoteGenerated = (amount: number) => {
    trackEvent({
      action: 'quote_generated',
      category: 'conversion',
      value: amount,
    });
  };

  const trackEquipmentView = (equipmentId: string) => {
    trackEvent({
      action: 'equipment_view',
      category: 'engagement',
      label: equipmentId,
    });
  };

  const trackPackageView = (packageId: string) => {
    trackEvent({
      action: 'package_view',
      category: 'engagement',
      label: packageId,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackLeadSubmit,
    trackWhatsAppClick,
    trackCallClick,
    trackQuoteGenerated,
    trackEquipmentView,
    trackPackageView,
  };
}

// Setup instructions:
// 1. Install vue-gtag-next: npm install vue-gtag-next
// 2. In main.ts, add:
//    import VueGtag from 'vue-gtag-next';
//    app.use(VueGtag, {
//      property: { id: 'G-XXXXXXXXXX' }
//    });
// 3. Uncomment the gtag calls above




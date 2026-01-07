// src/analytics/ga.ts
export const trackPageView = (path: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
  });
};

// src/analytics/ga.js
export const trackPageView = (path) => {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path
  });
};

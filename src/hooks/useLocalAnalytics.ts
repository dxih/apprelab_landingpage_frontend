import { useState } from "react";

export type AnalyticsEvent = {
  type: "pageview" | "click";
  page: string;
  element?: string;
  timestamp: number;
};

export const useLocalAnalytics = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  const trackPageView = (page: string) => {
    setEvents(prev => [...prev, { type: "pageview", page, timestamp: Date.now() }]);
  };

  const trackClick = (page: string, element: string) => {
    setEvents(prev => [...prev, { type: "click", page, element, timestamp: Date.now() }]);
  };

  const getPageViewsByPage = () => {
    return events
      .filter(e => e.type === "pageview")
      .reduce((acc: Record<string, number>, e) => {
        acc[e.page] = (acc[e.page] || 0) + 1;
        return acc;
      }, {});
  };

  const getClicksByElement = () => {
    return events
      .filter(e => e.type === "click")
      .reduce((acc: Record<string, number>, e) => {
        const key = `${e.page} -> ${e.element}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
  };

  return { events, trackPageView, trackClick, getPageViewsByPage, getClicksByElement };
};

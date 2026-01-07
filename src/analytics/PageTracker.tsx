// src/analytics/PageTracker.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './ga';

const PageTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};

export default PageTracker;


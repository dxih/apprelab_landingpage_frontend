import { Box, Container, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PageHeroProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  minHeight?: string | object;
}

const PageHero = ({ title, subtitle, children, minHeight = { xs: '40vh', md: '50vh' } }: PageHeroProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#010A45',
        minHeight: minHeight,
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 10 },
        overflow: 'hidden',
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.02) 0,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 80px
          ),
          repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.04) 0,
            rgba(255,255,255,0.04) 1px,
            transparent 1px,
            transparent 80px
          ),
          radial-gradient(
            600px 300px at 20% 30%,
            rgba(255,255,255,0.12),
            transparent 60%
          ),
          radial-gradient(
            500px 250px at 80% 20%,
            rgba(200,220,255,0.15),
            transparent 65%
          ),
          radial-gradient(
            400px 300px at 70% 80%,
            rgba(255,255,255,0.08),
            transparent 70%
          )
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {(title || subtitle) && (
          <Box sx={{ textAlign: 'center', mb: children ? { xs: 4, md: 6 } : 0 }}>
            {title && (
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: subtitle ? 2 : 0,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#FFFFFF'
                }}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: '#CBD5F5',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.7,
                  px: { xs: 2, md: 0 },
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default PageHero;

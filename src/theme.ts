import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#010A45',        // Dxih primary blue
      light: '#4D5DFF',       // lighter shade for hover, accents
      dark: '#00072A',        // darker shade for contrast
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FDCB07',        // Dxih primary yellow
      light: '#FFE680',
      dark: '#CCA700',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#64748B',
      disabled: '#94A3B8',
    },
    divider: '#E2E8F0',
    error: {
      main: '#EF4444',
      light: '#FCA5A5',
      dark: '#DC2626',
    },
    success: {
      main: '#10B981',
      light: '#6EE7B7',
      dark: '#059669',
    },
    warning: {
      main: '#F59E0B',
      light: '#FCD34D',
      dark: '#D97706',
    },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    
    h1: {
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3.75rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: '#010A45',  // updated headings to Dxih blue
      '@media (max-width:1200px)': { fontSize: '3rem' },
      '@media (max-width:900px)': { fontSize: '2.5rem' },
      '@media (max-width:600px)': { fontSize: '2rem' },
    },

    h2: {
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.25,
      letterSpacing: '-0.015em',
      color: '#010A45',  // Dxih blue
      '@media (max-width:1200px)': { fontSize: '2.25rem' },
      '@media (max-width:900px)': { fontSize: '2rem' },
      '@media (max-width:600px)': { fontSize: '1.75rem' },
    },

    h3: {
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#010A45',  // Dxih blue
      '@media (max-width:900px)': { fontSize: '1.75rem' },
      '@media (max-width:600px)': { fontSize: '1.5rem' },
    },

    h4: {
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.35,
      letterSpacing: '-0.005em',
      color: '#010A45',
      '@media (max-width:600px)': { fontSize: '1.25rem' },
    },

    h5: {
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: '#010A45',
    },

    h6: {
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
      color: '#010A45',
    },

    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.75,
      fontWeight: 500,
      color: '#475569',
    },

    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 500,
      color: '#64748B',
    },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#475569',
    },

    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: '#64748B',
    },

    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },

    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.6,
      color: '#94A3B8',
    },

    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#64748B',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 12,
  },

  // Keep shadows, components, and overrides the same, only updating colors where primary/secondary blue/yellow were used
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { width: '10px' },
          '&::-webkit-scrollbar-track': { background: '#F1F5F9' },
          '&::-webkit-scrollbar-thumb': {
            background: '#CBD5E1',
            borderRadius: '5px',
            '&:hover': { background: '#94A3B8' },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(1, 10, 69, 0.25)', // Dxih blue shadow
          },
          '&:active': { transform: 'translateY(0)' },
        },
        contained: {
          boxShadow: '0 4px 12px rgba(1, 10, 69, 0.2)',
          '&:hover': { boxShadow: '0 8px 24px rgba(1, 10, 69, 0.3)' },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': { borderWidth: '2px', backgroundColor: 'rgba(1, 10, 69, 0.04)' },
        },
        sizeLarge: { padding: '14px 40px', fontSize: '1.125rem' },
        sizeSmall: { padding: '8px 20px', fontSize: '0.875rem' },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: '#FFFFFF',
            '& fieldset': { borderColor: '#E2E8F0', borderWidth: '2px' },
            '&:hover fieldset': { borderColor: '#CBD5E1' },
            '&.Mui-focused fieldset': { borderColor: '#010A45' }, // focused Dxih blue
            '&.Mui-focused': { boxShadow: '0 0 0 4px rgba(1,10,69,0.1)' },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#010A45' },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#010A45',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': { color: '#00072A', textDecoration: 'underline' },
        },
      },
    },
  },
});

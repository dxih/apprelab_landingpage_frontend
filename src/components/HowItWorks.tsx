import { Box, Container, Typography } from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

const steps = [
  {
    icon: <LooksOneIcon sx={{ fontSize: 50, color: '#0057FF' }} />,
    title: 'Sign Up & Learn',
    description: 'Choose from affordable micro-courses',
    color: '#0057FF',
  },
  {
    icon: <LooksTwoIcon sx={{ fontSize: 50, color: '#FFD93D' }} />,
    title: 'Apply Skills',
    description: 'Work on real projects with mentor guidance',
    color: '#FFD93D',
  },
  {
    icon: <Looks3Icon sx={{ fontSize: 50, color: '#0057FF' }} />,
    title: 'Get Paid',
    description: 'Earn while building your portfolio',
    color: '#0057FF',
  },
  {
    icon: <Looks4Icon sx={{ fontSize: 50, color: '#FFD93D' }} />,
    title: 'Get Certified',
    description: 'Receive verified certifications',
    color: '#FFD93D',
  },
];

const HowItWorks = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        position: 'relative',
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontFamily: 'inherit',
              background: 'linear-gradient(135deg, #0057FF 0%, #1A1A1A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3rem' },
            }}
          >
            How apprelab™ Works
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'inherit',
              color: '#64748B',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            Your journey from learning to earning in four simple steps
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 1 },
            position: 'relative',
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                flex: '1 1 calc(25% - 16px)',
                textAlign: 'center',
                position: 'relative',
                minWidth: 220,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  '& .step-circle': {
                    transform: 'scale(1.15) rotate(10deg)',
                    boxShadow: step.color === '#0057FF' 
                      ? '0 16px 40px rgba(0, 87, 255, 0.4)'
                      : '0 16px 40px rgba(255, 217, 61, 0.4)',
                  },
                  '& .step-title': {
                    color: step.color,
                  }
                }
              }}
            >
              {/* Step Circle */}
              <Box
                className="step-circle"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: step.color === '#0057FF'
                    ? 'linear-gradient(135deg, rgba(0, 87, 255, 0.15) 0%, rgba(77, 140, 255, 0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 217, 61, 0.15) 0%, rgba(255, 230, 128, 0.05) 100%)',
                  border: `3px solid ${step.color}`,
                  mb: 3,
                  position: 'relative',
                  boxShadow: step.color === '#0057FF'
                    ? '0 8px 24px rgba(0, 87, 255, 0.2)'
                    : '0 8px 24px rgba(255, 217, 61, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -3,
                    borderRadius: '50%',
                    padding: '3px',
                    background: `linear-gradient(135deg, ${step.color} 0%, transparent 100%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    opacity: 0.3,
                  },
                  '&::after': index < steps.length - 1
                    ? {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '100%',
                        width: 'calc(100% + 32px)',
                        height: '3px',
                        background: `linear-gradient(90deg, ${step.color} 0%, ${steps[index + 1].color} 100%)`,
                        transform: 'translateY(-50%)',
                        opacity: 0.3,
                        '@media(max-width:900px)': {
                          display: 'none',
                        },
                      }
                    : {},
                }}
              >
                {step.icon}
              </Box>

              {/* Step Text */}
              <Typography
                variant="h3"
                className="step-title"
                sx={{
                  mb: 1.5,
                  fontFamily: 'inherit',
                  fontSize: '1.375rem',
                  color: '#1A1A1A',
                  fontWeight: 700,
                  transition: 'color 0.3s ease',
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  fontFamily: 'inherit',
                  color: '#64748B', 
                  lineHeight: 1.7,
                  fontSize: '1rem',
                  px: 1,
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'inherit',
              color: '#475569',
              fontSize: '1.125rem',
              fontWeight: 500,
            }}
          >
            Ready to start your journey?{' '}
            <Box
              component="span"
              sx={{
                color: '#0057FF',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 0.8,
                  textDecoration: 'underline'
                }
              }}
            >
              Join the waitlist today
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
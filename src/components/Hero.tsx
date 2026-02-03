import { 
  Box, 
  Container, 
  Typography, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormLabel,
  useTheme
} from '@mui/material';

import { useState } from 'react';

import WaitlistForm from './WaitlistForm';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';

const Hero = () => {  

  const theme = useTheme(); // Access theme colors
  const [role, setRole] = useState<"learner" | "mentor" | "sme">("learner");

  return (
    <Box sx={{ 
      pt: { xs: 4, md: 8 }, 
      pb: { xs: 6, md: 8 },
      position: 'relative',
    }}>
      <Container maxWidth="lg">

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 6, md: 8 },
          alignItems: 'center',
        }}>

          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1, maxWidth: { md: '550px' } }}>
            
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '1.9rem', md: '2.5rem' },
                '& span': { 
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-2px)' }
                }
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>Learn</span>
              {' '}
              <span style={{ color: theme.palette.secondary.main }}> Build Real Experience </span>
              {' '}
              <span style={{ color: '#1A1A1A' }}> and Earn.</span>
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                color: '#475569',
                maxWidth: '500px',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1.125rem' },
              }}
            >
              apprelab™ blends focused micro-learning with real-world projects, giving you hands-on experience and guided mentorship to build skills that truly matter.
            </Typography>

            {/* FEATURES GRID */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 2.5,
              mb: 5,
            }}>
              {[
                { icon: SchoolIcon, text: 'Affordable Micro-Courses', color: theme.palette.primary.main },
                { icon: AttachMoneyIcon, text: 'Real Paid Projects', color: theme.palette.secondary.main },
                { icon: GroupsIcon, text: 'Mentor Guidance', color: theme.palette.primary.main },
                { icon: VerifiedIcon, text: 'Verified Certifications', color: theme.palette.secondary.main },
              ].map((feature, i) => (
                <Box 
                  key={i}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.primary.main}10`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 24px ${theme.palette.primary.main}15`,
                      borderColor: `${theme.palette.primary.main}30`,
                    }
                  }}
                >
                  <feature.icon sx={{ color: feature.color, fontSize: 28 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', fontSize: { xs: '0.85rem', md: '1rem' } }}>
                    {feature.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* WAITLIST BOX */}
            <Box 
              sx={{ 
                p: 4,
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${theme.palette.primary.main}10`,
                boxShadow: `0 8px 32px ${theme.palette.primary.main}1A`,
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                Join the Waitlist
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#64748B', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                Be among the first to experience apprelab™
              </Typography>

              {/* ROLE SELECTION */}
              <FormLabel 
                sx={{ 
                  mb: 1, 
                  fontSize: { xs: '0.875rem', md: '1rem' }, 
                  fontWeight: 600, 
                  color: "#1E293B" 
                }}
              >
                What best describes you?
              </FormLabel>

              <RadioGroup
                row
                value={role}
                onChange={(e) => setRole(e.target.value as "learner" | "mentor" | "sme")}
                sx={{
                  mb: 1,
                  gap: 1,
                  '& .MuiFormControlLabel-root': {
                    background: "rgba(255,255,255,0.6)",
                    borderRadius: "10px",
                    px: 2,
                    py: 1,
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    transition: "0.3s",
                    '&:hover': { transform: "translateY(-3px)" }
                  }
                }}
              >
                <FormControlLabel value="learner" control={<Radio />} label="Learner" />
                <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
                <FormControlLabel value="sme" control={<Radio />} label="SME" />
              </RadioGroup>

              <WaitlistForm selectedRole={role} />

              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block',
                  mt: 2,
                  color: '#94A3B8',
                  fontSize: { xs: '0.75rem', md: '0.85rem' },
                }}
              >
                We respect your privacy. Unsubscribe at any time.
              </Typography>
            </Box>
          </Box>

          {/* RIGHT SIDE CODE PREVIEW */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 6, md: 0 },
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: '600px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: `0 20px 60px ${theme.palette.primary.main}33, 0 20px 60px ${theme.palette.secondary.main}26`,
              border: `1px solid ${theme.palette.primary.main}33`,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: `0 30px 80px ${theme.palette.primary.main}4D, 0 30px 80px ${theme.palette.secondary.main}33`,
              }
            }}>
              
              {/* CODE BLOCK */}
              <Box
                sx={{
                  p: 3,
                  pt: 3,
                  fontFamily: '"Fira Code", "Consolas", monospace',
                  fontSize: '0.9rem',
                  color: '#D4D4D4',
                  lineHeight: 1.8,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #1E1E1E 0%, #2D2D2D 100%)',
                  position: 'relative',
                  overflow: 'auto',
                  height: '100%',
                  '&::before': {
                    content: '" "',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '300%',
                    height: '4px',
                    background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
                    animation: 'shimmer 3s linear infinite',
                  },
                  '@keyframes shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(33.33%)' },
                  },
                }}
              >
                <Box>
  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>import</Box>{' '}
  <Box component="span" sx={{ color: '#4EC9B0' }}>React</Box>,{' '}
  <Box component="span" sx={{ color: '#569CD6' }}>{'{ useState, useEffect }'}</Box>{' '}
  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>from</Box>{' '}
  <Box component="span" sx={{ color: '#CE9178' }}>'react'</Box>
  <br />

  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>import</Box>{' '}
  <Box component="span" sx={{ color: '#4EC9B0' }}>Login</Box>{' '}
  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>from</Box>{' '}
  <Box component="span" sx={{ color: '#CE9178' }}>'./pages/Login'</Box>
  <br />

  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>import</Box>{' '}
  <Box component="span" sx={{ color: '#4EC9B0' }}>Dashboard</Box>{' '}
  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>from</Box>{' '}
  <Box component="span" sx={{ color: '#CE9178' }}>'./pages/Dashboard'</Box>
  <br /><br />

  <Box component="span" sx={{ color: '#569CD6', fontWeight: 'bold' }}>const</Box>{' '}
  <Box component="span" sx={{ color: '#4EC9B0' }}>App</Box>{' = () => {'}
  <br />{'  '}
  <Box component="span" sx={{ color: '#569CD6', fontWeight: 'bold' }}>const</Box>{' '}
  <Box component="span" sx={{ color: '#9CDCFE' }}>[isAuthenticated, setIsAuthenticated]</Box>{' '}
  = <Box component="span" sx={{ color: '#C586C0' }}>useState</Box>(false)
  <br /><br />

  {'  '}
  <Box component="span" sx={{ color: '#C586C0' }}>useEffect</Box>(() => {'{'}
  <br />{'    // check user session on mount'}
  <br />{'    '}
  <Box component="span" sx={{ color: '#C586C0' }}>console</Box>.
  <Box component="span" sx={{ color: '#DCDCAA' }}>log</Box>
  ({' '}
  <Box component="span" sx={{ color: '#CE9178' }}>'Initializing App…'</Box>{' '}
  )
  <br />{'  '}{'}'}, [])
  <br /><br />

  {'  '}
  <Box component="span" sx={{ color: '#C586C0', fontWeight: 'bold' }}>return</Box> {' ('}
  <br />{'    <'}
  <Box component="span" sx={{ color: '#4EC9B0' }}>Route</Box>{' '}
  <Box component="span" sx={{ color: '#9CDCFE' }}>path</Box>
  <Box component="span" sx={{ color: '#D4D4D4' }}>=</Box>
  <Box component="span" sx={{ color: '#CE9178' }}>"/login"</Box>
  <Box component="span" sx={{ color: '#D4D4D4' }}>{'>'}</Box>
  <br />{'      <'}
  <Box component="span" sx={{ color: '#4EC9B0' }}>Login</Box>{' '}
  <Box component="span" sx={{ color: '#9CDCFE' }}>onSuccess</Box>
  <Box component="span" sx={{ color: '#D4D4D4' }}>=</Box>{'{' }
  <Box component="span" sx={{ color: '#C586C0' }}>() => setIsAuthenticated(true)</Box>
  {' }'}
  <Box component="span" sx={{ color: '#D4D4D4' }}>{' />'}</Box>
  <br />{'    </'}
  <Box component="span" sx={{ color: '#4EC9B0' }}>Route</Box>
  <Box component="span" sx={{ color: '#D4D4D4' }}>{'>'}</Box>
  <br />
  {'  )'}
  <br>{'}'}
</Box>

              </Box>

              {/* TERMINAL TAB */}
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '45px',
                background: 'linear-gradient(180deg, #1A1A1A 0%, #0F0F0F 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                px: 2.5,
                gap: 2,
                fontSize: '0.8rem',
                color: '#D4D4D4',
                fontFamily: '"Fira Code", "Consolas", monospace',
              }}>
                <Box sx={{ color: theme.palette.secondary.main, fontWeight: 'bold', fontSize: '0.75rem' }}>TERMINAL</Box>
                <Box sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>▶</Box>
                <Box sx={{ color: '#4EC9B0' }}>npm start</Box>
              </Box>

            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

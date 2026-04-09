import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useState } from 'react';
import api from '../utils/api';

const Hero = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setSnackbarMessage('Please enter your name');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (!role) {
      setSnackbarMessage('Please select your role');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      await api.post('/api/waitlist/join', {
        name,
        email,
        role: role.toLowerCase(),
      });

      setSnackbarMessage(`🎉 Successfully joined the waitlist!`);
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      
      setName('');
      setEmail('');
      setSkill('');
      setRole('');
    } catch (error: any) {
      setSnackbarMessage(
        error?.response?.data?.message || 'Something went wrong. Please try again.'
      );
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#010A45',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 12, md: 14 }, // responsive top padding
          pb: { xs: 6, md: 7 }, // responsive bottom padding
          overflow: 'hidden',
          backgroundImage: `
            /* faint grid */
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
        <Container maxWidth="lg">
          {/* Trust Badge */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 4, md: 5 }, // responsive spacing
          }}>
            <Box sx={{
              background: '#FECC04',
              borderRadius: '50px',
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.5 },
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {[
                  '/src/assets/hero1.png',
                  '/src/assets/hero2.png',
                  '/src/assets/hero3.png',
                ].map((imagePath, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={imagePath}
                    alt={`Member ${i + 1}`}
                    sx={{
                      width: { xs: 24, md: 32 },
                      height: { xs: 24, md: 32 },
                      borderRadius: '50%',
                      border: '2px solid #FFD93D',
                      marginLeft: i > 0 ? { xs: '-8px', md: '-12px' } : 0,
                      objectFit: 'cover',
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ textAlign: 'center', ml: { xs: 0, md: 2 } }}>
                <Typography sx={{
                  fontSize: { xs: '0.625rem', md: '0.75rem' },
                  color: '#000033',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  Trusted by
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '0.75rem', md: '0.9rem' },
                  color: '#000033',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  10,000+ Early Members
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Main Heading */}
          <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
            <Typography
              sx={{
                fontSize: { xs: '1.875rem', md: '4rem' }, // responsive font size
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <Box component="span" sx={{ color: '#FFFFFF' }}>Learn Skills, Work on </Box>
              <Box component="span" sx={{ color: '#FFD93D' }}>Real</Box>
              <br />
              <Box component="span" sx={{ color: '#FFD93D' }}>Projects</Box>
              <Box component="span" sx={{ color: '#FFFFFF' }}>, and </Box>
              <Box component="span" sx={{ color: '#94A3B8' }}>Earn Income</Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '1.125rem' },
                color: '#94A3B8',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
                px: { xs: 2, md: 0 },
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              APPRELAB is your integrated digital ecosystem where learning meets opportunity. Master in-demand skills, get mentored by experts, work on actual business projects, and build a verified portfolio that gets you hired.
            </Typography>
          </Box>

          {/* Form Section */}
          <Box sx={{
            maxWidth: '600px',
            mx: 'auto',
            mt: { xs: 4, md: 6 },
            px: { xs: 2, md: 0 },
          }}>
            {/* Name */}
            <Typography sx={{
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 500,
              mb: 2,
              fontFamily: 'Poppins, sans-serif',
            }}>
              What's your name?
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.2)' },
                  '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.4)' },
                  '&.Mui-focused fieldset': { borderColor: '#0057FF' },
                },
                '& .MuiOutlinedInput-input': { padding: '16px', '&::placeholder': { color: '#64748B', opacity: 1 } },
              }}
            />

            {/* Email */}
            <Typography sx={{
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 500,
              mb: 2,
              fontFamily: 'Poppins, sans-serif',
            }}>
              What's your email?
            </Typography>
            <TextField
              fullWidth
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.2)' },
                  '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.4)' },
                  '&.Mui-focused fieldset': { borderColor: '#0057FF' },
                },
                '& .MuiOutlinedInput-input': { padding: '16px', '&::placeholder': { color: '#64748B', opacity: 1 } },
              }}
            />

            {/* Skill */}
            <Typography sx={{
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 500,
              mb: 2,
              fontFamily: 'Poppins, sans-serif',
            }}>
              What do you want to learn?
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. Web Development, Digital Marketing, etc."
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              disabled={loading}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.2)' },
                  '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.4)' },
                  '&.Mui-focused fieldset': { borderColor: '#0057FF' },
                },
                '& .MuiOutlinedInput-input': { padding: '16px', '&::placeholder': { color: '#64748B', opacity: 1 } },
              }}
            />

            {/* Role */}
            <Typography sx={{
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 500,
              mb: 2,
              fontFamily: 'Poppins, sans-serif',
            }}>
              I am a
            </Typography>
            <TextField
              select
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={loading}
              placeholder="Select an option"
              sx={{
                mb: 4,
                fontFamily: 'Poppins, sans-serif',
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  color: role ? '#FFFFFF' : '#64748B',
                  fontSize: '1rem',
                  '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.2)' },
                  '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.4)' },
                  '&.Mui-focused fieldset': { borderColor: '#0057FF' },
                },
                '& .MuiSelect-select': { padding: '16px' },
                '& .MuiSvgIcon-root': { color: '#94A3B8' },
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) => {
                  if (!value) return <span style={{ color: '#64748B' }}>Select an option</span>;
                  return value as string;
                },
              }}
            >
              <MenuItem value="Learner">Learner</MenuItem>
              <MenuItem value="Mentor">Mentor</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </TextField>

            {/* Buttons */}
            <Box sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' } // stacked on mobile
            }}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowOutwardIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background: '#FFFFFF',
                  color: '#000033',
                  py: 1.75,
                  px: 4,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: 'none',
                  '&:hover': { background: '#F1F5F9', boxShadow: 'none' },
                }}
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </Button>
              <Button
                fullWidth
                variant="outlined"
                disabled={loading}
                sx={{
                  borderColor: 'rgba(148, 163, 184, 0.3)',
                  color: '#FFFFFF',
                  py: 1.75,
                  px: 4,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'none',
                  '&:hover': { borderColor: 'rgba(148, 163, 184, 0.5)', background: 'rgba(255, 255, 255, 0.05)' },
                }}
              >
                Watch Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{
            width: '100%',
            fontWeight: 500,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Hero;

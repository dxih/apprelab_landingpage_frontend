// src/components/WaitlistForm.tsx
import { useState, FormEvent } from 'react';
import { Box, TextField, Button, Alert, Snackbar, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import api from '../api/axios'; // Axios instance pointing to your backend

interface WaitlistFormProps {
  selectedRole: 'learner' | 'mentor' | 'sme';
}

const WaitlistForm = ({ selectedRole }: WaitlistFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  // Simple email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setSnackbarMessage('Please enter your name');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (!email.trim()) {
      setSnackbarMessage('Please enter your email');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      // 🚀 REAL API CALL
      await api.post('/api/waitlist/join', {
        name,
        email,
        role: selectedRole,
      });

      // Success
      setSnackbarMessage(`🎉 Successfully joined the waitlist as a ${selectedRole}!`);
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // Clear form
      setName('');
      setEmail('');
    } catch (error: any) {
      // Error from backend
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
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '450px',
        }}
      >
        <TextField
          fullWidth
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: '#F9FAFB',
              '&:hover': { backgroundColor: '#F0F4FF' },
            },
          }}
        />

        <TextField
          fullWidth
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: '#F9FAFB',
              '&:hover': { backgroundColor: '#FFFBEA' },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
          sx={{
            background: 'linear-gradient(90deg, #0057FF 0%, #0057FF 100%)',
            color: '#ffffff',
            fontWeight: 600,
            borderRadius: 2,
            py: 1.5,
            '&:hover': {
              background: 'linear-gradient(90deg, #0041CC 0%, #FFEA5B 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 30px rgba(0,87,255,0.3)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {loading ? 'Joining...' : `Join Waitlist as ${selectedRole}`}
        </Button>
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
            bgcolor: snackbarSeverity === 'success' ? '#E6FFED' : '#FFE6E6',
            color: snackbarSeverity === 'success' ? '#065F46' : '#B91C1C',
            fontWeight: 500,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default WaitlistForm;

import { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, CircularProgress } from '@mui/material';
import { useAdmin } from '../context/AdminContext';
import axios from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/admin/auth/login', { email, password });
      const { token, admin } = res.data;
console.log('🔍 Full response:', res); // Add this
    console.log('🔍 Response data:', res.data); // Add this
    console.log('🔍 Login response admin:', res.data.admin); // This one you already have
    console.log('🔍 Login response token:', res.data.token); // Add this
    
      login(admin, token);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 12 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" mb={3} align="center">
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            disabled={loading}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
            disabled={loading}
          />
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
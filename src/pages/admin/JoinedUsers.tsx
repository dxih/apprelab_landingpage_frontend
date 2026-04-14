import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Paper, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, 
  Tabs, Tab, TextField, Button, Stack, Alert, CircularProgress,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAdmin } from '../../context/AdminContext';

const JoinedUsers = () => {
  const navigate = useNavigate();
  const { token } = useAdmin();
  const [tab, setTab] = useState(0);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  const [waitlist, setWaitlist] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'https://apprelab-landingpage-backend.onrender.com/api';

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchData();
    }
  }, [isAuthenticated, token]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [waitlistRes, newsletterRes] = await Promise.all([
        fetch(`${API_URL}/admin/waitlist`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_URL}/admin/newsletter`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (!waitlistRes.ok || !newsletterRes.ok) throw new Error('Failed to fetch data');

      const waitlistData = await waitlistRes.json();
      const newsletterData = await newsletterRes.json();

      setWaitlist(waitlistData.data || []);
      setNewsletter(newsletterData.data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Apprelab1223') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect master password');
    }
  };

  if (!isAuthenticated) {
    return (
      <Container maxWidth="xs" sx={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 4, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="700" mb={3}>Admin Restricted</Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            Please enter the master password to access the joined users database.
          </Typography>
          <form onSubmit={handlePasswordSubmit}>
            <TextField
              fullWidth
              type="password"
              label="Master Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />
            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ py: 1.5, borderRadius: 2, background: '#010A45', '&:hover': { background: '#0B1C5D' } }}
            >
              Unlock Database
            </Button>
          </form>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={() => navigate('/admin/dashboard')}
            sx={{ mt: 3, textTransform: 'none' }}
          >
            Back to Dashboard
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate('/admin/dashboard')}
          sx={{ background: 'rgba(0,0,0,0.05)', borderRadius: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" fontWeight="800">Joined Users Database</Typography>
      </Stack>

      <Paper sx={{ borderRadius: 4, overflow: 'hidden', mb: 4 }}>
        <Tabs 
          value={tab} 
          onChange={(_, newValue) => setTab(newValue)} 
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider', background: '#f8fafc' }}
        >
          <Tab icon={<PeopleIcon />} label={`Waitlist (${waitlist.length})`} sx={{ py: 3, fontWeight: 700 }} />
          <Tab icon={<MailIcon />} label={`Newsletter (${newsletter.length})`} sx={{ py: 3, fontWeight: 700 }} />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ background: '#f1f5f9' }}>
                    <TableCell sx={{ fontWeight: 700 }}>{tab === 0 ? 'Name' : 'Email'}</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>{tab === 0 ? 'Email' : 'Interest'}</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>{tab === 0 ? 'Role' : 'Joined Date'}</TableCell>
                    {tab === 0 && <TableCell sx={{ fontWeight: 700 }}>Date Joined</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tab === 0 ? (
                    waitlist.map((entry: any) => (
                      <TableRow key={entry._id} hover>
                        <TableCell sx={{ fontWeight: "600" }}>{entry.name}</TableCell>
                        <TableCell>{entry.email}</TableCell>
                        <TableCell>
                          <Chip 
                            label={entry.role} 
                            size="small" 
                            sx={{ 
                              background: entry.role === 'Business' ? '#eef2ff' : '#fff7ed', 
                              color: entry.role === 'Business' ? '#4338ca' : '#c2410c',
                              fontWeight: 600
                            }} 
                          />
                        </TableCell>
                        <TableCell color="text.secondary">
                          {new Date(entry.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    newsletter.map((sub: any) => (
                      <TableRow key={sub._id} hover>
                        <TableCell sx={{ fontWeight: "600" }}>{sub.email}</TableCell>
                        <TableCell>{sub.interest || 'N/A'}</TableCell>
                        <TableCell color="text.secondary">
                          {new Date(sub.subscribedAt || sub.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                  {(tab === 0 ? waitlist.length : newsletter.length) === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} align="center" sx={{ py: 10, color: 'text.secondary' }}>
                        No users found in this category.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default JoinedUsers;

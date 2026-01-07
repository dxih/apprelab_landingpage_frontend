import { Container, Typography, Button, Stack, Box, Card, CardContent, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import LogoutIcon from '@mui/icons-material/Logout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAdmin();
  const [stats, setStats] = useState({ blogs: 0, jobs: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        const blogsRes = await fetch(`${import.meta.env.VITE_API_URL || 'https://apprelab-landingpage-backend.onrender.com/api'}/blogs`);
        const jobsRes = await fetch(`${import.meta.env.VITE_API_URL || 'https://apprelab-landingpage-backend.onrender.com/api'}/jobs`);
        
        if (!blogsRes.ok || !jobsRes.ok) {
          console.error('API Error - Blogs:', blogsRes.status, 'Jobs:', jobsRes.status);
          return;
        }
        
        const blogsData = await blogsRes.json();
        const jobsData = await jobsRes.json();
        
        setStats({
          blogs: Array.isArray(blogsData) 
            ? blogsData.length 
            : blogsData?.data?.length || blogsData?.blogs?.length || 0,
          jobs: Array.isArray(jobsData) 
            ? jobsData.length 
            : jobsData?.data?.length || jobsData?.jobs?.length || 0
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats({ blogs: 0, jobs: 0 });
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/admin/login');
    }
  };

  const dashboardCards = [
    {
      title: 'Blog Posts',
      count: stats.blogs,
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      color: '#0057FF',
      bgColor: '#eef2ff',
      route: '/admin/blogs',
      description: 'Manage your blog content'
    },
    {
      title: 'Job Listings',
      count: stats.jobs,
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      color: '#ffcc00ff',
      bgColor: '#f5f3ff',
      route: '/admin/jobs',
      description: 'Manage job postings'
    }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          mb: 5,
          p: 4,
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box>
                <Typography variant="h4" fontWeight="700" color="text.primary">
                  {getGreeting()}!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Welcome back, Admin
                </Typography>
              </Box>
            </Stack>
            <Button 
              variant="outlined" 
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{ 
                borderRadius: 2,
                px: 3,
                borderColor: '#667eea',
                color: '#667eea',
                '&:hover': {
                  borderColor: '#764ba2',
                  background: 'rgba(102, 126, 234, 0.05)'
                }
              }}
            >
              Logout
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <TrendingUpIcon sx={{ color: 'black' }} />
            <Typography variant="h6" color="black" fontWeight="600">
              Quick Overview
            </Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            {dashboardCards.map((card, index) => (
              <Card 
                key={index}
                sx={{ 
                  flex: 1,
                  borderRadius: 3,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                  }
                }}
                onClick={() => navigate(card.route)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Box sx={{ 
                      p: 2, 
                      borderRadius: 2, 
                      bgcolor: card.bgColor,
                      color: card.color
                    }}>
                      {card.icon}
                    </Box>
                    <Chip 
                      label={loading ? 'Loading...' : `${card.count} Total`}
                      size="small"
                      sx={{ 
                        fontWeight: 600,
                        bgcolor: card.bgColor,
                        color: card.color
                      }}
                    />
                  </Stack>
                  <Typography variant="h5" fontWeight="700" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {card.description}
                  </Typography>
                  <Button 
                    fullWidth 
                    variant="contained"
                    sx={{ 
                      mt: 2,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      bgcolor: card.color,
                      '&:hover': {
                        bgcolor: card.color,
                        opacity: 0.9
                      }
                    }}
                  >
                    Manage {card.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        <Box sx={{ 
          p: 4,
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography variant="h6" fontWeight="600" mb={3}>
            Quick Actions
          </Typography>
          <Stack spacing={2}>
            <Button 
              variant="outlined" 
              fullWidth 
              onClick={() => navigate('/admin/blogs/create')}
              sx={{ 
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                justifyContent: 'flex-start',
                borderColor: 'rgba(102, 126, 234, 0.3)',
                '&:hover': {
                  borderColor: '#667eea',
                  bgcolor: 'rgba(102, 126, 234, 0.05)'
                }
              }}
            >
              + Create New Blog Post
            </Button>
            <Button 
              variant="outlined" 
              fullWidth 
              onClick={() => navigate('/admin/jobs/create')}
              sx={{ 
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                justifyContent: 'flex-start',
                borderColor: 'rgba(139, 92, 246, 0.3)',
                '&:hover': {
                  borderColor: '#8b5cf6',
                  bgcolor: 'rgba(139, 92, 246, 0.05)'
                }
              }}
            >
              + Post New Job Listing
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
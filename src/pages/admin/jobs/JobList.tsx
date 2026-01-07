import { useEffect, useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Card, 
  CardContent, 
  IconButton, 
  CircularProgress,
  Box,
  Chip
} from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import axios from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

interface Job {
  _id: string;
  title: string;
  type: string;
  location: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const JobList = () => {
  useAuth();
  
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/admin/jobs');
      const jobsData = res.data.data || res.data;
      setJobs(Array.isArray(jobsData) ? jobsData : []);
    } catch (err: any) {
      console.error('Failed to fetch jobs:', err);
      alert(err.response?.data?.message || 'Failed to load jobs');
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this job? This action cannot be undone.')) {
      return;
    }

    try {
      setDeleting(id);
      await axios.delete(`/admin/jobs/${id}`);
      alert('Job deleted successfully!');
      fetchJobs();
    } catch (err: any) {
      console.error('Delete failed:', err);
      alert(err.response?.data?.message || 'Failed to delete job');
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center', minHeight: '400px', alignItems: 'center' }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Typography variant="h3" fontWeight="bold">Job Listings</Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} total
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate('/admin/jobs/create')}
          size="large"
        >
          Add New Job
        </Button>
      </Stack>

      {jobs.length === 0 ? (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 8,
            border: '2px dashed #ddd',
            borderRadius: 2,
            bgcolor: '#f9f9f9'
          }}
        >
          <Typography variant="h6" color="text.secondary" mb={2}>
            No jobs found
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Create your first job listing to get started
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => navigate('/admin/jobs/create')}
          >
            Create First Job
          </Button>
        </Box>
      ) : (
        <Stack spacing={2}>
          {jobs.map((job) => (
            <Card key={job._id} elevation={2}>
              <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="flex-start" spacing={2}>
                  <Stack spacing={1} flex={1}>
                    <Typography variant="h6" fontWeight="bold">
                      {job.title}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      <Chip label={job.type} size="small" color="primary" variant="outlined" />
                      <Chip label={job.location} size="small" variant="outlined" />
                      <Chip 
                        label={job.status} 
                        size="small" 
                        color={job.status === 'active' ? 'success' : 'default'}
                      />
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      Created: {new Date(job.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      color="primary"
                      onClick={() => navigate(`/admin/jobs/edit/${job._id}`)}
                      title="Edit job"
                      sx={{ 
                        border: '1px solid',
                        borderColor: 'primary.main',
                        '&:hover': { bgcolor: 'primary.main', color: 'white' }
                      }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(job._id)}
                      title="Delete job"
                      disabled={deleting === job._id}
                      sx={{ 
                        border: '1px solid',
                        borderColor: 'error.main',
                        '&:hover': { bgcolor: 'error.main', color: 'white' }
                      }}
                    >
                      {deleting === job._id ? <CircularProgress size={24} /> : <Delete />}
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default JobList;
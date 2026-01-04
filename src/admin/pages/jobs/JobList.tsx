import { useEffect, useState } from 'react';
import { Container, Typography, Button, Stack, Card, CardContent, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface Job {
  _id: string;
  title: string;
  status: 'active' | 'inactive';
}

const JobList = () => {
  useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    const res = await axios.get('/admin/jobs');
    setJobs(res.data);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/admin/jobs/${id}`);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h3">Jobs</Typography>
        <Button variant="contained" onClick={() => navigate('/admin/jobs/create')}>Add Job</Button>
      </Stack>
      <Stack spacing={2}>
        {jobs.map((job) => (
          <Card key={job._id}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">{job.title}</Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary" onClick={() => navigate(`/admin/jobs/edit/${job._id}`)}><Edit /></IconButton>
                <IconButton color="error" onClick={() => handleDelete(job._id)}><Delete /></IconButton>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default JobList;

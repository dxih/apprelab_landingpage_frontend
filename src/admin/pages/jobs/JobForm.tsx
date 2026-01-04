import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface JobData {
  title: string;
  type: string;
  location: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  offer: string[];
  applicationLink: string;
  companyLogo?: string;
}

const JobForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobData>({
    title: '',
    type: '',
    location: '',
    shortDescription: '',
    description: '',
    responsibilities: [''],
    requirements: [''],
    niceToHave: [''],
    offer: [''],
    applicationLink: '',
    companyLogo: '',
  });

  const [uploading, setUploading] = useState(false);

  const handleArrayChange = (field: keyof JobData, index: number, value: string) => {
    const newArr = [...(job[field] as string[])];
    newArr[index] = value;
    setJob({ ...job, [field]: newArr });
  };

  const addArrayItem = (field: keyof JobData) => setJob({ ...job, [field]: [...(job[field] as string[]), ''] });
  const removeArrayItem = (field: keyof JobData, index: number) => {
    const newArr = (job[field] as string[]).filter((_, i) => i !== index);
    setJob({ ...job, [field]: newArr });
  };

  const handleLogoUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const token = localStorage.getItem('adminToken');
      const res = await axios.post('/api/admin/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
      });
      setJob({ ...job, companyLogo: res.data.url });
    } catch (err) {
      console.error(err);
      alert('Upload failed!');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (id) {
        await axios.put(`/api/admin/jobs/${id}`, job, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post(`/api/admin/jobs`, job, { headers: { Authorization: `Bearer ${token}` } });
      }
      navigate('/admin/jobs');
    } catch (err) {
      console.error(err);
      alert('Save failed!');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>{id ? 'Edit Job' : 'Create Job'}</Typography>
      <Stack spacing={2}>
        <TextField label="Job Title" fullWidth value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} />
        <TextField label="Type" fullWidth value={job.type} onChange={e => setJob({ ...job, type: e.target.value })} />
        <TextField label="Location" fullWidth value={job.location} onChange={e => setJob({ ...job, location: e.target.value })} />
        <TextField label="Short Description" fullWidth value={job.shortDescription} onChange={e => setJob({ ...job, shortDescription: e.target.value })} />
        <TextField label="Description" multiline rows={4} fullWidth value={job.description} onChange={e => setJob({ ...job, description: e.target.value })} />

        {/* Responsibilities */}
        <Typography>Responsibilities</Typography>
        {job.responsibilities.map((item, idx) => (
          <Stack direction="row" spacing={1} key={idx}>
            <TextField fullWidth value={item} onChange={e => handleArrayChange('responsibilities', idx, e.target.value)} />
            <Button color="error" onClick={() => removeArrayItem('responsibilities', idx)}>Remove</Button>
          </Stack>
        ))}
        <Button onClick={() => addArrayItem('responsibilities')}>Add Responsibility</Button>

        {/* Company Logo */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="outlined" component="label" disabled={uploading}>
            {job.companyLogo ? 'Change Logo' : 'Upload Logo'}
            <input type="file" hidden onChange={e => e.target.files && handleLogoUpload(e.target.files[0])} />
          </Button>
          {job.companyLogo && <img src={job.companyLogo} alt="logo" style={{ height: 80, borderRadius: 8 }} />}
        </Stack>

        <Button variant="contained" onClick={handleSubmit}>{id ? 'Update' : 'Create'} Job</Button>
      </Stack>
    </Box>
  );
};

export default JobForm;

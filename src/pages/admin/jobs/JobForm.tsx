import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack, Typography, Divider, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/api';
import { useAuth } from '../../../hooks/useAuth';

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
  status?: 'active' | 'inactive';
}

const JobForm: React.FC = () => {
  useAuth();
  
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
    status: 'active'
  });

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`/admin/jobs/${id}`);
          const jobData = res.data.data || res.data;
          setJob(jobData);
        } catch (err: any) {
          console.error('Failed to fetch job:', err);
          alert(err.response?.data?.message || 'Failed to load job data');
          navigate('/admin/jobs');
        } finally {
          setLoading(false);
        }
      };
      fetchJob();
    }
  }, [id, navigate]);

  const handleArrayChange = (field: keyof JobData, index: number, value: string) => {
    const newArr = [...(job[field] as string[])];
    newArr[index] = value;
    setJob({ ...job, [field]: newArr });
  };

  const addArrayItem = (field: keyof JobData) => {
    setJob({ ...job, [field]: [...(job[field] as string[]), ''] });
  };
  
  const removeArrayItem = (field: keyof JobData, index: number) => {
    const newArr = (job[field] as string[]).filter((_, i) => i !== index);
    setJob({ ...job, [field]: newArr });
  };

  const handleLogoUpload = async (file: File) => {
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const res = await axios.post('/admin/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      setJob({ ...job, companyLogo: res.data.url });
      alert('Logo uploaded successfully!');
    } catch (err: any) {
      console.error('Upload error:', err);
      alert(err.response?.data?.message || 'Upload failed! Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validation
      if (!job.title.trim()) {
        alert('Please enter a job title');
        return;
      }
      if (!job.type.trim()) {
        alert('Please enter job type');
        return;
      }
      if (!job.location.trim()) {
        alert('Please enter job location');
        return;
      }

      // Clean empty array items
      const cleanedJob = {
        ...job,
        responsibilities: job.responsibilities.filter(item => item.trim() !== ''),
        requirements: job.requirements.filter(item => item.trim() !== ''),
        niceToHave: job.niceToHave.filter(item => item.trim() !== ''),
        offer: job.offer.filter(item => item.trim() !== '')
      };

      setLoading(true);
      
      if (id) {
        await axios.put(`/admin/jobs/${id}`, cleanedJob);
        alert('Job updated successfully!');
      } else {
        await axios.post('/admin/jobs', cleanedJob);
        alert('Job created successfully!');
      }
      
      navigate('/admin/jobs');
    } catch (err: any) {
      console.error('Save error:', err);
      alert(err.response?.data?.message || 'Save failed! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && id) {
    return (
      <Box p={4} display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography variant="h6">Loading job data...</Typography>
      </Box>
    );
  }

  const renderArrayField = (field: keyof JobData, label: string) => (
    <Box mb={3}>
      <Typography variant="h6" mb={2}>{label}</Typography>
      <Stack spacing={2}>
        {(job[field] as string[]).map((item, idx) => (
          <Stack direction="row" spacing={1} key={idx}>
            <TextField
              fullWidth
              value={item}
              onChange={e => handleArrayChange(field, idx, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()} item`}
              size="small"
            />
            <Button 
              color="error" 
              variant="outlined"
              onClick={() => removeArrayItem(field, idx)}
              disabled={(job[field] as string[]).length === 1}
              sx={{ minWidth: '100px' }}
            >
              Remove
            </Button>
          </Stack>
        ))}
        <Button 
          onClick={() => addArrayItem(field)}
          variant="outlined"
          sx={{ alignSelf: 'flex-start' }}
        >
          + Add {label}
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box p={4} maxWidth="900px" mx="auto">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" mb={4} fontWeight="bold">
          {id ? 'Edit Job Listing' : 'Create New Job Listing'}
        </Typography>
        
        <Stack spacing={3}>
          <TextField
            label="Job Title"
            fullWidth
            value={job.title}
            onChange={e => setJob({ ...job, title: e.target.value })}
            required
            placeholder="e.g., Senior Software Engineer"
          />
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Job Type"
              fullWidth
              value={job.type}
              onChange={e => setJob({ ...job, type: e.target.value })}
              required
              placeholder="e.g., Full-time, Part-time, Contract"
            />
            
            <TextField
              label="Location"
              fullWidth
              value={job.location}
              onChange={e => setJob({ ...job, location: e.target.value })}
              required
              placeholder="e.g., Remote, Lagos, Nigeria"
            />
          </Stack>
          
          <TextField
            label="Short Description"
            fullWidth
            multiline
            rows={2}
            value={job.shortDescription}
            onChange={e => setJob({ ...job, shortDescription: e.target.value })}
            placeholder="Brief summary of the role"
          />
          
          <TextField
            label="Full Description"
            multiline
            rows={4}
            fullWidth
            value={job.description}
            onChange={e => setJob({ ...job, description: e.target.value })}
            placeholder="Detailed job description"
          />

          <TextField
            label="Application Link"
            fullWidth
            value={job.applicationLink}
            onChange={e => setJob({ ...job, applicationLink: e.target.value })}
            placeholder="https://..."
            type="url"
          />

          <Divider sx={{ my: 3 }} />

          {renderArrayField('responsibilities', 'Responsibilities')}
          {renderArrayField('requirements', 'Requirements')}
          {renderArrayField('niceToHave', 'Nice to Have')}
          {renderArrayField('offer', 'What We Offer')}

          <Divider sx={{ my: 3 }} />

          {/* Company Logo */}
          <Box>
            <Typography variant="h6" mb={2}>Company Logo</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="outlined"
                component="label"
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : job.companyLogo ? 'Change Logo' : 'Upload Logo'}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={e => e.target.files && handleLogoUpload(e.target.files[0])}
                />
              </Button>
              {job.companyLogo && (
                <Box>
                  <img
                    src={job.companyLogo}
                    alt="Company logo"
                    style={{ 
                      height: 80, 
                      maxWidth: 200,
                      borderRadius: 8, 
                      objectFit: 'contain',
                      border: '1px solid #ddd',
                      padding: '8px'
                    }}
                  />
                </Box>
              )}
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading || uploading}
              size="large"
              fullWidth
            >
              {loading ? 'Saving...' : id ? 'Update Job' : 'Create Job'}
            </Button>
            
            <Button
              variant="outlined"
              onClick={() => navigate('/admin/jobs')}
              disabled={loading}
              size="large"
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default JobForm;
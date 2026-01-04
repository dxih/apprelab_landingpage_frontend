import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Stack, IconButton, Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface BlogSection {
  heading?: string;
  text: string;
  image?: string;
}

interface BlogData {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  content: BlogSection[];
}

const BlogForm: React.FC = () => {
  const { id } = useParams(); // for edit
  const navigate = useNavigate();

  const [blog, setBlog] = useState<BlogData>({
    title: '',
    excerpt: '',
    category: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    content: [{ text: '' }],
  });

  const [uploading, setUploading] = useState(false);

  const handleContentChange = (index: number, field: keyof BlogSection, value: string) => {
    const newContent = [...blog.content];
    newContent[index][field] = value;
    setBlog({ ...blog, content: newContent });
  };

  const addSection = () => setBlog({ ...blog, content: [...blog.content, { text: '' }] });

  const removeSection = (index: number) => {
    const newContent = blog.content.filter((_, i) => i !== index);
    setBlog({ ...blog, content: newContent });
  };

  const handleFileUpload = async (index: number, file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const token = localStorage.getItem('adminToken'); // assuming JWT stored
      const res = await axios.post('/api/admin/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
      });
      handleContentChange(index, 'image', res.data.url);
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
        await axios.put(`/api/admin/blogs/${id}`, blog, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post(`/api/admin/blogs`, blog, { headers: { Authorization: `Bearer ${token}` } });
      }
      navigate('/admin/blogs');
    } catch (err) {
      console.error(err);
      alert('Save failed!');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>{id ? 'Edit Blog' : 'Create Blog'}</Typography>
      <Stack spacing={2}>
        <TextField label="Title" fullWidth value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} />
        <TextField label="Excerpt" fullWidth value={blog.excerpt} onChange={e => setBlog({ ...blog, excerpt: e.target.value })} />
        <TextField label="Category" fullWidth value={blog.category} onChange={e => setBlog({ ...blog, category: e.target.value })} />
        <TextField label="Author" fullWidth value={blog.author} onChange={e => setBlog({ ...blog, author: e.target.value })} />
        <TextField
          label="Date"
          type="date"
          fullWidth
          value={blog.date}
          onChange={e => setBlog({ ...blog, date: e.target.value })}
        />

        {blog.content.map((section, idx) => (
          <Paper key={idx} sx={{ p: 2, position: 'relative' }}>
            <Stack spacing={1}>
              <TextField
                label="Heading"
                fullWidth
                value={section.heading || ''}
                onChange={e => handleContentChange(idx, 'heading', e.target.value)}
              />
              <TextField
                label="Text"
                multiline
                rows={4}
                fullWidth
                value={section.text}
                onChange={e => handleContentChange(idx, 'text', e.target.value)}
              />
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<AddPhotoAlternateIcon />}
                  disabled={uploading}
                >
                  {section.image ? 'Change Image' : 'Upload Image'}
                  <input type="file" hidden onChange={e => e.target.files && handleFileUpload(idx, e.target.files[0])} />
                </Button>
                {section.image && <img src={section.image} alt="blog" style={{ height: 80, borderRadius: 8 }} />}
                <Button color="error" onClick={() => removeSection(idx)}>Remove</Button>
              </Stack>
            </Stack>
          </Paper>
        ))}
        <Button onClick={addSection}>Add Section</Button>
        <Button variant="contained" onClick={handleSubmit}>{id ? 'Update' : 'Create'} Blog</Button>
      </Stack>
    </Box>
  );
};

export default BlogForm;

// BlogForm.tsx - Fixed version
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Stack, Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../utils/api';
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

interface BlogFormProps {
  initialData?: BlogData;
  blogId?: string;
}

const BlogForm: React.FC<BlogFormProps> = ({ initialData, blogId }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const effectiveId = blogId || id;

  const [blog, setBlog] = useState<BlogData>({
    title: '',
    excerpt: '',
    category: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    content: [{ text: '' }],
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ✅ Initialize form with initialData when it arrives
  useEffect(() => {
    console.log('BlogForm received initialData:', initialData);
    
    if (initialData) {
      const formData: BlogData = {
        title: initialData.title || '',
        excerpt: initialData.excerpt || '',
        category: initialData.category || '',
        author: initialData.author || '',
        date: initialData.date || new Date().toISOString().split('T')[0],
        content: initialData.content && initialData.content.length > 0 
          ? initialData.content.map(section => ({
              heading: section.heading || '',
              text: section.text || '',
              image: section.image || ''
            }))
          : [{ text: '' }]
      };
      
      console.log('Setting blog state to:', formData);
      setBlog(formData);
    }
    // Note: We don't reset to defaults if initialData becomes undefined
    // because that would clear the form while editing
  }, [initialData]);

  const handleContentChange = (index: number, field: keyof BlogSection, value: string) => {
    const newContent = [...blog.content];
    newContent[index] = { ...newContent[index], [field]: value };
    setBlog({ ...blog, content: newContent });
  };

  const addSection = () => {
    setBlog({ ...blog, content: [...blog.content, { text: '' }] });
  };

  const removeSection = (index: number) => {
    if (blog.content.length === 1) {
      alert('At least one section is required');
      return;
    }
    const newContent = blog.content.filter((_, i) => i !== index);
    setBlog({ ...blog, content: newContent });
  };

  const handleFileUpload = async (index: number, file: File) => {
    if (!file) return;

    // ✅ Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // ✅ Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type);
      
      const res = await axios.post('/admin/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      console.log('Upload response:', res.data);
      
      // ✅ Check for success flag AND url
      if (res.data.success && res.data.url) {
        handleContentChange(index, 'image', res.data.url);
        alert('Image uploaded successfully!');
      } else {
        throw new Error('No URL in response');
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      console.error('Error response:', err.response?.data);
      
      const errorMsg = err.response?.data?.message 
        || err.message 
        || 'Upload failed. Please check your Cloudinary credentials.';
      
      alert(errorMsg);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (!blog.title.trim()) {
      alert('Title is required');
      return;
    }
    
    if (blog.content.every(section => !section.text.trim())) {
      alert('At least one content section must have text');
      return;
    }

    setSubmitting(true);
    try {
      console.log('Submitting blog:', blog);
      
      if (effectiveId) {
        // Update existing blog
        const res = await axios.put(`/admin/blogs/${effectiveId}`, blog);
        console.log('Update response:', res.data);
        alert('Blog updated successfully!');
      } else {
        // Create new blog
        const res = await axios.post('/admin/blogs', blog);
        console.log('Create response:', res.data);
        alert('Blog created successfully!');
      }
      navigate('/admin/blogs');
    } catch (err: any) {
      console.error('Save error:', err);
      console.error('Error response:', err.response?.data);
      
      const errorMsg = err.response?.data?.message || err.message || 'Save failed!';
      alert(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>
        {effectiveId ? 'Edit Blog' : 'Create Blog'}
      </Typography>
      
      {effectiveId && (
        <Typography variant="caption" color="textSecondary" mb={2} display="block">
          Editing blog ID: {effectiveId} | Content sections: {blog.content.length}
        </Typography>
      )}
      
      <Stack spacing={3}>
        <TextField 
          label="Title" 
          fullWidth 
          required
          value={blog.title} 
          onChange={e => setBlog({ ...blog, title: e.target.value })} 
          placeholder="Enter blog title"
        />
        <TextField 
          label="Excerpt" 
          fullWidth 
          multiline
          rows={2}
          value={blog.excerpt} 
          onChange={e => setBlog({ ...blog, excerpt: e.target.value })} 
          placeholder="Brief description of the blog"
        />
        <Stack direction="row" spacing={2}>
          <TextField 
            label="Category" 
            fullWidth 
            value={blog.category} 
            onChange={e => setBlog({ ...blog, category: e.target.value })} 
            placeholder="e.g., Technology, Travel"
          />
          <TextField 
            label="Author" 
            fullWidth 
            value={blog.author} 
            onChange={e => setBlog({ ...blog, author: e.target.value })} 
            placeholder="Author name"
          />
        </Stack>
        <TextField
          label="Date"
          type="date"
          fullWidth
          value={blog.date}
          onChange={e => setBlog({ ...blog, date: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />

        <Typography variant="h6" mt={2}>Content Sections</Typography>

        {blog.content.map((section, idx) => (
          <Paper key={idx} sx={{ p: 3, bgcolor: 'grey.50' }} elevation={2}>
            <Typography variant="subtitle2" color="primary" mb={2}>
              Section {idx + 1}
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Heading (optional)"
                fullWidth
                value={section.heading || ''}
                onChange={e => handleContentChange(idx, 'heading', e.target.value)}
                placeholder="Section heading"
              />
              <TextField
                label="Text"
                multiline
                rows={4}
                fullWidth
                required
                value={section.text}
                onChange={e => handleContentChange(idx, 'text', e.target.value)}
                placeholder="Write your content here..."
              />
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<AddPhotoAlternateIcon />}
                  disabled={uploading}
                >
                  {uploading ? 'Uploading...' : section.image ? 'Change Image' : 'Upload Image'}
                  <input 
                    type="file" 
                    hidden 
                    accept="image/*"
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(idx, file);
                    }} 
                  />
                </Button>
                {section.image && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img 
                      src={section.image} 
                      alt="section preview" 
                      style={{ 
                        height: 80, 
                        width: 120,
                        borderRadius: 8, 
                        objectFit: 'cover',
                        border: '1px solid #ddd'
                      }} 
                    />
                    <Button 
                      size="small" 
                      color="error" 
                      onClick={() => handleContentChange(idx, 'image', '')}
                    >
                      Remove Image
                    </Button>
                  </Box>
                )}
                <Button 
                  color="error" 
                  variant="outlined"
                  onClick={() => removeSection(idx)}
                  disabled={blog.content.length === 1}
                  sx={{ ml: 'auto' }}
                >
                  Remove Section
                </Button>
              </Stack>
            </Stack>
          </Paper>
        ))}
        
        <Button 
          variant="outlined" 
          onClick={addSection}
          sx={{ alignSelf: 'flex-start' }}
        >
          + Add Another Section
        </Button>
        
        <Stack direction="row" spacing={2} mt={3}>
          <Button 
            variant="contained" 
            size="large"
            onClick={handleSubmit}
            disabled={submitting || uploading}
          >
            {submitting ? 'Saving...' : effectiveId ? 'Update Blog' : 'Create Blog'}
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => navigate('/admin/blogs')}
            disabled={submitting}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BlogForm;
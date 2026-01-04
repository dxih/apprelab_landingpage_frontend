import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogForm from './BlogForm';

export interface BlogSection {
  heading?: string;
  text: string;
  image?: string;
}

export interface BlogData {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  content: BlogSection[];
}

const BlogEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setBlog(res.data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !blog) {
    return (
      <Box mt={6}>
        <Alert severity="error">{error || 'Blog not found'}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Edit Blog
      </Typography>

      {/* Reuse BlogForm */}
      <BlogForm initialData={blog} blogId={id!} />
    </Box>
  );
};

export default BlogEdit;

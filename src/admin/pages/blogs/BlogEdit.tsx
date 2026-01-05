// BlogEdit.tsx - FIXED VERSION
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api';
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
      if (!id) {
        setError('No blog ID provided');
        setLoading(false);
        return;
      }

      try {
        console.log('=== FETCHING BLOG ===');
        console.log('Blog ID:', id);
        
        const res = await axios.get(`/admin/blogs/${id}`);
        
        console.log('=== RAW RESPONSE ===');
        console.log('Response data:', res.data);
        
        let blogData = res.data;
        
        // Handle response wrappers
        if (res.data.data) {
          blogData = res.data.data;
        } else if (res.data.blog) {
          blogData = res.data.blog;
        }
        
        console.log('=== EXTRACTED BLOG DATA ===');
        console.log('Blog data:', blogData);
        
        // Validate required fields
        if (!blogData || !blogData.title) {
          throw new Error('Invalid blog data structure - missing title');
        }
        
        // Process content array with proper validation
        let processedContent: BlogSection[] = [];
        
        if (!blogData.content || !Array.isArray(blogData.content)) {
          console.warn('Content is not an array, creating default');
          processedContent = [{ text: '' }];
        } else if (blogData.content.length === 0) {
          console.warn('Content array is empty, creating default');
          processedContent = [{ text: '' }];
        } else {
          processedContent = blogData.content.map((section: any, index: number) => {
            console.log(`Processing section ${index}:`, section);
            return {
              heading: section.heading || '',
              text: section.text || '',
              image: section.image || ''
            };
          });
        }
        
        console.log('Processed content:', processedContent);
        
        // Format date for input[type="date"]
        let formattedDate = new Date().toISOString().split('T')[0];
        
        if (blogData.date) {
          try {
            const dateObj = new Date(blogData.date);
            if (!isNaN(dateObj.getTime())) {
              formattedDate = dateObj.toISOString().split('T')[0];
            }
          } catch (dateErr) {
            console.warn('Invalid date format, using today:', dateErr);
          }
        }
        
        // Create the final formatted blog object
        const formattedBlog: BlogData = {
          title: blogData.title || '',
          excerpt: blogData.excerpt || '',
          category: blogData.category || '',
          author: blogData.author || '',
          date: formattedDate,
          content: processedContent
        };
        
        console.log('=== FINAL FORMATTED BLOG (setting state) ===');
        console.log(JSON.stringify(formattedBlog, null, 2));
        
        setBlog(formattedBlog);
        setError('');
        
      } catch (err: any) {
        console.error('=== FETCH ERROR ===');
        console.error('Full error:', err);
        console.error('Error message:', err.message);
        console.error('Response status:', err.response?.status);
        console.error('Response data:', err.response?.data);
        
        const errorMessage = err.response?.data?.message 
          || err.message 
          || 'Failed to load blog';
        
        setError(errorMessage);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
        <Typography ml={2}>Loading blog...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={6} px={4}>
        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>Error Loading Blog</Typography>
          <Typography>{error}</Typography>
          <Typography variant="caption" display="block" mt={1}>
            Blog ID: {id}
          </Typography>
        </Alert>
      </Box>
    );
  }

  if (!blog) {
    return (
      <Box mt={6} px={4}>
        <Alert severity="warning">
          <Typography>Blog not found or data is empty</Typography>
          <Typography variant="caption" display="block" mt={1}>
            Blog ID: {id}
          </Typography>
        </Alert>
      </Box>
    );
  }

  // ✅ KEY FIX: Pass blog data as key to force re-mount when data loads
  return (
    <Box>
      <BlogForm 
        key={id} // Force remount when editing different blogs
        initialData={blog} 
        blogId={id!} 
      />
    </Box>
  );
};

export default BlogEdit;
import { useEffect, useState } from 'react';
import { Container, Typography, Button, Stack, Card, CardContent, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

interface Blog {
  _id: string;
  title: string;
  status: 'draft' | 'published';
  date: string;
}

const BlogList = () => {
  useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const res = await axios.get('/admin/blogs');
    setBlogs(res.data);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/admin/blogs/${id}`);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h3">Blogs</Typography>
        <Button variant="contained" onClick={() => navigate('/admin/blogs/create')}>
          Add Blog
        </Button>
      </Stack>
      <Stack spacing={2}>
        {blogs.map((blog) => (
          <Card key={blog._id}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">{blog.title}</Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary" onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(blog._id)}>
                  <Delete />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default BlogList;

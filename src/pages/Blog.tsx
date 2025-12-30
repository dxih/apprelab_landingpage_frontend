import { useEffect, useState } from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Chip, Stack, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:5000/api/blogs";

interface BlogSection {
  heading?: string;
  text?: string;
  image?: string;
}

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  content: BlogSection[];
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        setBlogs(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <Container sx={{ py: 10, textAlign: "center" }}><CircularProgress /></Container>;

  return (
    <Container sx={{ py: 7 }}>
      <Typography variant="h3" sx={{ mb: 6, fontWeight: 700 }}>
        apprelab™ Blog
      </Typography>

      <Box sx={{ display: "grid", gap: 6, gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" } }}>
        {blogs.map((post) => {
          const firstImage = post.content.find((c) => c.image)?.image;
          return (
            <Card key={post._id} sx={{ borderRadius: 3, background: "#F9FAFB", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
              {firstImage && (
                <CardMedia component="img" height="180" image={firstImage} alt={post.title} sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              )}
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip label={post.category} color="primary" size="small" />
                  <Typography variant="body2" sx={{ color: "#64748B" }}>
                    By {post.author} · {post.date}
                  </Typography>
                </Stack>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  {post.title}
                </Typography>

                <Typography sx={{ mb: 3, color: "#475569", lineHeight: 1.8 }}>
                  {post.excerpt}
                </Typography>

                <Button component={Link} to={`/blog/${post._id}`} sx={{ color: "#0057FF", fontWeight: 600 }}>
                  Read More →
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}

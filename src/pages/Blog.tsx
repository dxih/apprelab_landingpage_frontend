import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";

const API_BASE =
  "https://apprelab-landingpage-backend.onrender.com/api/blogs";

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
  image?: string; // top-level image if exists
  content: BlogSection[];
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_BASE);
        const json = await res.json();
        setBlogs(json.data || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ py: 7 }}>
      <Typography
        variant="h3"
        sx={{ mb: 6, fontWeight: 700, textAlign: "center" }}
      >
        apprelab™ Blog
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 6,
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        }}
      >
        {blogs.map((post) => {
          // 🔑 Use top-level image first, else fallback to first content image
          const imageUrl =
            post.image ||
            post.content?.find((section) => section.image)?.image ||
            "";

          return (
            <Card
              key={post._id}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: "#F9FAFB",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              {/* FULL IMAGE VISIBLE */}
              {imageUrl && (
                <CardMedia
                  component="img"
                  src={imageUrl}
                  alt={post.title}
                  sx={{
                    width: "100%",
                    height: "auto",      // automatic height
                    objectFit: "contain", // shows entire image
                    backgroundColor: "#F9FAFB", // optional: fills empty space
                  }}
                />
              )}

              {/* BLOG DETAILS */}
              <CardContent sx={{ p: 4 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
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

                <Button
                  component={Link}
                  to={`/blog/${post._id}`}
                  sx={{ px: 0, fontWeight: 600, color: "#0057FF" }}
                >
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

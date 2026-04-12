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
import PageHero from "../components/PageHero";

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
      <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
        <PageHero
          title={
            <>
              Latest <Box component="span" sx={{ color: "#FFD93D" }}>Insights</Box>
            </>
          }
          subtitle="Discover the latest trends, guides, and stories from the Apprelab community."
        />
        <Container sx={{ py: 10, textAlign: "center" }}>
          <CircularProgress />
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
      <PageHero
        title={
          <>
            Latest <Box component="span" sx={{ color: "#FACC15" }}>Insights</Box>
          </>
        }
        subtitle="Discover the latest trends, guides, and stories from the Apprelab community."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
                elevation={0}
                sx={{
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(203, 213, 225, 0.4)",
                  boxShadow: "0 12px 30px rgba(1, 10, 69, 0.04)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    transform: "translateY(-8px)", 
                    boxShadow: "0 20px 50px rgba(1, 10, 69, 0.1)" 
                  },
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
                      height: 240,
                      objectFit: "cover",
                      backgroundColor: "#F1F5F9",
                    }}
                  />
                )}

                {/* BLOG DETAILS */}
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 2.5 }}
                  >
                    <Chip label={post.category} sx={{ backgroundColor: "#FEF3C7", color: "#CA8A04", fontWeight: 600, fontFamily: "Poppins, sans-serif" }} size="small" />
                    <Typography variant="body2" sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
                      By {post.author} · {post.date}
                    </Typography>
                  </Stack>

                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: "Poppins, sans-serif" }}>
                    {post.title}
                  </Typography>

                  <Typography sx={{ mb: 3, color: "#475569", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
                    {post.excerpt}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/blog/${post._id}`}
                    sx={{ px: 0, fontWeight: 700, color: "#0057FF", fontFamily: "Poppins, sans-serif", textTransform: 'none', "&:hover": { background: "transparent", color: "#0B1C5D" } }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

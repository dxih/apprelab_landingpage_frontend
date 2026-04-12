import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReactMarkdown from "react-markdown";
import PageHero from "../components/PageHero";

const API_BASE = "https://apprelab-landingpage-backend.onrender.com/api/blogs";

interface Comment {
  name: string;
  comment: string;
  createdAt: string;
}

interface Blog {
  _id: string;
  title: string;
  content: { heading?: string; text?: string; image?: string }[];
  likes: number;
  shares: number;
  comments: Comment[];
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE}/${id}`);
        const data = await res.json();
        setBlog(data.data);
      } catch (err) {
        console.error("Failed to load blog", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
      <PageHero minHeight={{ xs: "30vh", md: "40vh" }} />
      <Container sx={{ py: 10, textAlign: "center" }}><CircularProgress /></Container>
    </Box>
  );

  if (!blog) return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
      <PageHero title="Post not found" minHeight={{ xs: "30vh", md: "40vh" }} />
    </Box>
  );

  const handleLike = async () => {
    if (liked) return;
    try {
      const res = await fetch(`${API_BASE}/${id}/like`, { method: "POST" });
      const data = await res.json();
      setBlog(data.data);
      setLiked(true);
    } catch (err) {
      console.error("Like failed", err);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await fetch(`${API_BASE}/${id}/share`, { method: "POST" });
      if (navigator.share) await navigator.share({ title: blog.title, url });
      else {
        await navigator.clipboard.writeText(url);
        alert("Link copied 🚀");
      }
      setBlog({ ...blog, shares: blog.shares + 1 });
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/${id}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: commentName || "Anonymous", comment: commentText }),
      });
      const data = await res.json();
      setBlog(data.data);
      setCommentText("");
      setCommentName("");
    } catch (err) {
      console.error("Comment failed", err);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 10 }}>
      <PageHero title={blog.title} minHeight={{ xs: "35vh", md: "45vh" }} />

      <Container maxWidth="md" sx={{ mt: { xs: -4, md: -8 }, position: 'relative', zIndex: 10 }}>
        <Box sx={{ background: "#FFFFFF", borderRadius: "40px", p: { xs: 4, md: 8 }, boxShadow: "0 20px 60px rgba(1, 10, 69, 0.05)", border: "1px solid rgba(203, 213, 225, 0.3)" }}>
          
          <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 5, pb: 3, borderBottom: "1px solid #E2E8F0" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton onClick={handleLike} sx={{ color: liked ? "#E11D48" : "#64748B", background: liked ? "#FFE4E6" : "#F1F5F9" }}>
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography sx={{ fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{blog.likes}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton sx={{ color: "#0057FF", background: "#EEF2FF" }}>
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Typography sx={{ fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{blog.comments.length}</Typography>
            </Stack>

            <IconButton onClick={handleShare} sx={{ color: "#64748B", background: "#F1F5F9" }}>
              <ShareIcon />
            </IconButton>
          </Stack>

          <Box sx={{ color: "#475569", lineHeight: 1.9, mb: 6, fontFamily: "Poppins, sans-serif", fontSize: "1.05rem" }}>
            {blog.content.map((section, i) => (
              <Box key={i} sx={{ mb: 4 }}>
                {section.image && <img src={section.image} alt="" style={{ width: "100%", marginTop: "1rem", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }} />}
                {section.heading && <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, mt: 4, fontFamily: "Poppins, sans-serif", color: "#010A45" }}>{section.heading}</Typography>}
                {section.text && <Box sx={{ "& p": { mb: 2 } }}><ReactMarkdown>{section.text}</ReactMarkdown></Box>}
              </Box>
            ))}
          </Box>

          {/* COMMENTS */}
          <Box sx={{ mt: 8, pt: 6, borderTop: "1px solid #E2E8F0" }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, fontFamily: "Poppins, sans-serif", color: "#010A45" }}>Comments</Typography>

            <Stack spacing={2} sx={{ mb: 5 }}>
              <TextField 
                placeholder="Your name (optional)" 
                value={commentName} 
                onChange={(e) => setCommentName(e.target.value)} 
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", fontFamily: "Poppins, sans-serif" } }} 
              />
              <TextField 
                placeholder="Write a comment…" 
                multiline minRows={3} 
                value={commentText} 
                onChange={(e) => setCommentText(e.target.value)} 
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", fontFamily: "Poppins, sans-serif" } }} 
              />
              <Button 
                variant="contained" 
                onClick={handleComment} 
                sx={{ alignSelf: "flex-end", background: "#0B1C5D", borderRadius: "12px", textTransform: 'none', fontWeight: 600, fontFamily: "Poppins, sans-serif", px: 3, py: 1.2, "&:hover": { background: "#09184A" } }}
              >
                Post Comment
              </Button>
            </Stack>

            {blog.comments.length === 0 && <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}>No comments yet. Be the first 👀</Typography>}

            <Stack spacing={3}>
              {blog.comments.map((comment, i) => (
                <Box key={i} sx={{ background: "#F8FAFC", p: 3, borderRadius: "16px", border: "1px solid #E2E8F0" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography sx={{ fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>{comment.name}</Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>{new Date(comment.createdAt).toLocaleString()}</Typography>
                  </Stack>
                  <Typography sx={{ color: "#475569", fontFamily: "Poppins, sans-serif" }}>{comment.comment}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

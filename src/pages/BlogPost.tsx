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

const API_BASE = "http://localhost:5000/api/blogs";

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

  if (loading) return <Container sx={{ py: 10, textAlign: "center" }}><CircularProgress /></Container>;
  if (!blog) return <Container sx={{ py: 10 }}>Post not found</Container>;

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
    <Container sx={{ py: 6, maxWidth: "md" }}>
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>{blog.title}</Typography>

      <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 6 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={handleLike} color={liked ? "error" : "default"}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{blog.likes}</Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <ChatBubbleOutlineIcon sx={{ color: "#64748B" }} />
          <Typography>{blog.comments.length}</Typography>
        </Stack>

        <IconButton onClick={handleShare}><ShareIcon /></IconButton>
      </Stack>

      <Box sx={{ color: "#475569", lineHeight: 1.9, mb: 6 }}>
        {blog.content.map((section, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            {section.heading && <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>{section.heading}</Typography>}
            {section.text && <ReactMarkdown>{section.text}</ReactMarkdown>}
            {section.image && <img src={section.image} alt="" style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }} />}
          </Box>
        ))}
      </Box>

      {/* COMMENTS */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Comments</Typography>

        <Stack spacing={2} sx={{ mb: 4 }}>
          <TextField placeholder="Your name (optional)" value={commentName} onChange={(e) => setCommentName(e.target.value)} />
          <TextField placeholder="Write a comment…" multiline minRows={3} value={commentText} onChange={(e) => setCommentText(e.target.value)} />
          <Button variant="contained" onClick={handleComment} sx={{ alignSelf: "flex-end" }}>Post Comment</Button>
        </Stack>

        {blog.comments.length === 0 && <Typography sx={{ color: "#64748B" }}>No comments yet. Be the first 👀</Typography>}

        <Stack spacing={2}>
          {blog.comments.map((comment, i) => (
            <Box key={i} sx={{ background: "#F8FAFC", p: 2, borderRadius: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontWeight: 600 }}>{comment.name}</Typography>
                <Typography variant="caption" sx={{ color: "#94A3B8" }}>{new Date(comment.createdAt).toLocaleString()}</Typography>
              </Stack>
              <Typography sx={{ color: "#475569", mt: 1 }}>{comment.comment}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

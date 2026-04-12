import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.name,  // Map 'name' to 'fullName'
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // Clear form
      } else {
        setError(data.message || "Failed to send message");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
      <PageHero
        title={
          <>
            Contact <Box component="span" sx={{ color: "#FFD93D" }}>Us</Box>
          </>
        }
        subtitle="Have questions? Want to partner with us? Send a message below."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="md" sx={{ mt: { xs: -4, md: -10 }, position: 'relative', zIndex: 10, pb: 12 }}>
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "40px",
            background: "#FFFFFF",
            border: "1px solid rgba(203, 213, 225, 0.5)",
            boxShadow: "0 20px 60px rgba(1, 10, 69, 0.08)",
            mx: "auto",
            maxWidth: "600px",
          }}
        >
          {error && (
            <Typography color="error" sx={{ mb: 3, fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
              {error}
            </Typography>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", fontFamily: "Poppins, sans-serif" } }}
            />

            <TextField
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", fontFamily: "Poppins, sans-serif" } }}
            />

            <TextField
              label="Message"
              multiline
              minRows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", fontFamily: "Poppins, sans-serif" } }}
            />

            <Button
              variant="contained"
              sx={{ 
                background: "#0B1C5D", 
                borderRadius: "14px", 
                py: 1.8, 
                textTransform: "none", 
                fontWeight: 700, 
                fontSize: "1.05rem", 
                fontFamily: "Poppins, sans-serif",
                mt: 1,
                "&:hover": { background: "#09184A" }
              }}
              onClick={submit}
              disabled={loading || !form.name || !form.email || !form.message}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
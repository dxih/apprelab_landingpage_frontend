import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

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
    <Container sx={{ py: 7 , pt: { xs: 4, md: 14 }}}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 , textAlign: "center"}}>
        Contact Us
      </Typography>

      <Typography sx={{ mb: 4, color: "#475569" , textAlign: "center" }}>
        Have questions? Want to partner with us? Send a message below.
      </Typography>

      <Box
        sx={{
          p: 5,
          borderRadius: 3,
          background: "#ffffff",
          boxShadow: "0 8px 30px #0002",
          maxWidth: "600px",
          alignItems: 'center',

        }}
      >
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <TextField
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <TextField
            label="Message"
            multiline
            minRows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <Button
            variant="contained"
            sx={{ background: "#0057FF" }}
            onClick={submit}
            disabled={loading || !form.name || !form.email || !form.message}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
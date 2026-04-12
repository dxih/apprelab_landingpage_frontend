import { Box, Container, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import PageHero from "../components/PageHero";

export default function HelpCenter() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            Help <Box component="span" sx={{ color: "#FFD93D" }}>Center</Box>
          </>
        }
        subtitle="We're here to help you navigate Apprelab. Find answers, tutorials, and support."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="md" sx={{ mt: { xs: "-40px", md: "-60px" }, position: "relative", zIndex: 10 }}>
        
        {/* HUGE SEARCH BAR */}
        <Box sx={{
          background: "#FFFFFF",
          borderRadius: "100px",
          p: { xs: 2, md: 3 },
          boxShadow: "0 25px 60px rgba(1, 10, 69, 0.08)",
          border: "1px solid rgba(203, 213, 225, 0.4)",
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 12
        }}>
          <SearchRoundedIcon sx={{ ml: 2, color: "#94A3B8", fontSize: 32 }} />
          <TextField
              fullWidth
              variant="standard"
              placeholder="Search for articles, guides, or FAQs..."
              InputProps={{ disableUnderline: true, sx: { fontSize: "1.2rem", fontFamily: "Poppins, sans-serif" } }}
          />
          <Button
            variant="contained"
            sx={{
              background: "#010A45",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "1rem",
              px: { xs: 3, md: 5 },
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              fontFamily: "Poppins, sans-serif",
              "&:hover": { background: "#0B1C5D" }
            }}
          >
            Search
          </Button>
        </Box>

        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#010A45", mb: 2, fontFamily: "Poppins, sans-serif" }}>
            Browse by Category
          </Typography>
        </Box>

        {/* CATEGORY GRID */}
        <Grid container spacing={4}>
            {[
                { title: "Getting Started", icon: <LibraryBooksRoundedIcon sx={{ fontSize: 40, color: "#0057FF" }} />, desc: "Learn how to set up your profile and enroll." },
                { title: "Payments & Earnings", icon: <PaymentRoundedIcon sx={{ fontSize: 40, color: "#10B981" }} />, desc: "Understand milestones and withdrawals." },
                { title: "Contact Support", icon: <SupportAgentRoundedIcon sx={{ fontSize: 40, color: "#FACC15" }} />, desc: "Talk to our dedicated human reps directly." },
            ].map((cat, i) => (
                <Grid item xs={12} md={4} key={i}>
                    <Paper elevation={0} sx={{
                        p: 4,
                        textAlign: "center",
                        borderRadius: "32px",
                        background: "#FFFFFF",
                        border: "1px solid rgba(203, 213, 225, 0.4)",
                        boxShadow: "0 12px 30px rgba(1, 10, 69, 0.04)",
                        transition: "all 0.3s ease",
                        "&:hover": { transform: "translateY(-8px)", boxShadow: "0 25px 50px rgba(1, 10, 69, 0.08)" }
                    }}>
                        <Box sx={{
                            width: 80, height: 80, mx: "auto", mb: 3, borderRadius: "24px",
                            background: "rgba(1, 10, 69, 0.04)", display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            {cat.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>
                            {cat.title}
                        </Typography>
                        <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>
                            {cat.desc}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>

      </Container>
    </Box>
  );
}

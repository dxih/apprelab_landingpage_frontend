import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import IP2 from "../assets/IP2.png";
import IP3 from "../assets/IP3.png";

export default function Partners() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            Our <Box component="span" sx={{ color: "#FFD93D" }}>Partners</Box>
          </>
        }
        subtitle="Apprelab works directly with industry-leading organizations to bridge the gap between learning and employment."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", mb: 3, fontFamily: "Poppins, sans-serif" }}>
            The Ecosystem of Innovation
          </Typography>
          <Typography sx={{ color: "#475569", fontSize: "1.1rem", maxWidth: 800, mx: "auto", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
            We align with visionary startups, enterprises, and educational bodies. Below are some of the active components integrated into our ecosystem.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 12, justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
                 <Paper elevation={0} sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: "40px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(203, 213, 225, 0.4)",
                    boxShadow: "0 12px 30px rgba(1, 10, 69, 0.04)",
                    textAlign: "center"
                 }}>
                    <Box component="img" src={IP2} alt="Partner Asset" sx={{ width: "100%", maxWidth: 300, display: "block", mx: "auto", mb: 4, borderRadius: "16px" }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>
                        Technical Integration Partners
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontSize: "1.05rem" }}>
                        Our platform securely hooks directly into the tools engineers already use, creating a flawless WorkLab environment.
                    </Typography>
                 </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                 <Paper elevation={0} sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: "40px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(203, 213, 225, 0.4)",
                    boxShadow: "0 12px 30px rgba(1, 10, 69, 0.04)",
                    textAlign: "center"
                 }}>
                    <Box component="img" src={IP3} alt="Partner Asset 2" sx={{ width: "100%", maxWidth: 300, display: "block", mx: "auto", mb: 4, borderRadius: "16px" }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>
                        Employment Verification
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontSize: "1.05rem" }}>
                        Partnered companies securely verify project completions to seamlessly transition candidates into full-time roles.
                    </Typography>
                 </Paper>
            </Grid>
        </Grid>

        <Box sx={{ textAlign: "center" }}>
            <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  background: "#010A45",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  px: 5,
                  py: 1.8,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": { background: "#0B1C5D" },
                  boxShadow: "0 10px 30px rgba(1, 10, 69, 0.2)"
                }}
            >
                Become a Partner
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

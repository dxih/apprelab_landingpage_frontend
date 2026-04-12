import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import learnerImg from "../assets/learner.png";

// Icons
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

export default function Learners() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            For <Box component="span" sx={{ color: "#FFD93D" }}>Learners</Box>
          </>
        }
        subtitle="Transform your theoretical knowledge into practical, hireable skills through verified real-world projects."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-50px", md: "-80px" }, position: "relative", zIndex: 10 }}>
        
        {/* HUGE IMAGERY HERO */}
        <Box sx={{
          background: "#FFFFFF",
          borderRadius: "40px",
          p: { xs: 4, md: 8 },
          boxShadow: "0 25px 60px rgba(1, 10, 69, 0.06)",
          border: "1px solid rgba(203, 213, 225, 0.4)",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          mb: 12
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", mb: 3, fontFamily: "Poppins, sans-serif", lineHeight: 1.2 }}>
              Stop watching tutorials.<br />Start <Box component="span" sx={{ color: "#0057FF" }}>shipping code.</Box>
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "1.1rem", mb: 5, lineHeight: 1.9, fontFamily: "Poppins, sans-serif" }}>
              Apprelab is your safe passage from 'tutorial hell' into the tech industry. Get matched with startups and established businesses, work alongside senior mentors, and actually get paid to learn.
            </Typography>
            
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 6 }}>
              <Box sx={{ background: "#EEF2FF", p: 2, borderRadius: "20px", display: "flex", alignItems: "center", gap: 2 }}>
                <CodeRoundedIcon sx={{ color: "#0057FF" }} />
                <Typography sx={{ fontWeight: 600, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>Engineering</Typography>
              </Box>
              <Box sx={{ background: "#FEF9C3", p: 2, borderRadius: "20px", display: "flex", alignItems: "center", gap: 2 }}>
                <DesignServicesRoundedIcon sx={{ color: "#CA8A04" }} />
                <Typography sx={{ fontWeight: 600, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>Product Design</Typography>
              </Box>
              <Box sx={{ background: "#FDF4FF", p: 2, borderRadius: "20px", display: "flex", alignItems: "center", gap: 2 }}>
                <CampaignRoundedIcon sx={{ color: "#C026D3" }} />
                <Typography sx={{ fontWeight: 600, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>Marketing</Typography>
              </Box>
            </Box>

            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  background: "#010A45",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "1rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": { background: "#0B1C5D" }
                }}
            >
                Enroll as a Learner
            </Button>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box component="img" src={learnerImg} alt="Learner" sx={{ width: "100%", maxWidth: "450px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }} />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

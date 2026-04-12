import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import mentorImg from "../assets/mentor.png";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

export default function Mentors() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            For <Box component="span" sx={{ color: "#FFD93D" }}>Mentors</Box>
          </>
        }
        subtitle="Monetize your expertise by guiding the next generation of tech talent through real-world builds."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-50px", md: "-80px" }, position: "relative", zIndex: 10 }}>
        
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
              Your knowledge is <Box component="span" sx={{ color: "#FACC15" }}>valuable.</Box><br />Let's put it to work.
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "1.1rem", mb: 5, lineHeight: 1.9, fontFamily: "Poppins, sans-serif" }}>
              Apprelab isn't just for learners; it's a scalable ecosystem for senior developers, designers, and marketers to build massive reputation and generate significant revenue.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ background: "#EEF2FF", p: 1.5, borderRadius: "16px", color: "#0057FF" }}><SchoolRoundedIcon /></Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>Create Courses</Typography>
                  <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>Publish premium micro-courses securely on our platform.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ background: "#FEF9C3", p: 1.5, borderRadius: "16px", color: "#CA8A04" }}><GroupRoundedIcon /></Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>Lead WorkLabs</Typography>
                  <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>Manage eager apprentices on actual business projects.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ background: "#FDF4FF", p: 1.5, borderRadius: "16px", color: "#C026D3" }}><StarsRoundedIcon /></Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>Earn Reputation</Typography>
                  <Typography sx={{ color: "#64748B", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>Become a recognized industry validator. Get endorsed globally.</Typography>
                </Box>
              </Box>
            </Box>

            <Button
                component={Link}
                to="/contact"
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
                Apply as a Mentor
            </Button>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box component="img" src={mentorImg} alt="Mentor" sx={{ width: "100%", maxWidth: "450px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }} />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

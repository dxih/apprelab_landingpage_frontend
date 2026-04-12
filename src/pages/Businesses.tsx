import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import businessImg from "../assets/business.png";

import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

export default function Businesses() {
  return (
    <Box sx={{ backgroundColor: "#010A45", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            For <Box component="span" sx={{ color: "#FFD93D" }}>Businesses</Box>
          </>
        }
        subtitle="Hire battle-tested talent that has already shipped the exact features you need built."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-50px", md: "-80px" }, position: "relative", zIndex: 10 }}>
        
        <Box sx={{
          background: "linear-gradient(135deg, #FFD93D, #FACC15)",
          borderRadius: "40px",
          p: { xs: 4, md: 8 },
          boxShadow: "0 25px 60px rgba(255, 217, 61, 0.2)",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          mb: 12
        }}>
           <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box component="img" src={businessImg} alt="Business" sx={{ width: "100%", maxWidth: "450px", filter: "drop-shadow(0 20px 40px rgba(1,10,69,0.3))" }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", mb: 3, fontFamily: "Poppins, sans-serif", lineHeight: 1.2 }}>
              Stop guessing on <br />resumes. <Box component="span" sx={{ color: "#000" }}>Hire proof.</Box>
            </Typography>
            <Typography sx={{ color: "#010A45", fontSize: "1.1rem", mb: 5, lineHeight: 1.9, fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
              At Apprelab, you don't just get access to active job seekers—you get vetted access to teams who are currently building live projects strictly validated by senior industry mentors.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ background: "rgba(1,10,69,0.1)", p: 1.5, borderRadius: "16px", color: "#010A45" }}><EngineeringRoundedIcon /></Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#010A45", fontFamily: "Poppins, sans-serif" }}>Post WorkLabs</Typography>
                  <Typography sx={{ color: "#010A45", opacity: 0.8, fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>Need an MVP built? Let our vetted teams do it affordably.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ background: "rgba(1,10,69,0.1)", p: 1.5, borderRadius: "16px", color: "#010A45" }}><ThumbUpAltRoundedIcon /></Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#010A45", fontFamily: "Poppins, sans-serif" }}>Direct Hiring</Typography>
                  <Typography sx={{ color: "#010A45", opacity: 0.8, fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>Hire the exact engineers and marketers who built your MVP.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ background: "rgba(1,10,69,0.1)", p: 1.5, borderRadius: "16px", color: "#010A45" }}><AutoGraphRoundedIcon /></Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#010A45", fontFamily: "Poppins, sans-serif" }}>Reduce Churn</Typography>
                  <Typography sx={{ color: "#010A45", opacity: 0.8, fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>Hire candidates who have already proven their exact skill sets.</Typography>
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
                Partner as a Business
            </Button>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

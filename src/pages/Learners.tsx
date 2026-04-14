import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import learnerImg from "../assets/learner.png";

// Icons
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

export default function Learners() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0, 87, 255, 0.1) 0%, transparent 50%)'
      }}
    >
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
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(20px)",
          borderRadius: "40px",
          p: { xs: 4, md: 8 },
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          mb: 12
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", lineHeight: 1.2, fontSize: { xs: '2.5rem', md: '3rem' } }}>
              Stop watching tutorials.<br />Start <Box component="span" sx={{ color: "#FFD93D" }}>shipping code.</Box>
            </Typography>
            <Typography sx={{ color: "#94A3B8", fontSize: "1.1rem", mb: 5, lineHeight: 1.9, fontFamily: "Poppins, sans-serif" }}>
              Apprelab is your safe passage from 'tutorial hell' into the tech industry. Get matched with startups and established businesses, work alongside senior mentors, and actually get paid to learn.
            </Typography>
            
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 6 }}>
              <Box sx={{ background: "rgba(0, 87, 255, 0.15)", p: 2, borderRadius: "20px", display: "flex", alignItems: "center", gap: 2, border: "1px solid rgba(0, 87, 255, 0.3)" }}>
                <CodeRoundedIcon sx={{ color: "#0057FF" }} />
                <Typography sx={{ fontWeight: 600, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>Engineering</Typography>
              </Box>
              <Box sx={{ background: "rgba(250, 204, 21, 0.15)", p: 2, borderRadius: "20px", display: "flex", alignItems: "center", gap: 2, border: "1px solid rgba(250, 204, 21, 0.3)" }}>
                <DesignServicesRoundedIcon sx={{ color: "#FACC15" }} />
                <Typography sx={{ fontWeight: 600, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>Product Design</Typography>
              </Box>
              <Box sx={{ background: "rgba(245, 183, 255, 0.15)", p: 2, borderRadius: "20px", display: "flex", alignItems: "center", gap: 2, border: "1px solid rgba(245, 183, 255, 0.3)" }}>
                <CampaignRoundedIcon sx={{ color: "#F5B7FF" }} />
                <Typography sx={{ fontWeight: 600, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>Marketing</Typography>
              </Box>
            </Box>

            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  background: "#FFD93D",
                  color: "#010A45",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  px: 5,
                  py: 2,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  boxShadow: "0 10px 30px rgba(255, 217, 61, 0.3)",
                  "&:hover": { background: "#FACC15", transform: "translateY(-2px)" },
                  transition: "all 0.3s ease"
                }}
            >
                Enroll as a Learner Now
            </Button>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box component="img" src={learnerImg} alt="Learner" sx={{ width: "100%", maxWidth: "450px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))" }} />
          </Box>
        </Box>

        {/* ROADMAP SECTION */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            Your Path to <Box component="span" sx={{ color: "#0057FF" }}>Mastery</Box>
          </Typography>
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" }, 
            gap: 4 
          }}>
            {[
              { icon: <SchoolRoundedIcon />, title: "Learn Bare Metal", desc: "No fluff. Just the raw, practical skills required to build real products.", color: "#0057FF" },
              { icon: <WorkRoundedIcon />, title: "Join WorkLab", desc: "Get matched with real startup tasks and internships. Build while you learn.", color: "#FACC15" },
              { icon: <VerifiedUserRoundedIcon />, title: "Get Mentored", desc: "Every line of code you write is validated by a senior industry expert.", color: "#F5B7FF" },
              { icon: <PaymentsRoundedIcon />, title: "Earn & Ship", desc: "Complete milestones, get paid, and build a verified cryptographical portfolio.", color: "#10B981" },
            ].map((step, i) => (
              <Box key={i} sx={{
                background: "rgba(255, 255, 255, 0.03)",
                p: 4,
                borderRadius: "32px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "center",
                transition: "all 0.3s ease",
                "&:hover": { background: "rgba(255, 255, 255, 0.06)", transform: "translateY(-8px)" }
              }}>
                <Box sx={{ 
                  width: 64, height: 64, mx: "auto", mb: 3, borderRadius: "20px",
                  background: `${step.color}20`, color: step.color, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {step.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>{step.title}</Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "Poppins, sans-serif" }}>{step.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FAQ SECTION */}
        <Box sx={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
          borderRadius: "40px",
          p: { xs: 5, md: 8 },
          border: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center"
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
            Got Questions?
          </Typography>
          <Typography sx={{ color: "#CBD5F5", mb: 5, maxWidth: 600, mx: "auto", fontFamily: "Poppins, sans-serif" }}>
            Check out our Help Center for detailed guides on how to make the most of your Apprelab journey.
          </Typography>
          <Button
            component={Link}
            to="/help-center"
            variant="outlined"
            sx={{
              borderColor: "#FFD93D",
              color: "#FFD93D",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 600,
              textTransform: "none",
              fontFamily: "Poppins, sans-serif",
              "&:hover": { borderColor: "#FFFFFF", color: "#FFFFFF" }
            }}
          >
            Visit Help Center
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

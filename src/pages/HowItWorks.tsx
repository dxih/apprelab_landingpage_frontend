import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const steps = [
  {
    num: "01",
    title: "Enroll & Learn",
    desc: "Join Apprelab and start learning practical skills via micro-courses designed to skip the fluff and teach you exactly what you need to build real stuff.",
    color: "#0057FF",
    bgColor: "#EEF2FF"
  },
  {
    num: "02",
    title: "Join a WorkLab",
    desc: "Once you have the basics down, transition into a WorkLab. Here you'll participate in real-world internships and freelance tasks posted by verified SMEs, supervised by senior mentors.",
    color: "#FACC15",
    bgColor: "#FEF9C3"
  },
  {
    num: "03",
    title: "Ship & Earn",
    desc: "Submit your work for review. If it meets the quality standards, it gets deployed. You earn your milestone payments and secure cryptographically verifiable proof of work.",
    color: "#F5B7FF",
    bgColor: "#FDF4FF"
  },
  {
    num: "04",
    title: "Get Hired",
    desc: "Your Apprelab profile becomes your ultimate resume. Companies actively recruit talent from our ecosystem based on proven, shipped projects.",
    color: "#10B981",
    bgColor: "#ECFDF5"
  }
];

export default function HowItWorks() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            How It <Box component="span" sx={{ color: "#FFD93D" }}>Works</Box>
          </>
        }
        subtitle="A clear, actionable path from a complete beginner to a highly-paid, globally recognized tech professional."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="md" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", fontFamily: "Poppins, sans-serif" }}>
            The Apprelab Journey
          </Typography>
        </Box>

        <Stack spacing={6} sx={{ position: "relative" }}>
          {/* Subtle vertical connector line */}
          <Box sx={{
            position: "absolute",
            left: { xs: 40, md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
            top: 40,
            bottom: 40,
            width: "4px",
            background: "linear-gradient(to bottom, #0057FF, #FACC15, #F5B7FF)",
            borderRadius: "4px",
            zIndex: 0,
            opacity: 0.3
          }} />

          {steps.map((step, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: idx % 2 === 0 ? "row" : "row-reverse" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box sx={{ flex: 1, textAlign: { xs: "left", md: idx % 2 === 0 ? "right" : "left" } }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#010A45", mb: 2, fontFamily: "Poppins, sans-serif" }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
                  {step.desc}
                </Typography>
              </Box>

              <Box sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: step.bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 10px 30px ${step.color}40`,
                border: `4px solid #FFFFFF`,
                flexShrink: 0
              }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: step.color, fontFamily: "Poppins, sans-serif" }}>
                  {step.num}
                </Typography>
              </Box>

              <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
            </Box>
          ))}
        </Stack>

        <Box sx={{ mt: 14, textAlign: "center" }}>
           <Box sx={{
              background: "#010A45",
              borderRadius: "40px",
              p: { xs: 5, md: 8 },
              boxShadow: "0 25px 50px rgba(1, 10, 69, 0.2)",
           }}>
             <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
                Ready to Start Your Journey?
             </Typography>
             <Typography sx={{ color: "#CBD5F5", mb: 5, fontSize: "1.1rem", fontFamily: "Poppins, sans-serif" }}>
                Stop learning endlessly. Start building. Start earning.
             </Typography>
             <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  background: "#FFD93D",
                  color: "#010A45",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  px: 5,
                  py: 1.8,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": { background: "#FACC15" }
                }}
             >
                Join the Waitlist Now
             </Button>
           </Box>
        </Box>
      </Container>
    </Box>
  );
}

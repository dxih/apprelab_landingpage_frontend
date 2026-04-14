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
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(
            600px 300px at 0% 0%,
            rgba(0, 87, 255, 0.15),
            transparent 70%
          ),
          radial-gradient(
            500px 400px at 100% 100%,
            rgba(250, 204, 21, 0.1),
            transparent 70%
          )
        `
      }}
    >
      <PageHero
        title={
          <>
            How It <Box component="span" sx={{ color: "#FFD93D" }}>Works</Box>
          </>
        }
        subtitle="A clear, actionable path from a complete beginner to a highly-paid, globally recognized tech professional."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              color: "#FFFFFF", 
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2
            }}
          >
            The Apprelab Journey
          </Typography>
          <Typography 
            sx={{ 
              color: "#94A3B8", 
              fontSize: "1.2rem", 
              maxWidth: "700px", 
              mx: "auto",
              fontFamily: "Poppins, sans-serif"
            }}
          >
            We've engineered a frictionless pipeline that takes you from total novice to industry-ready pro.
          </Typography>
        </Box>

        <Stack spacing={{ xs: 8, md: 12 }} sx={{ position: "relative" }}>
          {/* Subtle vertical connector line */}
          <Box sx={{
            position: "absolute",
            left: { xs: 25, md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
            top: 40,
            bottom: 40,
            width: "2px",
            background: "linear-gradient(to bottom, #0057FF, #FACC15, #F5B7FF, #10B981)",
            borderRadius: "4px",
            zIndex: 0,
            opacity: 0.4
          }} />

          {steps.map((step, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: { 
                  xs: "row", 
                  md: idx % 2 === 0 ? "row" : "row-reverse" 
                },
                alignItems: "flex-start",
                gap: { xs: 3, md: 8 },
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Desktop: Text side (alternating) | Mobile: Content side (always right) */}
              <Box sx={{ 
                flex: 1, 
                order: { xs: 2, md: 1 },
                textAlign: { xs: "left", md: idx % 2 === 0 ? "right" : "left" },
                pt: { xs: 0, md: 1 }
              }}>
                <Box sx={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "24px",
                  p: { xs: 3, md: 5 },
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.05)",
                    transform: "translateY(-5px)",
                    borderColor: "rgba(255, 255, 255, 0.1)"
                  }
                }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 800, 
                      color: "#FFFFFF", 
                      mb: 2, 
                      fontFamily: "Poppins, sans-serif",
                      fontSize: { xs: '1.25rem', md: '2rem' }
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: "#CBD5F5", 
                      fontSize: { xs: "0.85rem", md: "1.1rem" }, 
                      lineHeight: 1.8, 
                      fontFamily: "Poppins, sans-serif" 
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Box>

              {/* Number Circle: Mobile (Left), Desktop (Centered and alternating) */}
              <Box sx={{
                width: { xs: 50, md: 80 },
                height: { xs: 50, md: 80 },
                borderRadius: "50%",
                background: "#010A45",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 40px ${step.color}30`,
                border: `3px solid ${step.color}`,
                flexShrink: 0,
                position: 'relative',
                zIndex: 2,
                order: { xs: 1, md: 2 }
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    color: step.color, 
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: '1.2rem', md: '2rem' }
                  }}
                >
                  {step.num}
                </Typography>
              </Box>

              {/* Spacer for desktop symmetry */}
              <Box sx={{ flex: 1, order: 3, display: { xs: "none", md: "block" } }} />
            </Box>
          ))}
        </Stack>

        {/* Final CTA */}
        <Box sx={{ mt: 16, textAlign: "center" }}>
           <Box sx={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "40px",
              p: { xs: 6, md: 10 },
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
           }}>
             <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", fontSize: { xs: '2rem', md: '3rem' } }}>
                Ready to Start Your <br />Journey?
             </Typography>
             <Typography sx={{ color: "#94A3B8", mb: 6, fontSize: "1.2rem", fontFamily: "Poppins, sans-serif", maxWidth: '600px', mx: 'auto' }}>
                Stop learning endlessly. Start building. Start earning. Join the waitlist and secure your spot.
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
                  px: 6,
                  py: 2,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  boxShadow: "0 10px 30px rgba(255, 217, 61, 0.3)",
                  "&:hover": { 
                    background: "#FACC15",
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 40px rgba(255, 217, 61, 0.4)"
                  },
                  transition: "all 0.3s ease"
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

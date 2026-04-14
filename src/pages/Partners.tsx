import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import IP2 from "../assets/IP2.png";
import IP3 from "../assets/IP3.png";

export default function Partners() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(255, 217, 61, 0.05) 0%, transparent 50%)'
      }}
    >
      <PageHero
        title={
          <>
            Our <Box component="span" sx={{ color: "#FFD93D" }}>Partners</Box>
          </>
        }
        subtitle="Apprelab works directly with industry-leading organizations to bridge the gap between learning and employment."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-40px", md: "-60px" }, position: "relative", zIndex: 10 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            The Ecosystem of Innovation
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.2rem", maxWidth: 800, mx: "auto", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
            We align with visionary startups, enterprises, and educational bodies to build a verifiable talent pipeline for the digital economy.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 12 }}>
            <Grid item xs={12} md={6}>
                 <Paper elevation={0} sx={{
                    p: { xs: 4, md: 8 },
                    borderRadius: "40px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    textAlign: "center",
                    height: '100%',
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-8px)", background: "rgba(255, 255, 255, 0.05)" }
                 }}>
                    <Box component="img" src={IP2} alt="Partner Asset" sx={{ width: "100%", maxWidth: 300, display: "block", mx: "auto", mb: 6, borderRadius: "24px", filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }} />
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>
                        Technical Integration
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}>
                        Our platform hooks directly into the tools engineers already use (GitHub, Slack, AWS), creating a frictionless WorkLab environment for real-world execution.
                    </Typography>
                 </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                 <Paper elevation={0} sx={{
                    p: { xs: 4, md: 8 },
                    borderRadius: "40px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    textAlign: "center",
                    height: '100%',
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-8px)", background: "rgba(255, 255, 255, 0.05)" }
                 }}>
                    <Box component="img" src={IP3} alt="Partner Asset 2" sx={{ width: "100%", maxWidth: 300, display: "block", mx: "auto", mb: 6, borderRadius: "24px", filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }} />
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>
                        Talent Verification
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}>
                        Partnered companies securely verify project completions on-chain, allowing for a trustless transition from mentored learning to full-time employment.
                    </Typography>
                 </Paper>
            </Grid>
        </Grid>

        {/* PARTNER TIERS */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            Partner <Box component="span" sx={{ color: "#FFD93D" }}>Tiers</Box>
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <HandshakeRoundedIcon />, title: "Corporate Partner", desc: "For enterprises looking to build steady talent pipelines and outsource micro-tasks.", color: "#0057FF" },
              { icon: <CloudDoneRoundedIcon />, title: "Tech Provider", desc: "For SaaS/Infrastructure companies looking for early adoption and integration.", color: "#FACC15" },
              { icon: <HubRoundedIcon />, title: "Academic Body", desc: "For universities and bootcamps wanting to provide real-world internships to students.", color: "#F5B7FF" },
            ].map((tier, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{
                  background: "rgba(255, 255, 255, 0.02)",
                  p: 5,
                  borderRadius: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}>
                  <Box sx={{ 
                    width: 64, height: 64, mx: "auto", mb: 3, borderRadius: "20px",
                    background: `${tier.color}20`, color: tier.color, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {tier.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>{tier.title}</Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: "Poppins, sans-serif" }}>{tier.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ 
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          borderRadius: "40px",
          p: { xs: 6, md: 10 },
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
            <VerifiedRoundedIcon sx={{ fontSize: 60, color: "#10B981", mb: 4 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", fontSize: { xs: '2rem', md: '3rem' } }}>
                Ready to Join the Movement?
            </Typography>
            <Typography sx={{ color: "#94A3B8", mb: 6, fontSize: "1.2rem", maxWidth: 700, mx: "auto", fontFamily: "Poppins, sans-serif" }}>
                Let's discuss how we can integrate your organization into the Apprelab ecosystem and build a better future for talent together.
            </Typography>
            <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  background: "#FFD93D",
                  color: "#010A45",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  px: 6,
                  py: 2,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  boxShadow: "0 10px 30px rgba(255, 217, 61, 0.3)",
                  "&:hover": { background: "#FACC15", transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease'
                }}
            >
                Become a Partner
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

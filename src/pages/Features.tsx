import { Box, Container, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

// Icons
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";

// Images
import LWE1 from "../assets/LWE1.png";
import IP1 from "../assets/IP1.png";

const featuresData = [
  {
    icon: <SchoolRoundedIcon sx={{ fontSize: 40, color: "#FFD93D" }} />,
    title: "Practical Micro-Courses",
    desc: "Bite-sized, high-impact lessons designed to get you building immediately. No fluff, just pure actionable knowledge tailored to market demand.",
    color: "#FFD93D"
  },
  {
    icon: <WorkRoundedIcon sx={{ fontSize: 40, color: "#F5B7FF" }} />,
    title: "Live WorkLab Projects",
    desc: "Gain guaranteed hands-on experience working directly with verified SMEs on actual live problems. Build your portfolio while you learn.",
    color: "#F5B7FF"
  },
  {
    icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 40, color: "#0057FF" }} />,
    title: "Earn as You Learn",
    desc: "Complete paid milestones within your internships or WorkLabs. Transition smoothly from learning core concepts to making actual revenue.",
    color: "#0057FF"
  },
  {
    icon: <SupervisorAccountRoundedIcon sx={{ fontSize: 40, color: "#FFD93D" }} />,
    title: "Elite Mentorship",
    desc: "Get paired with vetted industry experts who will review your code, refine your strategies, and accelerate your path to digital mastery.",
    color: "#FFD93D"
  },
  {
    icon: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 40, color: "#F5B7FF" }} />,
    title: "Seamless Tool Integration",
    desc: "Work in the same environments the pros use. Our platform seamlessly binds with GitHub, Figma, Jira, and major CI/CD pipelines.",
    color: "#F5B7FF"
  },
  {
    icon: <SecurityRoundedIcon sx={{ fontSize: 40, color: "#0057FF" }} />,
    title: "Verified Skill Badges",
    desc: "Earn cryptographically secure credentials backed by your actual project commits and mentor approvals. Showcase proof of work instantly.",
    color: "#0057FF"
  },
];

export default function Features() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh",
        pb: 12,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(0, 87, 255, 0.1) 0%, transparent 50%)'
      }}
    >
      <PageHero
        title={
          <>
            Platform <Box component="span" sx={{ color: "#FFD93D" }}>Features</Box>
          </>
        }
        subtitle="Discover the ultimate integrated ecosystem. Everything you need to Learn, Work, and Earn in the tech industry—all in one place."
        minHeight={{ xs: "40vh", md: "50vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-40px", md: "-60px" }, position: "relative", zIndex: 10 }}>
        
        {/* INTRO TEXT */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Engineered for Your Success
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.2rem", maxWidth: 800, mx: "auto", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
            We've stripped away the noise of traditional education and built a streamlined engine designed for one purpose: turning ambition into viable, real-world skills and income.
          </Typography>
        </Box>

        {/* GRID OF FEATURES */}
        <Grid container spacing={4} sx={{ mb: 16 }}>
          {featuresData.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  p: 5,
                  height: "100%",
                  borderRadius: "40px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    background: "rgba(255, 255, 255, 0.04)",
                    borderColor: "rgba(255, 255, 255, 0.1)"
                  },
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "20px",
                    background: `${feature.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 4,
                    color: feature.color
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "#94A3B8", lineHeight: 1.8, fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* TECHNOLOGICAL EDGE SECTION */}
        <Box sx={{
            mb: 16,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
            borderRadius: "48px",
            p: { xs: 6, md: 10 },
            border: "1px solid rgba(255, 255, 255, 0.05)"
        }}>
            <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} md={6}>
                    <TerminalRoundedIcon sx={{ fontSize: 60, color: "#10B981", mb: 4 }} />
                    <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
                        The Technological <Box component="span" sx={{ color: "#10B981" }}>Edge</Box>
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", fontSize: "1.1rem", mb: 4, lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
                        Apprelab isn't just a site; it's an infrastructure. We provide pre-configured dev environments, direct API hooks to SME platforms, and cryptographical proof-of-work validation.
                    </Typography>
                    <Stack spacing={3}>
                        {[
                            "Direct GitHub & GitLab integration for commits",
                            "Real-time mentor code review within the platform",
                            "On-chain verification of project milestones"
                        ].map((item, i) => (
                            <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
                                <Typography sx={{ color: '#FFFFFF', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>{item}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={LWE1} sx={{ width: "100%", borderRadius: "32px", filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }} />
                </Grid>
            </Grid>
        </Box>

        {/* ECOSYSTEM SYNERGY */}
        <Box sx={{
            mb: 16,
            textAlign: "center"
        }}>
            <HubRoundedIcon sx={{ fontSize: 60, color: "#F5B7FF", mb: 4 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
                Ecosystem <Box component="span" sx={{ color: "#F5B7FF" }}>Synergy</Box>
            </Typography>
            <Typography sx={{ color: "#94A3B8", fontSize: "1.2rem", maxWidth: 800, mx: "auto", mb: 10, fontFamily: "Poppins, sans-serif" }}>
                How our core components interact to create a recursive loop of growth and opportunity.
            </Typography>
            <Grid container spacing={4}>
                {[
                    { title: "Recursive Learning", desc: "Every project you complete feeds back into your learning path, unlocking higher-tier WorkLabs.", color: "#0057FF" },
                    { title: "Reputation Mining", desc: "Build undeniable proof of your work. Your Apprelab reputation score becomes your global CV.", color: "#FACC15" },
                    { title: "SME Acceleration", desc: "Businesses grow faster by leveraging mentored talent, who in turn gain high-level expertise.", color: "#F5B7FF" }
                ].map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Paper elevation={0} sx={{
                            p: 6,
                            borderRadius: "40px",
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Typography variant="h5" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 2, fontFamily: "Poppins, sans-serif" }}>{item.title}</Typography>
                            <Typography sx={{ color: "#94A3B8", lineHeight: 1.7, fontFamily: "Poppins, sans-serif" }}>{item.desc}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* FINAL CTA */}
        <Box sx={{ 
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          borderRadius: "40px",
          p: { xs: 6, md: 10 },
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
                Ready to Experience the Platform?
            </Typography>
            <Typography sx={{ color: "#94A3B8", mb: 6, fontSize: "1.2rem", maxWidth: 700, mx: "auto", fontFamily: "Poppins, sans-serif" }}>
                Join our private waitlist to be among the first to explore the integrated Apprelab dashboard.
            </Typography>
            <Button
                component={Link}
                to="/"
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
                Join the Waitlist Now
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

// Icons
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

// Images
import LWE1 from "../assets/LWE1.png";
import IP1 from "../assets/IP1.png";

const featuresData = [
  {
    icon: <SchoolRoundedIcon sx={{ fontSize: 40, color: "#FFD93D" }} />,
    title: "Practical Micro-Courses",
    desc: "Bite-sized, high-impact lessons designed to get you building immediately. No fluff, just pure actionable knowledge tailored to market demand.",
  },
  {
    icon: <WorkRoundedIcon sx={{ fontSize: 40, color: "#F5B7FF" }} />,
    title: "Live WorkLab Projects",
    desc: "Gain guaranteed hands-on experience working directly with verified SMEs on actual live problems. Build your portfolio while you learn.",
  },
  {
    icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 40, color: "#0057FF" }} />,
    title: "Earn as You Learn",
    desc: "Complete paid milestones within your internships or WorkLabs. Transition smoothly from learning core concepts to making actual revenue.",
  },
  {
    icon: <SupervisorAccountRoundedIcon sx={{ fontSize: 40, color: "#FFD93D" }} />,
    title: "Elite Mentorship",
    desc: "Get paired with vetted industry experts who will review your code, refine your strategies, and accelerate your path to digital mastery.",
  },
  {
    icon: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 40, color: "#F5B7FF" }} />,
    title: "Seamless Tool Integration",
    desc: "Work in the same environments the pros use. Our platform seamlessly binds with GitHub, Figma, Jira, and major CI/CD pipelines.",
  },
  {
    icon: <SecurityRoundedIcon sx={{ fontSize: 40, color: "#0057FF" }} />,
    title: "Verified Skill Badges",
    desc: "Earn cryptographically secure credentials backed by your actual project commits and mentor approvals. Showcase proof of work instantly.",
  },
];

export default function Features() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
      <PageHero
        title={
          <>
            Platform <Box component="span" sx={{ color: "#FFD93D" }}>Features</Box>
          </>
        }
        subtitle="Discover the ultimate integrated ecosystem. Everything you need to Learn, Work, and Earn in the tech industry—all in one place."
        minHeight={{ xs: "40vh", md: "50vh" }}
      />

      <Box sx={{ py: { xs: 10, md: 16 }, position: "relative" }}>
        <Container maxWidth="lg">
          
          {/* INTRO TEXT */}
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", mb: 3, fontFamily: "Poppins, sans-serif" }}>
              Engineered for Your Success
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "1.1rem", maxWidth: 800, mx: "auto", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
              We've stripped away the noise of traditional education and built a streamlined engine designed for one purpose: turning ambition into viable, real-world skills and income.
            </Typography>
          </Box>

          {/* GRID OF FEATURES */}
          <Grid container spacing={4} sx={{ mb: 16 }}>
            {featuresData.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "35px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(203, 213, 225, 0.4)",
                    boxShadow: "0 12px 30px rgba(1, 10, 69, 0.04)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 25px 50px rgba(1, 10, 69, 0.1)",
                      borderColor: "transparent"
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "24px",
                      background: "#010A45",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 4,
                      boxShadow: "0 10px 25px rgba(1, 10, 69, 0.2)",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#1E293B", fontFamily: "Poppins, sans-serif" }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: "#64748B", lineHeight: 1.8, fontFamily: "Poppins, sans-serif" }}>
                    {feature.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* DYNAMIC SHOWCASE ONE */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 6, md: 10 },
              mb: 16,
              background: "#FFFFFF",
              borderRadius: "40px",
              p: { xs: 4, md: 8 },
              boxShadow: "0 20px 60px rgba(1, 10, 69, 0.05)",
              border: "1px solid rgba(203, 213, 225, 0.3)"
            }}
          >
            <Box sx={{ flex: 1, position: "relative" }}>
              <Box
                component="img"
                src={LWE1}
                alt="Learn"
                sx={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  right: -30,
                  width: 150,
                  height: 150,
                  background: "radial-gradient(circle, #FFE680 0%, transparent 70%)",
                  zIndex: -1,
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", mb: 3, fontFamily: "Poppins, sans-serif" }}>
                Learn with <Box component="span" sx={{ color: "#0057FF" }}>Purpose</Box>
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "1.1rem", mb: 4, lineHeight: 1.9, fontFamily: "Poppins, sans-serif" }}>
                Our micro-courses are deeply integrated with current industry demands. Stop watching generic tutorials and start building features that will actually be used by real people.
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFD93D", fontFamily: "Poppins, sans-serif" }}>250+</Typography>
                  <Typography sx={{ color: "#64748B", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>Modules</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#0057FF", fontFamily: "Poppins, sans-serif" }}>98%</Typography>
                  <Typography sx={{ color: "#64748B", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>Completion Rate</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* DYNAMIC SHOWCASE TWO */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              gap: { xs: 6, md: 10 },
              mb: 16,
              background: "#010A45",
              borderRadius: "40px",
              p: { xs: 4, md: 8 },
              boxShadow: "0 30px 60px rgba(1, 10, 69, 0.2)",
              color: "#FFFFFF",
              position: "relative",
              overflow: "hidden"
            }}
          >
             <Box sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 500,
                height: 500,
                background: "radial-gradient(circle, rgba(0,87,255,0.3) 0%, transparent 70%)",
                zIndex: 0,
              }} />
              
            <Box sx={{ flex: 1, position: "relative", zIndex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, fontFamily: "Poppins, sans-serif" }}>
                Build a <Box component="span" sx={{ color: "#FFD93D" }}>Verified Portfolio</Box>
              </Typography>
              <Typography sx={{ color: "#CBD5F5", fontSize: "1.1rem", mb: 4, lineHeight: 1.9, fontFamily: "Poppins, sans-serif" }}>
                Every project you complete, every bug you squash, and every feature you deploy is tracked, mentor-verified, and permanently hosted on your professional Apprelab profile. 
              </Typography>
              <Button
                component={Link}
                to="/how-it-works"
                variant="contained"
                sx={{
                  background: "#FFD93D",
                  color: "#010A45",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": { background: "#FACC15" }
                }}
              >
                See How It Works
              </Button>
            </Box>
            <Box sx={{ flex: 1, position: "relative", zIndex: 1, textAlign: 'center' }}>
              <Box
                component="img"
                src={IP1}
                alt="Integrations"
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                }}
              />
            </Box>
          </Box>

        </Container>
      </Box>
    </Box>
  );
}

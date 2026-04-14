import { Box, Container, Typography, Button, Stack, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DiscordIcon from "@mui/icons-material/ForumRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

export default function Community() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)'
      }}
    >
      <PageHero
        title={
          <>
            The <Box component="span" sx={{ color: "#FFD93D" }}>Community</Box>
          </>
        }
        subtitle="Join thousands of fellow learners, world-class mentors, and leading SMEs building the future collectively."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-40px", md: "-60px" }, position: "relative", zIndex: 10 }}>
        
        {/* HERO CARD */}
        <Box sx={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          backdropFilter: "blur(20px)",
          borderRadius: "40px",
          p: { xs: 5, md: 10 },
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
          mb: 16
        }}>
          <GroupsRoundedIcon sx={{ fontSize: { xs: 60, md: 100 }, color: "#FFD93D", mb: 4 }} />
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              10,000+ Strong.
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.2rem", mb: 6, lineHeight: 1.8, fontFamily: "Poppins, sans-serif", maxWidth: 700, mx: "auto" }}>
              Our community is the heartbeat of Apprelab. It’s where questions are answered, code is debuted, teams are formed, and lifelong professional relationships are forged.
          </Typography>
          
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="center" sx={{ mb: 8 }}>
              <Button
                  variant="contained"
                  startIcon={<DiscordIcon />}
                  sx={{
                    background: "#5865F2", 
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    px: 6,
                    py: 2,
                    borderRadius: "16px",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    "&:hover": { background: "#4752C4", transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease'
                  }}
              >
                  Join our Discord
              </Button>
              <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    px: 6,
                    py: 2,
                    borderRadius: "16px",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    "&:hover": { borderColor: "#FFFFFF", background: "rgba(255,255,255,0.05)", transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease'
                  }}
              >
                  Host an Event
              </Button>
          </Stack>
        </Box>

        {/* SOCIAL CHANNELS */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            Connect <Box component="span" sx={{ color: "#FFD93D" }}>Everywhere</Box>
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: "WhatsApp", icon: <WhatsAppIcon sx={{ fontSize: 40 }} />, color: "#25D366", desc: "Join our active mobile groups for instant updates and local meetups." },
              { title: "LinkedIn", icon: <LinkedInIcon sx={{ fontSize: 40 }} />, color: "#0A66C2", desc: "Follow our professional page for industry news and success stories." },
              { title: "Slack", icon: <MessageRoundedIcon sx={{ fontSize: 40 }} />, color: "#4A154B", desc: "Dedicated workspace for project collaboration and mentor support." },
            ].map((social, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper elevation={0} sx={{
                  p: 5,
                  borderRadius: "40px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-8px)", background: "rgba(255, 255, 255, 0.06)" }
                }}>
                  <Box sx={{ 
                    width: 72, height: 72, mx: "auto", mb: 3, borderRadius: "20px",
                    background: `${social.color}15`, color: social.color, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {social.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>{social.title}</Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: "Poppins, sans-serif" }}>{social.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ACTIVITIES SECTION */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            What We Do <Box component="span" sx={{ color: "#FFD93D" }}>Together</Box>
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <EventAvailableRoundedIcon />, title: "Weekly Meetups", desc: "Virtual and physical hangouts to discuss new tech and career growth." },
              { icon: <HandshakeRoundedIcon />, title: "Hackathons", desc: "Build MVP-ready products in 48 hours with teams and mentors." },
              { icon: <SchoolRoundedIcon />, title: "Study Groups", desc: "Peer-led learning circles for mastering complex micro-courses." },
            ].map((activity, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ display: "flex", gap: 3, alignItems: 'flex-start' }}>
                  <Box sx={{ 
                    width: 56, height: 56, borderRadius: "16px", background: "rgba(255, 217, 61, 0.1)", 
                    color: "#FFD93D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
                  }}>
                    {activity.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 1, fontFamily: "Poppins, sans-serif" }}>{activity.title}</Typography>
                    <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.6, fontFamily: "Poppins, sans-serif" }}>{activity.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DiscordIcon from "@mui/icons-material/ForumRounded";

export default function Community() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 16 }}>
      <PageHero
        title={
          <>
            The <Box component="span" sx={{ color: "#FFD93D" }}>Community</Box>
          </>
        }
        subtitle="Join thousands of fellow learners, world-class mentors, and leading SMEs building the future collectively."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="md" sx={{ mt: { xs: 8, md: 10 } }}>
        <Box sx={{
          background: "linear-gradient(135deg, #010A45 0%, #0B1C5D 100%)",
          borderRadius: "40px",
          p: { xs: 5, md: 8 },
          boxShadow: "0 25px 60px rgba(1, 10, 69, 0.2)",
          color: "#FFFFFF",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
           <Box sx={{
                position: "absolute",
                top: -50,
                left: -50,
                width: 300,
                height: 300,
                background: "radial-gradient(circle, rgba(255, 217, 61, 0.15) 0%, transparent 70%)",
                zIndex: 0,
           }} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <GroupsRoundedIcon sx={{ fontSize: 80, color: "#FFD93D", mb: 3 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, fontFamily: "Poppins, sans-serif" }}>
                10,000+ Strong.
            </Typography>
            <Typography sx={{ color: "#CBD5F5", fontSize: "1.1rem", mb: 5, lineHeight: 1.8, fontFamily: "Poppins, sans-serif", maxWidth: 600, mx: "auto" }}>
                Our community is the heartbeat of Apprelab. It’s where questions are answered, code is debuted, teams are formed, and lifeling professional relationships are forged.
            </Typography>
            
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="center">
                <Button
                    variant="contained"
                    startIcon={<DiscordIcon />}
                    sx={{
                    background: "#5865F2", // Discord color
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: "16px",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    "&:hover": { background: "#4752C4" }
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
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: "16px",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    "&:hover": { borderColor: "#FFFFFF", background: "rgba(255,255,255,0.05)" }
                    }}
                >
                    Host an Event
                </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

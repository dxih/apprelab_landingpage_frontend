import { Box, Container, Typography, Avatar, Paper, IconButton, Chip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter"; // X icon
import PageHero from "../components/PageHero";

// IMPORT IMAGES (adjust paths if needed)
import ceoImg from "../assets/members/CEO.jpg";
import cooImg from "../assets/members/COO.jpg";
import ctoImg from "../assets/members/CTO.png";
import amakaImg from "../assets/members/Designer.jpg";
import marketingImg from "../assets/members/Marketing.jpg";

// TEAM DATA
const TEAM_MEMBERS = [
  { name: "Harry Achugasim", role: "CEO", image: ceoImg, linkedin: "https://www.linkedin.com/in/harry-achugasim-959404225", x: "https://x.com/HAchugasim" },
  { name: "Chibueze Joshua", role: "Co-founder / COO", image: cooImg, linkedin: "https://www.linkedin.com/in/chibueze-joshua?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", x: "https://x.com/ChibuezejoshuaO?t=kNa8B-1KJ7Ha8sFv06BZjw&s=09" },
  { name: "Kamsiyochukwu B Mebuge", role: "Tech Lead", image: ctoImg, linkedin: "Https://www.linkedin.com/in/kamsiyochukwu-mebuge ", x: "https://x.com/Brendanmebson", github: "Https://www.github.com/brendanmebson" },
  { name: "Amaka Maduechesi", role: "Product Design Lead", image: amakaImg, linkedin: "https://www.linkedin.com/in/chioma-maduechesi-ab7920243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Stanley Williams", role: "Marketing / Brand Designer Lead", image: marketingImg, linkedin: "https://www.linkedin.com/in/enibodesign", x: "https://x.com/enibodesign" },
];

// SORTING BY ROLE
const sortByRole = (members: typeof TEAM_MEMBERS) => {
  const priority = ["CEO", "COO", "Lead"];
  return [...members].sort((a, b) => {
    const aIndex = priority.findIndex((p) => a.role.toLowerCase().includes(p.toLowerCase()));
    const bIndex = priority.findIndex((p) => b.role.toLowerCase().includes(p.toLowerCase()));
    return aIndex - bIndex;
  });
};

// CARD SECTION RENDERER
const renderSection = (title: string, members: typeof TEAM_MEMBERS) => {
  const sortedMembers = sortByRole(members);
  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h3" sx={{ mb: 6, fontWeight: 700, color: "#010A45", textAlign: "center", fontFamily: 'Poppins, sans-serif' }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
        {sortedMembers.map((member) => (
          <Paper
            key={member.name}
            elevation={0}
            sx={{
              width: 260,
              textAlign: "center",
              borderRadius: "35px",
              p: 4,
              backgroundColor: "#FFFFFF",
              border: member.role.toLowerCase().includes("ceo") ? "3px solid #FFD93D" : "1px solid rgba(203, 213, 225, 0.5)",
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(1, 10, 69, 0.08)" },
            }}
          >
            <Avatar src={member.image} alt={member.name} sx={{ width: 110, height: 110, mx: "auto", mb: 2.5, border: "4px solid #F6F7FF" }} />

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontFamily: 'Poppins, sans-serif', color: '#1E293B' }}>
              {member.name}
            </Typography>

            <Chip
              label={member.role}
              size="small"
              sx={{ 
                mb: 2, 
                fontWeight: 600, 
                backgroundColor: member.role.toLowerCase().includes("lead") || member.role.toLowerCase().includes("cto") ? "#EEF2FF" : "#FEF3C7",
                color: member.role.toLowerCase().includes("lead") || member.role.toLowerCase().includes("cto") ? "#0057FF" : "#CA8A04",
                fontFamily: "Poppins, sans-serif"
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 1 }}>
              {member.linkedin && (
                <IconButton
                  component="a"
                  href={member.linkedin}
                  target="_blank"
                  sx={{ color: "#0A66C2", backgroundColor: "#F1F5F9", borderRadius: "50%", p: 1, "&:hover": { backgroundColor: "#E2E8F0" } }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              )}
              {member.x && (
                <IconButton
                  component="a"
                  href={member.x}
                  target="_blank"
                  sx={{ color: "#1DA1F2", backgroundColor: "#F1F5F9", borderRadius: "50%", p: 1, "&:hover": { backgroundColor: "#E2E8F0" } }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
              )}
              {member.github && (
                <IconButton
                  component="a"
                  href={member.github}
                  target="_blank"
                  sx={{ color: "#171515", backgroundColor: "#F1F5F9", borderRadius: "50%", p: 1, "&:hover": { backgroundColor: "#E2E8F0" } }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default function About() {
  const ceoCoo = TEAM_MEMBERS.filter((m) => m.role.toLowerCase().includes("ceo") || m.role.toLowerCase().includes("coo"));
  const leads = TEAM_MEMBERS.filter((m) => m.role.toLowerCase().includes("lead") || m.role.toLowerCase().includes("cto"));

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#010A45',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              rgba(255, 255, 255, 0.02) 0,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px,
              transparent 80px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(255,255,255,0.04) 0,
              rgba(255,255,255,0.04) 1px,
              transparent 1px,
              transparent 80px
            ),
            radial-gradient(
              600px 300px at 20% 30%,
              rgba(255,255,255,0.12),
              transparent 60%
            ),
            radial-gradient(
              500px 250px at 80% 20%,
              rgba(200,220,255,0.15),
              transparent 65%
            )
          `,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 4, color: "#FFFFFF", fontFamily: 'Poppins, sans-serif' }}>
              About <Box component="span" sx={{ color: '#FFD93D' }}>Apprelab</Box>
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", mb: 4, color: "#94A3B8", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9, fontFamily: 'Poppins, sans-serif' }}>
              Apprelab is a modern learning and work platform built to help people
              <Box component="strong" sx={{ color: '#FFD93D', fontWeight: 600 }}> gain real skills, real experience, and real income</Box>.
              We go beyond theory by creating a space where learning meets practical execution.
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", mb: 4, color: "#94A3B8", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9, fontFamily: 'Poppins, sans-serif' }}>
              Instead of stopping at courses, Apprelab allows learners to immediately
              apply what they’ve learned on <Box component="strong" sx={{ color: '#FFFFFF', fontWeight: 600 }}>real-world projects</Box> —
              guided by mentors and built for professional growth.
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", mb: 4, color: "#94A3B8", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9, fontFamily: 'Poppins, sans-serif' }}>
              Our ecosystem is designed around three core pillars:
            </Typography>

            <Box sx={{ textAlign: "left", maxWidth: 650, mx: "auto", mb: 6, p: 4, background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Typography variant="body1" sx={{ mb: 2, color: '#CBD5F5', fontFamily: 'Poppins, sans-serif' }}>
                • <Box component="strong" sx={{ color: '#FFD93D' }}>Learn:</Box> Practical micro-courses focused on in-demand skills.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: '#CBD5F5', fontFamily: 'Poppins, sans-serif' }}>
                • <Box component="strong" sx={{ color: '#FFD93D' }}>Work:</Box> Hands-on paid projects that build confidence and experience.
              </Typography>
              <Typography variant="body1" sx={{ color: '#CBD5F5', fontFamily: 'Poppins, sans-serif' }}>
                • <Box component="strong" sx={{ color: '#FFD93D' }}>Grow:</Box> Mentor guidance, certifications, and a portfolio that speaks for you.
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", color: "#94A3B8", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9, fontFamily: 'Poppins, sans-serif' }}>
              At Apprelab, our goal is simple — to help individuals transition from
              learning to earning with confidence, clarity, and real proof of skill.
              We’re building a community where talent is nurtured, experience is earned,
              and opportunities are created.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* TEAM SECTIONS */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: "#F6F7FF", minHeight: '50vh', position: 'relative' }}>
        <Container maxWidth="lg">
          {renderSection("Executives", ceoCoo)}
          {renderSection("Team Leads", leads)}
        </Container>
      </Box>
    </>
  );
}

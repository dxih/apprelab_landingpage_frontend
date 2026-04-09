import { Box, Container, Typography, Avatar, Paper, IconButton, Chip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter"; // X icon
// import TikTokIcon from "@mui/icons-material/MusicNote"; // placeholder TikTok

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
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: "#1E293B", textAlign: "center" }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
        {sortedMembers.map((member) => (
          <Paper
            key={member.name}
            elevation={3}
            sx={{
              width: 220,
              textAlign: "center",
              borderRadius: 3,
              p: 3,
              border: member.role.toLowerCase().includes("ceo") ? "3px solid gold" : "1px solid #cccfd2ff",
              position: "relative",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-5px)", boxShadow: "0 12px 32px rgba(0,87,255,0.15)" },
            }}
          >
            <Avatar src={member.image} alt={member.name} sx={{ width: 100, height: 100, mx: "auto", mb: 1.5 }} />

            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {member.name}
            </Typography>

            <Chip
              label={member.role}
              size="small"
              color={member.role.toLowerCase().includes("lead") || member.role.toLowerCase().includes("cto") ? "primary" : "default"}
              sx={{ mb: 1 }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              {member.linkedin && (
                <IconButton
                  component="a"
                  href={member.linkedin}
                  target="_blank"
                  sx={{ color: "#0A66C2", border: "1px solid #0A66C2", borderRadius: "50%", p: 0.5, "&:hover": { backgroundColor: "rgba(10,102,194,0.1)" } }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              )}
              {member.x && (
                <IconButton
                  component="a"
                  href={member.x}
                  target="_blank"
                  sx={{ color: "#1DA1F2", border: "1px solid #1DA1F2", borderRadius: "50%", p: 0.5, "&:hover": { backgroundColor: "rgba(29,161,242,0.1)" } }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
              )}
              {/* {member.tiktok && (
                <IconButton
                  component="a"
                  href={member.tiktok}
                  target="_blank"
                  sx={{ color: "#000", border: "1px solid #000", borderRadius: "50%", p: 0.5, "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }}
                >
                  <TikTokIcon fontSize="small" />
                </IconButton>
              )} */}
              {member.github && (
                <IconButton
                  component="a"
                  href={member.github}
                  target="_blank"
                  sx={{ color: "#171515", border: "1px solid #171515", borderRadius: "50%", p: 0.5, "&:hover": { backgroundColor: "rgba(23,21,21,0.1)" } }}
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
    <Box sx={{     pt: { xs: 4, md: 14 }, pb: { xs: 6, md: 1 }, background: "#f9fafb51" }}>
      <Container maxWidth="lg">
        {/* INTRO */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: "#0057FF" }}>
            About Apprelab
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", mb: 4, color: "#475569", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9 }}>
            Apprelab is a modern learning and work platform built to help people
            <strong> gain real skills, real experience, and real income</strong>.
            We go beyond theory by creating a space where learning meets practical execution.
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", mb: 4, color: "#475569", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9 }}>
            Instead of stopping at courses, Apprelab allows learners to immediately
            apply what they’ve learned on <strong>real-world projects</strong> —
            guided by mentors and built for professional growth.
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", mb: 4, color: "#475569", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9 }}>
            Our ecosystem is designed around three core pillars:
          </Typography>

          <Box sx={{ textAlign: "left", maxWidth: 650, mx: "auto", mb: 8 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Learn:</strong> Practical micro-courses focused on in-demand skills.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Work:</strong> Hands-on paid projects that build confidence and experience.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Grow:</strong> Mentor guidance, certifications, and a portfolio that speaks for you.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ maxWidth: 850, mx: "auto", color: "#475569", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.9 }}>
            At Apprelab, our goal is simple — to help individuals transition from
            learning to earning with confidence, clarity, and real proof of skill.
            We’re building a community where talent is nurtured, experience is earned,
            and opportunities are created.
          </Typography>
        </Box>

        {/* TEAM SECTIONS */}
        {renderSection("Executives", ceoCoo)}
        {renderSection("Team Leads", leads)}
      </Container>
    </Box>
  );
}

// Icons
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";

export default function Mentors() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(250, 204, 21, 0.05) 0%, transparent 50%)'
      }}
    >
      <PageHero
        title={
          <>
            For <Box component="span" sx={{ color: "#FFD93D" }}>Mentors</Box>
          </>
        }
        subtitle="Monetize your expertise by guiding the next generation of tech talent through real-world builds."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-50px", md: "-80px" }, position: "relative", zIndex: 10 }}>
        
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
          <Box sx={{ flex: 1.2 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif", lineHeight: 1.2, fontSize: { xs: '2.3rem', md: '3rem' } }}>
              Your knowledge is <Box component="span" sx={{ color: "#FFD93D" }}>valuable.</Box><br />Let's put it to work.
            </Typography>
            <Typography sx={{ color: "#94A3B8", fontSize: "1.1rem", mb: 5, lineHeight: 1.9, fontFamily: "Poppins, sans-serif" }}>
              Apprelab isn't just for learners; it's a scalable ecosystem for senior developers, designers, and marketers to build massive reputation and generate significant revenue.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
              {[
                { icon: <SchoolRoundedIcon />, title: "Create Courses", desc: "Publish premium micro-courses securely on our platform and earn from every enrollment.", color: "#0057FF" },
                { icon: <GroupRoundedIcon />, title: "Lead WorkLabs", desc: "Manage eager apprentices on actual business projects and get a cut of the project fee.", color: "#FACC15" },
                { icon: <StarsRoundedIcon />, title: "Earn Reputation", desc: "Become a recognized industry validator. Your endorsements carry weight in our ecosystem.", color: "#F5B7FF" },
              ].map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                   <Box sx={{ 
                     background: `${item.color}20`, 
                     p: 2, 
                     borderRadius: "16px", 
                     color: item.color,
                     border: `1px solid ${item.color}40`,
                     display: 'flex'
                   }}>
                     {item.icon}
                   </Box>
                   <Box>
                     <Typography sx={{ fontWeight: 700, color: "#FFFFFF", fontFamily: "Poppins, sans-serif", fontSize: '1.1rem' }}>{item.title}</Typography>
                     <Typography sx={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>{item.desc}</Typography>
                   </Box>
                </Box>
              ))}
            </Box>

            <Button
                component={Link}
                to="/contact"
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
                Apply as a Mentor
            </Button>
          </Box>
          <Box sx={{ flex: 0.8, textAlign: "center" }}>
            <Box component="img" src={mentorImg} alt="Mentor" sx={{ width: "100%", maxWidth: "450px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))" }} />
          </Box>
        </Box>

        {/* WHY MENTOR SECTION */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            Why Mentor on <Box component="span" sx={{ color: "#0057FF" }}>Apprelab?</Box>
          </Typography>
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, 
            gap: 4 
          }}>
            {[
              { icon: <MonetizationOnRoundedIcon />, title: "Passive Revenue", desc: "Earn royalty payments from course sales that keep coming even while you sleep.", color: "#10B981" },
              { icon: <VerifiedRoundedIcon />, title: "Quality Assurance", desc: "You don't do the work; you review it. Scale your expertise without burnout.", color: "#0057FF" },
              { icon: <SpeedRoundedIcon />, title: "Fast-Track Talent", desc: "Identify top-tier talent early for your own projects or team expansions.", color: "#FACC15" },
            ].map((card, i) => (
              <Box key={i} sx={{
                background: "rgba(255, 255, 255, 0.03)",
                p: 5,
                borderRadius: "32px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "center",
                transition: "all 0.3s ease",
                "&:hover": { background: "rgba(255, 255, 255, 0.06)", transform: "translateY(-8px)" }
              }}>
                <Box sx={{ 
                  width: 64, height: 64, mx: "auto", mb: 3, borderRadius: "20px",
                  background: `${card.color}20`, color: card.color, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {card.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>{card.title}</Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.7, fontFamily: "Poppins, sans-serif" }}>{card.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

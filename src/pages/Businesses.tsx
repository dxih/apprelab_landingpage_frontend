// Icons
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

export default function Businesses() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(0, 87, 255, 0.1) 0%, transparent 50%)'
      }}
    >
      <PageHero
        title={
          <>
            For <Box component="span" sx={{ color: "#FFD93D" }}>Businesses</Box>
          </>
        }
        subtitle="Hire battle-tested talent that has already shipped the exact features you need built."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-50px", md: "-80px" }, position: "relative", zIndex: 10 }}>
        
        <Box sx={{
          background: "linear-gradient(135deg, #FFD93D, #FACC15)",
          borderRadius: "40px",
          p: { xs: 4, md: 8 },
          boxShadow: "0 25px 60px rgba(255, 217, 61, 0.2)",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          mb: 12
        }}>
           <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box component="img" src={businessImg} alt="Business" sx={{ width: "100%", maxWidth: "450px", filter: "drop-shadow(0 20px 40px rgba(1,10,69,0.3))" }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#010A45", mb: 3, fontFamily: "Poppins, sans-serif", lineHeight: 1.2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
              Stop guessing on <br />resumes. <Box component="span" sx={{ color: "#000" }}>Hire proof.</Box>
            </Typography>
            <Typography sx={{ color: "#010A45", fontSize: "1.1rem", mb: 5, lineHeight: 1.9, fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
              At Apprelab, you don't just get access to active job seekers—you get vetted access to teams who are currently building live projects strictly validated by senior industry mentors.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
              {[
                { icon: <EngineeringRoundedIcon />, title: "Post WorkLabs", desc: "Need an MVP built? Let our vetted teams do it affordably under senior supervision." },
                { icon: <ThumbUpAltRoundedIcon />, title: "Direct Hiring", desc: "Hire the exact engineers and marketers who built your MVP and proven they have the skills." },
                { icon: <AutoGraphRoundedIcon />, title: "Reduce Churn", desc: "Our talent is battle-tested. You know exactly what they can do before they join your team." },
              ].map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                   <Box sx={{ background: "rgba(1,10,69,0.1)", p: 1.5, borderRadius: "16px", color: "#010A45", display: 'flex' }}>
                     {item.icon}
                   </Box>
                   <Box>
                     <Typography sx={{ fontWeight: 700, color: "#010A45", fontFamily: "Poppins, sans-serif" }}>{item.title}</Typography>
                     <Typography sx={{ color: "#010A45", opacity: 0.8, fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>{item.desc}</Typography>
                   </Box>
                </Box>
              ))}
            </Box>

            <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  background: "#010A45",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  px: 5,
                  py: 1.8,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": { background: "#0B1C5D", transform: "translateY(-2px)" },
                  transition: "all 0.3s ease"
                }}
            >
                Partner as a Business Now
            </Button>
          </Box>
        </Box>

        {/* ECOSYSTEM VALUES */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            The Apprelab <Box component="span" sx={{ color: "#FFD93D" }}>Advantage</Box>
          </Typography>
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, 
            gap: 4 
          }}>
            {[
              { icon: <PrecisionManufacturingRoundedIcon />, title: "Vetted Execution", desc: "Every project milestone is checked by senior mentors before being delivered to you.", color: "#0057FF" },
              { icon: <GroupAddRoundedIcon />, title: "Scalable Talent", desc: "From solo developers to full product teams, scale your capacity on demand.", color: "#FACC15" },
              { icon: <SecurityRoundedIcon />, title: "Risk Mitigation", desc: "Pay only for verified, completed work. We handle the quality control and oversight.", color: "#10B981" },
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

        {/* PRICING SECTION PREVIEW */}
        <Box sx={{
          background: "rgba(0, 87, 255, 0.05)",
          borderRadius: "40px",
          p: { xs: 5, md: 8 },
          border: "1px solid rgba(0, 87, 255, 0.1)",
          textAlign: "center"
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
            Ready to Build?
          </Typography>
          <Typography sx={{ color: "#CBD5F5", mb: 5, maxWidth: 600, mx: "auto", fontFamily: "Poppins, sans-serif" }}>
            Project rates start at $50 for micro-tasks. Contact us for custom enterprise-grade roadmap execution.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              borderColor: "#FFD93D",
              color: "#FFD93D",
              px: 6,
              py: 2,
              borderRadius: "16px",
              fontWeight: 700,
              textTransform: "none",
              fontFamily: "Poppins, sans-serif",
              "&:hover": { 
                borderColor: "#FFFFFF", 
                color: "#FFFFFF",
                background: "rgba(255, 255, 255, 0.05)"
              }
            }}
          >
            Get a Custom Quote
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

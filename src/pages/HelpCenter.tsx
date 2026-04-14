import { Box, Container, Typography, TextField, Button, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageHero from "../components/PageHero";

export default function HelpCenter() {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#010A45", 
        minHeight: "100vh", 
        pb: 16,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 0% 100%, rgba(245, 183, 255, 0.05) 0%, transparent 50%)'
      }}
    >
      <PageHero
        title={
          <>
            Help <Box component="span" sx={{ color: "#FFD93D" }}>Center</Box>
          </>
        }
        subtitle="We're here to help you navigate Apprelab. Find answers, tutorials, and support."
        minHeight={{ xs: "40vh", md: "45vh" }}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: "-40px", md: "-60px" }, position: "relative", zIndex: 10 }}>
        
        {/* HUGE SEARCH BAR */}
        <Box sx={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(20px)",
          borderRadius: "100px",
          p: { xs: 1.5, md: 2.5 },
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 2 },
          mb: 12,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <SearchRoundedIcon sx={{ ml: 2, color: "#94A3B8", fontSize: { xs: 24, md: 32 } }} />
          <TextField
              fullWidth
              variant="standard"
              placeholder="Search guides or FAQs..."
              InputProps={{ 
                disableUnderline: true, 
                sx: { 
                  fontSize: { xs: "1rem", md: "1.2rem" }, 
                  fontFamily: "Poppins, sans-serif",
                  color: "#FFFFFF",
                  "&::placeholder": { color: "rgba(255,255,255,0.4)", opacity: 1 }
                } 
              }}
          />
          <Button
            variant="contained"
            sx={{
              background: "#FFD93D",
              color: "#010A45",
              fontWeight: 700,
              fontSize: "1rem",
              px: { xs: 3, md: 5 },
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              fontFamily: "Poppins, sans-serif",
              "&:hover": { background: "#FACC15" }
            }}
          >
            Search
          </Button>
        </Box>

        {/* CATEGORY GRID */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif", textAlign: "center" }}>
            Browse by Category
          </Typography>
          <Grid container spacing={4}>
              {[
                  { title: "Getting Started", icon: <LibraryBooksRoundedIcon sx={{ fontSize: 40, color: "#0057FF" }} />, desc: "Learn how to set up your profile, enroll in courses, and ship code." },
                  { title: "Payments & Earnings", icon: <PaymentRoundedIcon sx={{ fontSize: 40, color: "#10B981" }} />, desc: "Understand milestones, project fees, and secure withdrawals." },
                  { title: "Technical Support", icon: <SupportAgentRoundedIcon sx={{ fontSize: 40, color: "#FACC15" }} />, desc: "Having issues with the platform? Talk to our dedicated tech team." },
              ].map((cat, i) => (
                  <Grid item xs={12} md={4} key={i}>
                      <Paper elevation={0} sx={{
                          p: 5,
                          textAlign: "center",
                          borderRadius: "40px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": { transform: "translateY(-8px)", background: "rgba(255, 255, 255, 0.06)" }
                      }}>
                          <Box sx={{
                              width: 80, height: 80, mx: "auto", mb: 4, borderRadius: "24px",
                              background: "rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "center"
                          }}>
                              {cat.icon}
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#FFFFFF", fontFamily: "Poppins, sans-serif" }}>
                              {cat.title}
                          </Typography>
                          <Typography sx={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
                              {cat.desc}
                          </Typography>
                      </Paper>
                  </Grid>
              ))}
          </Grid>
        </Box>

        {/* FAQ SECTION */}
        <Box sx={{ mb: 16, maxWidth: '800px', mx: 'auto' }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800, color: "#FFFFFF", mb: 8, fontFamily: "Poppins, sans-serif" }}>
            Frequently Asked <Box component="span" sx={{ color: "#FFD93D" }}>Questions</Box>
          </Typography>
          
          {[
            { q: "How much does it cost to join?", a: "Joining Apprelab is free for learners and mentors. Courses and bootcamps have separate pricing set by creators." },
            { q: "How do I get paid for projects?", a: "Payments are triggered by project milestones. Once a senior mentor validates your work, funds are released to your wallet." },
            { q: "What skills are currently in demand?", a: "We mainly focus on React/Next.js, Node.js, UI/UX Design, and Digital Marketing as these are most requested by our partners." },
            { q: "Can businesses hire me directly?", a: "Absolutely. Our 'Hire Proof' model encourages SMEs to hire talent that has already successfully completed projects for them." }
          ].map((faq, i) => (
            <Accordion key={i} sx={{ 
              background: "rgba(255, 255, 255, 0.03)", 
              color: "#FFFFFF", 
              mb: 2, 
              borderRadius: "16px !important",
              border: '1px solid rgba(255, 255, 255, 0.05)',
              '&:before': { display: 'none' }
            }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#FFD93D" }} />}>
                <Typography sx={{ fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif", lineHeight: 1.7 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* SUPPORT FORM */}
        <Box sx={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          borderRadius: "40px",
          p: { xs: 5, md: 8 },
          border: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 3, fontFamily: "Poppins, sans-serif" }}>
            Still Need Help?
          </Typography>
          <Typography sx={{ color: "#94A3B8", mb: 6, fontFamily: "Poppins, sans-serif" }}>
            If you couldn't find what you're looking for, please submit a support ticket and our team will get back to you within 24 hours.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField 
                fullWidth 
                placeholder="Full Name" 
                sx={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '12px',
                  '& .MuiOutlinedInput-root': { color: '#FFF', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } }
                }} 
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                fullWidth 
                placeholder="Email Address" 
                sx={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '12px',
                  '& .MuiOutlinedInput-root': { color: '#FFF', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } }
                }} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                multiline 
                rows={4} 
                placeholder="How can we help?" 
                sx={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '12px',
                  '& .MuiOutlinedInput-root': { color: '#FFF', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } }
                }} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#FFD93D",
                  color: "#010A45",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  py: 2,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  '&:hover': { background: '#FACC15' }
                }}
              >
                Submit Ticket
              </Button>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

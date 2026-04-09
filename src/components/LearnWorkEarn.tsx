import { Box, Container, Typography } from "@mui/material";

const LearnWorkEarn = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: "60px", sm: "100px", md: "120px" },
        mb: { xs: "40px", md: "80px" },
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: "48px", md: "64px" } }}>
          <Typography
            sx={{
              color: "#000000",
              mb: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Box
              component="span"
              sx={{ fontWeight: 700, fontSize: { xs: "20px", sm: "32px", md: "40px" } }}
            >
              Learn
            </Box>

            <Box
              component="span"
              sx={{ fontWeight: 300, color: "#727272", fontSize: { xs: "22px", md: "30px" } }}
            >
              →
            </Box>

            <Box
              component="span"
              sx={{ fontWeight: 700, fontSize: { xs: "20px", sm: "32px", md: "40px" } }}
            >
              Work
            </Box>

            <Box
              component="span"
              sx={{ fontWeight: 300, color: "#727272", fontSize: { xs: "22px", md: "30px" } }}
            >
              →
            </Box>

            <Box
              component="span"
              sx={{ fontWeight: 700, fontSize: { xs: "20px", sm: "32px", md: "40px" } }}
            >
              Earn Model
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#6B7280",
              mb: { xs: "60px", md: "100px" },
            }}
          >
            Start earning and building real projects as a beginner.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 6, sm: 8, md: 0 },
            alignItems: "flex-start",
          }}
        >
          {/* Card 1 */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="src/assets/LWE1.png"
              alt="Expert Mentor Guidance"
              sx={{
                width: { xs: "70px", md: "90px" },
                height: "auto",
                mb: "16px",
              }}
            />

            <Typography sx={{ fontSize: "25px", fontWeight: 500, mb: "8px" }}>
              Expert Mentor <br /> Guidance
            </Typography>

            <Typography sx={{ fontSize: "13px", lineHeight: "20px", color: "#6B7280" }}>
              Every course created and supervised <br />
              by industry professionals
            </Typography>

            <Typography sx={{ fontSize: "80px", lineHeight: "25px" }}>.</Typography>
          </Box>

          {/* Card 2 */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="src/assets/LWE2.png"
              alt="SMEs and Companies"
              sx={{
                width: { xs: "65px", md: "75px" },
                height: "auto",
                mb: "16px",
              }}
            />

            <Typography sx={{ fontSize: "25px", fontWeight: 500, mb: "8px" }}>
              SMEs, Companies and <br />
              Businesses Owners
            </Typography>

            <Typography sx={{ fontSize: "13px", lineHeight: "20px", color: "#6B7280" }}>
              Hire talent (Entry level, internship <br />
              opportunities, find freelancers <br />
              / contractor)
            </Typography>

            <Typography sx={{ fontSize: "80px", lineHeight: "5px" }}>.</Typography>
          </Box>

          {/* Card 3 */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="src/assets/LWE3.png"
              alt="Verified Portfolio Builder"
              sx={{
                width: { xs: "65px", md: "77px" },
                height: "auto",
                mb: "16px",
              }}
            />

            <Typography sx={{ fontSize: "25px", fontWeight: 500, mb: "8px" }}>
              Verified Portfolio <br />
              Builder
            </Typography>

            <Typography sx={{ fontSize: "12px", lineHeight: "20px", color: "#6B7280" }}>
              Showcase proven skills that employers <br />
              trust
            </Typography>

            <Typography sx={{ fontSize: "80px", lineHeight: "25px" }}>.</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LearnWorkEarn;

import { Box, Container, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Asset imports
import IP1 from "../assets/IP1.png";
import IP2 from "../assets/IP2.png";
import IP3 from "../assets/IP3.png";

const IntegratedPlatform = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F7FF",
        py: { xs: "80px", md: "120px" },
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: "16px", md: "106px" } }}>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: "48px", md: "72px" } }}>
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              fontWeight: 700,
              lineHeight: "40px",
            }}
          >
            Everything You Need to Succeed,
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              fontWeight: 700,
              lineHeight: "40px",
            }}
          >
            Integrated in{" "}
            <Box
              component="span"
              sx={{
                backgroundColor: "#FFE680",
                px: "6px",
                borderRadius: "2px",
              }}
            >
              One Platform
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#6B7280",
              mt: "12px",
            }}
          >
            Start earning from day one while building real-world experience
          </Typography>
        </Box>

        {/* FOR LEARNERS */}
        <Box
          sx={{
            backgroundColor: "#010A45",
            borderRadius: "35px",
            px: { xs: "20px", md: "30px" },
            py: { xs: "32px", md: "24px" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: "32px", md: 0 },
            alignItems: "center",
            mb: "32px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "#FFF", mb: "10px" }}>
              FOR LEARNERS
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#CBD5E1", mb: "30px" }}>
              Learners acquire practical digital skills through micro-courses
              <br />and project-based learning
            </Typography>

            {[
              ["Learning Hub", "Access 500+ micro-courses, bootcamps, and learning paths designed by industry experts"],
              ["WorkLab", "Work on real projects from actual businesses after learning"],
              ["Portfolio Builder", "Create a verified digital portfolio that proves your capabilities"],
            ].map(([title, desc]) => (
              <Box key={title} sx={{ mb: "16px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#FFF" }}>
                  ✓ {title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#CBD5E1", mt: "4px" }}>
                  {desc}
                </Typography>
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                mt: "28px",
                backgroundColor: "#FFFFFF",
                color: "#0B1C5D",
                fontWeight: 600,
                borderRadius: "13px",
                px: "30px",
                py: "15px",
                textTransform: "none",
              }}
            >
              Learn More <ArrowOutwardIcon sx={{ fontSize: 18, ml: 1 }} />
            </Button>
          </Box>

          <Box
            component="img"
            src={IP1}
            alt="Learners UI"
            sx={{
              width: "100%",
              maxWidth: "450px",
              justifySelf: { xs: "center", md: "end" },
            }}
          />
        </Box>

        {/* FOR MENTORS */}
        <Box
          sx={{
            backgroundColor: "#FFE680",
            borderRadius: "35px",
            px: { xs: "20px", md: "24px" },
            py: { xs: "32px", md: "30px" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: "32px", md: 0 },
            alignItems: "center",
            mb: "32px",
          }}
        >
          <Box
            component="img"
            src={IP2}
            alt="Mentors UI"
            sx={{
              width: "100%",
              maxWidth: "360px",
              mx: { xs: "auto", md: 0 },
            }}
          />

          <Box>
            <Typography sx={{ fontSize: "30px", fontWeight: 700, mb: "10px" }}>
              For Mentors
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#4B5563", mb: "30px" }}>
              Mentors guide, supervise, and monetize their expertise
            </Typography>

            {[
              ["Mentor Marketplace", "Share your expertise and earn multiple income streams"],
              ["Creator Studio", "Tools to create, publish, and monetize your content"],
              ["Create & Upload Courses", "Create lessons and upload course content with ease"],
            ].map(([title, desc]) => (
              <Box key={title} sx={{ mb: "16px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                  ✓ {title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#4B5563", mt: "4px" }}>
                  {desc}
                </Typography>
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                mt: "28px",
                backgroundColor: "#0B1C5D",
                color: "#FFFFFF",
                fontWeight: 600,
                borderRadius: "13px",
                px: "30px",
                py: "15px",
                textTransform: "none",
              }}
            >
              Learn More <ArrowOutwardIcon sx={{ fontSize: 18, ml: 1 }} />
            </Button>
          </Box>
        </Box>

        {/* FOR BUSINESSES */}
        <Box
          sx={{
            backgroundColor: "#F5B7FF",
            borderRadius: "35px",
            px: { xs: "20px", md: "30px" },
            py: "30px",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: "32px", md: 0 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "30px", fontWeight: 700, mb: "10px" }}>
              For Businesses
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "#4B5563", mb: "30px" }}>
              Businesses access affordable, mentored talent for real projects
            </Typography>

            {[
              ["Business Center", "Find affordable, skilled, mentored talent for your projects"],
              ["WorkLab Access", "Hire for projects starting at $50"],
            ].map(([title, desc]) => (
              <Box key={title} sx={{ mb: "16px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                  ✓ {title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#4B5563", mt: "4px" }}>
                  {desc}
                </Typography>
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                mt: "28px",
                backgroundColor: "#0B1C5D",
                color: "#FFFFFF",
                fontWeight: 600,
                borderRadius: "13px",
                px: "30px",
                py: "15px",
                textTransform: "none",
              }}
            >
              Learn More <ArrowOutwardIcon sx={{ fontSize: 18, ml: 1 }} />
            </Button>
          </Box>

          <Box
            component="img"
            src={IP3}
            alt="Business UI"
            sx={{
              width: "100%",
              maxWidth: "400px",
              justifySelf: { xs: "center", md: "end" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default IntegratedPlatform;

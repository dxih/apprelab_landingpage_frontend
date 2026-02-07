import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import zigZag from "../assets/yellowvector2.png";
import curvedArrow from "../assets/line2.png";

const TransformCTA = () => {
  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        px: { xs: 2, sm: 3, md: 17 }, // 🔥 mobile-safe
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 8,
          px: { xs: 2.5, md: 6 },
          py: { xs: 5, md: 6 },
          background: "linear-gradient(180deg, #010A45 0%, #010A45 100%)",
          color: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {/* TOP ZIG ZAG */}
        <Box
          component="img"
          src={zigZag}
          alt="decorative zig zag"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: 280, md: 650 },
            opacity: { xs: 0.35, md: 1 }, // 👌 softer on mobile
            pointerEvents: "none",
          }}
        />

        {/* CONTENT */}
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 35 },
              fontWeight: 700,
              mb: 1.5,
              lineHeight: { xs: "30px", md: "40px" },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Ready to{" "}
            <Box component="span" sx={{ color: "#FACC15" }}>
              Transform
            </Box>{" "}
            Your Future?
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              color: "#CBD5F5",
              lineHeight: "22px",
              mb: 3,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Whether you want to learn new skills, mentor aspiring professionals,
            or hire top talent, APPRELAB has everything you need to succeed.
          </Typography>

          {/* FEATURES */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2.2, md: 3.2 },
              mb: 3,
            }}
          >
            <Feature
              title="For Learners"
              description="Learn in-demand skills, work on real projects, earn income, and build a verified portfolio."
            />
            <Feature
              title="For Mentors"
              description="Share your expertise, guide the next generation, and earn multiple income streams."
            />
            <Feature
              title="For Businesses"
              description="Access affordable, skilled, mentored talent for your projects and scale your team."
            />
          </Box>

          {/* ACTIONS */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 4,
              flexDirection: { xs: "column", sm: "row" }, // 🔥 stack on mobile
            }}
          >
            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "rgba(11, 28, 93, 1)",
                fontWeight: 700,
                textTransform: "none",
                px: 3,
                py: 1.6,
                borderRadius: 2,
                fontFamily: "Poppins, sans-serif",
                "&:hover": {
                  backgroundColor: "#E5E7EB",
                },
              }}
            >
              Join as a Learner
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#FFFFFF",
                fontWeight: 700,
                textTransform: "none",
                px: 3,
                py: 1.6,
                borderRadius: 2,
                fontFamily: "Poppins, sans-serif",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.18)",
                },
              }}
            >
              Become a Mentor
            </Button>
          </Box>
        </Box>

        {/* CURVED ARROW */}
        <Box
          component="img"
          src={curvedArrow}
          alt="decorative curved arrow"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 12,
            width: { xs: 90, md: 140 },
            opacity: { xs: 0.5, md: 1 },
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};

interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "16px 1fr",
      gap: 1,
    }}
  >
    <Typography
      sx={{
        color: "#FDE68A",
        fontSize: 14,
        fontWeight: 600,
        mt: "2px",
      }}
    >
      ✔
    </Typography>

    <Box>
      <Typography fontSize={15} fontWeight={700}>
        {title}
      </Typography>
      <Typography fontSize={13} color="#CBD5F5" mt={0.5}>
        {description}
      </Typography>
    </Box>
  </Box>
);

export default TransformCTA;

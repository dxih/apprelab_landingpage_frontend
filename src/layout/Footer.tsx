import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

import AppRelabLogo from "../assets/apprelab_logo.png";

interface FooterLinkProps {
  text: string;
  to: string;
}

const FooterLink = ({ text, to }: FooterLinkProps) => (
  <Link
    component={RouterLink}
    to={to}
    underline="none"
    sx={{
      fontSize: 14,
      fontWeight: 500,
      color: "#64748B",
      transition: "color 0.25s ease",
      "&:hover": {
        color: "#0057FF",
      },
    }}
  >
    {text}
  </Link>
);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F8FAFC",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* TOP SECTION */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: 6,
          }}
        >
          {/* BRAND */}
          <Box>
            <Box
              component="img"
              src={AppRelabLogo}
              alt="Apprelab"
              sx={{ height: 36, mb: 2 }}
            />

            <Typography
              sx={{
                fontSize: 14,
                color: "#64748B",
                lineHeight: "22px",
                maxWidth: 400,
                mb: 2,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Your integrated digital ecosystem for learning, mentorship, and
              hiring. Bridging the gap between education and employment.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/apprelabapp/"
                target="_blank"
                sx={{ color: "#64748B" }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.facebook.com/share/16ZSJVe8eu/"
                target="_blank"
                sx={{ color: "#64748B" }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.instagram.com/apprelab"
                target="_blank"
                sx={{ color: "#64748B" }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* USEFUL LINKS */}
          <Box>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 700,
                mb: 2,
                color: "#010A45",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Useful Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, fontFamily: "Poppins, sans-serif" , fontWeight: 400}}>
              <FooterLink text="How It Works" to="/how-it-works" />
              <FooterLink text="For Learners" to="/learners" />
              <FooterLink text="For Mentors" to="/mentors" />
              <FooterLink text="For Businesses" to="/businesses" />
              <FooterLink text="About Us" to="/about" />
              <FooterLink text="Contact Us" to="/contact" />
            </Box>
          </Box>

          {/* RESOURCES */}
          <Box>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 700,
                mb: 2,
                color: "#010A45",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Resources
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, fontFamily: "Poppins, sans-serif" , fontWeight: 400}}>
              <FooterLink text="Blog" to="/blog" />
              <FooterLink text="Careers" to="/careers" />
              <FooterLink text="Help Center" to="/help" />
              <FooterLink text="Community" to="/community" />
              <FooterLink text="Partner With Us" to="/partners" />
            </Box>
          </Box>

          {/* LEGAL */}
          <Box>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 700,
                mb: 2,
                color: "#010A45",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Legal
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
              <FooterLink text="Privacy Policy" to="/privacy-policy" />
              <FooterLink text="Terms of Service" to="/terms" />
              <FooterLink text="Cookie Policy" to="/cookie-policy" />
            </Box>
          </Box>
        </Box>

        {/* DIVIDER */}
        <Box
          sx={{
            mt: 6,
            borderTop: "1px solid #E2E8F0",
          }}
        />

        {/* COPYRIGHT */}
        <Typography
          sx={{
            textAlign: "center",
            mt: 3,
            fontSize: 13,
            color: "#94A3B8",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          © 2025 Apprelab. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  TextField,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppRelabLogo from "../assets/apprelab_logo.png";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async () => {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Success! Check your email for a welcome message.");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: "rgba(255, 255, 255, 0.91)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0, 87, 255, 0.1)",
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        {/* MAIN WRAPPER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 6,
          }}
        >
          {/* BRAND + SOCIALS */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              component="img"
              src={AppRelabLogo}
              alt="AppRelab Logo"
              sx={{ height: 40, mb: 1 }}
            />

            <Typography
              variant="body2"
              sx={{ color: "#64748B", fontWeight: 500, mb: 2 }}
            >
              Bridging the gap between learning and real-world experience.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                {
                  icon: LinkedInIcon,
                  url: "https://www.linkedin.com/company/apprelabapp/",
                },
                {
                  icon: FacebookIcon,
                  url: "https://www.facebook.com/share/16ZSJVe8eu/",
                },
                {
                  icon: InstagramIcon,
                  url: "https://www.instagram.com/apprelab",
                },
              ].map(({ icon: Icon, url }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={url}
                  target="_blank"
                  sx={{
                    color: "#64748B",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#0057FF",
                      transform: "translateY(-3px)",
                      backgroundColor: "rgba(0, 87, 255, 0.08)",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* LINKS */}
          <Box
            sx={{
              display: "flex",
              gap: 6,
              marginTop: { xs: 0, md: 5 },
              textAlign: { xs: "center", md: "left" },
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <FooterLink text="Home" to="/" />
              <FooterLink text="Careers" to="/careers" />
              <FooterLink text="Blog" to="/blog" />
              <FooterLink text="Cookies" to="/cookie-policy" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <FooterLink text="Contact" to="/contact" />
              <FooterLink text="Privacy Policy" to="/privacy-policy" />
              <FooterLink text="Terms of Service" to="/terms" />
            </Box>
          </Box>

          {/* NEWSLETTER */}
          <Box
            sx={{
              maxWidth: 280,
              width: "100%",
              textAlign: { xs: "center", md: "left" },
              alignItems: { xs: "center", md: "flex-start" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Join our newsletter
            </Typography>

            <Typography variant="body2" sx={{ color: "#64748B", mb: 2 }}>
              Get updates on new courses, WorkLab projects, and opportunities.
            </Typography>

            <TextField
              fullWidth
              size="small"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 1.5 }}
            />

            <Button
              fullWidth
              variant="contained"
              disabled={loading}
              onClick={handleNewsletterSubmit}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                background: "#0057FF",
                "&:hover": { background: "#0047d4" },
              }}
            >
              {loading ? "Joining..." : "Join Newsletter"}
            </Button>

            {message && (
              <Typography variant="body2" sx={{ mt: 1, color: "#0057FF" }}>
                {message}
              </Typography>
            )}
          </Box>
        </Box>

        {/* COPYRIGHT */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(0, 87, 255, 0.1)",
            color: "#94A3B8",
            fontWeight: 500,
          }}
        >
          © 2025 Apprelab. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

/* REUSABLE LINK – NO UNDERLINE, NO FOCUS LINE */
const FooterLink = ({ text, to }: { text: string; to: string }) => (
  <Link
    component={RouterLink}
    to={to}
    underline="none"
    variant="h6"
    sx={{
      color: "#475569",
      fontWeight: 600,
      textDecoration: "none",
      transition: "color 0.25s ease",
      "&:hover": {
        color: "#0057FF",
        textDecoration: "none",
      },
      "&:focus": {
        outline: "none",
      },
      "&:focus-visible": {
        outline: "none",
      },
    }}
  >
    {text}
  </Link>
);

export default Footer;

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  Stack,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import AppRelabLogo from "../assets/apprelab_logo.png";

const NAV_LINKS = [
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* NAVBAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <AppBar
          elevation={0}
          position="static"
          sx={{
            width: { xs: "90%", sm: "90%", md: "fit-content" }, // wide pill on mobile & tablet
            minWidth: { xs: 300, sm: 300, md: "auto" },
            height: 56,
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
          }}
        >
          <Toolbar
            sx={{
              minHeight: "56px !important",
              height: 56,
              px: { xs: 2.5, md: 2.5 },
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
            {/* LOGO */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={AppRelabLogo}
                alt="Apprelab"
                sx={{ height: 29 }}
              />
            </Box>

            {/* NAV LINKS */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" }, // links visible on sm and up
                gap: 3,
                alignItems: "center",
                ml: "auto",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    textDecoration: "none",
                    fontSize: { sm: "13px", md: "15px" },
                    fontWeight: 500,
                    color: "#000",
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                    fontFamily: "'Poppins', sans-serif",
                    "&:hover": { color: "#010A45" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}

              {/* PRIMARY CTA FOR WAITLIST */}
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  background: "#010A45",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "14px",
                  borderRadius: "20px",
                  textTransform: "none",
                  px: 3,
                  py: 0.8,
                  ml: 1,
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: "0 4px 14px rgba(1, 10, 69, 0.2)",
                  "&:hover": { background: "#0B1C5D", boxShadow: "0 6px 20px rgba(1, 10, 69, 0.3)" }
                }}
              >
                Join Waitlist
              </Button>
            </Box>

            {/* MOBILE MENU BUTTON */}
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: { xs: "flex", sm: "none" }, // hamburger only on xs
                ml: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 260,
            px: 3,
            pt: 4,
            fontFamily: "'Poppins', sans-serif",
          },
        }}
      >
        <Stack spacing={3}>
          {NAV_LINKS.map((link) => (
            <Typography
              key={link.to}
              component={Link}
              to={link.to}
              onClick={toggleDrawer}
              sx={{
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                color: "#010A45",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {link.label}
            </Typography>
          ))}

          <Box sx={{ mt: 2 }}>
            <Button
              component={Link}
              to="/"
              onClick={toggleDrawer}
              fullWidth
              variant="contained"
              sx={{
                background: "#010A45",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "16px",
                borderRadius: "12px",
                textTransform: "none",
                py: 1.5,
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 8px 24px rgba(1, 10, 69, 0.2)",
                "&:hover": { background: "#0B1C5D" }
              }}
            >
              Join Waitlist
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}

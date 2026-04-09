import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import AppRelabLogo from "../assets/apprelab_logo.png";

const NAV_LINKS = [
  { label: "Features", to: "/features" },
  { label: "How it Works?", to: "/how-it-works" },
  { label: "For Learners", to: "/learners" },
  { label: "For Mentors", to: "/mentors" },
  { label: "For Businesses", to: "/businesses" },
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
              px: 2.5,
              display: "flex",
              alignItems: "center",
              gap: 4,
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
                    fontSize: {sm: "13px", md: "15px"},
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
        </Stack>
      </Drawer>
    </>
  );
}

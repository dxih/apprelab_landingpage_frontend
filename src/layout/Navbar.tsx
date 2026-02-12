import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import AppRelabLogo from "../assets/apprelab_logo.png";

// =============================
// NAV LINKS CONFIG
// =============================
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          marginBottom: 1,
          height: 80,
          backdropFilter: "blur(14px)",
          background: "rgba(255, 255, 255, 0.65)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          // FONT FAMILY FIX
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: { xs: 2, md: 4 },
            paddingTop: 2.5,
          }}
        >
          {/* LOGO + TAGLINE */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={AppRelabLogo}
              sx={{ height: 40 }}
              alt="Apprelab Logo"
            />
          </Box>

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.to}
                component={Link}
                to={link.to}
                variant="h6"
                sx={{
                  textDecoration: "none",
                  // FONT FAMILY FIX
                  fontFamily: 'inherit',
                  color: pathname === link.to ? "#0057FF" : "#1E293B",
                  fontWeight: pathname === link.to ? 600 : 500,
                  transition: "0.25s",
                  "&:hover": { color: "#0057FF" },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { 
            width: 260, 
            paddingTop: 2,
            // FONT FAMILY FIX
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          },
        }}
      >
        <Box sx={{ px: 2, pb: 1 }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 900, mb: 1, fontFamily: 'inherit' }}>
            Menu
          </Typography>
        </Box>

        <Divider />

        <List>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setOpen(false)}
              selected={pathname === link.to}
              sx={{
                "&.Mui-selected": {
                  background: "rgba(0, 87, 255, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  variant: "h6",
                  sx: {
                    // FONT FAMILY FIX
                    fontFamily: 'inherit',
                    fontWeight: pathname === link.to ? 600 : 500,
                    color: pathname === link.to ? "#0057FF" : "#1E293B",
                    fontSize: "1rem",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
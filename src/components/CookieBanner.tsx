import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const COOKIE_KEY = "apprelab_cookie_consent";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1400,
        backgroundColor: "#4b516dff",
        color: "#f8fafc",
        px: { xs: 2, md: 4 },
        py: 2.5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: 2,
        boxShadow: "0 -10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <Typography sx={{ fontSize: 14, maxWidth: 720 }}>
        We use cookies to improve your experience, analyze traffic, and keep
        Apprelab secure. You can accept or reject non-essential cookies.{" "}
        <Typography
          component={RouterLink}
          to="/cookie-policy"
          sx={{
            color: "#38bdf8",
            fontWeight: 600,
            textDecoration: "none",
            ml: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Learn more
        </Typography>
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="outlined"
          onClick={handleReject}
          sx={{
            color: "#f8fafc",
            borderColor: "#334155",
            "&:hover": {
              borderColor: "#475569",
              backgroundColor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          Reject
        </Button>

        <Button
          variant="contained"
          onClick={handleAccept}
          sx={{
            backgroundColor: "#38bdf8",
            color: "#020617",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#0ea5e9",
            },
          }}
        >
          Accept
        </Button>
      </Box>
    </Box>
  );
}

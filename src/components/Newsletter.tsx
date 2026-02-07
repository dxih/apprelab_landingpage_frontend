import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import EmailIcon from "../assets/emailicon.png";
import YellowShape from "../assets/yellowvector.png";

const Newsletter = () => {
  const [interest, setInterest] = useState("");

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 4, sm: 5, md: 15 },
        py: { xs: 10, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 🔥 stack on mobile
        justifyContent: "space-between",
        gap: { xs: 6, md: 0 },
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Bottom-left yellow shape */}
      <Box
        component="img"
        src={YellowShape}
        sx={{
          position: "absolute",
          bottom: -5,
          left: 0,
          width: { xs: 260, md: 600 },
          opacity: { xs: 0.4, md: 1 },
          zIndex: 0,
        }}
      />

      {/* LEFT CONTENT */}
      <Box sx={{ maxWidth: 520, zIndex: 1 }}>
        {/* Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#FEF3C7",
            px: 2,
            borderRadius: 999,
            mb: 2,
          }}
        >
          <Box component="img" src={EmailIcon} sx={{ width: 20 }} />
          <Typography fontSize={13} fontWeight={500} color="#92400E">
            Newsletter Subscription
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: 26, md: 36 },
            fontWeight: 700,
            lineHeight: { xs: "34px", md: "44px" },
            mb: 2,
          }}
        >
          <Box
            component="span"
            sx={{
              backgroundColor: "#0B1C5D",
              color: "#FFFFFF",
              px: 1.2,
              py: 0.3,
              display: "inline-block",
            }}
          >
            Be the
          </Box>{" "}
          <Box
            component="span"
            sx={{
              backgroundColor: "#0B1C5D",
              color: "#FACC15",
              px: 1.2,
              py: 0.3,
              display: "inline-block",
            }}
          >
            First
          </Box>{" "}
          to Know
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: 14,
            lineHeight: "24px",
            color: "#64748B",
            maxWidth: 420,
            fontWeight: 600,
            mb: { xs: 4, md: 10 },
          }}
        >
          Subscribe to receive exclusive early access, important updates, and
          valuable resources, delivered straight to your inbox.
        </Typography>
      </Box>

      {/* RIGHT FORM */}
      <Box sx={{ width: "100%", maxWidth: 420, zIndex: 1 }}>
        <Typography fontSize={14} fontWeight={600} mb={1}>
          I am Interested in
        </Typography>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            value={interest}
            displayEmpty
            onChange={(e) => setInterest(e.target.value)}
            sx={{
              borderRadius: 2,
              height: 52,
              fontSize: 14,
            }}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            <MenuItem value="Courses">Courses</MenuItem>
            <MenuItem value="Projects">Projects</MenuItem>
            <MenuItem value="Opportunities">Opportunities</MenuItem>
          </Select>
        </FormControl>

        <Typography fontSize={14} fontWeight={600} mb={1}>
          Your Email
        </Typography>

        <TextField
          fullWidth
          placeholder="abcdef@gmail.com"
          type="email"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              height: 52,
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            height: 56,
            borderRadius: 2,
            backgroundColor: "#0B1C5D",
            fontWeight: 600,
            fontSize: 16,
            textTransform: "none",
            display: "flex",
            gap: 1,
            "&:hover": {
              backgroundColor: "#09184A",
            },
          }}
        >
          Subscribe <ArrowOutwardIcon sx={{ fontSize: 18 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;

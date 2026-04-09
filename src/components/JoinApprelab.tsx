import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: 'Okoro J.',
    role: 'Full-stack dev, Nigeria',
    text:
      "APPRELAB changed everything for me. I learned web development, completed 5 real client projects during the bootcamp, and got hired before I even finished. The mentor guidance made all the difference.",
    avatar: 'src/assets/JAimg.png',
    colors: { primary: '#E5E7EB', secondary: '#FBCFE8', tertiary: '#FDE68A' },
  },
  {
    name: 'David K.',
    role: 'Senior UX Designer & Mentor, Kenya',
    text:
      "As a mentor, I've been able to impact hundreds of learners while building a sustainable income. I earn from my courses, supervise projects, and coach 1-on-1. It's the perfect platform for experts.",
    avatar: 'src/assets/JAimg.png',
    colors: { primary: '#FBCFE8', secondary: '#FDE68A', tertiary: '#E5E7EB' },
  },
  {
    name: 'Jennifer O.',
    role: 'Founder, Tech Startup, Ghana',
    text:
      "We've hired twelve (12) people through APPRELAB in the past 6 months. The quality is amazing because of the mentor oversight, and the pricing is perfect for our startup budget.",
    avatar: 'src/assets/JAimg.png',
    colors: { primary: '#FDE68A', secondary: '#E5E7EB', tertiary: '#FBCFE8' },
  },
];

export default function JoinApprelab() {
  const [index, setIndex] = useState(0);

  // --- AUTO ANIMATION LOGIC ---
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userInteractedRef = useRef(false);

  const next = () => {
    userInteractedRef.current = true;
    setIndex((prev) => (prev + 1) % testimonials.length);

    // resume auto animation after interaction
    setTimeout(() => {
      userInteractedRef.current = false;
    }, 6000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!userInteractedRef.current) {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  // --- END AUTO ANIMATION LOGIC ---

  return (
    <Box
      sx={{
        bgcolor: '#061A5C',
        color: '#fff',
        px: { xs: 3, sm: 6, md: 18 },
        py: { xs: 8, md: 16 },
      }}
    >
      <Box maxWidth={1200} mx="auto">
        {/* ---------- HEADLINE ---------- */}
        <Typography
          fontSize={{ xs: 26, sm: 32, md: 40 }}
          fontWeight={800}
          textAlign="center"
          fontFamily="Poppins, sans-serif"
          mb={2}
        >
          Join <Box component="span" color="#94A3B8">Thousands</Box> Building
          their Future with{' '}
          <Box
            component="span"
            sx={{
              bgcolor: '#FACC15',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              color: '#000',
              display: 'inline-block',
            }}
          >
            APPRELAB
          </Box>
        </Typography>

        <Typography
          textAlign="center"
          mb={{ xs: 6, md: 9 }}
          color="#CBD5F5"
          fontFamily="Poppins, sans-serif"
        >
          Start earning from day one while building real-world experience
        </Typography>

        {/* ---------- PARTNER LOGOS ---------- */}
        <Stack
          direction="row"
          spacing={{ xs: 4, md: 9 }}
          justifyContent="center"
          alignItems="center"
          mb={{ xs: 10, md: 20 }}
          flexWrap="wrap"
        >
          <img src="src/assets/FounderOs.png" height={70} />
          <Box bgcolor="#fff" px={1.5} py={0.5} borderRadius={1}>
            <img src="src/assets/ResearchPedia.png" height={70} />
          </Box>
          <img src="src/assets/Alotech.png" height={70} />
        </Stack>

        {/* ---------- BOTTOM SECTION ---------- */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 8, md: 10 }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <Box maxWidth={420} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography
              fontSize={{ xs: 26, md: 32 }}
              fontWeight={800}
              mb={2}
              fontFamily="Poppins, sans-serif"
            >
              Join Our <Box component="span" color="#f7d13bff">10,000+</Box> Community
            </Typography>

            <Typography mb={4} color="#CBD5F5" fontFamily="Poppins, sans-serif">
              Connect with learners, mentors, and businesses worldwide.
            </Typography>

            <Stack spacing={1.5} mb={4} alignItems={{ xs: 'center', md: 'flex-start' }}>
              {[
                '10,000+ Active Members',
                '50+ Skills Taught',
                '2000+ Projects Completed',
                '95% Satisfaction Rate',
              ].map((item) => (
                <Typography key={item} fontFamily="Poppins, sans-serif">
                  <Box component="span" color="#FDE68A">✔</Box> {item}
                </Typography>
              ))}
            </Stack>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#0B1C5D',
                fontWeight: 600,
                borderRadius: '13px',
                px: '30px',
                py: '15px',
                textTransform: 'none',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Join the Waitlist <ArrowOutwardIcon sx={{ fontSize: 18 }} />
            </Button>
          </Box>

          {/* ---------- TESTIMONIAL STACK ---------- */}
          <Box
            position="relative"
            width={{ xs: '95%', sm: 360, md: 420 }}
            height={{ xs: 320, md: 340 }}
          >
            {/* BACK CARDS */}
            <Box
              sx={{
                position: 'absolute',
                top: 44,
                left: { xs: 0, md: 43 },
                width: '100%',
                height: { xs: 300, md: 330 },
                bgcolor: testimonials[(index + 2) % testimonials.length].colors.primary,
                borderRadius: '24px',
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 22,
                left: { xs: 0, md: 24 },
                width: '100%',
                height: { xs: 305, md: 325 },
                bgcolor: testimonials[(index + 1) % testimonials.length].colors.primary,
                borderRadius: '24px',
                zIndex: 2,
              }}
            />

            {/* FRONT CARD */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 80, opacity: 0, scale: 0.96 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -80, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', width: '100%', zIndex: 3 }}
              >
                <Box
                  onClick={next}
                  sx={{
                    bgcolor: testimonials[index].colors.primary,
                    color: '#111827',
                    borderRadius: '24px',
                    p: 4,
                    height: { xs: 305, md: 325 },
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  }}
                >
                  <Typography mb={2}>★★★★★</Typography>

                  <Typography fontSize={14} flex={1}>
                    “{testimonials[index].text}”
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <img
                      src={testimonials[index].avatar}
                      width={44}
                      height={44}
                      style={{ borderRadius: '50%' }}
                    />
                    <Box>
                      <Typography fontWeight={700}>
                        {testimonials[index].name}
                      </Typography>
                      <Typography fontSize={13} color="#6B7280">
                        {testimonials[index].role}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </AnimatePresence>

            {/* ARROW (DESKTOP ONLY) */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <img
                src="src/assets/line.png"
                style={{
                  position: 'absolute',
                  bottom: -185,
                  right: -180,
                  width: 200,
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';

const features = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: 'Skills + Experience',
    description: 'People have skills but lack real-life experience. We solve this by providing supervised real-world projects that build your portfolio while getting paid.',
    color: '#0057FF',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Complete Flexibility',
    description: 'No more difficulty attending rigid bootcamps. Learn at your own pace with micro-courses and work on projects that fit in your schedule.',
    color: '#FFD93D',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: 'WorkLab Projects',
    description: 'Our WorkLab connects you with real clients needing digital services. Get mentored through the process and deliver professional work.',
    color: '#0057FF',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: 'Become a Mentor',
    description: 'Share your expertise as a course creator or mentor. Earn income through course sales, project supervision, and 1-on-1 mentorship sessions.',
    color: '#FFD93D',
  },
];

const WhyAppRelab = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        position: 'relative',
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              fontFamily: 'inherit', 
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3rem' } 
            }}
          >
            Why{' '}
            <Box
              component="span"
              sx={{
                color: '#0057FF',
                // Keeping original clip logic but ensuring it stands out
                background: '#0057FF',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              apprelab™
            </Box>
            ?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'inherit',
              color: '#475569',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            The platform that bridges the gap between learning and real-world experience
          </Typography>
        </Box>

        {/* FLEX CARDS WRAPPER */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(50% - 16px)' },
                background: '#F9FAFB',
                border: '1px solid #e4e2e2ff',
                borderRadius: '16px ',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: `0 20px 40px ${feature.color}30`,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '12px',
                    background: `${feature.color}20`,
                    color: feature.color,
                    mb: 3,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: '#1E293B',
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'inherit',
                    color: '#475569',
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyAppRelab;
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import LearnWorkEarn from '../components/LearnWorkEarn';
import IntegratedPlatforms from '../components/IntegratedPlatforms'; 
import JoinApprelab from '../components/JoinApprelab';
import Newsletter from '../components/Newsletter';
import TransformCTA from '../components/TransformCTA';
import JourneySection from '../components/JourneySection';

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Hero />
      <LearnWorkEarn />
      <IntegratedPlatforms />
      <JoinApprelab />
      <JourneySection />
      <TransformCTA />
      <Newsletter />
    </Box>
  );
};

export default Home;

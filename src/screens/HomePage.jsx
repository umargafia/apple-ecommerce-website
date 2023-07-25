import { Box } from '@mui/material';
import React from 'react';

import WelcomeSection from '../components/homePage/WelcomeSection';
import AdsSection from '../components/homePage/AdsSection';
import CardsSection from '../components/homePage/CardsSection';

function HomePage() {
  return (
    <Box>
      <WelcomeSection />
      <AdsSection />
      <CardsSection />
    </Box>
  );
}

export default HomePage;

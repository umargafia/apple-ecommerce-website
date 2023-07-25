import { Box } from '@mui/material';
import React from 'react';

import WelcomeSection from '../components/homePage/WelcomeSection';
import AdsSection from '../components/homePage/AdsSection';

function HomePage() {
  return (
    <Box>
      <WelcomeSection />
      <AdsSection />
    </Box>
  );
}

export default HomePage;

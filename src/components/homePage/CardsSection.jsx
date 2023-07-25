import { Box } from '@mui/material';
import React from 'react';

import Carts from '../global/Carts';

function CardsSection(props) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
    </Box>
  );
}

export default CardsSection;

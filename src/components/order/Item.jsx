import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import MyCard from '../global/Mycard';
import { InfoItemFW } from './InfoItem';
import MyButton from '../global/MyButton';

function Item() {
  return (
    <MyCard sx={{ bgcolor: 'white', minHeight: '50vh', p: 3 }}>
      <InfoItemFW title="Number of Items" text="3" normal />
      <InfoItemFW title="Subtotal" text="10000" />
      <InfoItemFW title="Shipping" text="100" />
      <InfoItemFW title="Tax" text="6400" />
      <InfoItemFW title="Discount" text="000" />
      <Box sx={{ mt: '40%' }}>
        <Typography sx={{ textAlign: 'right', fontSize: 30 }}>
          ₦450002
        </Typography>
        <Divider />
        <MyButton text="pay ₦450002" sx={{ mt: 2 }} fullWidth />
      </Box>
    </MyCard>
  );
}

export default Item;

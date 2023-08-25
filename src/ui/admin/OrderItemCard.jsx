import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import MyCard from '../../components/global/Mycard';
import OrderItem from './OrderItem';

export default function OrderItemCard() {
  return (
    <MyCard
      sx={{
        maxHeight: '80vh',
        minHeight: '80vh',
        margin: 1,
        backgroundColor: 'primary.main',
        overflow: 'auto',
        p: 1,
      }}
    >
      <Typography variant="h4" color="white">
        All orders
      </Typography>
      <Divider sx={{ backgroundColor: 'white' }} />

      <OrderItem />
      <OrderItem />
      <OrderItem />
    </MyCard>
  );
}

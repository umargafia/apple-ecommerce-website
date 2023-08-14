import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MyCard from '../global/Mycard';
import { InfoItemFW } from './InfoItem';
import MyButton from '../global/MyButton';

function Item() {
  const location = useLocation();
  const { cartInfo } = location.state;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(parseInt(cartInfo.totalPrice + 1000 + 6400));
  });

  return (
    <MyCard sx={{ bgcolor: 'white', minHeight: '50vh', p: 3 }}>
      <InfoItemFW title="Number of Items" text={cartInfo.noOfItems} normal />
      <InfoItemFW title="Subtotal" text={cartInfo.totalPrice} />
      <InfoItemFW title="Shipping" text="1000" />
      <InfoItemFW title="Tax" text="6400" />
      <InfoItemFW title="Discount" text="000" />
      <Box sx={{ mt: '40%' }}>
        <Typography sx={{ textAlign: 'right', fontSize: 30 }}>
          ₦{totalPrice}
        </Typography>
        <Divider />
        <MyButton text={`pay ₦${totalPrice}`} sx={{ mt: 2 }} fullWidth />
      </Box>
    </MyCard>
  );
}

export default Item;

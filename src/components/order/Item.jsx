import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MyCard from '../global/Mycard';
import { InfoItemFW } from './InfoItem';
import MyButton from '../global/MyButton';
import { createOrder } from '../../store/api';

function Item() {
  const location = useLocation();
  const { token, carts } = useSelector((state) => state.auth);
  const { cartInfo } = location.state;
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotalPrice(parseInt(cartInfo.totalPrice + 1000 + 400));
  });

  const handlePayment = async () => {
    setLoading(true);
    // loop through the carts id and create a order
    let response;
    for (const cart of carts) {
      response = await createOrder({ token, cartId: cart._id });
    }

    // navigate to recipe page
    navigate('/recept');
    setLoading(false);
    return;
  };

  return (
    <MyCard sx={{ bgcolor: 'white', minHeight: '50vh', p: 3 }}>
      <InfoItemFW title="Number of Items" text={cartInfo.noOfItems} normal />
      <InfoItemFW title="Subtotal" text={cartInfo.totalPrice} />
      <InfoItemFW title="Shipping" text="1000" />
      <InfoItemFW title="Tax" text="400" />
      <InfoItemFW title="Discount" text="000" />
      <Box sx={{ mt: '40%' }}>
        <Typography sx={{ textAlign: 'right', fontSize: 30 }}>
          ₦{totalPrice}
        </Typography>
        <Divider />
        <MyButton
          text={
            loading ? (
              <CircularProgress sx={{ color: 'primary.main' }} size={20} />
            ) : (
              `pay ₦${totalPrice}`
            )
          }
          sx={{ mt: 2 }}
          fullWidth
          disabled={loading}
          onClick={handlePayment}
        />
      </Box>
    </MyCard>
  );
}

export default Item;

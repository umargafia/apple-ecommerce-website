import { Box, Button, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MyAppbar from '../components/global/MyAppbar';
import Mycard from '../components/global/Mycard';
import ReceiptItem from '../components/recipt/ReciptItem';
import { getOrders } from '../store/api';
import IphoneLists from '../constants/IphoneLists';

export default function ReceptPage() {
  const { token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async () => {
    try {
      const response = await getOrders({ token });
      const updatedOrders = mapOrdersWithProducts(response.data);
      setOrders(updatedOrders);
      console.log(updatedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const mapOrdersWithProducts = (data) => {
    return data.map((item) => {
      const cartId = item?.cartId?.product;
      const iphone = IphoneLists.find((i) => i.id === parseInt(cartId));
      return {
        name: iphone?.name,
        image: iphone?.image,
        status: item?.status,
        totalPrice: item?.cartId?.totalPrice,
      };
    });
  };

  return (
    <>
      <MyAppbar />
      <Box>
        <Mycard sx={{ mb: 1, height: '60vh', overflowY: 'auto', p: 2 }}>
          <Typography variant="h4" color="primary">
            Orders
          </Typography>
          <ReceiptItem />
          <ReceiptItem />
          <ReceiptItem />
          <ReceiptItem />
          <ReceiptItem />
          <ReceiptItem />
          <ReceiptItem />
        </Mycard>
        <Mycard sx={{ mb: 2, p: 2 }}>
          <Grid container>
            <Grid sm={6} sx={{ borderRight: '1px solid gray' }}>
              <Typography variant="h4">Payments</Typography>
              <Button variant="contained" sx={{ mt: 2, color: 'white' }}>
                visa1**********23
              </Button>
            </Grid>
            <Grid sm={6} sx={{ pl: 2 }}>
              <Typography variant="h4">Delivery</Typography>
              <Typography>Nigeria</Typography>
              <Typography>Katsina</Typography>
              <Typography>Katsina</Typography>
              <Typography>Gidan dawa</Typography>
              <Typography>12345 </Typography>
            </Grid>
          </Grid>
        </Mycard>
      </Box>
    </>
  );
}

import { Box, Button, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

import MyAppbar from '../components/global/MyAppbar';
import Mycard from '../components/global/Mycard';
import ReceiptItem from '../components/recipt/ReciptItem';

export default function ReceptPage() {
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

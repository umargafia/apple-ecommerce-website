import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Divider, Typography } from '@mui/material';

import MyCard from './Mycard';
import image from '../../assets/iphonex.png';

function Carts() {
  return (
    <Grid container sm={2} sx={{ m: 2 }}>
      <MyCard sx={{ padding: 3 }}>
        <img src={image} alt="iPhone x picture" style={{ width: '100%' }} />
        <Divider sx={{ my: 2 }} />
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography>Apple iPhone X</Typography>
          <Typography fontWeight="bold">₦100,000</Typography>
          <Button variant="outlined" fullWidth>
            Add to Cart
          </Button>
        </Grid>
      </MyCard>
    </Grid>
  );
}

export default Carts;

import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, Divider, Typography } from '@mui/material';

import MyCard from './Mycard';

function Carts({ item }) {
  return (
    <Grid container sm={2} sx={{ m: 2 }}>
      <MyCard sx={{ padding: 3 }}>
        <Box sx={{ height: 250, display: 'flex', alignItems: 'center' }}>
          <img src={item.image} alt={item.name} style={{ width: '100%' }} />
        </Box>
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
          <Typography textAlign="center">{item.name}</Typography>
          <Typography fontWeight="bold">₦{item.price}</Typography>
          <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </Grid>
      </MyCard>
    </Grid>
  );
}

export default Carts;
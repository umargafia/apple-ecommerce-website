import React, { useState } from 'react';
import { Divider, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/SwipeableDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CartsItem from './CartsItem';
import MyButton from '../global/MyButton';
const CartDrawer = ({ handleOpen, open }) => {
  const [noOfItems, setNoOfItems] = useState(4);
  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={handleOpen}
      onOpen={handleOpen}
    >
      <Grid sx={{ bgcolor: 'primary.pureWhite', maxWidth: '30vw' }} container>
        <Grid xs={12} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <ShoppingCartIcon sx={{ color: 'primary.main', mr: 1.5 }} />
          <Typography
            variant="h6"
            sx={{ color: 'primary.main', fontWeight: '800', mr: 'auto' }}
          >
            {noOfItems} {noOfItems > 1 ? 'items' : 'item'}
          </Typography>
          <IconButton onClick={handleOpen}>
            <ClearIcon />
          </IconButton>
        </Grid>

        <Grid xs={12}>
          <Divider sx={{ my: 1 }} />
        </Grid>
        <Grid xs={12} sx={{ height: '78vh', overflowY: 'auto' }}>
          <CartsItem />
          <CartsItem />
          <CartsItem />
          <CartsItem />
          <CartsItem />
          <CartsItem />
          <CartsItem />
          <CartsItem />
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <MyButton text="Checkout now (₦2000)" sx={{ width: '90%' }} />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;

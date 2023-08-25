import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

import AdminAppBar from '../../ui/admin/AppBar';
import MyCard from '../../components/global/Mycard';
import OrderItemCard from '../../ui/admin/OrderItemCard';

function AdminHome() {
  return (
    <Grid
      container
      sx={{
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Grid xs={12}>
        <AdminAppBar />
      </Grid>
      <Grid xs={6}>
        <OrderItemCard />
      </Grid>
      <Grid xs={5.5}>
        <MyCard></MyCard>
      </Grid>
    </Grid>
  );
}

export default AdminHome;

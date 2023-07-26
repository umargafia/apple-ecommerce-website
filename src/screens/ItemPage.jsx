import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';

import MyButton from '../components/global/MyButton';
import IphoneList from '../constants/IphoneLists';
function ItemPage() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedItem = IphoneList.find((i) => i.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container>
      <Grid
        sm={12}
        md={6}
        sx={{
          bgcolor: 'primary.pureWhite',
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          py: 2,
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ height: 'calc(100vh - 10rem ' }}
        />
      </Grid>
      <Grid
        sm={12}
        md={6}
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
          pl: 10,
        }}
      >
        <Typography variant="h3" color={'primary.main'}>
          {item.name}
        </Typography>
        <Typography variant="h5" color="gray" fontWeight="bold">
          Brand: Apple
        </Typography>
        <Typography variant="h5">₦{item.price}</Typography>
        <Typography sx={{ mt: 2, color: 'gray' }}>
          30% OFF ON ALL ORDERS{' '}
        </Typography>
        <MyButton text="Add to cart" sx={{ mt: 2 }} />
        <MyButton text="Buy Now" sx={{ mt: 2 }} />
      </Grid>
    </Grid>
  );
}

export default ItemPage;

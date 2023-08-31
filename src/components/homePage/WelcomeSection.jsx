import { Box, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';

import image from '../../assets/iphone14lg.jpg';
import MyButton from '../global/MyButton';
import MyCard from '../global/Mycard';

const Link = Scroll.Link;
export default function WelcomeSection() {
  const navigate = useNavigate();
  return (
    <MyCard>
      <Grid container>
        <Grid
          sm={12}
          md={7}
          container
          sx={{
            alignItems: 'center',
            justifyContent: 'start',
            display: 'flex',
            pl: 5,
            height: { sm: '50vh' },
            order: { sm: 1, md: 0 },
          }}
        >
          <Grid container sm={12}>
            <Grid sm={12}>
              <Typography variant="h5" sx={{ color: 'gray' }}>
                Best Collections Of
              </Typography>
            </Grid>
            <Grid sm={12}>
              <Typography variant="h3" color="primary" fontWeight={'bold'}>
                Apple iPhones
              </Typography>
            </Grid>
            <Typography>30% OFF ON ALL ORDERS </Typography>
            <Grid sm={12} sx={{ mt: 1 }}>
              <Link
                activeClass="active"
                to="iphones"
                spy={true}
                smooth={true}
                duration={500}
              >
                <MyButton text="Shop Now" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm={12} md={5}>
          <img
            component="img"
            src={image}
            alt="iphone14"
            style={{ height: '72vh' }}
          />
        </Grid>
      </Grid>
    </MyCard>
  );
}

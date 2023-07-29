import { Box, Divider, Drawer, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import MyButton from '../components/global/MyButton';

export default function Profile({ openProfile, handleOpenProfile }) {
  const theme = useTheme();
  return (
    <Drawer anchor={'right'} open={openProfile} onClose={handleOpenProfile}>
      <Grid
        sx={{
          bgcolor: 'primary.white',
          minWidth: '30vw',
          p: 3,
          minHeight: '100vh',
        }}
        container
      >
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              background: theme.palette.primary.main,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              px: 4.5,
              py: 3,
            }}
          >
            <Typography variant="h3" color="white">
              U
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 'bold',
                mt: 2,
                textTransform: 'uppercase',
                letterSpacing: 3,
                textAlign: 'center',
              }}
            >
              Umar Faruk Musa
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', textAlign: 'center', color: 'gray' }}
            >
              umagafia@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sx={{ mt: -30 }}>
          <Divider />
          <MyButton text="Logout" sx={{ mt: 1 }} />
        </Grid>
      </Grid>
    </Drawer>
  );
}

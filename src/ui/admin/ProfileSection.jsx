import { Avatar, Button, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

function ProfileSection(props) {
  return (
    <Grid container>
      <Grid xs={12} sx={{ m: 1 }}>
        <Avatar sx={{ margin: '0 auto', p: 2 }}>
          <Typography variant="h4" textTransform="uppercase">
            U
          </Typography>
        </Avatar>
        <Typography
          textAlign="center"
          color="white"
          fontWeight="bold"
          textTransform="capitalize"
          variant="h4"
        >
          Umar Faruk musa
        </Typography>
        <Typography
          textAlign="center"
          color="whitesmoke"
          fontWeight="bold"
          letterSpacing={3}
        >
          umargafia@gmail.com
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Divider />
        <Button
          variant="contained"
          fullWidth
          sx={{ color: 'primary.main', bgcolor: 'white', mt: 2 }}
        >
          change password
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button
          variant="contained"
          fullWidth
          sx={{ color: 'primary.main', bgcolor: 'white', mt: 2 }}
        >
          Update user info
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button
          variant="contained"
          fullWidth
          sx={{ color: 'white', bgcolor: 'error.main', mt: 2 }}
        >
          Logout
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProfileSection;

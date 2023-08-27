import { Avatar, Button, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { useSelector } from 'react-redux';

function ProfileSection() {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <Grid container>
      <Grid xs={12} sx={{ m: 1 }}>
        <Avatar sx={{ margin: '0 auto', p: 2 }}>
          <Typography variant="h4" textTransform="uppercase">
            {user.name.charAt(0)}
          </Typography>
        </Avatar>
        <Typography
          textAlign="center"
          color="white"
          fontWeight="bold"
          textTransform="capitalize"
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography
          textAlign="center"
          color="whitesmoke"
          fontWeight="bold"
          letterSpacing={3}
        >
          {user.email}
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
          sx={{
            color: 'white',
            bgcolor: 'error.main',
            mt: 2,
            '&:hover': { bgcolor: 'error.main', opacity: [0.9, 0.8, 0.7] },
          }}
        >
          Logout
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProfileSection;

import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import UserItem from './UserItem';

export default function Users() {
  return (
    <Box>
      <Typography color="white" variant="h5" fontWeight="bold">
        Users
      </Typography>
      <Divider sx={{ bgcolor: 'white' }} />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </Box>
  );
}

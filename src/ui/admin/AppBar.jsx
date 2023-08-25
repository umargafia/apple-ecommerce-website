import { AdminPanelSettings } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';

function AdminAppBar(props) {
  const theme = useTheme();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <AdminPanelSettings sx={{ color: 'white', fontSize: 40 }} />
        <Typography color="white" variant="h4">
          Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AdminAppBar;

import { Box, useTheme } from '@mui/material';
import React from 'react';

function MyCard({ children, sx }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 1,
        mt: 1,
        backgroundColor: theme.palette.primary.pureWhite,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default MyCard;

import { Box, Button } from '@mui/material';
import React from 'react';

export default function MyButton({ text, variant, sx }) {
  return (
    <Box>
      <Button
        variant={variant ? variant : 'contained'}
        sx={{ pt: 1.2, color: 'white', ...sx }}
      >
        {text}
      </Button>
    </Box>
  );
}

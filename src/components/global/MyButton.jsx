import { Button } from '@mui/material';
import React from 'react';

export default function MyButton({ text, variant, sx, onClick, fullWidth }) {
  return (
    <Button
      onClick={onClick}
      fullWidth={fullWidth}
      variant={variant ? variant : 'contained'}
      sx={{ pt: 1.2, color: 'white', ...sx }}
    >
      {text}
    </Button>
  );
}

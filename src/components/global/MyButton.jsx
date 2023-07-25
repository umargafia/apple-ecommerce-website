import { Box, Button } from '@mui/material';
import React from 'react';

export default function MyButton({ text }) {
  return (
    <Box>
      <Button variant="contained" sx={{ pt: 1.2, color: 'white' }}>
        {text}
      </Button>
    </Box>
  );
}

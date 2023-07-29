import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { Divider, IconButton, Typography, useTheme } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import IphoneLists from '../../constants/IphoneLists';

function CartsItem() {
  const theme = useTheme();

  return (
    <Grid container sx={{ ml: 2, maxWidth: '100%' }}>
      <Grid xs={3}>
        <img
          src={IphoneLists[0].image}
          alt={IphoneLists[0].name}
          style={{ width: '100px', height: '100px' }}
        />
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mr: 'auto',
        }}
      >
        <Typography
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            fontsize: '16px',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
          }}
        >
          {IphoneLists[19]?.name}
        </Typography>
        <Typography color="gray">₦200 * 1 Items</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>₦200</Typography>
      </Grid>
      <Grid>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </Grid>
      <Divider sx={{ width: '100%', my: 1 }} />
    </Grid>
  );
}

export default CartsItem;

function CustomButton({ text, onClick }) {
  const theme = useTheme();

  return (
    <button
      onClick={onClick}
      style={{
        background: theme.palette.primary.pureWhite,
        boxShadow: 'none',
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        padding: '5px',
        display: 'block',
        marginTop: '10px',
        width: 40,
        fontWeight: 'bold',
        height: 40,
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
}

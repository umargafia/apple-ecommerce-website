import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import { Divider, IconButton, Typography, useTheme } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

import IphoneLists from '../../constants/IphoneLists';

function CartsItem({ item }) {
  const theme = useTheme();
  const [curItem, setItem] = useState('');
  const navigate = useNavigate();

  const id = item.product * 1;

  useEffect(() => {
    const selectedItem = IphoneLists.find((i) => i.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  const handleNavigate = () => {
    navigate(`/item/${id}`);
  };

  return (
    <Grid container sx={{ ml: 2, maxWidth: '100%' }}>
      <Grid
        container
        sx={{ mr: 'auto', width: '100%', cursor: 'pointer' }}
        onClick={handleNavigate}
      >
        <Grid xs={3}>
          <img
            src={curItem.image}
            alt={curItem.name}
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
            {curItem?.name}
          </Typography>
          <Typography color="gray">
            ₦{curItem.price} * {item?.quantity} Items
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            ₦{item?.totalPrice}
          </Typography>
        </Grid>
        <Grid>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </Grid>
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

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import MyInput from '../global/MyInput';
import MyButton from '../global/MyButton';
import InfoItem from './InfoItem';

function Address() {
  const [isEdith, setEdith] = useState(false);

  const handleSave = () => {
    setEdith(false);
  };
  return (
    <Grid container sx={{ background: 'white', p: 2 }}>
      {isEdith ? (
        <>
          <Typography>Shipping Address</Typography>
          <MyInput text="Zip Code" type="number" />
          <MyInput text="Country" />
          <MyInput text="State" />
          <MyInput text="Local Goverment" />
          <MyInput text="Street" />
          <MyButton text="Save" onClick={handleSave} />
        </>
      ) : (
        <>
          <Box>
            <Typography
              sx={{
                color: 'primary.main',
                fontSize: 20,
                mb: 1,
                fontWeight: 'bold',
              }}
            >
              Address
            </Typography>
            <InfoItem title=" Zip Code" text="1204" />
            <InfoItem title="Country" text="Nigeria" />
            <InfoItem title="State" text=" Katsina" />
            <InfoItem title="Local Goverment" text="Katsina" />
            <InfoItem title="Street" text="Gidan dawa" />
            <MyButton text="Edith Address" onClick={() => setEdith(true)} />
          </Box>
        </>
      )}
    </Grid>
  );
}

export default Address;

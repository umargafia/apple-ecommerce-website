import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import MyInput from '../global/MyInput';
import MyButton from '../global/MyButton';
import InfoItem from './InfoItem';

function Billing() {
  const [isEdith, setEdith] = useState(false);

  const handleSave = () => {
    setEdith(false);
  };

  return (
    <Grid container sx={{ background: 'white', p: 2 }}>
      {isEdith ? (
        <>
          <Typography>Billing Information</Typography>
          <MyInput text="Full Name" />
          <MyInput text="Card Number" type="number" />
          <MyInput text="Expire Date  (mm/yyyy)" props={{}} type="number" />
          <MyInput text="Cvv" type="number" />
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
              Billing Information
            </Typography>
            <InfoItem title="Full Name" text="Umar Faruk musa" />
            <InfoItem title="Card Number" text="123456789" />
            <InfoItem title="Expire Date" text="20/24" />
            <InfoItem title="Cvv" text="024" />
            <MyButton
              text="Edith Billing Information"
              onClick={() => setEdith(true)}
            />
          </Box>
        </>
      )}
    </Grid>
  );
}

export default Billing;

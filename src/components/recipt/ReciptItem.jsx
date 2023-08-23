import React from 'react';
import Row from '../global/Row';
import { Box, Divider, Typography } from '@mui/material';

import image from '../../assets/12.jpg';

function ReceiptItem({ item }) {
  return (
    <>
      <Row sx={{ m: 1 }}>
        <Row>
          <img src={image} alt={image} style={{ height: 120 }} />
          <Box sx={{ pl: 1, pt: 1 }}>
            <Typography color="primary" variant="h5" fontWeight="bold">
              Apple iPhone 12 Pro Max
            </Typography>
            <Typography>pending</Typography>
            <Typography>2 items</Typography>
            <Typography>₦ 1,000</Typography>
          </Box>
        </Row>
      </Row>
      <Divider />
    </>
  );
}

export default ReceiptItem;

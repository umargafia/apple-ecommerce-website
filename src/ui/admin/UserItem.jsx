import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Card, Typography } from '@mui/material';
import Row from '../../components/global/Row';

function UserItem() {
  return (
    <Grid sx={{ m: 2 }}>
      <Card sx={{ p: 1 }}>
        <Option header="Name" title="Umar faruk musa" />
        <Option header="Email" title="umargafia@gmail.com" />
        <Option header="Role" title="Admin" />
        <Button sx={{ bgcolor: 'error.main', color: 'white' }} fullWidth>
          Remove user
        </Button>
      </Card>
    </Grid>
  );
}

export default UserItem;

const Option = ({ header, title }) => {
  return (
    <Row>
      <Typography sx={{ fontWeight: 'bold', mr: 1 }}>{header}:</Typography>
      <Typography>{title}</Typography>
    </Row>
  );
};

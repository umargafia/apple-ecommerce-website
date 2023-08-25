import {
  Avatar,
  Button,
  CardContent,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useState } from 'react';

import MyCard from '../../components/global/Mycard';
import image from '../../assets/12.jpg';
import MyButton from '../../components/global/MyButton';

function OrderItem(props) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setStatus(value);
    console.log(value);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <MyCard>
      <Grid container sx={{ m: 1 }}>
        <Grid xs={12} container>
          <Grid xs={1} sx={{ mr: 2 }}>
            <Avatar sx={{ p: 1 }}>
              <Typography variant="h5">U</Typography>
            </Avatar>
          </Grid>
          <Grid sx={{ ml: 2 }}>
            <Typography fontWeight="bold" textTransform="capitalize">
              Umar faruk musa
            </Typography>
            <Typography color="gray" fontSize={15}>
              umargafia@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} container sx={{ mt: 2 }}>
          <Grid sx={{ mt: 1, height: 110 }}>
            <img src={image} style={{ height: '100%' }} />
          </Grid>
          <Grid sx={{ mt: 1, ml: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              iPhone 14 pro max
            </Typography>
            <Typography>2, Items</Typography>
            <Typography color="gray">Ordered on 12 Aug,2023</Typography>
            <Typography>N124,245</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ m: 1 }}>
          <FormControl fullWidth sx={{ mb: 2, mt: 2 }} variant="standard">
            <InputLabel id="demo-simple-select-label">status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={10}>pending</MenuItem>
              <MenuItem value={20}>processing</MenuItem>
              <MenuItem value={30}>shipped</MenuItem>
              <MenuItem value={40}>delivered</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" fullWidth onClick={handleExpandClick}>
            {expanded ? 'Hide Address' : 'Show address'}
          </Button>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Additional content when expanded.</Typography>
          </CardContent>
        </Collapse>
      </Grid>
    </MyCard>
  );
}

export default OrderItem;

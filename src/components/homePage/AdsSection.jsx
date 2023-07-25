import Grid from '@mui/material/Unstable_Grid2/Grid2';
import MyCard from '../global/Mycard';
import { Typography } from '@mui/material';
import AdsItem from './AdsItem';

export default function AdsSection() {
  return (
    <MyCard>
      <Grid container sm={12}>
        <AdsItem />
      </Grid>
    </MyCard>
  );
}

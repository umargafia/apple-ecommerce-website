import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppleIcon from '@mui/icons-material/Apple';
import { Home } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function MyAppbar() {
  function handleClick(e) {
    console.log(e);
  }

  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Toolbar sx={{ mx: 10 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          <Button
            sx={{
              color: '#fff',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <AppleIcon sx={{ mt: -1 }} />
            Store
          </Button>
        </Typography>
        <Box>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Home color="white" sx={{ color: 'white', fontSize: 35 }} />
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon sx={{ color: 'white', fontSize: 35 }} />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Avatar>
              <Typography sx={{ mt: 0.5, fontWeight: 'bold' }}> U</Typography>
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppbar;

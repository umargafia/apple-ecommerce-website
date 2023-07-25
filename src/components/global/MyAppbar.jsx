import { Box, Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppleIcon from '@mui/icons-material/Apple';

const navItems = ['Home', 'About', 'Contact'];
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
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{ color: '#fff' }}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppbar;

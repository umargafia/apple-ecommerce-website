import { Box, useTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MyAppbar from './components/global/MyAppbar';
import HomePage from './screens/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  const theme = useTheme();
  return (
    <Box
      sx={{ backgroundColor: theme.palette.primary.white, minHeight: '100vh' }}
    >
      <MyAppbar />
      <Box sx={{ backgroundColor: theme.palette.primary.white, m: 0, px: 15 }}>
        <RouterProvider router={router} />
      </Box>
    </Box>
  );
}

export default App;

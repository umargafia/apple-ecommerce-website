import { Box, useTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MyAppbar from './components/global/MyAppbar';
import HomePage from './screens/HomePage';
import Footer from './components/global/Footer';
import ItemPage from './screens/ItemPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/item/:id',
    element: <ItemPage />,
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
      <Footer />
    </Box>
  );
}

export default App;

import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />,
  },
]);

export default router;

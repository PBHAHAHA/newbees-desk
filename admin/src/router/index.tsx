import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/views/Login';
import Welcome from '@/views/Welocome';
import Error404 from '@/views/404';
import Error403 from '@/views/403';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '404',
    element: <Error404 />
  },
  {
    path: '403',
    element: <Error403 />
  }
]);

export default routes;

import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const Coffee = lazy(() => import('@/pages/Coffee'));

export const appRoutes = [
  {
    path: '/',
    name: 'coffee-index',
    element: <Coffee />
  },
  {
    path: '*',
    name: 'not-found',
    element: <Navigate to="/" replace />
  }
];
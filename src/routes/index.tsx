import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root'; 

import { HomePage } from '@pages/HomePage';
import { AuthPage } from '@pages/AuthPage';
import PrivateRoute from './privateRoute'

export const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <PrivateRoute>
      <HomePage />
    </PrivateRoute>
  ),
});

export const AuthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: () => <AuthPage />
});

export const routeTree = rootRoute.addChildren([HomeRoute, AuthRoute]);

import 'reflect-metadata';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute, } from '../routes/__root'
import { HomeRoute, AuthRoute } from '../routes/index';

import { AuthProvider } from '@/shared/context/AuthContext';

import '@/styles/index.css';

const routeTree = rootRoute.addChildren([HomeRoute, AuthRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

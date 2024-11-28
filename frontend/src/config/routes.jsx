import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import RootLayout from '../rootLayout/RootLayout';
import AdminDashboard from '../pages/admin/AdminDasboardPage';
export const routes = createBrowserRouter([
      {
        path: '/',
        element: <Home />, 
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: <Login />, 
      },
      {
        path: '/home',
        element: <Home />, 
      },
      {
        path: '/dashboard',
        element: <RootLayout />,
        children: [
          {
            path: '',
            element: <AdminDashboard />
          },
        ]
      }
]);


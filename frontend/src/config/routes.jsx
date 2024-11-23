import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';


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
]);


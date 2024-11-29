import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import RootLayout from '../rootLayout/RootLayout';
import AdminDashboard from '../pages/admin/AdminDasboardPage';
import AdminAllProductsPage from '../pages/admin/AdminAllProductsPage';
import AdminOrdersListPage from '../pages/admin/AdminOrderListPage';
import AdminOrderDetailsPage from '../pages/admin/AdminOrderDetailsPage';
import AdminProductDetailPage from '../pages/admin/AdminProductsDetailPage';
import AddNewProductPage from '../pages/admin/AdminNewProductPage';
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
          {
            path: 'all-products',
            element: <AdminAllProductsPage/>
          },
          {
            path: 'order-list',
            element: <AdminOrdersListPage />
          },
          {
            path: 'order-detail',
            element: <AdminOrderDetailsPage />
          },
          {
            path: 'product-details',
            element: <AdminProductDetailPage />
          },
          {
            path: 'add-product',
            element: <AddNewProductPage />
          }
        ]
      }
]);


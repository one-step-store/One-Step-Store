import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import AdminDashboard from '../pages/admin/AdminDasboard';
import RootLayout from '../rootlayout/RootLayout';
import AdminAllProductsPage from '../pages/admin/AdminAllProductsPage';
import AdminOrderDetailsPage from '../pages/admin/AdminOrderDetailsPage';
import AdminAddNewProductPage from '../pages/admin/AdminNewProductPage';
import AdminProductDetailPage from '../pages/admin/AdminProductDetailPage';
import AdminCategoriesPage from '../pages/admin/AdminCategoriesPage';
import AdminAddCategoryPage from '../pages/admin/AdminAddCategoryPage';
import AdminBrandPage from '../pages/admin/AdminBrandPage';
import AdminAddBrandPage from '../pages/admin/AdminAddBrandPage';
import AdminAllUserPage from '../pages/admin/AdminAllUserPage';
import AdminEditBrandPage from '../pages/admin/AdminEditBrandPage';
import AdminEditCategoryPage from '../pages/admin/AdminEditCategoryPage';
import AdminAddUserPage from '../pages/admin/AdminAddUser';
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
            element: <AdminAllProductsPage />
          },
          {
            path: 'order-details',
            element: <AdminOrderDetailsPage />
          },
          {
            path: 'add-product',
            element: <AdminAddNewProductPage />
          },
          {
            path: 'product-detail',
            element: <AdminProductDetailPage />
          },
          {
            path: 'all-categories',
            element: <AdminCategoriesPage />
          },
          {
            path: 'add-category',
            element: <AdminAddCategoryPage />
          }, 
          {
            path: 'all-brands',
            element: <AdminBrandPage />
          },
          {
            path: 'add-brand',
            element: <AdminAddBrandPage />
          },
          {
            path: 'all-users',
            element: <AdminAllUserPage />
          },
          {
            path: 'add-user',
            element: <AdminAddUserPage />
          }, 
          {
            path: 'edit-brand',
            element: <AdminEditBrandPage />
          },
          {
            path: 'edit-category',
            element: <AdminEditCategoryPage />
          }
        ]
      }
]);

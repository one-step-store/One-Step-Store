import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes';
import { CartProvider } from './context/CartContext'; // Pastikan konteks keranjang diimpor
import './index.css'; // Atau gaya global Anda

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </React.StrictMode>
);

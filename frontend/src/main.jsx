import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './config/routes'
import { StrictMode } from "react";
// import { AuthProvider } from './context/AuthContext';


createRoot(document.getElementById('root')).render(
  // <AuthProvider>
  //   <RouterProvider router={routes}></RouterProvider>
  // </AuthProvider>,
  <StrictMode>
  <RouterProvider router={routes} />
  </StrictMode>
)


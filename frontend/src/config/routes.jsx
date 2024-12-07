import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Beranda from "../pages/Beranda"; // Halaman utama
import Home from "../pages/Home"; // Halaman Home
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import EditProfileForm from "../pages/EditProfileForm";
import ProductDetail from "../pages/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Checkout from "../pages/Checkout";
import ForgotPassword from "../pages/ForgotPassword";
import BrandPage from "../pages/BrandPage";
import ResetPassword from "../pages/ResetPassword";
import MyOrder from "../pages/MyOrder";
import MyAddress from "../pages/MyAddress";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />, // Halaman utama
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />, // Halaman Home
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/edit-profile",
    element: <EditProfileForm />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/brand/:brandName",
    element: <BrandPage />,
  },
  {
    path: "/my-orders",
    element: <MyOrder />,
  },
  {
    path: "/my-address",
    element: <MyAddress />,
  },
]);

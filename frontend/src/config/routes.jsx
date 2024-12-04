import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import EditProfileForm from "../pages/EditProfileForm";
import ProductDetail from "../pages/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Checkout from "../pages/Checkout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

]);

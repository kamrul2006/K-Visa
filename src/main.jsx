import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './Layouts/HomePage';
import ErrorPage from './Layouts/ErrorPage';
import LoginPage from './Layouts/LoginPage';
import Signup from './Layouts/Signup';
import AddVisa from './Layouts/AddVisa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/addVisa",
    element: <AddVisa></AddVisa>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/signUp",
    element: <Signup></Signup>,
    errorElement: <ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

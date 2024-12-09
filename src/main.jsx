import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './Layouts/HomePage';
import ErrorPage from './Layouts/ErrorPage';
import AddVisa from './Layouts/AddVisa';
import AllVisa from './Layouts/AllVisa';
import RootPage from './Layouts/RootPage';
import LoginPage from './Auth/Login';
import SignUpSection from './Auth/SignUp';
import AuthProvider from './Providers/AuthProvider';
import PrivetRout from './Privet/Privetrought';
import VisaDetails from './Components/VisaDetails';
import MyAdded from './Layouts/MyAdded';
import MyApplic from './MyApplic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/allVisa",
        loader: () => fetch('http://localhost:5000/visas'),
        element: <PrivetRout><AllVisa></AllVisa></PrivetRout>,
      },
      {
        path: '/allVisa/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/visas/${params.id}`),
        element: <PrivetRout><VisaDetails></VisaDetails></PrivetRout>,
      },
      {
        path: '/myAdded',
        loader: () => fetch("http://localhost:5000/visas"),
        element: <PrivetRout><MyAdded></MyAdded></PrivetRout>,
      },
      {
        path: '/myApply',
        loader: () => fetch("http://localhost:5000/visas"),
        element: <PrivetRout><MyApplic></MyApplic></PrivetRout>,
      },
    ]
  },
  {
    path: "/addVisa",
    element: <PrivetRout><AddVisa></AddVisa></PrivetRout>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/signUp",
    element: <SignUpSection></SignUpSection>,
    errorElement: <ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)

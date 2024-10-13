import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Signup.jsx';
import Signup from './Pages/Login.jsx';
import About from './Components/About.jsx';

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>
  },
  {
    path: "/app",
    element: <App/>
  },
  {
    path: "/signup",
    element: <Login/>
  },
  {
    path: "/login",
    element: <Signup/>
  },
  {
    path: "/about",
    element: <About/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)

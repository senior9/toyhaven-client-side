import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Login from "../Pages/Home/Login/Login";
import SecondLayout from "../Layout/SecondLayout";
import Register from "../Pages/Home/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path:"/login",
      element:<SecondLayout></SecondLayout>
    },
    {
    path: "/",
    element: <Login></Login>,
    },
    {
    path: "/register",
    element: <Register></Register>
    },
    
  ]);
  export default router
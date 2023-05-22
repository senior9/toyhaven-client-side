import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Login from "../Pages/Home/Login/Login";
import SecondLayout from "../Layout/SecondLayout";
import Register from "../Pages/Home/Register/Register";
import Categories from "../Pages/Categories/Categories";
import ToyDetails from "../Pages/Home/ToyDetails/ToyDetails";
import AddCategory from "../Pages/Home/AddCategory/AddCategory";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'category',
          element:<Categories></Categories>,
          loader: ()=>fetch('http://localhost:5000/collections')
        },
        
      ]
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
    {
        path:'category/:id',
        element:<ToyDetails></ToyDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/collections/${params.id}`)
      
    },
    {
      path:'addCategory',
      element:<AddCategory></AddCategory>,
      // loader: ({params})=>fetch(`http://localhost:5000/collections/${params.id}`)
    }
    
  ]);
  export default router
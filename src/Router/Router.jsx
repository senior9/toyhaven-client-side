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
import AllCar from "../Pages/AllCar/AllCar";
import MyToys from "../Pages/MyToys/MyToys";
import Private from "../Shared/Private/Private";

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
        element:<Private><ToyDetails></ToyDetails></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/collections/${params.id}`)
      
    },
    {
      path:'add-toy',
      element:<Private><AddCategory></AddCategory></Private>,
      
    },
    {
      path:'all-car',
      element:<Private><AllCar></AllCar></Private>,
      loader: ()=>fetch('http://localhost:5000/new-collections')
    },
    {
      path:'my-toys',
      element:<Private><MyToys></MyToys></Private>,
    }
    
  ]);
  export default router
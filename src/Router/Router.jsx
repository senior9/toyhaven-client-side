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
import UpdatedToys from "../Pages/MyToys/UpdatedToys/UpdatedToys";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";
import SimgleToyDetails from "../Pages/Home/ToyDetails/SingleToyDetails/SimgleToyDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'category',
          element:<Categories></Categories>,
          loader: ()=>fetch('https://toy-haven-senior9.vercel.app/collections')
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
        loader: ({params})=>fetch(`https://toy-haven-senior9.vercel.app/collections/${params.id}`)
      
    },
    {
      path:'add-toy',
      element:<Private><AddCategory></AddCategory></Private>,
      
    },
    {
      path:'all-car',
      element:<AllCar></AllCar>,
      loader: ()=>fetch('https://toy-haven-senior9.vercel.app/new-collections')
    },
    {
      path:'car-details/:id',
      element:<Private><SimgleToyDetails></SimgleToyDetails></Private>,
      loader: ({params})=>fetch(`https://toy-haven-senior9.vercel.app/my-collections/${params.id}`)

    },
    {
      path:'my-toys',
      element:<Private><MyToys></MyToys></Private>,
      // loader: ()=>fetch('http://localhost:5000/my-collections')
      
    },
    {
      path:'update-toys/:id',
      element:<Private><UpdatedToys></UpdatedToys></Private>,
      loader:({params})=>fetch(`https://toy-haven-senior9.vercel.app/my-collections/${params.id}`)
    },

    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);
  export default router
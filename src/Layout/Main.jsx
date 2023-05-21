import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Pages/Home/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
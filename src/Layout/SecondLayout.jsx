import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Home/Login/Login';
import Footer from '../Shared/Footer/Footer';

const SecondLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SecondLayout;
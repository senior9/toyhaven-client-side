import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;
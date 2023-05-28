import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Reviews from './Reviews/Reviews';
import Standars from './Standars/Standars';
import useDynamicTitle from '../../Hooks/useDynamicTitle/useDynamicTitle';
// import Reviews from './Reviews/Reviews';


const Home = () => {
    useDynamicTitle("TOYHAVEN")

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Standars></Standars>
            <Categories></Categories>
            <Reviews></Reviews>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';
import CarToys from '../CarToys/CarToys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <CarToys></CarToys>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;
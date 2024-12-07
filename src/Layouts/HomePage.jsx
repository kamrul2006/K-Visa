import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerHome from '../Components/BannerHome';
import SomeVisa from '../Components/SomeVisa';
import TypeHome from '../Components/TypeHome';
import AvailableCountry from '../Components/AvailableCountry';
const HomePage = () => {
    return (
        <div>
            <BannerHome></BannerHome>

            <TypeHome></TypeHome>

            <SomeVisa></SomeVisa>

            <AvailableCountry></AvailableCountry>
        </div>
    );
};

export default HomePage;
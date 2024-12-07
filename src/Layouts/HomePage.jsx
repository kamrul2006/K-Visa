import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerHome from '../Components/BannerHome';
import SomeVisa from '../Components/SomeVisa';
import TypeHome from '../Components/TypeHome';
const HomePage = () => {
    return (
        <div>
            <BannerHome></BannerHome>

            <TypeHome></TypeHome>

            <SomeVisa></SomeVisa>
        </div>
    );
};

export default HomePage;
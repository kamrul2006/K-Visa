import React from 'react';
import BannerHome from '../Components/BannerHome';
import SomeVisa from '../Components/SomeVisa';
import TypeHome from '../Components/TypeHome';
import AvailableCountry from '../Components/AvailableCountry';
const HomePage = () => {
    return (
        <div>
            {/* slider banner */}
            <BannerHome></BannerHome>

            {/* extra section 1 */}
            <TypeHome></TypeHome>

            {/* recently added visa */}
            <SomeVisa></SomeVisa>

            {/* extra section 2 */}
            <AvailableCountry></AvailableCountry>
        </div>
    );
};

export default HomePage;
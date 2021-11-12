import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Servies/Services/Services';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
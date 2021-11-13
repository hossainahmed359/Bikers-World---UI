import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Servies/Services/Services';
import Banner from '../Banner/Banner';
import NewArrival from '../NewArrival/NewArrival';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <NewArrival></NewArrival>
            <Footer></Footer>
        </div>
    );
};

export default Home;
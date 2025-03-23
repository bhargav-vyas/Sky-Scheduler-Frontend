import React from 'react';
import Header from '../components/Header';
import FlightSearch from '../components/FlightSearch';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <FlightSearch />
            <Footer />
        </div>
    );
};

export default HomePage;
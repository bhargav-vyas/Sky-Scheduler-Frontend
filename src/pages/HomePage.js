import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import FlightSearch from '../Component/FlightSearch';



const HomePage = () => {
    return (
        <div className="home-page">
            <Header/>
            <FlightSearch />
            <Footer />
        </div>
    );
};

export default HomePage;
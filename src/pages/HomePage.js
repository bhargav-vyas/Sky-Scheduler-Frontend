import React from 'react';
import Header from '../components/Header'; // Correct path
import FlightSearch from '../components/FlightSearch'; // Correct path
import Footer from '../components/Footer'; // Correct path


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
import React from 'react';
import Header from '../components/Header'; // Correct path
import Footer from '../components/Footer'; // Correct path

const FlightResults = () => {
    return (
        <div className="flight-results">
            <Header />
            <h2>Flight Results</h2>
            {/* TODO: Display flight results */}
            <Footer />
        </div>
    );
};

export default FlightResults;
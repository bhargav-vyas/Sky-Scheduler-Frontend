import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';


const FlightResults = () => {
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6080/flights/search?departureAirport=JFK&arrivalAirport=LHR",); // Example API
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        // setData(result);
      } catch (err) {
        // setError(err.message);
      }
    };

    fetchData();
  }, []);
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
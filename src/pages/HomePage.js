import React, { useState, useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import FlightSearch from '../Component/FlightSearch';
import FlightResult from '../Component/FlightResult';
import '../pages/Home.css';

const HomePage = () => {
    const [flights, setFlights] = useState([]);  // State to store flight data
    const [error, setError] = useState(null);    // State to handle errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = "admin";
                const password = "admin123";
                const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
                const response = await fetch("http://localhost:8080/flights/search?departureAirport=&arrivalAirport=", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authHeader,
                    },
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setFlights(result);  // Set the flight data
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home-page">
            <Header />
            <FlightSearch />
            {error && <p className="error">{error}</p>}
            <div className="flight-results">
                {flights.length > 0 ? (
                    flights.map((flight) => (
                        <FlightResult key={flight.id} flight={flight} />
                    ))
                ) : (
                    <p>No flights found.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

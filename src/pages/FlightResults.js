import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import './FlightResults.css';

const FlightResults = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = "admin";
                const password = "admin123";
                const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

                const response = await fetch("http://localhost:8080/flights/getallflight", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authHeader,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const result = await response.json();
                console.log("Fetched Flights:", result);
                setData(result);
            } catch (err) {
                console.error("Fetch error:", err.message);
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flight-results-container">
            <Header />
            <h2>Flight Results</h2>
            {error && <p className="error-message">Error: {error}</p>}
            {data.length > 0 ? (
                <ul className="flight-results-list">
                    {data.map((flight, index) => (
                        <li key={index} className="flight-results-item">
                            <div className="flight-details">
                                <strong>Flight Number:</strong> {flight.flightNumber} <br />
                                <strong>From:</strong> {flight.departureAirport} <br />
                                <strong>To:</strong> {flight.arrivalAirport} <br />
                                <strong>Departure Time:</strong> {flight.departureTime} <br />
                                <strong>Arrival Time:</strong> {flight.arrivalTime} <br />
                                <strong>Price:</strong> ${flight.price} <br />
                                <strong>Available Seats:</strong> {flight.availableSeats}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="loading-message">Loading flights or no flights available.</p>
            )}
            <Footer />
        </div>
    );
};

export default FlightResults;

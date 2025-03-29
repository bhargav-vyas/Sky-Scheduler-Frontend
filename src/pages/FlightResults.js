import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../pages/FlightResults.css';

const FlightResults = () => {
    const [data, setData] = useState([]); // State to store flight data
    const [error, setError] = useState(null); // State to store error message

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
                        Authorization: authHeader, // Authorization header
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const result = await response.json();
                console.log("Fetched Flights:", result); // Debugging log
                setData(result); // Store the fetched data
            } catch (err) {
                console.error("Fetch error:", err.message); // Log any errors
                setError(err.message); // Store the error message
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flight-results">
            <Header />
            <h2>Flight Results</h2>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data.length > 0 ? (
                <ul>
                    {data.map((flight, index) => (
                        <li key={index}>
                            <strong>Flight ID:</strong> {flight.id} - 
                            <strong> Name:</strong> {flight.name} - 
                            <strong> Destination:</strong> {flight.destination}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading flights or no flights available.</p>
            )}
            <Footer />
        </div>
    );
};

export default FlightResults;

import React from 'react';
import './FileResult.css';

const FlightResult = ({ flight }) => {
    return (
        <div className="flight-result">
            <h3>Flight Number: {flight.flightNumber}</h3>
            <p>From: {flight.departureAirport} - To: {flight.arrivalAirport}</p>
            <p>Departure Time: {flight.departureTime}</p>
            <p>Arrival Time: {flight.arrivalTime}</p>
            <p>Price: ${flight.price}</p>
            <p>Available Seats: {flight.availableSeats}</p>
            <button className="book-button">Book Now</button>
        </div>
    );
};

export default FlightResult;

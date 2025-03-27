import React from "react";
import "./FlightSearch.css";

const FlightSearch = () => {
    
    const [departure, setDeparture] = React.useState("");
    const [arrival, setArrival] = React.useState("");
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search for flights:', departure, arrival);
    };

    return (
        <div className="flight-search-container">
            {/* Animated Flight Icon */}
            <div className="flight-icon-animation">
                <div className="flight-icon">
                    <div className="flight-trail"></div>
                </div>
            </div>
            
            <form className="flight-search-form" onSubmit={handleSearch}>
                <h2 className="search-title">
                    <span className="flight-icon-small">✈</span>
                    Search Flights
                </h2>
                
                <div className="input-group">
                    <div className="input-field">
                        <label htmlFor="departure">From</label>
                        <input 
                            type="text" 
                            id="departure"
                            placeholder="City or Airport" 
                            value={departure} 
                            onChange={(e) => setDeparture(e.target.value)}
                            required
                            className="search-input"
                        />
                        <span className="input-icon">📍</span>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="arrival">To</label>
                        <input 
                            type="text" 
                            id="arrival"
                            placeholder="City or Airport" 
                            value={arrival} 
                            onChange={(e) => setArrival(e.target.value)}
                            required
                            className="search-input"
                        />
                        <span className="input-icon">✈</span>
                    </div>
                </div>
                
                <button type="submit" className="search-button">
                    Search Flights
                    <span className="button-icon">🔍</span>
                </button>
            </form>
        </div>
    );
};

export default FlightSearch;
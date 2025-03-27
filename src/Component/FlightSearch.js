import React from  "react";
import "./FlightSearch.css";
const FlightSearch = () =>{

    const[departure, setDeparture] = React.useState("");
    const[arrival, setArrival] = React.useState("");
    const handleSearch = () => {
        console.log ('Search for flights:',"departure","arrival");
    };
    return(
        <div className="flight-search">
            <h2> Search Flights</h2>
            <input type="text" placeholder="Departure Airport" value={departure} onChange={(e) => setDeparture(e.target.value)}></input>
            <input type="text" placeholder="Arrival Airport" value={arrival} onChange={(e) => setArrival(e.target.value)}></input>
            
            <button onClick={handleSearch}>Search</button>
        </div>
    );
   

};
export default FlightSearch;
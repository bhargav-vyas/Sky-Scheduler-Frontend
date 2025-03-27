import React from "react";
import "./Header.css";
import logo from "./flight-logo.png";
const Header = () =>{

    return(
        <header className="header">
            <h1> Sky Scheduer</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/flights">Flights</a>
                <a href="/payment">Payment</a>        
                    </nav>


        </header>
    );



};
export default Header;
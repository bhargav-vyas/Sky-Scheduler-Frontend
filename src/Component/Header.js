import React from "react";
import "./Header.css";
import { FaPlane } from "react-icons/fa";
// import logo from "./flight-logo.png"; // Make sure you have this image in your project

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    {/* <img src={logo} alt="Sky Scheduler Logo" className="logo-image" /> */}
                    <h1 className="logo-text">
                        Sky Scheduler
                        <span className="logo-icon">
                            <FaPlane />
                        </span>
                    </h1>
                </div>
                
                <nav className="nav-menu">
                    <a href="/" className="nav-link">
                        <span className="link-icon">🏠</span>
                        <span className="link-text">Home</span>
                    </a>
                    <a href="/flights" className="nav-link">
                        <span className="link-icon">✈️</span>
                        <span className="link-text">Flights</span>
                    </a>
                    <a href="/payment" className="nav-link">
                        <span className="link-icon">💳</span>
                        <span className="link-text">Payment</span>
                    </a>
                    <a href="/login" className="nav-link">
                        <span className="link-icon">🔑</span>
                        <span className="link-text">Login</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

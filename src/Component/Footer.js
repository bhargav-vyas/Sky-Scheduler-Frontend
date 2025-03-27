import React from 'react';
import './footer.css';  
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <div className="footer-logo">Sky Scheduler</div>
                    <p>Your trusted partner for seamless flight bookings and travel planning.</p>
                </div>
                
                <div className="footer-links">
                    <h3>Company</h3>
                    <a href="/about">About Us</a>
                    <a href="/careers">Careers</a>
                    <a href="/press">Press</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="footer-links">
                    <h3>Support</h3>
                    <a href="/help">Help Center</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/faq">FAQs</a>
                    <a href="/feedback">Feedback</a>
                </div>
                <div className="footer-links">
                    <h3>Legal</h3>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/cookies">Cookie Policy</a>
                    <a href="/security">Security</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
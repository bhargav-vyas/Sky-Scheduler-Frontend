import React from 'react';
import './footer.css';
import { FaPlane, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave"></div>
            
            <div className="footer-content">
                {/* Brand Column */}
                <div className="footer-column">
                    <div className="footer-logo">
                        <FaPlane className="footer-logo-icon" />
                        <span>Sky Scheduler</span>
                    </div>
                    <p className="footer-description">
                        Your trusted partner for seamless flight bookings and travel planning.
                    </p>
                    
                    <div className="footer-social">
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/press">Press</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/feedback">Feedback</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/cookies">Cookie Policy</a></li>
                        <li><a href="/security">Security</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sky Scheduler. All rights reserved.</p>
                <div className="footer-credit">
                    <span>Made with ✈️ by your travel team</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
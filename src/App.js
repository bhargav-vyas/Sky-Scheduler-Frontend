import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FlightResults from './pages/FlightResults';
import PaymentPage from './pages/PaymentPage';

import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

import Security from './pages/Security';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightResults />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* <Route path="/cookies" element={<CookiePolicy />} /> */}
        <Route path="/security" element={<Security />} />
      </Routes>
    
    </Router>
  );
}

export default App;

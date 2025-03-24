import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fixed typo
import './App.css';
import HomePage from './pages/HomePage';
import FlightResults from './pages/FlightResults';
import Paymentpage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightResults />} />
        <Route path="/payment" element={<Paymentpage />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import {BrowserRouter as Router, Route, Routers, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FlightResults from './pages/FlightResults';
import PaymentPage from './pages/Paymentpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/flights' element={<FlightResults />} />
        <Route path='/payment' element={<PaymentPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;

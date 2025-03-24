import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import PaymentForm from '../Component/PaymentForm';

const Paymentpage = () => {
    return (
        <div className="payment-page">
            <Header />
            <PaymentForm  />
            <Footer />
        </div>
    );
};

export default Paymentpage;
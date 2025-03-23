import React from 'react';
import Header from '../components/Header';
import PaymentForm from '../components/PaymentForm';
import Footer from '../components/Footer';

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <Header />
            <PaymentForm />
            <Footer />
        </div>
    );
};

export default PaymentPage;
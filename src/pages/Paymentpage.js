import React from 'react';
import Header from '../components/Header'; // Correct path
import PaymentForm from '../components/PaymentForm'; // Correct path
import Footer from '../components/Footer'; // Correct path

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
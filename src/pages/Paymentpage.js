import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import PaymentForm from '../Component/PaymentForm';

const Paymentpage = () => {
    useEffect(() => {
    const processPayment = async () => {
      try {
        const bookingId = 123; // Replace with actual booking ID from your state/props
        const response = await fetch(`http://localhost:8080/payments/process/${bookingId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa('admin:admin123')}`
          },
          body: JSON.stringify({
            paymentMethod: "CREDIT_CARD", // or "PAYPAL", etc.
            amount: 100.00,
            status: "PENDING" // or "COMPLETED"
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Payment failed");
        }

        const result = await response.json();
        console.log("Payment successful:", result);
        
      } catch (err) {
        console.error("Payment error:", err);
        // setError(err.message);
      }
    };

    processPayment();
}, []);
    return (
        <div className="payment-page">
            <Header />
            <PaymentForm  />
            <Footer />
        </div>
    );
};

export default Paymentpage;
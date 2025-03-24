import React, { useState } from "react";
import "./PaymentForm.css";
const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit card");
  const [amount, setAmount] = useState("0");

  const handlePayment = async () => {
    const paymentData = {
      bookingId: 101,
      paymentMethod: 2,
      amount: 500.75,
      status: "SUCCESS",
    };

    try {
      const response = await fetch("http://localhost:6080/payments/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Payment successful:", data);
        alert("Payment successful!");
      } else {
        console.error("Payment failed");
        alert("Payment failed!");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment");
    }
  };

  return (
    <div className="payment-form">
      <h2>Payment</h2>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Net Banking">Net Banking</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;

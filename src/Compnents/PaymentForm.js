import React, { useState } from "react";
 const PaymentForm = () =>{
    const [paymentMethod ,setPaymentMethod] = useState("credit card");
    const [amount, setAmount] = useState("0");

    const handlePayment = () => {
        console.log('Processing payment:', paymentMethod, amount);
        // TODO: Call backend API to process payment
    };

    return (
        <div className="payment-form">
            <h2>Payment</h2>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
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
 
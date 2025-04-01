import React, { useState } from "react";
import "./PaymentForm.css";
import { FaCreditCard, FaMoneyBillWave, FaUniversity, FaLock } from "react-icons/fa";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const paymentData = {
      bookingId: 101,
      paymentMethod: paymentMethod === "Credit Card" ? 1 : 
                    paymentMethod === "Debit Card" ? 2 : 3,
      amount: parseFloat(amount) || 0,
      status: "PENDING",
      ...(paymentMethod !== "Net Banking" && { cardDetails })
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
        throw new Error("Payment failed");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(error.message || "Error processing payment");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">
          <FaLock className="lock-icon" /> Secure Payment
        </h2>
        
        <form onSubmit={handlePayment} className="payment-form">
          <div className="form-group">
            <label htmlFor="amount">Payment Amount (USD)</label>
            <div className="input-with-icon">
              <span>$</span>
              <input
                type="number"
                id="amount"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <div className="select-wrapper">
              {paymentMethod === "Credit Card" && <FaCreditCard className="method-icon" />}
              {paymentMethod === "Debit Card" && <FaMoneyBillWave className="method-icon" />}
              {paymentMethod === "Net Banking" && <FaUniversity className="method-icon" />}
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </div>
          </div>

          {paymentMethod !== "Net Banking" && (
            <div className="card-details">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleCardChange}
                  placeholder="1234 5678 9012 3456"
                  pattern="[0-9\s]{16,19}"
                  maxLength="19"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardName">Cardholder Name</label>
                <input
                  type="text"
                  id="cardName"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleCardChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    pattern="\d{2}/\d{2}"
                    maxLength="5"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    placeholder="123"
                    pattern="\d{3,4}"
                    maxLength="4"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="pay-button"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="processing">Processing...</span>
            ) : (
              <>
                <span>Pay Now</span>
                <span className="amount">${amount || '0.00'}</span>
              </>
            )}
          </button>

          <div className="security-note">
            <FaLock /> Your payment is secure and encrypted
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ userId, carId }) => {
  const [customizations, setCustomizations] = useState('');
  const [paymentType, setPaymentType] = useState('card');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      user: userId,           // userId passed from props
      car: carId,             // carId passed from props
      customizations,         // customizations entered by the user
      payment_type: paymentType,  // payment type selected by the user
      delivery_date: deliveryDate, // delivery date selected by the user
    };

    axios.post('http://127.0.0.1:8000/api/orders/', orderData)
      .then((response) => {
        console.log('Order successful:', response.data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Place Your Order</h2>
      <form onSubmit={handleOrderSubmit}>
        {/* Customizations input */}
        <div>
          <label htmlFor="customizations">Customizations:</label>
          <textarea
            id="customizations"
            value={customizations}
            onChange={(e) => setCustomizations(e.target.value)}
            placeholder="Enter any customizations (color, features, etc.)"
          />
        </div>

        {/* Payment Type (Card or EMI) */}
        <div>
          <label htmlFor="paymentType">Payment Type:</label>
          <select
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="card">Card</option>
            <option value="emi">EMI</option>
          </select>
        </div>

        {/* Delivery Date */}
        <div>
          <label htmlFor="deliveryDate">Delivery Date:</label>
          <input
            type="date"
            id="deliveryDate"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button type="submit">Submit Order</button>
      </form>

      {/* Display success or error message */}
      {success && <p>Order placed successfully!</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default OrderForm;

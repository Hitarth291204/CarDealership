// import '../style/CheckoutPage.css';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutPage = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { carId } = useParams(); // Get carId from URL
//   const [car, setCar] = useState(null);
//   const [error, setError] = useState(null);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   // Mock API call to get car data
//   useEffect(() => {
//     const fetchCarData = async () => {
//       try {
//         // Here you can replace with an actual API call to fetch the car details
//         const response = await fetch(`/api/cars/${carId}`); // Example API endpoint
//         const data = await response.json();
//         setCar(data);
//       } catch (err) {
//         setError("Error fetching car data");
//       }
//     };
//     fetchCarData();
//   }, [carId]);

//   // Handle the form submission and payment processing
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setPaymentProcessing(true);

//     const cardElement = elements.getElement(CardElement);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         console.log("PaymentMethod:", paymentMethod);
//         setPaymentSuccess(true);
//       }
//     } catch (err) {
//       setError("Payment failed");
//     } finally {
//       setPaymentProcessing(false);
//     }
//   };

//   if (!car) {
//     return <div>Loading car details...</div>;
//   }

//   return (
//     <div>
//       <h1>Checkout for {car.model}</h1>
//       <p>Price: ${car.price}</p>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {paymentSuccess ? (
//         <p style={{ color: 'green' }}>Payment successful!</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <CardElement />
//           <button type="submit" disabled={!stripe || paymentProcessing}>
//             {paymentProcessing ? "Processing..." : "Pay"}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;

/*import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Get carId from the route parameters
import OrderForm from './OrderForm';

const CheckoutPage = () => {
  const { carId } = useParams(); // Get carId from URL params
  const userId = localStorage.getItem('userId');  // Fetch logged-in user's ID from localStorage

  // Debugging: Log carId and userId
  useEffect(() => {
    console.log("carId from URL:", carId);
    console.log("userId from localStorage:", userId);
  }, [carId, userId]);

  if (!carId || !userId) {
    return <div>Loading...</div>; // If carId or userId is not available, show loading
  }

  return (
    <div>
      <h1>Checkout</h1>
      {/* Pass userId and carId to OrderForm for processing */
      /*<OrderForm userId={userId} carId={carId} />
    </div>
  );
};

export default CheckoutPage; */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/CheckoutPage.css';

const CheckoutPage = () => {
  const { id } = useParams();  // Get the car ID from URL parameters
  const [car, setCar] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');  // State for payment method

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`);
        setCar(response.data);  // Set the car data
      } catch (err) {
        console.error('Error fetching car details:', err);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handlePayment = () => {
    if (paymentMethod === '') {
      alert('Please select a payment method');
    } else {
      // Proceed with the payment logic (this would depend on your backend/payment gateway setup)
      alert(`Payment of ${car.price} initiated with ${paymentMethod}`);
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout for {car.model}</h1>
      <img src={car.image} alt={car.model} />
      <p className="price">Price: ${car.price}</p>

      {/* Payment methods */}
      <div className="payment-methods">
        <h3>Select Payment Method:</h3>
        <div>
          <label>
            <input 
              type="radio" 
              value="UPI" 
              checked={paymentMethod === 'UPI'}
              onChange={(e) => setPaymentMethod(e.target.value)} 
            />
            UPI
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              value="Card" 
              checked={paymentMethod === 'Card'}
              onChange={(e) => setPaymentMethod(e.target.value)} 
            />
            Card
          </label>
        </div>
      </div>

      {/* Confirm Payment Button */}
      <button onClick={handlePayment} className="confirm-payment-button">
        Confirm Payment
      </button>
    </div>
  );
};

export default CheckoutPage;





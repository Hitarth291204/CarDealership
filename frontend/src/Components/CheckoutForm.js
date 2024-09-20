// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// const CheckoutForm = ({ user, car, customizations }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentError, setPaymentError] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setPaymentProcessing(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     // Create payment intent on the backend
//     const response = await axios.post('http://127.0.0.1:8000/api/create-payment-intent/', {
//       amount: car.price, // Price in cents
//     });

//     const clientSecret = response.data.client_secret;

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//         billing_details: {
//           name: user.username,
//         },
//       },
//     });

//     if (result.error) {
//       setPaymentError(result.error.message);
//       setPaymentProcessing(false);
//     } else {
//       if (result.paymentIntent.status === 'succeeded') {
//         // Save order to the backend
//         await axios.post('http://127.0.0.1:8000/api/orders/', {
//           user: user.id,
//           car: car.id,
//           customizations: customizations,
//           payment_type: 'Card',
//           delivery_date: '2024-10-10', // Example date
//         });

//         setPaymentSuccess('Payment Successful! Your order is being processed.');
//         setPaymentProcessing(false);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       {paymentError && <div>{paymentError}</div>}
//       {paymentSuccess && <div>{paymentSuccess}</div>}
//       <button disabled={paymentProcessing || !stripe}>Pay</button>
//     </form>
//   );
// };

// export default CheckoutForm;

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import OrderForm from './OrderForm';

const CheckoutForm = ({ car }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create payment intent on the backend
      const response = await axios.post('http://127.0.0.1:8000/api/create-payment-intent/', {
        amount: car.price * 100, // Price in cents
      });

      const clientSecret = response.data.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: 'Customer', // Replace with dynamic user data if available
          },
        },
      });

      if (result.error) {
        setPaymentError(result.error.message);
        setPaymentProcessing(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Save order to the backend
          await axios.post('http://127.0.0.1:8000/api/orders/', {
            user: 1, // Replace with dynamic user ID if available
            car: car.id,
            customizations: {}, // Add customizations if applicable
            payment_type: 'Card',
            delivery_date: '2024-10-10', // Example date
          });

          setPaymentSuccess('Payment Successful! Your order is being processed.');
          setPaymentProcessing(false);
        }
      }
    } catch (error) {
      setPaymentError('An error occurred. Please try again.');
      setPaymentProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>{paymentSuccess}</div>}
      <button type="submit" disabled={paymentProcessing || !stripe}>
        {paymentProcessing ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default CheckoutForm;

// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom'; // Import useHistory
// import axios from 'axios';
// import '../style/CarDetails.css';

// const CarDetails = () => {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const history = useHistory(); // Use useHistory

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         });
//         setCar(response.data);
//       } catch (err) {
//         console.error('Error fetching car details:', err);
//       }
//     };

//     fetchCarDetails();
//   }, [id]);

//   const handlePurchase = () => {
//     // Redirect to the checkout page
//     history.push(`/checkout/${car.id}`); 
//   };

//   if (!car) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="car-details-container">
//       <h1>{car.model}</h1>
//       <img src={car.image} alt={car.model} />
//       <p className="price">Price: ${car.price}</p>
//       <p>Description: {car.description}</p>
//       <p>Year: {car.year}</p>
//       <p>Model: {car.model}</p>

//       {/* Purchase button */}
//       <button className="purchase-button" onClick={handlePurchase}>
//         Purchase
//       </button>
//     </div>
//   );
// };

// export default CarDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';
// import '../style/CarDetails.css';
// import '../Styles.css'

// const CarDetails = () => {
//   const { id } = useParams();  // Get the car ID from URL parameters
//   const [car, setCar] = useState(null);
//   const history = useHistory();  // Use history for redirection

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`);
//         setCar(response.data);  // Set the car data
//       } catch (err) {
//         console.error('Error fetching car details:', err);
//       }
//     };

//     fetchCarDetails();
//   }, [id]);

//   const handlePurchase = () => {
//     history.push(`/checkout/${car.id}`);  // Redirect to checkout page with car ID
//   };

//   if (!car) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="car-details-container">
//       <h1>{car.model}</h1>
//       <img src={car.image} alt={car.model} />
//       <p className="price">Price: ${car.price}</p>
//       <p>Description: {car.description}</p>
//       <p>Year: {car.year}</p>
//       <p>Model: {car.model}</p>

//       {/* Purchase button */}
//       <button className="purchase-button" onClick={handlePurchase}>
//         Purchase
//       </button>
//     </div>
//   );
// };

// export default CarDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../style/CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const history = useHistory();
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`);
        setCar(response.data);
      } catch (err) {
        console.error('Error fetching car details:', err);
        setError('Failed to load car details'); // Set error message
      }
    };

    fetchCarDetails();
  }, [id]);

  const handlePurchase = () => {
    const isLoggedIn = localStorage.getItem('userId');
    console.log('User logged in:', isLoggedIn); // Check the value
    if (isLoggedIn) {
      history.push(`/checkout/${car.id}`);
    } else {
      history.push('/login');
    }
  };

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  if (!car) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="car-details-container">
      <h1>{car.model}</h1>
      {car.image && <img src={car.image} alt={car.model} />}
      <p className="price">Price: ${car.price}</p>
      <p>Description: {car.description}</p>
      <p>Year: {car.year}</p>
      <p>Model: {car.model}</p>

      {/* Purchase button */}
      <button className="purchase-button" onClick={handlePurchase}>
        Purchase
      </button>
    </div>
  );
};

export default CarDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Cars = () => {
//   const [cars, setCars] = useState([]);  // State to store the car data
//   const [loading, setLoading] = useState(true);  // Loading state
//   const [error, setError] = useState(null);      // Error state

//   // useEffect(() => {
//   //   // Fetch the car data when the component mounts
//   //   axios.get('http://127.0.0.1:8000/api/cars/')
//   //     .then((res) => {
//   //       setCars(res.data);  // Set the car data in state
//   //       setLoading(false);  // Disable loading state
//   //     })
//   //     .catch((err) => {
//   //       setError(err);      // Set error in case of failure
//   //       setLoading(false);
//   //     });
//   // }, []);  // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/cars/');
//         setCars(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch cars');
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) return <p>Loading cars...</p>;
//   if (error) return <p>Error fetching cars: {error.message}</p>;

//   return (
//     <div className="cars">
//       <h1>Available Cars</h1>
//       <div className="car-list">
//         {cars.map(car => (
//           <div key={car.id} className="car-item">
//             <h2>{car.name}</h2>
//             <p>{car.description}</p>
//             {/* Add more car details as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cars;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Styles.css' 

// const Cars = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
//           headers: {
//             'Authorization': `Token ${token}`,
//           },
//         });
//         setCars(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching cars:', err);
//         setError(err.response ? err.response.data : 'Failed to fetch cars');
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) return <p>Loading cars...</p>;
//   if (error) return <p>Error fetching cars: {error.message}</p>;

//   return (
//     <div className="cars">
//       <h1>Available Cars</h1>
//       <div className="car-list">
//         {cars.length > 0 ? (
//           cars.map(car => (
//             <div key={car.id} className="car-item">
//               <h2>{car.name}</h2>
//               <p>Name: {car.name}</p>
//               <p>Make: {car.Make}</p>
//               {car.image && <img src={car.image} alt={car.name} style={{ width: '200px', height: 'auto' }} />}
//               <p>Model: {car.model}</p>
//               <p>Year: {car.year}</p>
//               <p>Price: {car.price}</p>
//               <p>{car.description}</p>
//               {/* Add more fields as needed */}
//             </div>
//           ))
//         ) : (
//           <p>No cars available</p>
//         )}
//       </div>
//     </div>
//   );
// };


// export default Cars;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/Car.css';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cars/');
        setCars(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cars:', err);
        setError(err.response ? err.response.data : 'Failed to fetch cars');
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p>Error fetching cars: {error.message}</p>;

  return (
    <div className="cars-container">
      <h1>Available Cars</h1>
      <div className="car-list featured-cars-center">
        {cars.length > 0 ? (
          cars.map(car => (
            <div key={car.id} className="car-item car">
              <div className="img-container">
                {car.image && <img src={car.image} alt={car.name} className="car-image" />}
                <div className="price-top">
                  <h6>{car.model}</h6>
                  <h6>Price: {car.price}</h6>
                </div>
                <Link to={`/cars/${car.id}`} className="room-link btn-primary">
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No cars available</p>
        )}
      </div>
    </div>
  );
};

export default Cars;









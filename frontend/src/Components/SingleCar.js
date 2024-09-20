import React from 'react'; // Import React for JSX
import { Link } from 'react-router-dom';

const SingleCar = ({ car }) => {
  return (
    <div>
      <h1>{car.name}</h1>
      {/* Other car details */}
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default SingleCar;

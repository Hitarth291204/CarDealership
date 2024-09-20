// import React from 'react'
// import Car from './Car'

// const CarsList = ({ cars }) => {

//   if (cars.length === 0) {
//     return (
//       <div className="empty-search">
//         <h3>no cars match this search query</h3>
//       </div>
//     )
//   }


//   return (
//     <section className="carslist">
//       <div className="carslist-center">
//         {
//           cars.map(item => {
//             return <Car key={item.id} car={item} />
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default CarsList

import React from 'react';
import Car from './Car';  // Make sure Car component exists and is properly implemented
//import '../style/CarList.css';
//import '../Styles.css'

const CarList = ({ cars }) => {
  // Check if there are no cars available
  if (cars.length === 0) {
    return (
      <div className="empty-search">
        <h3>No cars match this search query</h3>
      </div>
    );
  }

  return (
    <section className="carslist">
      <div className="carslist-center">
        {/* Map through the cars array and render a Car component for each car */}
        {cars.map(item => (
          <Car key={item.id} car={item} />
        ))}
      </div>
    </section>
  );
};

export default CarList;

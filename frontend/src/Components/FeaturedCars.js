// import React, { Component } from 'react'
// //import { CarContext } from '../context';
// import Loading from './Loading';
// import Car from './Car';
// import Title from './Title';

// export default class FeaturedCars extends Component {

//   static contextType = CarContext;


//   render() {
//     let { loading, featuredCars: cars } = this.context;

//     cars = cars.map(car => {
//       return (
//         <Car key={car.id} car={car} />
//       )
//     })
//     // console.log(cars)
//     return (
//       <section className="featured-cars">
//         <Title title="featured cars" />
//         <div className="featured-cars-center">
//           {loading ? <Loading /> : cars}
//         </div>
//       </section>
//     )
//   }
// }

import React, { Component } from 'react';
import { CarContext } from '../context';
import Loading from './Loading';
import Car from './Car';
import Title from './Title';

export default class FeaturedCars extends Component {
  static contextType = CarContext;

  render() {
    const { loading, featuredCars: cars } = this.context;

    if (!cars) {
      // Ensure that cars is defined
      console.error('Featured cars are not defined');
      return null;
    }

    const carList = cars.map(car => (
      <Car key={car.id} car={car} />
    ));

    return (
      <section className="featured-cars">
        <Title title="Featured Cars" />
        <div className="featured-cars-center">
          {loading ? <Loading /> : carList}
        </div>
      </section>
    );
  }
}


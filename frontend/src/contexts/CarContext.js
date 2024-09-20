import React, { createContext, Component } from 'react';

// Create the context
export const CarContext = createContext();

class CarProvider extends Component {
  state = {
    loading: true,
    featuredCars: []
  };

  componentDidMount() {
    // Fetch data and update state
    // Example: fetch('/api/cars')
    //   .then(response => response.json())
    //   .then(data => this.setState({ featuredCars: data, loading: false }));

    // Simulating data fetch
    setTimeout(() => {
      this.setState({
        featuredCars: [
          // Example cars data
          { id: 1, name: 'Car 1' },
          { id: 2, name: 'Car 2' }
        ],
        loading: false
      });
    }, 1000);
  }

  render() {
    return (
      <CarContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

export { CarProvider };

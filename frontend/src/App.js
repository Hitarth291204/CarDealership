import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import { Router, Route,Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cars from './Components/Cars';
import CarDetails from './Components/CarDetails';
import CheckoutPage from './Components/CheckoutPage';
import SingleCar from './Components/SingleCar';
import AboutUs from './Components/AboutUs';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer'; // Import Footer component
import Profile from './Components/Profile';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { AuthProvider, AuthContext } from './contexts/AuthContext'; // Import AuthProvider and useAuth

// ProtectedRoute component to manage access to protected routes
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {user} = useContext(AuthContext)
  
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

function App() {
  const { user } = useContext(AuthContext); // Extract user and logout

  return (
    <AuthProvider>
        {/* Pass user and handleLogout to Navbar */}
        <Navbar user={user} /> 
         <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cars' component={Cars} />
          <Route exact path='/cars/:id' component={CarDetails} />
          <Route exact path='/checkout/:id' component={CheckoutPage} />
          <Route exact path='/car/:slug' component={SingleCar} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <ProtectedRoute exact path='/checkout/:carId' component={CheckoutPage} />
          <Route path="/Profile" component={Profile} />
          <Route component={ErrorPage} />
        </Switch> 
        <Footer /> {/* Add Footer component */}
    </AuthProvider>
  );
}

export default App;






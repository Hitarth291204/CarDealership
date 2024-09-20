// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { CarProvider } from './context'

// ReactDOM.render(

//   <CarProvider>
//     <Router>
//       <App />
//     </Router>
//   </CarProvider>,

//   document.getElementById('root')

// );
// src/index.js
// src/index.js

// src/index.js

// src/index.js

// src/index.js// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Ensure this import is correct
import * as serviceWorker from './serviceWorker'; // Import serviceWorker
import { CarProvider } from './context'; 

// Your global styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the application
root.render(
  <Router>
    <AuthProvider> {/* Wrap App with AuthProvider */}
      <CarProvider> {/* Wrap App with CarProvider */}
        <App />
      </CarProvider>
    </AuthProvider>
  </Router>
);

// Register or unregister the service worker
serviceWorker.register(); // Or serviceWorker.unregister();


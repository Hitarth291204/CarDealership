import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../style/Signup.css';
//import '../Styles.css'
//import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  //const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup/', {
        username:name,
        email,
        password
      });
      console.log(response)
      // Redirect to home page on successful signup
      if (response.status === 201) {
        history.push('/');
      }
    } catch (err) {
      console.error(err.response && err.response.data);  // Traditional check for err.response
      setError((err.response && err.response.data && err.response.data.error) || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;

/*import React, { useState } from 'react';
import '../style/Signup.css';
import '../Styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setToken , useContext} = useContext(AuthContext);
  const [error, setError] = useState('');
  const history = useHistory();
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
        name,
        email,
        password
      });
      // Redirect to home page on successful signup
      localStorage.setItem('userId', response.data.user.id);
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('token', response.data.token);
      //if (response.status === 201) {
        history.push('/');
      //}
    } catch (err) {
      console.error(err.response && err.response.data);  // Traditional check for err.response
      setError((err.response && err.response.data && err.response.data.error) || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup; */

// import React, { useState, useContext } from 'react';  // Import useContext here
// import '../style/Signup.css';
// import '../Styles.css';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { AuthContext } from './AuthContext'; // Ensure correct import

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { setUser, setToken } = useContext(AuthContext); // Accessing context
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
//         name,
//         email,
//         password
//       });
      
//       // Save user and token to context
//       setUser(response.data.user);
//       setToken(response.data.token);
//       // Save user to localStorage if needed
//       localStorage.setItem('userId', response.data.user.id);
//       localStorage.setItem('username', response.data.user.username);
//       localStorage.setItem('token', response.data.token);
      
//       // Redirect to home page on successful signup
//       history.push('/');
//     } catch (err) {
//       console.error(err.response && err.response.data);
//       setError((err.response && err.response.data && err.response.data.error) || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup">
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Signup</button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signup;

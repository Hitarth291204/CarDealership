// // import React, { useState } from 'react';
// // import '../style/Login.css';
// // import '../Styles.css'
// // import axios from 'axios';
// // import { useHistory } from 'react-router-dom';
// // //import { useAuth } from '../contexts/AuthContext';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const history = useHistory();
// //   //const { login } = useAuth(); // Use login from AuthContex
  

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     try {
// //       const response = await axios.post('http://127.0.0.1:8000/api/login/', {
// //         email,  // Change this to `username` if that is what the backend expects
// //         password
// //       });
// //       console.log('Login successful:', response.data);

// //       localStorage.setItem('userId', response.data.user.id);
// //       localStorage.setItem('username', response.data.user.username);
// //       //localStorage.setItem('token', response.data.token);
// //       localStorage.setItem('token', response.data.token); // Save token to local storage
// //       history.push('/'); // Redirect to home page
// //     } catch (err) {
// //       console.error(err.response && err.response.data);
// //       setError('Invalid credentials. Please try again.');
// //     }
// //   };
  

// //   return (
// //     <div className="login">
// //       <h1>Login</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="email">Username:</label>
// //         <input
// //           type="text"
// //           id="email"
// //           name="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <label htmlFor="password">Password:</label>
// //         <input
// //           type="password"
// //           id="password"
// //           name="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button type="submit">Login</button>
// //         {error && <p>{error}</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useContext, useState } from 'react';
// // import '../style/Login.css';
// // import axios from 'axios';
// // import { AuthContext } from '../contexts/AuthContext';
// // // import {user,setUser} from '../context/AuthContex'

// // const Login = () => {
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [username, setUsername] = useState('');
// //   // const {user, setUser } = useContext(AuthContext);
// //   const {user, login } = useContext (AuthContext);
// //   // const history = useHistory();

// //   const handelSub =(e)=>{
// //     e.preventDefault()
// //     login(username,password)
// //   }

// //   return (
// //     <div className="login">
// //       <h1>Login</h1>
// //       <form onSubmit={login(username,password)}>
// //         <label htmlFor="username">username:</label>
// //         <input 
// //           type="text" 
// //           style = {{height:40}}
// //           id="username"
// //           name="username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <label htmlFor="password">Password:</label>
// //         <input
// //           type="password"
// //           id="password"
// //           name="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button type="submit">Login</button>
// //         {error && <p>{error}</p>}
// //       </form>
// //       {username && (
// //         <div>
// //           <h2>Welcome, {username}!</h2>
// //           {/* You can now display other user information */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useContext, useState } from 'react';
// import '../style/Login.css';
// import axios from 'axios';
// import { AuthContext } from '../contexts/AuthContext';

// const Login = () => {
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [username, setUsername] = useState('');
//   const { login } = useContext(AuthContext);

//   const handleSub = (e) => {
//     e.preventDefault();
//     login(username, password)
//       .catch(err => setError('Invalid credentials. Please try again.'));
//   };

//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <form onSubmit={handleSub}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           style={{ height: 40 }}
//           id="username"
//           name="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         {error && <p>{error}</p>}
//       </form>
//       {username && (
//         <div>
//           <h2>Welcome, {username}!</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useState } from 'react';
import '../style/Login.css';
//import '../Styles.css'
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const { login } = useContext(AuthContext);
    const history = useHistory(); // Initialize useHistory

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     login(username, password).catch(() => {
    //         setError('Invalid credentials. Please try again.');
    //     });
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password); // Await login
            history.push('/'); // Redirect to home page on success
        } catch {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
            {username && <h2>Welcome, {username}!</h2>}
        </div>
    );
};

export default Login;

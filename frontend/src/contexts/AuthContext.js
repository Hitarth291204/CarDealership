// // /*import React, { createContext, useState, useContext, useEffect } from 'react';
// // import axios from 'axios';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     // Check authentication status on initial load
// //     const checkAuth = async () => {
// //       try {
// //         await axios.get('http://127.0.0.1:8000/api/check-auth/');
// //         setIsAuthenticated(true);
// //       } catch {
// //         setIsAuthenticated(false);
// //       }
// //     };

// //     checkAuth();
// //   }, []);

// //   return (
// //     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);*/
// // // src/contexts/AuthContext.js

// // // import React, { createContext, useState, useContext, useEffect } from 'react';
// // // import axios from 'axios';

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // //   const [user, setUser] = useState(null);

// // //   useEffect(() => {
// // //     const checkAuth = async () => {
// // //       try {
// // //         const response = await axios.get('http://127.0.0.1:8000/api/check-auth/',{
// // //           headers: {
// // //             'Authorization': `Token ${localStorage.getItem('token')}`
// // //           }});
// // //         setIsAuthenticated(true);
// // //         setUser(response.data.user); // Ensure the user object is returned here
// // //       } catch {
// // //         setIsAuthenticated(false);
// // //         setUser(null);
// // //       }
// // //     };

// // //     checkAuth();
// // //   }, []);

// // //   const login = async (credentials) => {
// // //     try {
// // //       const response = await axios.post('http://127.0.0.1:8000/api/login/', credentials);
// // //       localStorage.setItem('token', response.data.token);
// // //       setIsAuthenticated(true);
// // //       setUser(response.data.user);
// // //     } catch (error) {
// // //       console.error("Login failed", error);
// // //     }
// // //   };

// // //   const logout = () => {
// // //     localStorage.removeItem('token');
// // //     setIsAuthenticated(false);
// // //     setUser(null);
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };
// // // src/contexts/AuthContext.js

// // // src/contexts/AuthContext.js

// // // src/contexts/AuthContext.js

// // // import React, { createContext, useContext, useState } from 'react';

// // // // Create a context
// // // const AuthContext = createContext();

// // // // Create an AuthProvider component
// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);

// // //   const login = (userData) => {
// // //     // Simulate login
// // //     setUser(userData);
// // //   };

// // //   const logout = () => {
// // //     // Simulate logout
// // //     setUser(null);
// // //   };

// // //   //const isAuthenticated = !!user;

// // // //   return (
// // // //     <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // };

// // // return (
// // //   <AuthContext.Provider value={{ user, login, logout }}>
// // //     {children}
// // //   </AuthContext.Provider>
// // // );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// // // // Custom hook to use AuthContext
// // // // export const useAuth = () => {
// // // //   const context = useContext(AuthContext);
// // // //   if (!context) {
// // // //     throw new Error('useAuth must be used within an AuthProvider');
// // // //   }
// // // //   return context;
// // // // };

// // // src/contexts/AuthContext.js

// //import { useHistory } from 'react-router-dom';

// import React, { createContext, useState} from 'react';
// const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [redirectAfterLogin, setRedirectAfterLogin] = useState('/');

// //   const login = (userData) => {
// //     setUser(userData);
// //     // Redirect to the saved route after login or default to home page
// //     useHistory.push(redirectAfterLogin || '/');
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     useHistory.push('/');
// //   };

// //   const handleLogout = () => {
// //     // Clear tokens from localStorage
// //     localStorage.removeItem('authToken');
// //     // Clear user state (if applicable)
// //     logout();
// //     // Redirect to login page
// //     window.location.href = '/login';
// //   };

// //   const value = {
// //     user,
// //     login,
// //     logout,
// //     setRedirectAfterLogin,
// //   };

// //   // return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// //   const isAuthenticated = !!user;

// //   return (
// //     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };
// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(() => {
//     // Load user from localStorage if available
//     const savedUser = localStorage.getItem('user');
//     return savedUser ? JSON.parse(savedUser) : null;
//   });
//   const [token, setToken] = useState(localStorage.getItem('token') || null);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user'); // Remove user from localStorage
//   };

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


// export const useAuth = () =>React.useContext(AuthContext);

// // import React, { createContext, useState, useEffect } from 'react';
// // import axios from 'axios';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(() => {
// //         const savedUser = localStorage.getItem('user');
// //         return savedUser ? JSON.parse(savedUser) : null;
// //     });
// //     const [token, setToken] = useState(localStorage.getItem('token') || null);

// //     useEffect(() => {
// //         const checkAuth = async () => {
// //             if (token) {
// //                 try {
// //                     const response = await axios.get('http://127.0.0.1:8000/api/check-auth/', {
// //                         headers: { 'Authorization': `Token ${token}` }
// //                     });
// //                     setUser(response.data.user);
// //                 } catch {
// //                     setUser(null);
// //                 }
// //             }
// //         };
// //         checkAuth();
// //     }, [token]);

// //     const login = async (credentials) => {
// //         try {
// //             const response = await axios.post('http://127.0.0.1:8000/api/login/', credentials);
// //             const { user, token } = response.data;
// //             setUser(user);
// //             setToken(token);
// //             localStorage.setItem('user', JSON.stringify(user));
// //             localStorage.setItem('token', token);
// //         } catch (error) {
// //             console.error("Login failed", error);
// //         }
// //     };

// //     const logout = () => {
// //         setUser(null);
// //         setToken(null);
// //         localStorage.removeItem('user');
// //         localStorage.removeItem('token');
// //     };

// //     const isAuthenticated = !!user;

// //     return (
// //         <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export const useAuth = () => {
// //     const context = React.useContext(AuthContext);
// //     if (!context) {
// //         throw new Error('useAuth must be used within an AuthProvider');
// //     }
// //     return context;
// // };

// export default AuthContext;


// //set login to api/token then get user using fetchuser from userprofiledata

// src/contexts/AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create a context for authentication
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state to store the logged-in user
  
  // Function to log in a user
  const login = async (username, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username,
        password,
      });
      const userId = response.data.id; // Assuming response contains user ID
      console.log("USERID: ", userId)
      localStorage.setItem('userId', userId);
      // Fetch user profile
      await fetchUserProfile(userId);
    } catch (err) {
      console.error('Login Error:', err.response && err.response.data);
    }
  };

  // Function to fetch the user profile
  const fetchUserProfile = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/user/${id}/`);
      setUser(response.data); // Store the user profile in the context
    } catch (err) {
      console.error('Error fetching user profile:', err);
    }
  };

  const updateProfile = async (formData) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/user/${user.id}/`, formData); // Assuming user.id is available
      setUser((prevUser) => ({ ...prevUser, ...response.data })); // Update local user state
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  // Log out the user
  const logout = () => {
    localStorage.removeItem('userId');
    setUser(null); // Clear the user from state
   };

  const ContextData = {
    user,
    setUser,
    login,
    logout,
    fetchUserProfile,
    updateProfile
  }

  return (
    <AuthContext.Provider value={ContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

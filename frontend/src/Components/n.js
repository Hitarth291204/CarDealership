// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // //import { useAuth } from '../contexts/AuthContext';

// // const Navbar = ({ user, handleLogout }) => {
// //   return (
// //     <nav className="navbar">
// //       <div className="nav-center">
// //         <div className="nav-header">
// //           <Link to="/">
// //             <img src="logo.png" alt="Car Dealership" />
// //           </Link>
// //         </div>
// //         <ul className="nav-links">
// //           <li>
// //             <Link to="/">Home</Link>
// //           </li>
// //           <li>
// //             <Link to="/cars">Cars</Link>
// //           </li>
// //           <li>
// //             <Link to="/about-us">About Us</Link>
// //           </li>

// //           {user ? (
// //             <>
// //               {/* Show user profile link */}
// //               <li>
// //                 <Link to="/profile">
// //                   <img src="/path-to-user-logo.png" alt="Profile Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
// //                   {user.username}
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/my-orders">My Orders</Link>
// //               </li>
// //               {/* Logout button */}
// //               <li>
// //                 <button onClick={handleLogout}>Logout</button>
// //               </li>
// //             </>
// //           ) : (
// //             <>
// //               {/* Login and Signup links when user is not authenticated */}
// //               <li>
// //                 <Link to="/login">Login</Link>
// //               </li>
// //               <li>
// //                 <Link to="/signup">Signup</Link>
// //               </li>
// //             </>
// //           )}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/logo.svg'
//import { useAuth } from '../contexts/AuthContext';
import ProfileDropdown from '../Components/ProfileDropdown';

const Navbar = ({ user, handleLogout }) => {
  const handleProfileClick = () => {
    // Navigate to profile page or show profile dropdown
    console.log('Profile clicked');
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('userId');
  //   localStorage.removeItem('username');
  //   history.push('/login'); // Redirect to login page after logout
  // };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={img1} alt="Car Dealership" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          

         {/* {user ? (
            <>

              <li>
                <Link to="/profile">
                  <img src="/path-to-user-logo.png" alt="Profile Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                  {user.username}
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </> 
          )} */}
            {/* {user ? (
          <>
            <li>
              <Link to="/profile">
                <img src="/path-to-user-logo.png" alt="Profile Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                {user.username}
              </Link>
            </li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )} */}
        {user ? (
            <ProfileDropdown user={user} handleLogout={handleLogout} />
          ) : (
            <>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import  AuthContext  from '../contexts/AuthContext';
// import img1 from '../images/logo.svg';
// import ProfileDropdown from './ProfileDropdown';
// import { logoutUser } from '../Services/authservice';

// const Navbar = () => {
//     const { user, token, setUser, setToken } = useContext(AuthContext);

//     const handleLogout = async () => {
//         try {
//             await logoutUser(token);
//             setUser(null);
//             setToken(null);
//             localStorage.removeItem('user');
//             localStorage.removeItem('token');
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="nav-center">
//                 <div className="nav-header">
//                     <Link to="/">
//                         <img src={img1} alt="Car Dealership" />
//                     </Link>
//                 </div>

//                 <ul className="nav-links">
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/cars">Cars</Link>
//                     </li>
//                     <li>
//                         <Link to="/about-us">About Us</Link>
//                     </li>

//                     {user ? (
//                         <ProfileDropdown user={user} handleLogout={handleLogout} />
//                     ) : (
//                         <>
//                             <li>
//                                 <Link to="/login">Login</Link>
//                             </li>
//                             <li>
//                                 <Link to="/signup">Signup</Link>
//                             </li>
//                         </>
//                     )}
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




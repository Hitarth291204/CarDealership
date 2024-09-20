// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext.js';
// import img1 from '../images/logo.svg';
// import ProfileDropdown from './ProfileDropdown';

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext);

//     // const handleLogout = () => {
//     //     logout();
//     // };

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
//                         <>
//                             <ProfileDropdown user={user} />
//                             <li>
//                                 {/*<button onClick={handleLogout}>Logout</button>*/}
//                                {/*} <button onClick={logout}>Logout</button> {/* Logout button */} 
//                                <ProfileDropdown />
//                             </li>
//                         </>
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

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext.js';
// import img1 from '../images/logo.svg';
// import ProfileDropdown from './ProfileDropdown';

// const Navbar = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <nav className="navbar">
//       <div className="nav-center">
//         <div className="nav-header">
//           <Link to="/">
//             <img src={img1} alt="Car Dealership" />
//           </Link>
//         </div>

//         <ul className="nav-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cars">Cars</Link>
//           </li>
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//           {user ? (
//             <>
//               {/* This ProfileDropdown will handle showing the profile button and the logout option */}
//               <ProfileDropdown />
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/signup">Signup</Link>
//               </li>
//             </>
//           )} 
            
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext.js';
import img1 from '../images/logo.svg';
import ProfileDropdown from './ProfileDropdown';
import '../Styles.css'

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
        </ul>

        <div className="profile-section">
          {user ? <ProfileDropdown /> : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



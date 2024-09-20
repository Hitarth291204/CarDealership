// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../style/ProfileDropdown.css';
// import { AuthContext } from '../contexts/AuthContext.js'

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
  
//   const { user } = useContext(AuthContext)

//   return (
//     <li className="profile-dropdown">
//       <div onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
//         <img src="/path-to-user-logo.png" alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
//         {user.username}
//       </div>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="/my-orders">My Orders</Link>
//           </li>
//           <li>
//             <button>Logout</button>
//           </li>
//         </ul>
//       )}
//     </li>
//   );
// };

// export default ProfileDropdown;


/*import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDropdown = ({ user, onLogout }) => {
    return (
        <div className="profile-dropdown">
            <span>{user.username}</span>
            <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
};

export default ProfileDropdown; */

// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext.js';
// import '../style/ProfileDropdown.css'; // Assuming you have your styles here

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown
//   const { user, logout } = useContext(AuthContext); // Get user and logout from AuthContext

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen); // Toggle dropdown open/close
//   };

//   return (
//     <li className="profile-dropdown">
//       {/* Profile link styled like other nav links */}
//       <span onClick={toggleDropdown} className="nav-link" style={{ cursor: 'pointer' }}>
//         Profile
//       </span>

//       {/* Dropdown menu with conditional class */}
//       <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
//         <li>
//           <Link to="/profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="/my-orders">My Orders</Link>
//         </li>
//         <li>
//           <button onClick={logout}>Logout</button> {/* Logout functionality */}
//         </li>
//       </ul>
//     </li>
//   );
// };

// export default ProfileDropdown;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext.js';
import '../style/ProfileDropdown.css'; // Assuming you have your styles here

const ProfileDropdown = () => {
  const {  logout } = useContext(AuthContext); // Get user and logout from AuthContext

  return (
    <div className="profile-section">
      <Link to="/profile" className="nav-link">
        Profile
    </Link>
      <button onClick={logout} className="nav-link">Logout</button>
    </div>
  );
};

export default ProfileDropdown;







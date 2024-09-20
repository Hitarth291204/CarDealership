
// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const Profile = () => {
//     const { user, updateProfile } = useContext(AuthContext);
//     //const [formData, setFormData] = useState({ username: user.username, email: user.email });
//     const [formData, setFormData] = useState({
//         username: user ? user.username : '', // Use conditional to avoid undefined
//         email: user ? user.email : ''
//     });
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await updateProfile(formData);
//         alert('Profile updated successfully!');
//     };

//     return (
//         <div className="profile-page">
//             <h1>Edit Profile</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <button type="submit">Update Profile</button>
//             </form>
//         </div>
//     );
// };

// export default Profile;

import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import '../style/Profile.css'; // Assuming you have a Profile.css for styling

const Profile = () => {
    const { user, updateProfile } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    console.log("User from context:", user);

    // Ensure formData is updated when user data is available
    useEffect(() => {
        if (user) {
            console.log("User available:", user);
            setFormData({
                username: user.username || '',
                email: user.email || ''
            });
        }
    }, [user]); // Dependency array ensures this runs when the user data changes

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(formData);
        alert('Profile updated successfully!');
        setIsEditing(false); // Exit editing mode
    };

    // Render a loading message if the user is not loaded yet
    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Update Profile</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default Profile;



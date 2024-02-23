import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserProfile() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    // Function to fetch user details from the backend
    const fetchUserDetails = async () => {
      try {
        // Replace this URL with the actual endpoint from your backend
        const response = await fetch('https://your-backend-endpoint/api/user/details');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserDetails({
          username: data.username,
          email: data.email,
          phoneNumber: data.phoneNumber
        });
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    // Call the fetch function
    fetchUserDetails();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-detail">
        <strong>Username:</strong> {userDetails.username}
      </div>
      <div className="user-detail">
        <strong>Email:</strong> {userDetails.email}
      </div>
      <div className="user-detail">
        <strong>Phone Number:</strong> {userDetails.phoneNumber}
      </div>
      <Link to="/"><button>Logout</button></Link>
    </div>
  );
}

export default UserProfile;

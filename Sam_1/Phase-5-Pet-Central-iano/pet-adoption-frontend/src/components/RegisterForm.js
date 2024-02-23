import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm(props) {
   // State variables to store registration data
   const [newUsername, setNewUsername] = useState("");
   const [newEmail, setNewEmail] = useState("");
   const [newPhoneNumber, setNewPhoneNumber] = useState("");
   const [newPassword, setNewPassword] = useState("");
 
   // Function to handle registration form submission
   const handleRegistration = async (event) => {
     event.preventDefault();
     
     // Prepare the registration data to send to the backend
     const registrationData = {
       username: newUsername,
       email: newEmail,
       phoneNumber: newPhoneNumber,
       password: newPassword
     };
 
     try {
       // Send the registration request to the backend
       const response = await fetch('/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(registrationData)
       });
 
       if (response.ok) {
         // If registration is successful, you can redirect the user to another page or perform other actions
         console.log('Registration successful');
       } else {
         // Handle unsuccessful registration
         console.error('Registration failed');
       }
     } catch (error) {
       console.error('Error registering user:', error);
     }
   };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Create an Account</div>
            <div className="card-body">
              <form onSubmit={handleRegistration}>
                <div className="form-group">
                  <label htmlFor="newUsername">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="newUsername"
                    value={newUsername}
                    placeholder="Enter your username"
                    onChange={(e) => setNewUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="newEmail"
                    value={newEmail}
                    placeholder="Enter your email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPhoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="newPhoneNumber"
                    value={newPhoneNumber}
                    placeholder="Enter your phone number"
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    value={newPassword}
                    placeholder="Enter your password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
              <div className="mt-3">
                <div className="div-22">Already registered? Kindly log in</div>
                <Link to="/login" className="btn btn-secondary">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

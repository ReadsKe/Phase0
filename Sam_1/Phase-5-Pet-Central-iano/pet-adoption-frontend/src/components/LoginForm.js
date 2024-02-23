import React, { useState } from "react";
import { Link } from "react-router-dom";


function LoginForm(props) {
  // State variables to store username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the login credentials to send to the backend
    const credentials = {
      username: username,
      password: password
    };

    try {
      // Send the login request to the backend
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        // If login is successful, you can redirect the user to another page or perform other actions
        console.log('Login successful');
      } else {
        // Handle unsuccessful login
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

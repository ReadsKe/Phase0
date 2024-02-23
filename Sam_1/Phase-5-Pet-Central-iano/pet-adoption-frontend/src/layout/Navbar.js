import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ minHeight: '60px' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/419610167ca60398b5fa8b9d2fd9bfc0edc78afb5332cd6bade66bf0dba43fe4?apiKey=e8788cda399a4c35af5fd104dca3ff3f"
            className="img-fluid" 
            alt=""
            style={{ maxHeight: '50px' }} // Set maximum height for the image
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

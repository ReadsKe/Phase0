import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;

  // Check if the current route is the landing page
  const isLandingPage = pathname === '/';

  return (
    <div className='container'>
      {/* Render navbar if it's not the landing page */}
      {!isLandingPage && <Navbar />}
      <div className='container bg-light min-vh-100 my-3 p-3'>
        <Outlet /> {/* To render the current route selected */}
      </div>
      {/* Render footer if it's not the landing page */}
      {!isLandingPage && <Footer />}
    </div>
  );
}

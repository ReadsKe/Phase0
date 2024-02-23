import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import PetStoreProvider from './context/PetStoreContext';

function App() {
  return (
    <BrowserRouter>
      <PetStoreProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </PetStoreProvider>
    </BrowserRouter>
  );
}

export default App;

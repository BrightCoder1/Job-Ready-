import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import UserContext from './context/UserContext.jsx';
import UserProtectWrapper from './pages/UserProtectWrapper.jsx';
import Footer1 from './pages/Footer1.jsx';
import Footer2 from './pages/Footer2.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/dashboard" element={
              <UserProtectWrapper>
                <Dashboard />
              </UserProtectWrapper>
            } />
          </Routes>
          <Footer1 />
          <Footer2 />
        </UserContext>
      </BrowserRouter>
    </>
  )
}

export default App
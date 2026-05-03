import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import UserContext from './context/UserContext.jsx';
import UserProtectWrapper from './pages/UserProtectWrapper.jsx';
import Footer1 from './pages/Footer1.jsx';
import Footer2 from './pages/Footer2.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Job from './pages/Job.jsx';
import Profile from './components/Profile.jsx';
import LeftNavbar from './components/LeftNavbar.jsx';
import NotificationPage from './pages/NotificationPage.jsx';
import MyJob from './pages/MyJob.jsx';
import NotFound from './components/NotFound.jsx';


// Layout Component
const Layout = () => {

  const location = useLocation();

  // Protected pages
  const dashboardPages =
    location.pathname === "/dashboard" ||
    location.pathname === "/profile" ||
    location.pathname === "/notifications" ||
    location.pathname === "/myjobs" ||
    location.pathname === "/jobdetail" ||
    location.pathname === "/post" ||
    location.pathname === "/mail" ||
    location.pathname === "/settings";

  return (
    <>
      {/* Show Normal Navbar */}
      {!dashboardPages && <Navbar />}

      {/* Show Left Sidebar */}
      {dashboardPages && <LeftNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/jobs' element={<Job />} />
        <Route path='/contact' element={<Contact />} />

        <Route
          path="/dashboard"
          element={
            <UserProtectWrapper>
              <Dashboard />
            </UserProtectWrapper>
          }
        />

        <Route
          path='/profile'
          element={
            <UserProtectWrapper>
              <Profile />
            </UserProtectWrapper>
          }
        />

        <Route
          path='/notifications'
          element={
            <UserProtectWrapper>
              <NotificationPage />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/myjobs"
          element={
            <UserProtectWrapper>
              <MyJob />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/jobdetail"
          element={
            <UserProtectWrapper>
              {/* <MyJob /> */}
              <NotFound />

            </UserProtectWrapper>
          }
        />

        <Route
          path="/mail"
          element={
            <UserProtectWrapper>
              {/* <MyJob /> */}
              <NotFound />

            </UserProtectWrapper>
          }
        />

        <Route
          path="/post"
          element={
            <UserProtectWrapper>
              {/* <MyJob /> */}
              <NotFound />

            </UserProtectWrapper>
          }
        />

      </Routes>

      {!dashboardPages && (
        <>
          <Footer1 />
          <Footer2 />
        </>
      )}
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <UserContext>
        <Layout />
      </UserContext>
    </BrowserRouter>
  )
}

export default App
import React, { useContext, useState } from 'react';
import './css/Register.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';

const Register = () => {
  const navigate = useNavigate();
  const {setUser} = useContext(UserDataContext);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: 'user',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const submitData = {
        fullname: {
          firstname: formData.firstname,
          lastname: formData.lastname
        },
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
        role: formData.role
      };

      const response = await axios.post("http://localhost:5000/api/users/register", submitData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        alert(response.data.message);
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          phone: '',
          address: '',
          role: 'user',
          agreed: false
        })
      } else{
        alert(response.data.message || 'Registration failed');
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || JSON.stringify(error.response.data));
      } else {
        alert('Network error or server did not respond.');
      }
    }
  };

  return (
    <div className="page-wrapper">

      <div className="register-container">
        <div className="left-panel">
          <div className="welcome-content">
            <h1>Complete Your Registration</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra lacinia maximus. Integer pulvinar lacus.
            </p>
          </div>
        </div>

        <div className="right-panel">
          <div className="form-wrapper">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Full Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreed">
                  I agree All the Statements in <a href="#terms">Terms of service</a>
                </label>
              </div>

              <button type="submit" className="signup-submit-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
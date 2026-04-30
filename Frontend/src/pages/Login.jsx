import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Register.css';
import { UserDataContext } from '../context/UserContext';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserDataContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", {
                email,
                password
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                alert(response.data.message);
                setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
                setEmail('');
                setPassword('');
            };

        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="page-wrapper login-page">
            <div className="register-container login-page">

                <div className="left-panel">
                    <div className="welcome-content">
                        <h1>Welcome Back</h1>
                        <p>
                            Login to access your dashboard and manage your account easily.
                        </p>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="form-wrapper">
                        <h2>Login</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={email}
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
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <button type="submit" className="signup-submit-btn">
                                Login
                            </button>

                            <p className="login-link">
                                Don't have an account?{' '}
                                <span onClick={() => navigate('/register')}>
                                    Register
                                </span>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
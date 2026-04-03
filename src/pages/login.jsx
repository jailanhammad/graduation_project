import React, { useState } from 'react';
import './login.css';
import { Link } from "react-router-dom";
import heroo from "../assets/home/heroo.svg";


const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        console.log("Logging in with:", formData);
        alert("Login Successful!");
    };

    return (
        <div className="hml-login-page">
            <div className="hml-login-card">
                <div className="hml-login-header">
                <div class="car-wrapper">
                <img src={heroo} className='hero-car'/>
                </div>
                    <h2>Welcome Back</h2>
                    <p>Login to your Hammad Motors account</p>
                </div>

                <form onSubmit={handleSubmit} className="hml-login-form">
                    {error && <div className="hml-error-msg">{error}</div>}

                    <div className="hml-input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="example@mail.com" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="hml-input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="••••••••" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="hml-form-options">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#forgot">Forgot Password?</a>
                    </div>

                    <button type="submit" className="hml-login-btn">                
                    <Link to="/">Login</Link>
                    </button>
                </form>

                <div className="hml-login-footer">
                    <p>Don't have an account? <a href="#signup">Register Now</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
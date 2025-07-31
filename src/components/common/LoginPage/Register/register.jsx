// src/components/common/LoginPage/Register/register.js

import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebaseConfig.js"; 
import toast from "react-hot-toast";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("hasLoggedIn", "true");
      navigate("/");
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1 className="welcome-text">
          Create Your <br /> Account Today
        </h1>
      </div>
      <div className="signup-right">
        <div className="signup-form-box">
          <h2 className="signup-title">Sign up for an account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div>
              <label className="signup-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="signup-input"
              />
            </div>
            <div>
              <label className="signup-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="signup-input"
                required
              />
            </div>
            <div>
              <label className="signup-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="signup-input"
                required
              />
            </div>
            <button type="submit" className="signup-button">Create Account</button>
            <p className="login-link">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="login-text"
                style={{ cursor: "pointer", color: "blue" }}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

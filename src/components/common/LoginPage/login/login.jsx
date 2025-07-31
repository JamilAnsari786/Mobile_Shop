// src/components/common/LoginPage/login/login.js

import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebaseConfig.js"; // ✅ Correct path
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="welcome-text">
          Welcome to<br />Your Login Page
        </h1>
      </div>
      <div className="login-right">
        <div className="login-form-box">
          <h2 className="login-title">Login to your account</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div>
              <label className="login-label">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="login-label">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="signup-link">
              Don’t have an account?{" "}
              <span
                className="signup-text"
                onClick={() => navigate("/register")}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./splashScreen.css";

const SplashScreen = () => {
  let navigate = useNavigate();
  setTimeout(() => {
    navigate("/app");
  }, 2000);
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Welcome to</p>
        <h1 className="hero-title">REVSTREAM OS</h1>

        <div className="hero-glass">
          <p>
            where companies securely share excess capacity and emergency work
            needs. This isn't freelancing; it's enterprise work redistribution
            with guaranteed payments and full legal protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

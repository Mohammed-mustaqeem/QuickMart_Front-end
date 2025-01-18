import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/Images/h1_hero1.jpg.webp" alt="Hero" className="card-img" />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center text-md-start">
          <div className="container">
            <h1 className="display-4 fw-bold text-gray-700 mb-2">
              NEW SESSION ARRIVALS
            </h1>
            <p className="lead text-gray-700 fs-4">
              CHECK OUT ALL TRENDS
              <span style={{ color: "red" }}> MEN'S</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

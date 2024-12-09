import React from "react";
import { Link } from "react-router-dom";
import "../css files/Cong.css"; // Importing the corresponding CSS

const Cong = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <h1>🎉 Congratulations! 🎉</h1>
        <p>You are now part of the Cue Pets community!</p>
        <p>
          Together, let's ensure your pet's health and happiness are always a priority. Explore the platform and discover all the tools we have for your furry friend's care.
        </p>
        <Link to="/" className="home-button">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Cong;

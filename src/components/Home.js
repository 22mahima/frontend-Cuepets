import React from "react";

const Home = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#ff8c00", height: "100vh" }}>
      <div className="row justify-content-center align-items-center h-75">
        <div className="col-md-8 text-center">
          <h1 className="text-white fw-bold">
            Your Pet's Health, Simplified and Streamlined
          </h1>
          <p className="text-white mt-3">
            Welcome to Cue Pets, where we empower pet owners to effortlessly
            manage their furry friends' medical records, vaccination logs, and
            adoption journeys. Join our community and ensure your pet's health
            is always a priority.
          </p>
          <div className="mt-4">
            <button className="btn btn-light me-3">Get Started</button>
            <button className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

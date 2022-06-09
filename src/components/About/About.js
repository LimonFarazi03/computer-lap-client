import React from "react";
import "./About.css";
import aboutUsImg from "../../Image/aboutUs.jpg";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <img width={"100%"} src={aboutUsImg} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <div>
            <h1 className="mb-3 text-uppercase fw-bold">About Us</h1>
            <p>
              Computer Lab has been founded on 1 March 2007. From then to now, Star
              Tech has won the heart of many people and now is a country-wide
              renowned brand. That has been possible due to the hard work Star
              Tech has done to satisfy its customers.
            </p>
            <div className="btn btn-primary text-white">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Banner.css";
import bannerImg from '../../Image/laptopBanner.png';

const Banner = () => {
  return (
    <div className="bg-color mb-4 ">
      <div className='container'>
      <div className="row d-flex p-4 justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <div className='bannerDetails'>
            <h1 className="mb-3">Meet the inspiring</h1>
            <h2 className="">family of laptop</h2>
            <p>
              Computer Lab has been founded on 1 March 2007. From then to now, Star
              Tech has won the heart of many people and now is a country-wide
              renowned brand. That has been possible due to the hard work Star
              Tech has done to satisfy its customers.
            </p>
            <button className="exploreNowBtn">Explore Now</button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img width={"80%"} src={bannerImg} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;

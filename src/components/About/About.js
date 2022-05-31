import React from "react";
import "./About.css";
import aboutUsImg from "../../Image/aboutUs.jpg";

const About = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className='aboutImg'>
      <img src={aboutUsImg} alt="" />
      </div>
      <div>
        <h1 className='mb-3'>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in
          quos est veritatis at nostrum voluptate sunt ut dicta! Ad consequuntur
          quos iure, voluptas laborum quis perferendis ex illo deserunt?
        </p>
        <div className="btn btn-primary text-white">Learn More</div>
      </div>
    </div>
  );
};

export default About;

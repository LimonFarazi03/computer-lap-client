import React from "react";
import "./Footer.css";

const Footer = () => {
  const dynamicYear = new Date().getFullYear();
  return (
    <div className="background-clr text-white">
      <p className='container text-center p-3'>© all rights reserved copyright abidislamabir@gmail.com</p>
    </div>
  );
};

export default Footer;

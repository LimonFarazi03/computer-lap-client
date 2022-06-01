import React from "react";
import "./Footer.css";
import footerImg from "../../Image/logo.png";
import { AiFillFacebook,AiFillLinkedin,AiFillInstagram } from "react-icons/ai";
import { BsPinterest} from "react-icons/bs";

const Footer = () => {
  const dynamicYear = new Date().getFullYear();
  return (
    <div className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <div className="footerImg">
              <img width={'100%'} src={footerImg} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptatibus est ad placeat, fugiat, vero inventore magni
              doloribus enim maxime reprehenderit asperiores sapiente voluptas
              perferendis temporibus sint nihil atque. Minus.
            </p>
            <div className="svgIcon">
              <a href="##">
                {" "}
                <AiFillLinkedin />{" "}
              </a>
              <a href="##">
                {" "}
                <AiFillFacebook />{" "}
              </a>
              <a href="##">
                {" "}
                <BsPinterest />{" "}
              </a>
              <a href="##">
                {" "}
                <AiFillInstagram />{" "}
              </a>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 w-bold text-warning">
              Products
            </h5>
            <div>
              <p>Blogs</p>
              <p>Pricing</p>
              <p>Sales</p>
              <p>Tickets</p>
              <p>Certification</p>
              <p>Customer Service</p>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 w-bold text-warning">
              Useful Links
            </h5>
            <div>
              <p>Blogs</p>
              <p>Pricing</p>
              <p>Sales</p>
              <p>Tickets</p>
              <p>Certification</p>
              <p>Customer Service</p>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 w-bold text-warning">Address</h5>
            <p>127, Westwood Land</p>
            <p>DA15 9PS, Sidecup</p>
            <p>London, UK</p>
          </div>
        </div>
      </div>

      <p className='container mt-4 text-center p-3'>© all rights reserved copyright {dynamicYear} abidislamabir@gmail.com</p>
    </div>
  );
};

export default Footer;

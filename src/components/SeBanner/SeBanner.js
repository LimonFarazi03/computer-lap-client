import React from "react";
import "./SeBanner.css";
import seBannerImg from "../../Image/secBanner.png";

const SeBanner = () => {
  return (
    <div className="bg-color mt-3">
      <div className="container">
        <div className="row d-flex p-2 justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <img width={"80%"} src={seBannerImg} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className="bannerDetails">
              <h1 className="mb-3">We Provide Look And Accuracy</h1>
              <p>
                Computer Lab has been founded on 1 March 2007. From then to now,
                Star Tech has won the heart of many people and now is a
                country-wide renowned brand. That has been possible due to the
                hard work Star Tech has done to satisfy its customers.
              </p>
              <div className="d-flex my-4">
                <div className="me-4">
                  <h4>14</h4>
                  <p>
                    Nation <br/> Award <br /> Gated
                  </p>
                </div>
                <div className="me-4">
                  <h4>25+</h4>
                  <p>
                    Brand
                  </p>
                </div>
                <div className="me-4">
                  <h4>769</h4>
                  <p>
                  Happy <br/> Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeBanner;

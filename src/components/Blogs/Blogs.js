import React from "react";
import "./Blogs.css";
import vsImg from "../../Image/jsVsNode.jpg";

const Blogs = () => {
  return (
    <div className="">
      <div className="container  d-flex justify-content-center align-items-center">
        <div className="vsImage bg-clr p-5 my-5 d-flex">
          <img src={vsImg} alt="" />
          <div className="vImgContainer">
            <h3>1. Difference between javascript and node js ?</h3>
            <div className='d-flex blog-text'>
            <div>
              <h5>JavaScript</h5>
              <p>
                Javascript is a programming language that is used for writing
                scripts on the website. 2) Javascript can only be run in the
                browsers. 3)It is basically used on the client-side.
                4)Javascript is capable enough to add HTML and play with the
                DOM. 5) Javascript can run in any browser engine as like JS core
                in safari and Spidermonkey in Firefox. 6)Javascript is used in
                frontend development. 7) Some of the javascript frameworks are
                RamdaJS, TypedJS, etc. 8) It is the upgraded version of ECMA
                script that uses Chrome’s V8 engine written in C++.
              </p>
            </div>
            <div>
              <h5>JavaScript</h5>
              <p>
                Javascript is a programming language that is used for writing
                scripts on the website. 2) Javascript can only be run in the
                browsers. 3)It is basically used on the client-side.
                4)Javascript is capable enough to add HTML and play with the
                DOM. 5) Javascript can run in any browser engine as like JS core
                in safari and Spidermonkey in Firefox. 6)Javascript is used in
                frontend development. 7) Some of the javascript frameworks are
                RamdaJS, TypedJS, etc. 8) It is the upgraded version of ECMA
                script that uses Chrome’s V8 engine written in C++.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
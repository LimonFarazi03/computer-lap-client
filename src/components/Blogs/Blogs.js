import React from 'react';
import './Blogs.css';
import vsImg from '../../Image/jsVsNode.jpg';

const Blogs = () => {
  return (
    <div>
      
      <div className='bg-clr d-flex justify-content-center align-items-center'>
        <div className='vsImage'>
          <img src={vsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
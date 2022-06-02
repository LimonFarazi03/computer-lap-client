import React from "react";
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="col-12 col-md-3">
      <div className='p-3 rounded-3 bg-custom'>
      <img src={product.img} alt="" />
      <div className="product-body">
        <p className="fw-bold">{product.description}</p>
        <p className="fw-bold text-primary">{product.brand}</p>
      </div>
      </div>
    </div>
  );
};

export default Item;

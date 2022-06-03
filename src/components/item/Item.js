import React from "react";
import "./Item.css";
import { FaDollarSign } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { ImUserTie } from 'react-icons/im';
import { GrUpdate } from 'react-icons/gr';

const Item = ({ product }) => {
  return (
    <div className="col-12 col-md-3">
      <div className="p-3 rounded-3 bg-custom">
        <img width={'100%'} src={product.img} alt="" />
        <div className="product-body">
          <h4 className="fw-bold">{product.name.slice(0, 16)}</h4>
          <p>{product.description.slice(0, 66)}</p>
          <div className='my-3 color-custom custom-user'><ImUserTie/> {product.supplier}</div>
          <div className='d-flex justify-content-between'>
            <p className="fw-bold">{product.brand}</p>
            <p className="fw-bold clr-custom"><MdProductionQuantityLimits/> {product.quantity}</p>
            <p className="fw-bold size-custom clr-custom"><FaDollarSign/> {product.price}</p>
          </div>
          <hr />
          <div className='update-btn fw-bold my-3'><GrUpdate/> Update Now</div>
        </div>
      </div>
    </div>
  );
};

export default Item;

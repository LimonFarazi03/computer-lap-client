import React from "react";
import "./ManageItem.css";
import { MdProductionQuantityLimits } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";

const ManageItem = ({ product }) => {
  return (
    <div className="custom-shadow rounded-3 p-2">
      <div className="d-flex justify-content-between align-items-center col-12 col-md-12">
        <div className="imgHover details d-flex justify-content-center align-items-center">
        <img width={'100px'} src={product.img} alt="" />
          <div className='custom-height'>
            <p>{product.name?.slice(0,15)}</p>
          <p className="my-3 color-custom custom-user">
            <ImUserTie /> {product.supplier}
          </p>
          <p className='fw-bold clr-custom'>
            <MdProductionQuantityLimits /> {product.quantity}
          </p>
          </div>
        </div>
        <div className='delete-btn'><AiFillDelete/></div>
      </div>
    </div>
  );
};

export default ManageItem;

import React, { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://whispering-dawn-95349.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="container p-4 custom-margin">
      <div className="custom-shadow rounded-2 p-4">
        <div className="row">
          <div className="col-12 col-md-6 text-center details-img">
            <img width={'75%'} src={product.img} alt="" />
          </div>
          <div className="col-12 col-md-6 details">
            <h3 className="text-start fw-bold mt-3 ">{product.name}</h3>
            <p className="my-4">{product.description?.slice(0,310)}</p>
            <p className="my-3 color-custom custom-user">
              <ImUserTie /> {product.supplier}
            </p>
            <p className="fw-bold">{product.brand}</p>
            <div className="d-flex marginPrice">
              <h3 className="fw-bold clr-custom">
              <MdProductionQuantityLimits /> {product.quantity}
            </h3>
            <p className="fw-bold clr-custom size-custom">
              <FaDollarSign/> {product.price}
              </p>
            </div>
            <button className="deliveredBtn">Delivered</button>
            <button className="deliveredBtn">Add Quantity</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

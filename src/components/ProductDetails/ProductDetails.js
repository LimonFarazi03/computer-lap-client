import React, { useEffect, useState } from "react";
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
          <div className="col-12 col-md-6 details">
            <h3 className="text-start fw-bold mt-3 ">{product.name}</h3>
            <p className="fw-bold my-4">{product.description}</p>
            <p className="my-3 color-custom custom-user">
              <ImUserTie /> {product.supplier}
            </p>
            <p className="fw-bold">{product.brand}</p>
            <h3 className="fw-bold clr-custom">
              <MdProductionQuantityLimits /> {product.quantity}
            </h3>
          </div>
          <div className="col-12 col-md-6 text-center details-img">
            <img width={'80%'} src={product.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

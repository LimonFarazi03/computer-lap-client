import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    const url = `https://whispering-dawn-95349.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);
  return (
    <div className="custom-margin">
      <h2>Welcome to product details- {coin.name}</h2>
    <img src={coin.img} alt="" />
    </div>
  );
};

export default ProductDetails;

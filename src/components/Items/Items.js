import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../item/Item";
import "./Items.css";

const Items = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const url = "https://whispering-dawn-95349.herokuapp.com/items";
  if (products.length) {
    products.length = 4;
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row gy-5">
        {products.map((product) => (
          <Item key={product._id} product={product}></Item>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
	<button className="btn btn-success exploreBtn"><Link to='/manageItems'>Explore More</Link></button>
</div>
    </div>
  );
};

export default Items;

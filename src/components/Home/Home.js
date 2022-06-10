import React from "react";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import './Home.css';

const Home = () => {
  return (
    <div className='custom-margin'>
      <Banner />
      <Items />
      <Banner />
    </div>
  );
};

export default Home;
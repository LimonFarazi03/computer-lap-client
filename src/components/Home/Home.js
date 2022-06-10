import React from "react";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import SeBanner from "../SeBanner/SeBanner";
import "./Home.css";

const Home = () => {
  return (
    <div className="custom-margin">
      <Banner />
      <Items />
      <SeBanner />
    </div>
  );
};

export default Home;
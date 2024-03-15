import React from "react";
import Hero from "../Components/Home/Hero";
import FeaturedProd from "../Components/Home/Featured/FeaturedProd";
import Categories from "../Components/Home/Categories/Categories";
import Popular from "../Components/Home/Popular/Popular";
import AboutUs from "../Components/Home/AboutUs/AboutUs";
import Blogs from "../Components/Home/Blogs/Blogs";
import Hovers from "../Components/Home/Hovers/Hovers";
import Faqs from "../Components/Home/Faqs/Faqs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hovers />
      <FeaturedProd />
      <Categories />
      <Popular />
      <AboutUs />
      <Blogs />
      <Faqs />
    </div>
  );
};

export default Home;

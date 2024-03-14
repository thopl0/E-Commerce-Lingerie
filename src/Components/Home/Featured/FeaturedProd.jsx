import React, { useState } from "react";
import "./scrollbar.css";
import FeatureComp from "./FeatureComp";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedProd = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className=" mt-20 mx-20">
      <div className="text-3xl font-medium text-center">
        <p>Trending Products </p>
      </div>
      <div className="mx-10 flex items-center gap-5 mt-10">
        <button
          className={` bg-black/10 rounded-md p-1 w-fit px-2 ${
            selectedCategory === "All" && "bg-black/5 font-semibold"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={` bg-black/10 rounded-md p-1 w-fit px-2 ${
            selectedCategory === "Bra" && "bg-black/5 font-semibold"
          }`}
          onClick={() => setSelectedCategory("Bra")}
        >
          Bra
        </button>
        <button
          className={` bg-black/10 rounded-md p-1 w-fit px-2 ${
            selectedCategory === "Panties" && "bg-black/5 font-semibold"
          }`}
          onClick={() => setSelectedCategory("Panties")}
        >
          Panties
        </button>
        <button
          className={` bg-black/10 rounded-md p-1 w-fit px-2 ${
            selectedCategory === "Nightwear" && "bg-black/5 font-semibold"
          }`}
          onClick={() => setSelectedCategory("Nightwear")}
        >
          Nightwear
        </button>
        <button
          className={` bg-black/10 rounded-md p-1 w-fit px-2 ${
            selectedCategory === "Activewear" && "bg-black/5 font-semibold"
          }`}
          onClick={() => setSelectedCategory("Activewear")}
        >
          Activewear
        </button>
        <button
          className={` bg-black/10 rounded-md p-1 w-fit px-2 ${
            selectedCategory === "Shapewear" && "bg-black/5 font-semibold"
          }`}
          onClick={() => setSelectedCategory("Shapewear")}
        >
          Shapewear
        </button>
      </div>
      <div className="flex justify-between items-center gap-5">
        <FiChevronLeft size={30} onClick={slideLeft} />
        <div
          id="slider"
          className="no-scrollbar  h-full flex gap-7  w-full overflow-x-scroll scroll-smooth whitespace-nowrap"
        >
          <FeatureComp selectedCategory={selectedCategory} />
        </div>
        <FiChevronRight size={30} onClick={sliderRight} />
      </div>
    </div>
  );
};

export default FeaturedProd;

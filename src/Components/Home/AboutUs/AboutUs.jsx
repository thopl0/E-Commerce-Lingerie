import React from "react";
import LearnComp from "./LearnComp";

const AboutUs = () => {
  return (
    <div className="my-24 ">
      <div className="mx-20">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-medium text-center w-[40%] ">
            Get To Know Who We Are And What We Do - About Us
          </p>
          <p className="text-center line-clamp-3 w-[40%] text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aliquid deserunt fugit eaque consectetur odit! Eum eius vero nulla
            quaerat.
          </p>
        </div>
        <div className="shadow-lg rounded-md pb-5 pt-5">
          <LearnComp />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

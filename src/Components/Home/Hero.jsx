import React from "react";
import { IoSearch } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="relative bg-[url('/fashion.webp')] h-[600px] bg-cover  ">
      <div className="bg-black/60 w-full h-full flex items-center justify-center px-20">
        <div className="text-3xl w-[50%] text-center font-semibold  text-white flex flex-col">
          Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
          <span className="text-sm font-normal text-gray-300 pt-5 px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias omnis
            deserunt sequi excepturi iure perspiciatis perferendis, odio quia in
            molestias? omnis deserunt sequi excepturi iure perspiciatis
            perferendis, odio quia in molestias?
          </span>
          <label htmlFor="" className="flex items-center justify-center mt-5">
            <input
              type="text"
              name=""
              id=""
              className="w-60 p-3 rounded-full text-white text-base font-normal outline-none bg-black/40"
            />
            <button className="bg-black/50 w-9 h-9 items-center flex justify-center rounded-full -translate-x-11">
              <IoSearch size={20} />
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hero;

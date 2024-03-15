import React from "react";

import { CiCirclePlus } from "react-icons/ci";
import { twMerge } from "tailwind-merge";

const Box = ({ img, title, price, discountedPrice, discount, className }) => {
  return (
    <div className="mt-10">
      <div
        className={twMerge(
          " relative h-[420px] pb-3 w-72  rounded-xl overflow-hidden shadow-xl",
          className
        )}
      >
        <div className=" h-80 overflow-hidden rounded-t-xl">
          <img src={img} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="mx-5 flex flex-col justify-center mt-2 text-textColor font-semibold text-sm">
          <p className="">{title}</p>
          <div className="flex justify-between items-centerm mt-3">
            <p className="font-medium text-sm">
              <span className="line-through">${price}</span>
              <span className="pl-1">${discountedPrice}</span>
            </p>
            <button className="font-medium">
              <CiCirclePlus size={25} className=" hover:text-red-500" />
            </button>
          </div>
        </div>
        <div className="bg-black/50 w-10 rounded-md absolute top-2 left-2">
          <p className=" text-white text-[12px] px-1 ">{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;

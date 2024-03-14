import React from "react";
import CatComp from "./CatComp";

const Categories = () => {
  return (
    <div className="mt-20">
      <div className="mx-20">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-3xl font-medium">
            View Our Range of Top Categories
          </p>
          <span className="text-sm text-center w-[60%] text-gray-600 mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
            adipisci illo dicta molestias consectetur, asperiores recusandae
            similique quos laborum.
          </span>
        </div>

        <CatComp />
      </div>
    </div>
  );
};

export default Categories;

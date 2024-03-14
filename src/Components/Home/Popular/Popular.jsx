import React from "react";
import { FiChevronRight } from "react-icons/fi";
import PopularCont from "./PopularCont";

const Popular = () => {
  return (
    <div className="my-20 h-fit ">
      <div className="mx-20">
        <p className="text-3xl font-medium mx-10">Most Popular Products</p>
        <div>
          <div className="flex items-center justify-between mx-10">
            <p className="w-[40%] line-clamp-2 mt-2 text-sm  text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis incidunt illo atque facere temporibus nulla? Ab tempore
              quidem nostrum sapiente, laborum quis repellat, voluptatum quia
              autem ipsam corporis dolore obcaecati?
            </p>
            <button className="bg-black text-white rounded-full w-32 flex items-center justify-center p-3">
              View All <FiChevronRight />{" "}
            </button>
          </div>
          <div className="grid grid-cols-4 justify-items-center">
            <PopularCont />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

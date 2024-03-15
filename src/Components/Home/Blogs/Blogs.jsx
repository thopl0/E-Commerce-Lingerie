import React from "react";
import { FiChevronRight } from "react-icons/fi";
import BlogsBox from "./BlogsBox";

const Blogs = () => {
  return (
    <div className=" my-24 ">
      <div className="mx-20">
        <p className="text-3xl font-medium mx-10">Latest Ongoings</p>
        <div className="flex justify-between mx-10">
          <p className="text-gray-600 text-sm pt-2 w-[40%] line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi
            nobis vel, ratione odio quis!dolor sit amet consectetur adipisicing
          </p>
          <button className="bg-black text-white rounded-full w-44 flex items-center justify-center p-3">
            Read All Blogs <FiChevronRight />{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 mt-10 justify-items-center">
          <BlogsBox />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

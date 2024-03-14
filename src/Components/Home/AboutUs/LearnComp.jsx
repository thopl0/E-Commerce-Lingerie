import React from "react";

const LearnComp = () => {
  return (
    <div className=" flex  gap-20 justify-around my-20">
      <div className="w-[500px]">
        <p className="text-3xl ">Learn About Us And What Sets Us Apart</p>
        <p className="text-justify pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
          ea quia cumque at odio vel, dolore blanditiis earum minima! ea quia
          cumque at odio vel, dolore blanditiis earum minima!
        </p>
        <button className="bg-black text-white p-3 rounded-2xl mt-14">
          Read Our Blogs
        </button>
      </div>
      <div className="flex gap-28">
        <div className="flex flex-col gap-8">
          <div className="w-32 h-44  rounded-xl overflow-hidden">
            <img
              src="https://media-api.xogrp.com/images/49115007-a896-4638-81ec-8a5116e80cf6~rs_768.h-cr_2.0.1238.1648"
              alt=""
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="w-32 h-44  rounded-xl overflow-hidden">
            <img
              src="https://media-api.xogrp.com/images/1f70b2e1-720d-4674-a566-219fccc133f1~rs_768.h-cr_60.0.1360.1733"
              alt=""
              className="h-full"
            />
          </div>
        </div>
        <div className="relative">
          <div className=" w-80 rounded-xl h-72  overflow-hidden">
            <img
              src="https://media-api.xogrp.com/images/66af1a1c-fdc4-491f-9b00-e938d9bffcd9~rs_768.h-cr_256.0.1792.2048"
              alt=""
              className="relative"
            />
            <div className="absolute bg-black/40 top-0 w-80 h-72 rounded-xl"></div>
            <div className="absolute right-5 top-10 w-96  h-[345px] rounded-xl overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e21b2e79b2b7f2b29e62f62/4ffefb24-4c33-4eb7-81fd-3c4d01caf908/Panache_SS23F_Envy_FullCup_7285_Brief_7282_DeepBrief_7283_Violet_L.jpg"
                alt=""
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnComp;
